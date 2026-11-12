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

# (clave en la URL, hoja del Excel, nombre del comprobante, elemento raíz UBL)
SHEETS = [
    ('factura', 'Factura2_0', 'Factura', 'Invoice'),
    ('boleta', 'Boleta2_0', 'Boleta de venta', 'Invoice'),
    ('nc', 'NotaCredito2_0', 'Nota de crédito', 'CreditNote'),
    ('nd', 'NotaDebito2_0', 'Nota de débito', 'DebitNote'),
]

# Columnas de las hojas de comprobantes (la A está vacía).
COLS = ('num', 'dato', 'nivel', 'cond', 'tipo', 'fmt', 'tag', 'uso', 'val', 'tret', 'cod', 'msg', 'lst')


def clean(value):
    if value is None:
        return ''
    if isinstance(value, float) and value.is_integer():
        value = int(value)
    text = str(value).replace('\r', '')
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\n\s*\n+', '\n', text).strip()
    return '' if text == '-' else text


def is_attribute(tag):
    last = tag.split('(')[0].strip().split('/')[-1]
    return tag.startswith('@') or '@' in last


def read_sheet(ws):
    sections, section, field, entry = [], None, None, None
    for row_number, row in enumerate(ws.iter_rows(min_row=3, values_only=True), 3):
        values = [clean(v) for v in row[1:14]] + [''] * 13
        r = dict(zip(COLS, values))

        # Fila de título de sección: texto en la columna N° sin dato ni tag.
        if r['num'] and not r['num'].isdigit() and not r['dato'] and not r['tag']:
            section = {'title': r['num'], 'fields': []}
            sections.append(section)
            continue
        if section is None:
            continue

        if r['dato']:
            field = {'n': re.sub(r'\s+', ' ', r['num']), 'dato': r['dato'], 'nivel': r['nivel'], 'tags': []}
            section['fields'].append(field)
        if field is None:
            continue

        if r['tag'] or (not field['tags'] and (r['val'] or r['tipo'] or r['fmt'])):
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
    for key, sheet, label, root in SHEETS:
        sections = read_sheet(wb[sheet])
        docs.append({'key': key, 'sheet': sheet, 'label': label, 'root': root, 'sections': sections})
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
