var mensaje = 'solo estamos probando';
let message = 'only we are testing';
const msg = 'hello';

function mostrarMensaje(nom='Yilena'){
    console.log(msg+' '+nom);
}
function calcularEdad(anoNac, anoAct=2022){
    ano = anoAct - anoNac;
    return ano;
}
let nombre = "valentina";
// mostrarMensaje();
// console.log(calcularEdad(2005,2020));

let nombres = [10,22,13,44,15];

let deport = [
    'soocer',
    'basketball',
    'rusby'
];
let disc = [
    ['futbol','patinaje','boxeo','gamer'],
    ['ingeniero','arquitecto','tecnolgo'],
    ['animadora','juez','portero'],
    ['espacial','astronauta']
];

// console.log(disc[0].length)

// console.log(disc[2][2])

// console.log(deport[0])

// console.log(nombres);

// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }
// nombres.forEach(elemento => {
//     console.log(elemento);
// });

let persona = {
    nombre:"JULIAN",
    apellido:"HERNANDEZ", 
    estado: true, 
    cedula:123456789,
    hobbies:['Caballos','Videos Jeugo','Programador'],
    saltar: function (){
        return 'Saltar';
    },
    nombreCompleto:function(){
        return this.nombre+' '+this.apellido;
    }
}
let ano = 2002;
console.log(persona.nombreCompleto());