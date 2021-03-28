# Greenter WebServices

Esta libreria permite establecer la conexión con los servicios de SUNAT, para realizar la 
comunicación de los comprobantes electrónicos emitidos. Internamente la libreria comprime los 
comprobantes (archivos XML) antes de enviarlo a SUNAT bajo el protocolo `SOAP`, despues de recibir 
el comprobante de recepción (CDR) extrae la respuesta para saber el estado del comprobante (Aprobado, Rechazado, 
Observaciones). 

## Instalar
```sh
composer require greenter/ws
```

!!! warning "Requerimientos"
    Se necesitar tener habilitado las extensiones `soap` en `php.ini`

    ```ini
    extension=soap
    extension=fileinfo
    ```

## Uso
Para este ejemplo necesitamos un documento XML firmado, y para autenticarnos en los servicios de SUNAT,
la clave SOL, que para los servicios BETA son:

- User: `20000000001MODDATOS` _(ruc + usuario SOL)_
- Password: `moddatos`

```php
<?php
use Greenter\Ws\Services\SoapClient;
use Greenter\Ws\Services\BillSender;

require 'vendor/autoload.php';

// URL del servicio para Facturas (BETA ó PRODUCCION).
$urlService = 'https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService';
$soap = new SoapClient();
$soap->setService($urlService);
$soap->setCredentials('20000000001MODDATOS', 'moddatos');
$sender = new BillSender();
$sender->setClient($soap);

$xml = file_get_contents('factura.xml');
$result = $sender->send('20000000001-01-F001-1', $xml);

if (!$result->isSuccess()) {
    // Error en la conexion con el servicio de SUNAT
    var_dump($result->getError());
    return;
}

$cdr = $result->getCdrResponse();
file_put_contents('R-20000000001-01-F001-1.zip', $result->getCdrZip());

// Verificar CDR (Factura aceptada o rechazada)
$code = (int)$cdr->getCode();

if ($code === 0) {
    echo 'ESTADO: ACEPTADA'.PHP_EOL;
    if (count($cdr->getNotes()) > 0) {
        echo 'INCLUYE OBSERVACIONES:'.PHP_EOL;
        // Mostrar observaciones
        foreach ($cdr->getNotes() as $obs) {
            echo 'OBS: '.$obs.PHP_EOL;
        }
    }

} else if ($code >= 2000 && $code <= 3999) {
    echo 'ESTADO: RECHAZADA'.PHP_EOL;

} else {
    /* Esto no debería darse, pero si ocurre, es un CDR inválido que debería tratarse como un error-excepción. */
    /*code: 0100 a 1999 */
    echo 'Excepción';
}

echo $cdr->getDescription().PHP_EOL;

```

Esta es una referencia de las clases a utilizar segun el tipo de comprobante.

- `BillSender`
    - Factura
    - Boleta de Venta
    - Notas de Crédito
    - Notas de Débito
    - Comprobante de Percepción
    - Comprobante de Retención
- `SummarySender`
    - Resumen Diario de Boletas
    - Comunicación de Baja
    - Resumen de Reversiones (dar de baja C. de Percepción y Retención)

## Resumen diario
El resumen diario tiene un proceso diferente al de las facturas, se tiene que realizar una 
segunda petición al servicio, para obtener la respuesta de un resumen diario previamente enviado.
En el envio inicial, SUNAT nos retorna un número de **Ticket** que es el que usaremos para consultar el estado.  

```php
<?php
use Greenter\Ws\Services\SoapClient;
use Greenter\Ws\Services\SummarySender;

require 'vendor/autoload.php';

// URL del servicio, el mismo de Facturas.
$urlService = 'https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService';
$soap = new SoapClient();
$soap->setService($urlService);
$soap->setCredentials('20000000001MODDATOS', 'moddatos');
$sender = new SummarySender();
$sender->setClient($soap);

$xml = file_get_contents('resumen.xml');
$result = $sender->send('20000000001-RC-20200728-1', $xml);

if (!$result->isSuccess()) {
    // Error en la conexion con el servicio de SUNAT
    var_dump($result->getError());
    return;
}

// Guardar el ticket en el sistema, servira para consultar el estado del documento. 
$ticket = $result->getTicket();

echo $ticket;
```

