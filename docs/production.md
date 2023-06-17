# Greenter en Producción
En esta sección de indican los pasos para convertirse en Emisor Electrónico.

## Pasos
- Creación de usuario secundario con los permisos para Facturación Electrónica.
- Registrar el certificado digital en el portal de SUNAT, en formato `.cer` (Public key).
- Greenter requiere el certificado digital en formato `.pem` (Private & Public Key), si tiene un certificado `.pfx`
 puede convertirlo siguiendo esta [guía](https://github.com/thegreenter/xmldsig/blob/master/CONVERT.md).
- Configurar la url del servicio de Producción (ver [Lista de servicios](https://greenter.dev/packages/ws/#servicios)).

```php hl_lines="5"
<?php
use Greenter\Ws\Services\SunatEndpoints;

$see = new \Greenter\See();
$see->setService(SunatEndpoints::FE_PRODUCCION); // Cambiar la url para cuando sea Percepción/Retención
$see->setCertificate(file_get_contents(__DIR__.'/valid-cer.pem'));
$see->setClaveSOL('20000000001D', 'NOMBLOI', 'psdlbmrt');
```

!!! info "Usuario Secundario"

    Despues de crear el usuario secundario, tiene que esperar hasta un plazo de 24 horas para
    que este activo y pueda usarlo.

## Guia de Remisión

A partir de Diciembre de 2022, los documentos de _Guía de Remisión_ se envían a través de un servicio API, el cual es una forma distinta de enviar información en comparación con las facturas. Para utilizar este servicio, es necesario obtener unas credenciales que se generan en el portal de SUNAT.

```php hl_lines="8"
<?php
$see = new \Greenter\Api([
  'auth' => 'https://api-seguridad.sunat.gob.pe/v1',
  'cpe' => 'https://api-cpe.sunat.gob.pe/v1',
]);
$see->setCertificate(file_get_contents(__DIR__.'/valid-cer.pem'));
$see->setClaveSOL('20000000001D', 'NOMBLOI', 'psdlbmrt');
$see->setApiCredentials('aad1-85e5b0ae-255c-4891-a595-0b98c65c9854', 'Hty/M6QshYvPgItX2P0+Kw==');
```
