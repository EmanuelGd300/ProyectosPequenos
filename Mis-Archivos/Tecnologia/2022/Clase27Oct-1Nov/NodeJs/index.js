const os = require('node:os');
const express = require('express');
const colors = require('colors');
const config = require('./app/config');

const fs = require('fs');

const { version } = require('node:os');
const path = require('node:path');
const server = express();
const PORT = process.env.PORT;

server.get('/', (req, res)=>{
    res.send(`<H1>HOLA USUARIO, SU SISTEMA OPERATIVO ES:</H1>${os.version()}`)
})

// Esta funcion envia Hola mundo cuando se solicita el puerto 3000

server.get('/frikixsofia', (req, res)=>{
    res.send(`<H1>HOLA USUARIO, EL FRIKI AMA A SOFIA</H1>`)
})

// Esta funcion envia algo cuando se llama

server.listen(PORT, callback)