//O app.js

//Librerias
const express = require('express');
const dotenv = require('dotenv').config({
    path: "./config/.env"
});
const routes = require('./routes/rutas.js');

//Inicialización
const server = express();
const puerto = process.env.PUERTO;

//Rutas
server.get('/', routes.principal);
server.get('/contacto', routes.contacto);
server.get('/galeria', routes.galeria);

//Habilitación del puerto
server.listen(puerto, () => {
    console.log(`Puerto: ${puerto}`);
})