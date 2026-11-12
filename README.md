# Greenter Docs 
![Greenter Docs](https://github.com/thegreenter/docs/workflows/Greenter%20Docs/badge.svg)     

Documentación de Greenter - Facturación Electrónica.

## Desarrollo

Para iniciar el sitio localmente, necesita tener instalado `python (+3.8)`, e instalar las dependencias indicadas en `requirements.txt`.
```
pip install -IU -r requirements.txt
mkdocs serve
```

Ahora podrás modificar cualquier archivo en la carpeta `docs/` y ver los cambios automáticamente en http://localhost:8000/.

## Reglas de validación SUNAT

La página [Reglas de validación SUNAT](https://greenter.dev/sunat/reglas-validacion/) se arma con el Excel de reglas que publica SUNAT, guardado en `sunat/`. El script `scripts/sunat_rules.py` lo convierte en `docs/sunat/reglas-validacion.json`, que no se versiona: el workflow lo genera antes de `mkdocs build`. En local, ejecútalo una vez antes de `mkdocs serve`:
```
python scripts/sunat_rules.py
```

Para actualizar a una nueva versión, reemplaza el `.xlsx` de `sunat/` por el nuevo, con la versión en el nombre (p. ej. `reglas-validacion-26.08.2026.xlsx`); la carpeta debe tener un solo `.xlsx`.

