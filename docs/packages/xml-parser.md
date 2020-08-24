# Grenter XML Parser

Esta libreria permite crear objetos PHP a partir de documentos XML.

!!! warning "UBL 2.1"

    Actualmente solo esta implementada la versión `UBL 2.0`, aún esta pendiente la implementación de la versión `UBL 2.1`.

## Instalar
```sh
composer require greenter/xml-parser
```

## Documentos
Los documentos disponibles en este paquete son:

Documento UBL |       Parser       |     Comprobante                 |
--------------|--------------------|---------------------------------|
 Invoice      | `InvoiceParser`    | Factura, Boleta de venta        |
 CreditNote   | `NoteParser`       | Nota de Crédito                 |
 DebitNote    | `NoteParser`       | Nota de Débito                  |
 Summary      | `SummaryParser`    | Resumen diario                  |
 Voided       | `VoidedParser`     | Comunicación de Baja, Reversion |
 Despatch     | `DespatchParser`   | Guía de Remisión                |
 Retention    | `RetentionParser`  | Retención                       |
 Perception   | `PerceptionParser` | Percepción                      |


## Uso

Los archivo XML serán convertidos a modelos de documentos disponibles en [greenter/core](https://reference.greenter.dev/Greenter/Model.html), los cuales implementan `DocumentInterface`.

```php
<?php

use Greenter\Xml\Parser\InvoiceParser;
use Greenter\Xml\Parser\PerceptionParser;
require 'vendor/autoload.php';

$parser = new InvoiceParser();
$xml = file_get_contents('20000000001-01-F001-1.xml');
$factura = $parser->parse($xml);

var_dump($factura);

$parser = new InvoiceParser();
$xml = file_get_contents('20000000001-03-B001-1.xml');
$boleta = $parser->parse($xml);

var_dump($boleta);

$parser = new PerceptionParser();
$xml = file_get_contents('20000000001-40-P001-1.xml');
$percepcion = $parser->parse($xml);

var_dump($percepcion);

```

También puedes crear tu propia versión, implementando `DocumentParserInterface`.

```php
<?php

namespace Greenter\Parser;

interface DocumentParserInterface
{
    /**
     * @param \DomDocument|string $value
     *
     * @return DocumentInterface
     */
    public function parse($value): DocumentInterface;
}
```
