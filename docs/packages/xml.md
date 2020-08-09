# Grenter XML

Esta libreria permite generar documentos XML siguiendo el estándar UBL 2.0 y 2.1, ademas de considerar las normas establecidas por SUNAT.

!!! warning "UBL 2.0"

    No usar la versión 2.0 para generar Facturas, Boletas, Notas de Crédito, Notas de Débito, ya que SUNAT actualmente exige utilizar la versión `UBL 2.1`.

## Instalar
```sh
composer require greenter/xml
```

## Documentos
Los documentos disponibles en este paquete son:

Documento UBL |       Builder       |     Comprobante      |
--------------|---------------------|----------------------|
 Invoice      | `InvoiceBuilder`    | Factura, Boleta      |
 CreditNote   | `NoteBuilder`       | Nota de Crédito      |
 DebitNote    | `NoteBuilder`       | Nota de Débito       |
 Summary      | `SummaryBuilder`    | Resumen diario       |
 Voided       | `VoidedBuilder`     | Comunicación de Baja |
 Despatch     | `DespatchBuilder`   | Guía de Remisión     |
 Retention    | `RetentionBuilder`  | Retención            |
 Perception   | `PerceptionBuilder` | Percepción           |

## Uso

Para generar el archivo XML nos basamos en modelos de documentos disponibles en [greenter/core](https://reference.greenter.dev/Greenter/Model.html), los cuales implementan `DocumentInterface`.

Para una factura el modelo a utilizar es `Invoice`, y para generar el XML debemos usar `InvoiceBuilder`.

```php
<?php

use Greenter\Model\Sale\Invoice;
use Greenter\Xml\Builder\InvoiceBuilder;

$invoice = new Invoice();
$invoice->setSerie('F001');
$invoice->setCorrelativo('1');
// ...

$builder = new InvoiceBuilder();
$xml = $builder->build($invoice);

echo $xml;
```

Tener en cuenta que esto solo crea el XML pero no realiza la firma, para ello utilizar `greenter/xmldsig`.    
El siguiente fragmento es una previsualización del resultado:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2">
   <ext:UBLExtensions>
    <ext:UBLExtension>
      <ext:ExtensionContent>
      </ext:ExtensionContent>
    </ext:UBLExtension>
   </ext:UBLExtensions>
   <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
   <cbc:CustomizationID>2.0</cbc:CustomizationID>
   <cbc:ID>F001-1</cbc:ID>
<!--....-->
</Invoice>
```

## Avanzado

Esta libreria para generar los XML emplea el motor de plantillas [twig](https://twig.symfony.com/), si necesitas cambiar algunos [parametros](https://twig.symfony.com/doc/3.x/api.html#environment-options) puedes hacerlo desde el constructor.

**Ejemplo**

```php
<?php

use Greenter\Xml\Builder\InvoiceBuilder;

$options = [
    'cache' => '/tmp/compilation_cache'
];

$builder = new InvoiceBuilder($options);
```

También puedes crear tu propia versión, implementando [`BuilderInterface`](https://reference.greenter.dev/Greenter/Builder/BuilderInterface.html).
