# Greenter WebServices

Esta libreria permite establecer la conexión con los servicios de SUNAT, para realizar la 
comunicación de los comprobantes electrónicos emitidos. Internamente la libreria comprime los 
comprobantes (archivos XML) antes de enviarlo a SUNAT bajo el protocolo `SOAP`, despues de recibir 
el comprobante de recepción (CDR) extrae la respuesta para saber el estado del comprobante (Aprobado, Rechazado, 
Observaciones). 


## Uso
Para este ejemplo necesitamos un documento XML firmado, y para autenticarnos en los servicios de SUNAT,
la clave SOL, que para los servicios BETA son:
- User: `20000000001MODDATOS`
- Password: `moddatos`

```php
<?php
use Greenter\Ws\Services\SoapClient;
use Greenter\Ws\Services\BillSender;

// URL del servicio para Facturas.
$urlService = 'https://e-beta.sunat.gob.pe/ol-ti-itcpfegem-beta/billService';
$soap = new SoapClient($urlService);
$soap->setCredentials('20000000001MODDATOS', 'moddatos'); // user = ruc + usuario sol
$sender = new BillSender();
$sender->setClient($soap);

$xml = file_get_contents('factura.xml');
$result = $sender->send(/*Nombre del comprobante*/'20000000001-01-F001-1', $xml);

if (!$result->isSuccess()) {
    var_dump($result);
}

file_put_contents('R-20000000001-01-F001-1.zip', $result->getCdrZip());
```

## Servicios
SUNAT dispone de servicios de prueba (`BETA`) y de producción para los diferentes tipos de 
comprobantes electrónicos.

- El servicio de **Factura** tambien se utiliza para enviar el Resumen Diario de Boletas y Comunicaciones de Baja
- El servicio de **Retención y Percepción** permite enviar las Reversiones (Anulaciones de Retención, Percepción)

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

