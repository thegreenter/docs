# Greener XMLDsig

Esta libreria permite realizar la firma digital de los documentos XML con un certificado electrónico, siguiendo la normativa de SUNAT.

## Uso

Para este ejemplo necesitamos un archivo XML previamente generado, debemos asegurarnos de incluir la etiqueta `#!xml <ext:ExtensionContent/>`, que es donde se agregará el nodod de la firma.  

```php
<?php

use Greenter\XMLSecLibs\Sunat\SignedXml;

$xml = file_get_contents('20600995805-01-F001-1.xml');
$cert = file_get_contents('certifcate.pem');

$signer = new SignedXml();
$signer->setCertificate($cert);

$xmlSigned = $signer->signXml($xml);

file_put_contents("signed.xml", $xmlSigned);

```
El resultado seria este:
```xml hl_lines="15 19, 24"
<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2">
   <ext:UBLExtensions>
    <ext:UBLExtension>
      <ext:ExtensionContent>
            <ds:Signature Id="SignIMM">
                <ds:SignedInfo>
                    <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
                    <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
                    <ds:Reference URI="">
                    <ds:Transforms>
                        <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
                    </ds:Transforms>
                    <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
                    <ds:DigestValue>IwJuNQGQaHmmm3iv2jj8JDv70Ow=</ds:DigestValue>
                    </ds:Reference>
                </ds:SignedInfo>
                <ds:SignatureValue>
                nLaghokzMNrmrfPnbIg9b...WluZTE1UiLFwZXXXPUlf2o=
                </ds:SignatureValue>
                <ds:KeyInfo>
                    <ds:X509Data>
                        <ds:X509Certificate>
                        MIIFhzCCA3OgAwI...BgNVBAYTAlVTVQQIEwVNYWluZTEgMOiRJ00nE=
                        </ds:X509Certificate>
                    </ds:X509Data>
                </ds:KeyInfo>
            </ds:Signature>
      </ext:ExtensionContent>
    </ext:UBLExtension>
   </ext:UBLExtensions>
   <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
   <cbc:CustomizationID>2.0</cbc:CustomizationID>
   <cbc:ID>F001-1</cbc:ID>
<!--....-->
</Invoice>
```

Datos a considerar:    
`#!xml <ds:DigestValue>`: Valor Resumen, utilizado en la representación impresa y codigo QR.   
`#!xml <ds:SignatureValue>`: Valor de la Firma.   
`#!xml <ds:X509Certificate>`: Contenido del certificado, necesario para verificar la autenticidad del documento.   

!!! info "Otros formatos de certificado"

    Puedes seguir esta [guía](https://github.com/thegreenter/xmldsig/blob/master/CONVERT.md), para convertir un certificado al formato requerido.  
