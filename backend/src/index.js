const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')

const port = 3000

const app = express()
app.use('/',(req,res,next))
res.send("response")



//first arg is options, second is our express app
const sslServer = https.createServer(
    {
        key:"",
        cert:''
    },
    app)
//port and callback
app.listen(port,()=>console.log(`https server open on port ${port}`))