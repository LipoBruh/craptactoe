#HTTPS

## Notes: 

HTTPS and the TLS / SSL handshake, aswell as certificate signing is often handled by the domain provider, which saves some overhead in implementing those features. Github pages allows HTTPs by default on its .github domains. Note : What is assured secure by Github pages is the communication between the user and the frontend. We still need to prepare our self hosted backend.

#### Ressources:

Check Ciphers and modes strength of OpenSSL
https://ciphersuite.info/

Test strength of a website:
https://www.ssllabs.com/index.html

Buy and setup certificate
https://www.youtube.com/watch?v=rgzD4THb95s

Mock cert and keys with openSSL
https://www.youtube.com/watch?v=USrMdBF0zcg

Vague explaination of explaination of cipher and modes available on openSSL
https://www.youtube.com/watch?v=hGrd4CqXw1U


## OpenSSL

Can be used to generate key pairs. OpenSSL will be installed globally and can be used with a CLI.


Tutorial for installation:
https://www.youtube.com/watch?v=cBa87N_BZ4s
Installer executable:
https://slproweb.com/products/Win32OpenSSL.html

There are many ciphers avaible on OpenSSL, symmetric ones like assymetric ones.


To view all ciphers : 

`openssl ciphers -v`

#### Session keys

Session keys often rely on  Elliptic Curve Diffie-Hellman Ephemeral (ECDHE) based keys. They seem to be automatically managed by the TLS handshake library, but details are provided for the sake of it. 

Example of ciphers used to generate session keys : 

- ECDHE-RSA-AES256-GCM-SHA384
- ECDHE-ECDSA-AES128-GCM-SHA256
- TLS_AES_128_GCM_SHA256

#### HTTPS keys

Stronger and slower ciphers with longer keys, for the initial handshake, then we swap to weaker session keys.

Generating a private key with openSSL can be done with the following command in a CLI terminal :

`openssl genrsa -out key.pem 2048`

The key will be output to the key.pem file in the directory and can be used in pair with a generate certificate signing request to be signed by a certificate authority. The returned certificate contains the public key. The public key is derived from the private key, which is why only the private key is generated at first.

For the CA to validate our CSR, we need to go through domain validation. LetsEncrypt is a CA that is free and can process domain validation and return a signed certificate. Our authentication is done by signing a nonce with the PK (may be dependent on certbox).

Additionnal details : 
https://www.youtube.com/watch?v=jrR_WfgmWEw
https://github.com/marcel-dempers/docker-development-youtube-series/tree/master/security/letsencrypt/introduction

In the backend express app, a usual way to setup the HTTPS / TLS / SSL handshake would be with this boilerplate code.

```js
const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs') //for parsing key

const port = 3000

const app = express()
app.use('/',(req,res,next))
res.send("response")


//first arg is options, second is our express app
const sslServer = https.createServer(
    {
        key:"", //<---- import key from .env or key.pem (generated with openSSL)
        cert:'' //<---- import cert 
    },
    app)
//port and callback
sslServer.listen(port,()=>console.log(`https server open on port ${port}`))
```


#### X.509 Certificates
The name comes from the X.500 series of standards, which were developed by the International Telecommunication Union (ITU) for directory services.

The X.509 standard refers to PKI systems.

Note, certificates and PK keys are issued in .pem extension files (Privacy-Enhanced Mail) that have a header and footer and contain base 64 data

Source : 
https://www.youtube.com/watch?v=kAaIYRJoJkc


