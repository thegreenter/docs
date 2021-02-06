# Forma de Pago

A partir del 4 de Abril de 2021[^1] será obligatorio la inclusión de la forma de pago en el comprobante electrónico.

Los siguientes ejemplos muestran como incluir los tipos de forma de pago aceptados por SUNAT.

## Contado

```php
<?php
use Greenter\Model\Sale\FormaPagos\FormaPagoContado;
use Greenter\Model\Sale\Invoice;

$invoice = new Invoice();
$invoice->setFormaPago(new FormaPagoContado());
```

## Credito

| Detalle | |
|-|-|
|Monto a pagar|100 |
|Cuota 1 | 40 |
|Fecha Pago 1 | 2020-02-10 |
|Cuota 2 | 60 |
|Fecha Pago 2 | 2020-02-17 |

```php
<?php
use Greenter\Model\Sale\Cuota;
use Greenter\Model\Sale\FormaPagos\FormaPagoCredito;
use Greenter\Model\Sale\Invoice;

$invoice = new Invoice();
$invoice->setFormaPago(new FormaPagoCredito(100.00));
$invoice->setCuotas([
    (new Cuota())
        ->setMonto(40.00)
        ->setFechaPago(new DateTime('2020-02-10 00:00:00-05:00')),
    (new Cuota())
        ->setMonto(60.00)
        ->setFechaPago(new DateTime('2020-02-17 00:00:00-05:00'))
]);
```

[^1]:
    Resolución [Nº 000193-2020/SUNAT](https://busquedas.elperuano.pe/download/url/modifican-la-normativa-sobre-emision-electronica-en-relacion-resolucion-n-000193-2020sunat-1900492-1) - MODIFICAN LA NORMATIVA SOBRE EMISIÓN ELECTRÓNICA EN RELACIÓN CON LA FACTURA ELECTRÓNICA, EL RECIBO POR HONORARIOS ELECTRÓNICO Y LA NOTA DE CRÉDITO ELECTRÓNICA
