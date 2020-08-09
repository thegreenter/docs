# Greenter Report

Para elaborar una representación impresa se dispone de los formatos: HTML y PDF.

## Instalar
```sh
composer require greenter/report
```

## Documentos
Lista de documentos con reporte disponible.

- Factura  
- Boleta de Venta
- Nota de Crédito  
- Nota de Débito  
- Guía de Remisión  
- Comprobante de Retención  
- Comprobante de Percepción
- Resumen diario de Boletas
- Comunicación de Bajas
- Resumen diario de Reversiones

## Uso

Este ejemplo se base en el modelo de factura (`Invoice`), para generar un reporte HTML. 

```php
<?php

use Greenter\Model\Sale\Invoice;
use Greenter\Report\Resolver\DefaultTemplateResolver;
use Greenter\Report\HtmlReport;

$invoice = new Invoice();
$invoice->setSerie('F001');
$invoice->setCorrelativo('1');
// ...

$report = new HtmlReport();

$resolver = new DefaultTemplateResolver();
$report->setTemplate($resolver->getTemplate($invoice));

$params = [
    'system' => [
        'logo' => file_get_contents('logo.png'), // Logo de Empresa
        'hash' => 'qqnr2dN4p/HmaEA/CJuVGo7dv5g=', // Valor Resumen 
    ],
    'user' => [
        'header'     => 'Telf: <b>(01) 123375</b>', // Texto que se ubica debajo de la dirección de empresa
        'extras'     => [
            // Leyendas adicionales
            ['name' => 'CONDICION DE PAGO', 'value' => 'Efectivo'     ],
            ['name' => 'VENDEDOR'         , 'value' => 'GITHUB SELLER'],
        ],
        'footer' => '<p>Nro Resolucion: <b>3232323</b></p>'
    ]
];

$html = $report->render($invoice, $params);

echo $html;
```

## Personalizar

Puedes crear tus propios reportes usando [twig](https://twig.symfony.com/), puedes tener como base [invoice.html.twig](https://github.com/thegreenter/report/blob/master/src/Report/Templates/invoice.html.twig).

Necesitas crear un directorio con las nuevas plantillas, en este ejemplo el directorio se llama `custom`.

```text
│
├─/custom/
│     ├─ factura.html.twig
│     ├─ nota-credito.html.twig
│
│
```

Configuración de `HtmlReport`.

```php
<?php

use Greenter\Report\HtmlReport;

$twigOptions = [
    'cache' => __DIR__ . '/cache',
    'strict_variables' => true,
];

$report = new HtmlReport('/custom', $twigOptions);
$report->setTemplate('factura.html.twig');

$html = $report->render($invoice, $params);

echo $html;
```


## Reporte en PDF

Para obtener una representación en formato PDF, Utilizamos [wkhtmltopdf](https://wkhtmltopdf.org/).

### Instalar
```sh
composer require greenter/htmltopdf
```

!!! warning "Requerimientos"
    Este paquete require que el ejecutable `wkhtmltopdf` este descargado o instalado en el host, y que el entorno de PHP permite ejecutar aplicaciones externas, es decir que el método `exec` no se encuentre incluido en la configuración `disable_functions` del `php.ini`

### Uso

`PdfReport` sigue el patrón [Decorator](https://es.wikipedia.org/wiki/Decorator_(patr%C3%B3n_de_dise%C3%B1o)), para generar el pdf a partir de `HtmlReport` o cualquier otra clase que implemente [`ReportInterface`](https://reference.greenter.dev/Greenter/Report/ReportInterface.html).

```php
<?php

use Greenter\Report\HtmlReport;
use Greenter\Report\PdfReport;
use Greenter\Model\Sale\Invoice;

$invoice = new Invoice();
// ...

$htmlReport = new HtmlReport();
$html->setTemplate('invoice.html.twig');

$report = new PdfReport($htmlReport);
// Options: Ver mas en https://wkhtmltopdf.org/usage/wkhtmltopdf.txt
$report->setOptions( [
    'no-outline',
    'viewport-size' => '1280x1024',
    'page-width' => '21cm',
    'page-height' => '29.7cm',
]);
$report->setBinPath('wkhtmltopdf.exe'); // Ruta relativa o absoluta de wkhtmltopdf
// Los mismo parametros utilizados en HTML Report
$params = [/*...*/];

$pdf = $report->render($invoice, $params);

file_put_contents('invoice.pdf', $pdf);

```

## Previsualización

[![greenter factura PDF](/img/greenter-factura-pdf.png)](/files/greenter-factura-preview.pdf)