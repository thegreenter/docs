"""Convierte el Excel de reglas de validación de SUNAT en el JSON del buscador.

Uso:
    python scripts/sunat_rules.py [EXCEL] [SALIDA]

Por defecto lee el único .xlsx de la carpeta ``sunat/`` (su nombre debe
incluir la versión, p. ej. ``reglas-validacion-26.08.2026.xlsx``) y escribe
``docs/sunat/reglas-validacion.json``, que carga la página
``docs/sunat/reglas-validacion.md``.

El Excel combina celdas (dato, tag y formato abarcan todas las filas de
validación de un campo), oculta la columna "Uso del campo" y obtiene el
mensaje de retorno con fórmulas; aquí se leen los valores ya calculados.
"""

import json
import re
import sys
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_DIR = ROOT / 'sunat'
DEFAULT_OUT = ROOT / 'docs' / 'sunat' / 'reglas-validacion.json'

# (clave en la URL, hoja del Excel, nombre del documento, elemento raíz UBL, grupo)
SHEETS = [
    ('factura', 'Factura2_0', 'Factura', 'Invoice', 'Comprobantes'),
    ('boleta', 'Boleta2_0', 'Boleta de venta', 'Invoice', 'Comprobantes'),
    ('nc', 'NotaCredito2_0', 'Nota de crédito', 'CreditNote', 'Comprobantes'),
    ('nd', 'NotaDebito2_0', 'Nota de débito', 'DebitNote', 'Comprobantes'),
    ('retencion', 'Retenciones1_0', 'Retención', 'Retention', 'Otros documentos'),
    ('percepcion', 'Percepciones1_0', 'Percepción', 'Perception', 'Otros documentos'),
    ('baja', 'Comunicación de Baja1_0', 'Comunicación de baja', 'VoidedDocuments', 'Otros documentos'),
    ('resumen', 'Resumen Diario1_1', 'Resumen diario', 'SummaryDocuments', 'Otros documentos'),
    ('reversion', 'Resumen de reversiones1_0', 'Resumen de reversiones', 'VoidedDocuments', 'Otros documentos'),
]

# Encabezados de la fila 2 → clave interna. No todas las hojas tienen las mismas
# columnas (p. ej. "Uso del campo" solo existe en las de comprobantes).
HEADERS = [
    ('N°', 'num'), ('DATO', 'dato'), ('NIVEL', 'nivel'), ('CONDICION', 'cond'),
    ('TIPO Y LONGITUD', 'tipo'), ('FORMATO', 'fmt'), ('TAG UBL', 'tag'), ('USO DEL CAMPO', 'uso'),
    ('VALIDACION', 'val'), ('TIPO DE RETORNO', 'tret'), ('CODIGO', 'cod'), ('MENSAJE', 'msg'),
    ('LISTADOS', 'lst'),
]
KEYS = [k for _, k in HEADERS]
NUMBER = re.compile(r'^\d+(\.\d+)*$')


def clean(value):
    if value is None:
        return ''
    if isinstance(value, float):
        # La numeración 12.3 llega como 12.299999999999999.
        value = int(value) if value.is_integer() else f'{value:.6f}'.rstrip('0')
    text = str(value).replace('\r', '')
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\n\s*\n+', '\n', text).strip()
    return '' if text == '-' else text


def is_attribute(tag):
    last = tag.split('(')[0].strip().split('/')[-1]
    return tag.startswith('@') or '@' in last


def strip_accents(text):
    return text.translate(str.maketrans('ÁÉÍÓÚ', 'AEIOU'))


def columns(header):
    """Devuelve {clave: índice de columna} a partir de la fila de encabezados."""
    found = {}
    for i, value in enumerate(header):
        name = strip_accents(re.sub(r'\s+', ' ', str(value or '')).strip().upper())
        for prefix, key in HEADERS:
            if name.startswith(prefix) and key not in found:
                found[key] = i
                break
    missing = {'num', 'dato', 'tag', 'val', 'cod'} - found.keys()
    if missing:
        sys.exit(f'Faltan columnas {sorted(missing)} en la fila de encabezados: {header}')
    return found


