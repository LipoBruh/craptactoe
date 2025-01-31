# SocketsIO

#### Installation
`npm install socket.io` (Backend)
`npm install socket.io-client` (Frontend)

#### Ressources 

https://www.youtube.com/watch?v=djMy4QsPWiI

## Frontend

### Methods

- socket.emit(event, data, callback?) 
  - Sends an event with optional data to the server.
  - Example: `socket.emit("message", { text: "Hello" });`

- socket.on(event, callback) 
  - Listens for an event from the server.
  - Example: `socket.on("message", (data) => console.log(data));`

- socket.off(event, callback?)  
  - Removes a specific event listener or all listeners for an event.
  - Example: `socket.off("message");`

- socket.removeAllListeners(event?)  
  - Removes all event listeners, optionally for a specific event.
  - Example: `socket.removeAllListeners("message");`

- socket.disconnect() 
  - Disconnects the client from the server.
  - Example: `socket.disconnect();`

- socket.connect()
  - Reconnects the client to the server if it was previously disconnected.
  - Example: `socket.connect();`

- socket.id 
  - Returns the unique ID assigned to the socket by the server.
  - Example: `console.log(socket.id);`

- socket.connected  
  - Boolean indicating whether the socket is currently connected.
  - Example: `console.log(socket.connected);`

- socket.auth 
  - Allows setting authentication data before connecting.
  - Example: `socket.auth = { token: "your_jwt_token" }; socket.connect();`

- socket.onAny(callback) 
  - Listens for all incoming events on the socket.
  - Example: `socket.onAny((event, ...args) => console.log(event, args));`

- socket.offAny(callback)  
  - Removes a listener from all events.
  - Example: `socket.offAny(myCallback);`

- socket.onAnyOutgoing(callback)  
  - Listens for all outgoing events emitted by the socket.
  - Example: `socket.onAnyOutgoing((event, ...args) => console.log(event, args));`

- socket.offAnyOutgoing(callback) 
  - Removes a listener from all outgoing events.
  - Example: `socket.offAnyOutgoing(myCallback);`

- socket.volatile.emit(event, data)  
  - Emits an event that may be dropped if the network is unstable.
  - Example: `socket.volatile.emit("fastUpdate", { data: "..." });`

- socket.compress(boolean).emit(event, data) 
  - Enables or disables compression for a specific emitted event.
  - Example: `socket.compress(false).emit("largeData", bigObject);`

- socket.listeners(event) 
  - Returns an array of listeners attached to a specific event.
  - Example: `console.log(socket.listeners("message"));`

- socket.hasListeners(event)  
  - Checks if there are any listeners for a specific event.
  - Example: `console.log(socket.hasListeners("message"));`

- socket.timeout(milliseconds).emit(event, data, callback) 
  - Emits an event with a timeout for a response.
  - Example:  
    ```js
    socket.timeout(5000).emit("requestData", (err, response) => {
      if (err) console.log("Request timed out");
      else console.log(response);
    });
    ```

- socket.recovered 
  - Boolean indicating whether the socket successfully recovered from a disconnection.
  - Example: `console.log(socket.recovered);`

- socket.io 
  - Provides access to the underlying `Manager` instance for further configurations.
  - Example: `console.log(socket.io.engine.transport.name);`

- socket.open()  
  - Alias for `socket.connect()`, used to establish a connection.
  - Example: `socket.open();`

- socket.close() 
  - Alias for `socket.disconnect()`, used to terminate a connection.
  - Example: `socket.close();`






## Backend

### Methods

- `io.on(event, callback)` 
  - Listens for new socket connections.
  - Example:  
    ```javascript
    io.on("connection", (socket) => {
      console.log("A user connected");
    });
    ```

- `io.emit(event, data)`  
  - Broadcasts an event to all connected clients.
  - Example: `io.emit("message", { text: "Hello, everyone!" });`

- `io.to(room).emit(event, data)`  
  - Sends an event to all clients in a specific room.
  - Example: `io.to("gameRoom1").emit("startGame", { players: 2 });`

- `io.in(room).emit(event, data)`
  - Alias for `io.to(room).emit(event, data)`.
  - Example: `io.in("room1").emit("message", "Hello room!");`

- `socket.on(event, callback)` 
  - Listens for an event from a specific client.
  - Example:  
    ```javascript
    socket.on("message", (data) => {
      console.log("Message received:", data);
    });
    ```

- `socket.emit(event, data)` 
  - Sends an event to the specific connected client.
  - Example: `socket.emit("welcome", { message: "Welcome to the server!" });`

- `socket.broadcast.emit(event, data)`  
  - Sends an event to all clients except the sender.
  - Example: `socket.broadcast.emit("newUser", { userId: socket.id });`

- `socket.join(room, callback?)` 
  - Adds a socket to a room.
  - Example:  
    ```javascript
    socket.join("room1");
    io.to("room1").emit("message", "A new user joined!");
    ```

- `socket.leave(room, callback?)`  
  - Removes a socket from a room.
  - Example:  
    ```javascript
    socket.leave("room1");
    ```

- `socket.rooms`  
  - Returns the rooms the socket is currently in.
  - Example: `console.log(socket.rooms);`

- `io.sockets.adapter.rooms`  
  - Returns all rooms and their connected clients.
  - Example: `console.log(io.sockets.adapter.rooms);`

- `socket.disconnect(force?)`
  - Disconnects the socket. If `force` is `true`, it forces disconnection.
  - Example: `socket.disconnect(true);`

- `io.sockets.sockets` 
  - Returns an object containing all connected sockets.
  - Example: `console.log(io.sockets.sockets);`

- `io.of(namespace)`  
  - Creates or retrieves a namespace.
  - Example:  
    ```js
    const chat = io.of("/chat");
    chat.on("connection", (socket) => {
      console.log("User connected to chat namespace");
    });
    ```

- `io.use(middleware)` 
  - Adds middleware for incoming connections.
  - Example:  
    ```javascript
    io.use((socket, next) => {
      if (socket.handshake.auth.token) {
        next();
      } else {
        next(new Error("Authentication error"));
      }
    });
    ```

- `socket.data`
  - Stores arbitrary data for a socket.
  - Example:  
    ```javascript
    socket.data.username = "Player1";
    console.log(socket.data.username);
    ```

- `io.engine.generateId(req)`  
  - Custom function to generate a unique socket ID.
  - Example:  
    ```javascript
    io.engine.generateId = (req) => "custom_" + Math.random().toString(36).substr(2, 8);
    ```

- `io.close()` 
  - Stops the server and disconnects all clients.

