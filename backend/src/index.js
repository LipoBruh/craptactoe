const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')
const {Server} = require('socket.io')
//
const { corsExpress, corsSocketIO } = require('./middleware/cors.setup'); // Import both setups


const port = 5173 // to .env
//
const app = express()
corsExpress(app)

//app.use('/',(req,res,next))
//res.send("response")



//first arg is options, second is our express app
const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.resolve(process.cwd(), 'cert/key.pem')),
        cert:fs.readFileSync(path.resolve(process.cwd(), 'cert/cert.pem'))
    },
    app)
//port and callback
const io = new Server(sslServer);
// cors for socketIO server
corsSocketIO(io);

sslServer.listen(port,()=>console.log(`https server open on port ${port}`))