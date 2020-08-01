# Uso de Greenter

Más opciones que podemos utilizar con **Greenter**.

## Generar XML firmado

El ejemplo básico nos mostró como realizar todo el proceso de facturacion con un solo método `send()`, pero si necesitamos generar solo el XML firmado, lo cual seria útil para **Boletas de Venta** ya que estas no se envian a SUNAT individualmente.

```php
<?php

use Greenter\Model\Sale\Invoice;
use Greenter\See;

$boleta = (new Invoice())
    ->setUblVersion('2.1')
    ->setTipoOperacion('0101')
    ->setTipoDoc('03') // Código para Boletas, ver Catalog. 51  
    ->setSerie('B001')
    ->setCorrelativo('1')
    // ...
    ;
    
$see = new See();
$see->setCertificate(file_get_contents(__DIR__.'/certificate.pem'));

$xml = $see->getXmlSigned($boleta);

file_put_contents('20000000001-03-B001-1.xml', $xml);
```


## Enviar XML generado
Si necesitas enviar un XML previamente generado, debes seguir el siguiente ejemplo.

```php
<?php

require __DIR__.'/vendor/autoload.php';

$see = require __DIR__.'/config.php';

$xmlSigned = file_get_contents('20000000001-01-F001-1.xml');

$result = $see->sendXmlFile($xmlSigned);

```

## Resumen diario
Para comunicar las boletas de ventas emitidas o anuladas, así como las notas de crédito/débito releacionadas, necesita hacerlo mediante un _resumen diario_. A diferencia del envío de una factura, donde la respuesta es inmediata, en este documento debemos hacer un consulta adicional para conocer su estado utilizando el numero de _ticket_.

```php
<?php

use Greenter\Model\Company\Company;
use Greenter\Model\Company\Address;
use Greenter\Model\Sale\Document;
use Greenter\Model\Summary\Summary;
use Greenter\Model\Summary\SummaryDetail;

$company = new Company();
$company->setRuc('20000000001')
    ->setRazonSocial('EMPRESA SAC')
    ->setNombreComercial('EMPRESA')
    ->setAddress((new Address())
        ->setUbigueo('150101')
        ->setDepartamento('LIMA')
        ->setProvincia('LIMA')
        ->setDistrito('LIMA')
        ->setUrbanizacion('Albar')
        ->setDireccion('AV ROSALES'));

$detail = new SummaryDetail();
$detail->setTipoDoc('07') // Nota de Credito
    ->setSerieNro('B001-4')
    ->setDocReferencia((new Document()) // Documento relacionado (Boleta)
        ->setTipoDoc('03')
        ->setNroDoc('B001-1'))
    ->setEstado('1') // Emisión
    ->setClienteTipo('1') // Tipo documento identidad: DNI
    ->setClienteNro('00000000') // Nro de documento identidad
    ->setTotal(200)
    ->setMtoOperGravadas(40)
    ->setMtoOperExoneradas(50)
    ->setMtoOperInafectas(100)
    ->setMtoIGV(7.2)
    ->setMtoISC(2.8);

$detail2 = new SummaryDetail();
$detail2->setTipoDoc('03') // Boleta
    ->setSerieNro('B001-2')
    ->setEstado('3') // Anulación
    ->setClienteTipo('1')
    ->setClienteNro('00000000')
    ->setTotal(119)
    ->setMtoOperGravadas(20)
    ->setMtoOperInafectas(24.4)
    ->setMtoOperExoneradas(50)
    ->setMtoOtrosCargos(21)
    ->setMtoIGV(3.6);

$resumen = new Summary();
$resumen->setFecGeneracion(new \DateTime('2020-08-01')) // Fecha de emisión de las boletas.
    ->setFecResumen(new \DateTime('2020-08-02')) // Fecha de envío del resumen diario.
    ->setCorrelativo('001') // Correlativo, necesario para diferenciar de otros Resumen diario del mismo día.
    ->setCompany($company)
    ->setDetails([$detail, $detail2]);

$result = $see->send($resumen);
// Guardar XML
file_put_contents($resumen->getName().'.xml',
                  $see->getFactory()->getLastXml());

if (!$result->isSuccess()) {
    // Si hubo error al conectarse al servicio de SUNAT.
    var_dump($result->getError());
    exit();
}

$ticket = $result->getTicket();
echo 'Ticket : '.$ticket.PHP_EOL;

$statusResult = $see->getStatus($ticket);
if (!$statusResult->isSuccess()) {
    // Si hubo error al conectarse al servicio de SUNAT.
    var_dump($statusResult->getError());
    return;
}

echo $statusResult->getCdrResponse()->getDescription();
// Guardar CDR
file_put_contents('R-'.$resumen->getName().'.zip', $statusResult->getCdrZip());
```

## Comunicacion de Baja
Para comunicar a SUNAT las anulaciones de facturas y sus notas de crédito/débito releacionadas, necesita hacerlo mediante el documento de _comunicación de baja_ .

```php
<?php

use Greenter\Model\Voided\Voided;
use Greenter\Model\Voided\VoidedDetail;

$detail1 = new VoidedDetail();
$detail1->setTipoDoc('01')
    ->setSerie('F001')
    ->setCorrelativo('1')
    ->setDesMotivoBaja('ERROR EN CÁLCULOS');

$detail2 = new VoidedDetail();
$detail2->setTipoDoc('07')
    ->setSerie('FC01')
    ->setCorrelativo('2')
    ->setDesMotivoBaja('ERROR DE RUC');

$cDeBaja = new Voided();
$cDeBaja->setCorrelativo('00001') // Correlativo, necesario para diferenciar c. de baja de en un mismo día.
    ->setFecGeneracion(new \DateTime('2020-08-01')) // Fecha de emisión de los comprobantes a dar de baja
    ->setFecComunicacion(new \DateTime('2020-08-02')) // Fecha de envio de la C. de baja
    ->setCompany($company)
    ->setDetails([$detail1, $detail2]);

$result = $see->send($cDeBaja);
// Guardar XML
file_put_contents($cDeBaja->getName().'.xml',
                  $see->getFactory()->getLastXml());

if (!$result->isSuccess()) {
    // Si hubo error al conectarse al servicio de SUNAT.
    var_dump($result->getError());
    exit();
}

$ticket = $result->getTicket();
echo 'Ticket : '.$ticket.PHP_EOL;

$statusResult = $see->getStatus($ticket);
if (!$statusResult->isSuccess()) {
    // Si hubo error al conectarse al servicio de SUNAT.
    var_dump($statusResult->getError());
    return;
}

echo $statusResult->getCdrResponse()->getDescription();
// Guardar CDR
file_put_contents('R-'.$cDeBaja->getName().'.zip', $statusResult->getCdrZip());
```