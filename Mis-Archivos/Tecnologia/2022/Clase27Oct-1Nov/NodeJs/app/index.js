const express = require('express' );
const colors = require('colors');
const config = require('./app/config');

const server = express();

const port = process.env.PORT;

server.get('/', (req, res)=>{
    res.send('Hola mundo');
});

server.listen (port, ()=>{
    let mensaje = `Esta conectado en la url http://localhost:${port}`;
    switch (process.env.ENTORNO) {
    case 'qa':
        console.log(mensaje.bgYellow) ;
    break;
    case 'development':
        console.log(mensaje.bgBlue);
    case 'production':
    console. log(mensaje.bgRed);
    break;
    default:
    console.log(mensaje.Rainbow);
    break;

    }
});