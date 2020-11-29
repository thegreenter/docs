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
$see->setService(SunatEndpoints::FE_PRODUCCION); // Cambiar la url para cuando sea Percepción/Retención o Guía de Remisión. 
$see->setCertificate(file_get_contents(__DIR__.'/valid-cer.pem'));
$see->setClaveSOL('20000000001D', 'NOMBLOI', 'psdlbmrt');
```

!!! info "Usuario Secundario"

    Despues de crear el usuario secundario, tiene que esperar hasta un plazo de 24 horas para
    que este activo y pueda usarlo.
