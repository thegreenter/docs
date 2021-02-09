# Factura Exportación

> Las lineas resaltadas son propias de este modelo de factura.

## Código

```php hl_lines="12 20 21 22 23 25 33 42"
<?php

use Greenter\Model\Client\Client;
use Greenter\Model\Sale\FormaPagos\FormaPagoContado;
use Greenter\Model\Sale\Invoice;
use Greenter\Model\Sale\Legend;
use Greenter\Model\Sale\SaleDetail;

$invoice = new Invoice();
$invoice
    ->setUblVersion('2.1')
    ->setTipoOperacion('0200') // Tipo Operacion: exportaction
    ->setTipoDoc('01')
    ->setSerie('F001')
    ->setCorrelativo('123')
    ->setFechaEmision(new \DateTime())
    ->setFormaPago(new FormaPagoContado())
    ->setTipoMoneda('USD')
    ->setCompany($this->getCompany())
    ->setClient((new Client()) // Cliente: extranjeria o sin documentos
        ->setTipoDoc('0')
        ->setNumDoc('-')
        ->setRznSocial('EXTRANJERO')
    )
    ->setMtoOperExportacion(100)
    ->setMtoIGV(0)
    ->setTotalImpuestos(0)
    ->setValorVenta(100)
    ->setSubTotal(100)
    ->setMtoImpVenta(100);

$detail = new SaleDetail();
$detail->setCodProducto('P001')
    ->setCodProdSunat('43231513') // Codigo Producto Sunat, requerido.
    ->setUnidad('KG')
    ->setDescripcion('PROD 1')
    ->setCantidad(2)
    ->setMtoValorUnitario(50)
    ->setMtoValorVenta(100)
    ->setMtoBaseIgv(100)
    ->setPorcentajeIgv(0)
    ->setIgv(0)
    ->setTipAfeIgv('40')
    ->setTotalImpuestos(0)
    ->setMtoPrecioUnitario(50)
;

$invoice->setDetails([$detail])
    ->setLegends([
        (new Legend())
            ->setCode('1000')
            ->setValue('SON CIEN CON OO/100 SOLES')
    ]);
```