# Empezando con Greenter

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/thegreenter/firststeps)


## Instalación
La forma mas facil de instalar grenter es utilizando [composer](https://getcomposer.org/).
```bash
composer require greenter/lite
```

## Requerimientos

=== "Técnico"
    
    - Certificado en formato PEM
    - Credenciales Clave SOL

=== "Bases"
    Para conocer más detalles sobre el proceso de Facturación Electrónica, puede consultar.

    - [FE Primer](https://cpe.sunat.gob.pe/) - Guía de inicio hecho por Greenter
    - [cpe.sunat.gob.pe](https://cpe.sunat.gob.pe/) - Página oficial de SUNAT

## Configuración
Para firmar nuestro comprobante electrónico en este ejemplo, utilizaremos este [certificado de prueba](https://raw.githubusercontent.com/thegreenter/xmldsig/master/tests/certificate.pem), y para conectarnos a los servicios `BETA` de SUNAT, usaremos las credenciales **Clave SOL** por defecto.

- RUC: `20000000001`
- Usuario: `MODDATOS`
- Contraseña: `moddatos`

!!! info "PKCS#12"

    Si cuenta con un certificado `.p12` or `.pfx`, para convertirlo a formato .PEM necesita
    la clave y seguir el siguiente [ejemplo](https://github.com/thegreenter/xmldsig/blob/master/CONVERT.md#convert-to-pem)
    
Crearemos el archivo `config.php` donde configuraremos el certificado digital, la ruta del servicio y las credenciales (Clave SOL) a utilizar:
```php
<?php
use Greenter\Ws\Services\SunatEndpoints;
use Greenter\See;

$see = new See();
$see->setCertificate(file_get_contents(__DIR__.'/certificate.pem'));
$see->setService(SunatEndpoints::FE_BETA);
$see->setClaveSOL('20000000001', 'MODDATOS', 'moddatos');

return $see;
```

## Factura Electrónica

Crearemos nuestra primera factura electrónica siguiendo el estándar [UBL 2.1](https://github.com/thegreenter/ubl-validator/blob/0962ca6a30de609851d83965b8401a7983bc56b7/src/xsd/2.1/maindoc/UBL-Invoice-2.1.xsd), en nuevo archivo `factura.php` agregaremos el siguiente código:
```php
<?php

use Greenter\Model\Client\Client;
use Greenter\Model\Company\Company;
use Greenter\Model\Company\Address;
use Greenter\Model\Sale\Invoice;
use Greenter\Model\Sale\SaleDetail;
use Greenter\Model\Sale\Legend;

require __DIR__.'/vendor/autoload.php';

$see = require __DIR__.'/config.php';

// Cliente
$client = new Client();
$client->setTipoDoc('6')
    ->setNumDoc('20000000001')
    ->setRznSocial('EMPRESA 1');

// Emisor
$address = new Address();
$address->setUbigueo('150101')
    ->setDepartamento('LIMA')
    ->setProvincia('LIMA')
    ->setDistrito('LIMA')
    ->setUrbanizacion('NONE')
    ->setDireccion('AV LS');

$company = new Company();
$company->setRuc('20000000001')
    ->setRazonSocial('EMPRESA SAC')
    ->setNombreComercial('EMPRESA')
    ->setAddress($address);

// Venta
$invoice = (new Invoice())
    ->setUblVersion('2.1')
    ->setTipoOperacion('0101') // Catalog. 51
    ->setTipoDoc('01')
    ->setSerie('F001')
    ->setCorrelativo('1')
    ->setFechaEmision(new DateTime())
    ->setTipoMoneda('PEN')
    ->setClient($client)
    ->setMtoOperGravadas(100.00)
    ->setMtoIGV(18.00)
    ->setTotalImpuestos(18.00)
    ->setValorVenta(100.00)
    ->setSubTotal(118.00)
    ->setMtoImpVenta(118.00)
    ->setCompany($company);

$item = (new SaleDetail())
    ->setCodProducto('P001')
    ->setUnidad('NIU')
    ->setCantidad(2)
    ->setDescripcion('PRODUCTO 1')
    ->setMtoBaseIgv(100)
    ->setPorcentajeIgv(18.00) // 18%
    ->setIgv(18.00)
    ->setTipAfeIgv('10')
    ->setTotalImpuestos(18.00)
    ->setMtoValorVenta(100.00)
    ->setMtoValorUnitario(50.00)
    ->setMtoPrecioUnitario(59.00);

$legend = (new Legend())
    ->setCode('1000')
    ->setValue('SON DOSCIENTOS TREINTA Y SEIS CON 00/100 SOLES');

$invoice->setDetails([$item])
        ->setLegends([$legend]);

$result = $see->send($invoice);

// Guardar XML
file_put_contents($invoice->getName().'.xml',
                  $see->getFactory()->getLastXml());
if (!$result->isSuccess()) {
    // Si hubo error al conectarse al servicio de SUNAT.
    var_dump($result->getError());
    exit();
}

echo $result->getCdrResponse()->getDescription();
// Guardar CDR
file_put_contents('R-'.$invoice->getName().'.zip', $result->getCdrZip());
```

Estructura del proyecto

```text
/
├── vendor/
├── certificate.pem
├── composer.json
├── config.php
├── factura.php

```

## Ejecutar
Finalmente ejecutaremos el script desde la linea de comandos.
```bash
php factura.php
```
y si todo sale bien obtendremos como respuesta.  

!!! success "Exito!"

    La Factura numero F001-1, ha sido aceptada

Este ejemplo puedes encontrarlo en [@thegreenter/firststeps](https://github.com/thegreenter/firststeps).

## Comentarios

Pueden unirse a 👋 [Greenter Community](https://community.greenter.dev/).