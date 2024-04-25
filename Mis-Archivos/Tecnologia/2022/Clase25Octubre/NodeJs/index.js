const express = require('express');
const { version } = require('node:os');
const os = require('node:os');
const app = express();

// El servidor se puede encontrar tambien como APP //

// .gitignore es un archivo donde se eligen los archivos a no subir a git //

// req es = cuando se haga una peticion, res es = responder con

app.get('/', (req, res)=>{
    res.send(`
    <H1>HOLA USUARIO, SU SISTEMA OPERATIVO ES:</H1>
    ${os.version()}
    )`
})

// Esta funcion envia Hola mundo cuando se solicita el puerto 3000

app.listen(3000, ()=>{
    console.log("Estoy en el puerto 3000")
});

// Esta funcion envia Estoy en el puerto 3000 cuando se llama

