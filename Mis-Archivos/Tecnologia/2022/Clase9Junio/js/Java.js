// Viendo Arrays //
edades = [18, 14, 15, 92, 78, 63];

console.log(edades[2]);

let nombres = ["Emanuel", "Sofia", "Santiago", "Godoy"];

console.log(nombres);

let correo = [
    "Elfriki@300",
    "sofi@hermosa.com",
    "godoy@bajista.edu.co",
    "santiago@viejo.co"
];

console.log(correo.length);

let nombre = ["Emanuel", "Sofia", "Godoy", "Santiago", "Cristian"]
let apellido = ["Gomez", "Restrepo", "Pastrana", "Florez", "Ramirez"]
let edad = ["17", "17", "17", "20", "18"]
let telefono = ["300", "305", "311", "090", "330"]
let direccion = ["Cra 32", "Cr 39 E", "Cr 100", "Cr 0", "Cra 01"]

console.log(nombre, apellido, edad, telefono, direccion.length);

nombre.push("Luis");

nombre.splice(0, 1);

// Viendo For //

for (let i = 0; i < nombre.length; i++) {

    console.log(nombre[i] + " " + apellido[i] + " " + edad[i] + " " + telefono[i] + " " + direccion[i]);
    console.log(`${nombre[i]} ${apellido[i]}  ${edad[i]}  ${telefono[i]}  ${direccion[i]}`);
}

nombre.forEach(element => {
    console.log(`el nombre es ${element}`)
});

// Viendo Objetos// 

let Persona = { "nombre": "Ryu", "apellido": "Hayabusa"};

let Personaje = {
    nombre: "Ryu",
    apellido: "Hayabusa",
    edad: 20,
    ropa: "Azul",
    Profesión: "Ninja",
};

let curso = [{
    "nombre": "Adsi",
    "duracion": "1 mes",
    "valor": "100 millones"
},
{
    "nombre": "levantamiento de pollitas",
    "duracion": "1 dia",
    "valor": "gratis"
},
{
    "nombre": "git hub",
    "duracion": "100 años",
    "valor": "toda la vida"
}];