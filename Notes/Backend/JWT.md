# JSON Web Token (JWT)

## Notes:

A JWT is generated upon authentication. It is similar to a session id or session token. It does not require to be stored, because we use our private session key to sign it, so that tampering is avoided.

The JWT is joined to requests requiring authenticated / authorized access. Its signature is validated by our session key, and its expiry time verificated.

The session can be refreshed if the token is about to expire but the user is still active. We generate a new signed JWT with a new JWT session expiry. 

The refresh expiry cannot be extended and once the expiry date is reached, the session cannot be refreshed again. A new authentication will be required.

JWT requires less database / storage handling, but is suceptible to cryptographic attacks, because it is based on symmetric encryption based on our secret key.

The JWT token is sent to the user fully encrypted, the information is compacted in base 64. The JWT is formatted in the following way: `header.data.signature` in base 64.

The header contains the info for how to verify our signature (cipher and type).

The payload contains user info (id, name, issue date).

The signature signed the header and data part of the JWT.


#### Ressources : 

Basic info about JWT:
https://www.youtube.com/watch?v=7Q17ubqLfaM

## Implementation

#### 