Consultar el estado del documento enviado (Resumen diario, C. de Baja, R. Reversion).
```php
<?php

use Greenter\Ws\Services\SoapClient;
use Greenter\Ws\Services\ExtService;

require 'vendor/autoload.php';

// Número de ticket obtenido en el paso anterior.
$ticket = '1599432082640'; 

// URL del servicio.
$urlService = 'https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService';
$soap = new SoapClient();
$soap->setService($urlService);
$soap->setCredentials('20000000001MODDATOS', 'moddatos');
$statusService = new ExtService();
$statusService->setClient($soap);

$status = $statusService->getStatus($ticket);

if (!$status->isSuccess()) {
    // Error en la conexion con el servicio de SUNAT
    var_dump($status);
    return;
}

$cdr = $status->getCdrResponse();
file_put_contents('R-20000000001-RC-20200728-1.zip', $status->getCdrZip());
var_dump($cdr);


// Verificar CDR (Resumen aceptado o rechazado)
$code = (int)$cdr->getCode();

if ($code === 0) {
    echo 'ESTADO: ACEPTADA'.PHP_EOL;
    if (count($cdr->getNotes()) > 0) {
        echo 'INCLUYE OBSERVACIONES:'.PHP_EOL;
        // Mostrar observaciones
        foreach ($cdr->getNotes() as $obs) {
            echo 'OBS: '.$obs.PHP_EOL;
        }
    }

} else if ($code >= 2000 && $code <= 3999) {
    echo 'ESTADO: RECHAZADA'.PHP_EOL;

} else {
    /* Esto no debería darse, pero si ocurre, es un CDR inválido que debería tratarse como un error-excepción. */
    /*code: 0100 a 1999 */
    echo 'Excepción';
}
```

!!! info "Comunicación de Baja"

    La comunicación de baja y resumen de reversión siguen el mismo proceso.

## Consulta CDR
Si por algún motivo no disponemos del `CDR`, lo podemos volver a obtener consultando al servicio de SUNAT,
pero tener en cuenta que solo es posible en Producción y solo esta disponible para **Facturas** y
**Notas de Crédito/Débito** relacionada a facturas.

```php
<?php

use Greenter\Ws\Services\ConsultCdrService;
use Greenter\Ws\Services\SoapClient;

require 'vendor/autoload.php';

// URL CDR de Producción
$wsdlUrl = 'https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService?wsdl';
$soap = new SoapClient($wsdlUrl);
$soap->setCredentials('20000000001MODDATOS', 'moddatos');

$service = new ConsultCdrService();
$service->setClient($soap);

$rucEmisor = '20000000001';
$tipoDocumento = '01'; // 01: Factura, 07: Nota de Crédito, 08: Nota de Débito
$serie = 'F001';
$correlativo = '1';
$result = $service->getStatusCdr($rucEmisor, $tipoDocumento, $serie, $correlativo);

if (!$result->isSuccess()) {
    var_dump($result->getError());
    return;
}

$cdr = $result->getCdrResponse();
if ($cdr === null) {
    echo 'CDR no encontrado, el comprobante no ha sido comunicado a SUNAT.';
    return;
}

file_put_contents('R-20000000001-01-F001-1.zip', $result->getCdrZip());
var_dump($cdr);

```

## Servicios
SUNAT dispone de servicios de prueba (`BETA`) y de producción para los diferentes tipos de 
comprobantes electrónicos.

=== "BETA"

    | Servicio               | Ruta                                                                            |
    |------------------------|---------------------------------------------------------------------------------|
    | Factura                | https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService?wsdl               |
    | Guia                   | https://e-beta.sunat.gob.pe/ol-ti-itemision-guia-gem-beta/billService?wsdl      |
    | Retención y Percepción | https://e-beta.sunat.gob.pe/ol-ti-itemision-otroscpe-gem-beta/billService?wsdl  |


=== "Producción"

    | Servicio               | Ruta                                                                            |
    |------------------------|---------------------------------------------------------------------------------|
    | Factura                | https://e-factura.sunat.gob.pe/ol-ti-itcpfegem/billService?wsdl                 |
    | Guia                   | https://e-guiaremision.sunat.gob.pe/ol-ti-itemision-guia-gem/billService?wsdl   |
    | Retención y Percepción | https://e-factura.sunat.gob.pe/ol-ti-itemision-otroscpe-gem/billService?wsdl    |
    | Consulta CDR           | https://e-factura.sunat.gob.pe/ol-it-wsconscpegem/billConsultService?wsdl       |

