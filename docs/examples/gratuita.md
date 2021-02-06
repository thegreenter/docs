# Factura Gratuita

> Las lineas resaltadas son propias de este modelo de factura.

## Código

```php hl_lines="19 20 32 37 45 46"
<?php
use Greenter\Model\Sale\FormaPagos\FormaPagoContado;
use Greenter\Model\Sale\Invoice;
use Greenter\Model\Sale\Legend;
use Greenter\Model\Sale\SaleDetail;

$invoice = new Invoice();
$invoice
    ->setUblVersion('2.1')
    ->setTipoOperacion('0101')
    ->setTipoDoc('01')
    ->setSerie('F001')
    ->setCorrelativo('123')
    ->setFechaEmision(new \DateTime())
    ->setFormaPago(new FormaPagoContado())
    ->setTipoMoneda('PEN')
    ->setClient($this->getClient())
    ->setCompany($this->getCompany())
    ->setMtoOperGratuitas(200)
    ->setMtoIGVGratuitas(36)
    ->setTotalImpuestos(0)
    ->setValorVenta(0)
    ->setSubTotal(0)
    ->setMtoImpVenta(0);

$detail = new SaleDetail();
$detail->setCodProducto('P001')
    ->setUnidad('NIU')
    ->setDescripcion('PROD 1')
    ->setCantidad(2)
    ->setMtoValorUnitario(0)
    ->setMtoValorGratuito(100)
    ->setMtoValorVenta(200)
    ->setMtoBaseIgv(200)
    ->setPorcentajeIgv(18)
    ->setIgv(36)
    ->setTipAfeIgv('11')
    ->setTotalImpuestos(36)
    ->setMtoPrecioUnitario(0)
;

$invoice->setDetails([$detail])
    ->setLegends([
        (new Legend())
            ->setCode('1002')
            ->setValue('TRANSFERENCIA GRATUITA DE UN BIEN Y/O SERVICIO PRESTADO GRATUITAMENTE')
    ]);
```