def read_sheet(ws):
    rows = ws.iter_rows(min_row=2, values_only=True)
    cols = columns(next(rows))
    general = {'title': 'Validaciones generales', 'fields': []}
    sections, section, field, entry = [general], None, None, None

    for row_number, row in enumerate(rows, 3):
        r = {k: clean(row[cols[k]]) if k in cols and cols[k] < len(row) else '' for k in KEYS}

        # Fila de título de sección: texto (no numeración) en la columna N°, sin dato.
        if r['num'] and not NUMBER.match(r['num']) and not r['dato']:
            section = {'title': r['num'], 'fields': []}
            sections.append(section)
            field = entry = None
            if not r['tag']:
                continue
            # Algunas secciones (Resumen diario) también indican el tag del bloque.
            r['dato'] = r['num']
            r['num'] = ''

        # Validaciones antes de la primera sección (p. ej. "El ticket no existe").
        if section is None:
            if r['cod']:
                general['fields'].append({'n': '', 'dato': r['val'] or r['msg'], 'nivel': '', 'tags': [{
                    'tag': '', 'cond': '', 'tipo': '', 'fmt': '', 'uso': '', 'attr': False, 'row': row_number,
                    'v': [{'t': r['val'], 'k': r['tret'], 'c': r['cod'], 'm': r['msg'], 'l': r['lst'],
                           'row': row_number}],
                }]})
            continue

        if r['dato']:
            field = {'n': re.sub(r'\s+', ' ', r['num']), 'dato': r['dato'], 'nivel': r['nivel'], 'tags': []}
            section['fields'].append(field)
        if field is None:
            continue

        # Cada campo tiene al menos una entrada, aunque solo agrupe subcampos (Resumen diario).
        if r['tag'] or r['dato'] or (not field['tags'] and (r['val'] or r['tipo'] or r['fmt'])):
            entry = {
                'tag': r['tag'], 'cond': r['cond'], 'tipo': r['tipo'], 'fmt': r['fmt'],
                'uso': r['uso'], 'attr': is_attribute(r['tag']) if r['tag'] else False,
                'row': row_number, 'v': [],
            }
            field['tags'].append(entry)

        if r['val'] and entry is not None:
            entry['v'].append({
                't': r['val'], 'k': r['tret'], 'c': r['cod'], 'm': r['msg'], 'l': r['lst'], 'row': row_number,
            })

    for s in sections:
        for f in s['fields']:
            # Entradas vacías: filas del campo sin tag ni datos propios.
            f['tags'] = [t for t in f['tags'] if t['tag'] or t['v'] or t['cond'] or t['tipo'] or t['fmt']] \
                or f['tags'][:1]
    return [s for s in sections if s['fields']]


def find_excel(directory):
    files = sorted(directory.glob('*.xlsx'))
    if len(files) != 1:
        sys.exit(f'Se esperaba un solo .xlsx en {directory}, hay {len(files)}: {[f.name for f in files]}')
    return files[0]


def main(argv):
    src = Path(argv[1]) if len(argv) > 1 else find_excel(DEFAULT_DIR)
    out = Path(argv[2]) if len(argv) > 2 else DEFAULT_OUT
    version = re.search(r'(\d{2}\.\d{2}\.\d{4})', src.name)
    if not version:
        sys.exit(f'El nombre {src.name} debe incluir la versión del Excel, p. ej. reglas-validacion-26.08.2026.xlsx')

    wb = openpyxl.load_workbook(src, data_only=True, read_only=True)
    docs = []
    for key, sheet, label, root, group in SHEETS:
        sections = read_sheet(wb[sheet])
        docs.append({'key': key, 'sheet': sheet, 'label': label, 'root': root, 'group': group,
                     'sections': sections})
        fields = sum(len(s['fields']) for s in sections)
        rules = sum(len(t['v']) for s in sections for f in s['fields'] for t in f['tags'])
        print(f'{sheet}: {len(sections)} secciones, {fields} campos, {rules} validaciones')

    out.parent.mkdir(parents=True, exist_ok=True)
    with open(out, 'w', encoding='utf-8') as fh:
        json.dump({'version': version.group(1), 'source': src.name, 'docs': docs}, fh,
                  ensure_ascii=False, separators=(',', ':'))
    print(f'{out} ({out.stat().st_size // 1024} KB)')


if __name__ == '__main__':
    main(sys.argv)
