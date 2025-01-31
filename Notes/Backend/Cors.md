# CORS

#### Installation

`npm install cors`


#### Ressources
https://www.youtube.com/watch?v=djMy4QsPWiI Around 9 min mark

#### Notes 

Access-Control-Allow-Origin cannot use * when credentials are enabled.

The Helmet library provides 14 middlewares to complement cors.



Cors might need to be setup multiple times :

- For the express app
- For the socket.io server
- For OAAuth / OpenID


## Requests Types

- Simple CORS request
    - Methods: Get, Post or Head
    - Headers : Content-Type, Accept...
    - No credentials / No cookies
- Preflight (sent before the actual request to ask if allowed, browser responds OK)
- CORS request with credentials



| **Request Header**  | **CORS Settings**|                                              
|----------------------------------|------------------------------------------|
| `Origin`                         | `Access-Control-Allow-Origin`                       |
| `Access-Control-Request-Method`  | `Access-Control-Allow-Methods`                      |
| `Access-Control-Request-Headers` | `Access-Control-Allow-Headers`                      |
| `Content-Type`                   | `Access-Control-Allow-Headers`.                     |
| `Authorization`                  | `Access-Control-Allow-Headers`                      |
| `X-Custom-Header`                | `Access-Control-Allow-Headers`.                     |
| `Cookie`                         | `Access-Control-Allow-Credentials`                  |
| `Accept`                         | allowed without explicit backend configuration      |


Example of cors configuration : 

```js
const allowedOrigins = ['https://example.com', 'https://another-example.com'];

app.use(cors({
    //how to handle multiple origins :
    origin: (origin, callback) => {
        //
        if (!origin) return callback(null, true); //no origin for mobile / curl
        //
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        //
        } else {
            callback(new Error('Not allowed by CORS')); // Origin is not allowed
        }
    }
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],  
    credentials: true 
}));
```

## Request Headers 

All of thoses are specified by the HTTP request and defined in the header of that request.


- `Accept`
  - Specifies the media types (e.g., `application/json`, `text/html`) that the client is willing to accept in the response.
  
- `Accept-Encoding`
  - Lists the content encodings (e.g., `gzip`, `deflate`, `br`) the client supports. This allows the server to send compressed content.

- `Accept-Language` 
  - Specifies the preferred languages for the response (e.g., `en-US`, `fr`).

- `Authorization`  
  - Contains credentials for authenticating the client to the server, such as tokens or API keys (e.g., `Bearer <token>`).

- `Cache-Control`  
  - Directs caching mechanisms (e.g., `no-cache`, `max-age=3600`) to control the caching of the request or response.

- `Connection`
  - Controls whether the network connection should be kept open or closed after the current request/response pair (e.g., `keep-alive`, `close`).

- `Content-Length` 
  - Specifies the size (in bytes) of the request body.

- `Content-Type`  
  - Indicates the media type of the request body (e.g., `application/json`, `multipart/form-data`).

- `Cookie`  
  - Sends stored cookies from the client to the server, typically for session management or tracking purposes.

- `Host` 
  - Specifies the domain and port of the server (e.g., `example.com:80`). This is crucial for virtual hosting when a server hosts multiple domains.

- `If-Match`  
  - Sends a conditional request, allowing the request to succeed only if the specified entity tags (ETags) match the resource on the server.

- `If-Modified-Since`  
  - Makes the request conditional, only retrieving the resource if it has been modified since the given date.

- `If-None-Match` 
  - Similar to `If-Match`, but the request is only successful if the ETag does **not** match the current resource.

- `If-Range`  
  - Specifies a range of bytes to be retrieved from the resource, as long as the entity hasn’t changed (i.e., `If-Range` is used with `If-Modified-Since` or `If-None-Match`).

- `If-Unmodified-Since` 
  - Makes the request conditional, retrieving the resource only if it has **not** been modified since the specified date.

- `Max-Forwards`  
  - Limits the number of times a request can be forwarded through proxies or gateways. Useful for debugging.

- `Origin`  
  - Indicates the origin (protocol, host, and port) from which the request is being made. Important for CORS (Cross-Origin Resource Sharing).

- `Pragma`  
  - Older header, primarily used for cache control (e.g., `no-cache`). Superseded by `Cache-Control`.

- `Range`  
  - Specifies a range of bytes to retrieve from the server, such as `bytes=0-499` to fetch the first 500 bytes of a file.

- `Referer`  
  - Contains the URL of the resource that triggered the request, typically for analytics or security purposes.

- `TE` 
  - Specifies the transfer encodings (e.g., `gzip`, `chunked`) that the client is willing to accept.

- `User-Agent`  
  - Provides information about the client’s software, typically including the browser name, version, and operating system (e.g., `Mozilla/5.0`).

- `Upgrade-Insecure-Requests`  
  - Signals to the server that the client prefers to receive an upgraded secure (HTTPS) version of the resource, if available.

- `X-Requested-With`  
  - Often used in AJAX requests to indicate the request was made with JavaScript (e.g., `XMLHttpRequest`).

- `X-Forwarded-For`  
  - Used by proxies to forward the client’s original IP address when the request passes through intermediate proxies.

- `X-Forwarded-Proto` 
  - Used to indicate the original protocol (e.g., `http` or `https`) used by the client, often used with proxies or load balancers.

- `X-Real-IP` 
  - Used to pass the client’s real IP address in requests passing through proxies or load balancers.

