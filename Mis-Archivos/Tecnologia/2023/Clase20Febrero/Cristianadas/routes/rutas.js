const express = require('express');

const principal = (req, res) => {
    res.send("Qmas papi")
}
const contacto = (req, res) => {
    res.send("Este es el contacto")
}
const galeria = (req, res) => {
    res.send("Esta es la galeria")
}

module.exports = { principal, contacto, galeria }