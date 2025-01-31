// middleware to setup CORS for the Express app
const cors = require('cors');
const express = require('express');


const allowedOrigins = ["https://localhost:3000","http://localhost:3000"];

const corsExpress = (app) => {
    
    app.use(express.json()); //parse json payload in body

    app.use(cors(
        {
        origin: (origin, callback) => { //handles multiple origin
                //
                if (!origin) return callback(null, true); // (no error, allowed)
                //
                if (allowedOrigins.includes(origin)) {
                    return callback(null, true);
                //
                } else {
                    return callback(new Error('Not allowed by CORS')); // Origin is not allowed on error
                }
            },
        methods: ["GET", "POST"]
        }
    ));

    
    app.use(express.urlencoded({ extended: true })); //parse url data in body

    app.use((req, res, next) => {
        console.log(`Request received: ${req.method} ${req.url}`); //logging
        next();
    });

};




// middleware to setup CORS for the Express app

const corsSocketIO = (app) => {
    
    app.use(express.json()); //parse json payload in body

    app.use(cors(
        {
        origin: (origin, callback) => { //handles multiple origin
                //
                if (!origin) return callback(null, true); // (no error, allowed)
                //
                if (allowedOrigins.includes(origin)) {
                    return callback(null, true);
                //
                } else {
                    return callback(new Error('Not allowed by CORS')); // Origin is not allowed on error
                }
            },
        methods: ["GET", "POST"]
        }
    ));

    
    app.use(express.urlencoded({ extended: true })); //parse url data in body

    app.use((req, res, next) => {
        console.log(`Request received: ${req.method} ${req.url}`); //logging
        next();
    });

};


module.exports = {
    corsExpress,
    corsSocketIO
};