/* let n1 = 4;
let n2 = 3;

function suma() {
    let sum = n1 + n2;
    return sum;
}

function resta(n1, n2) {
    let rest = n1 - n2;
    return rest;
}

console.log(suma());
console.log(resta(90, 10));

const fun = (mensa) => {
    let su = n1 + n2;
    return su + mensa;
    I
}
console.log(fun("hola"));

const getNombre = () => "Sofi";

console.log(getNombre());

function multiplicacion(n1, n2 = 30) {
    return n1 * n2;
}
console.log(multiplicacion(6, 2))

let multi = (n1, n2 = 40) => {
    let res = n1 * n2;
    let mensaje = `el resultado de la multiplicacion es:${res}`
    return mensaje;
}

console.log(multi(10))
*/

// Contador //

let contador = document.getElementById("caja");
let total = 0;

setInterval(()=>{
    total += 1;
    console.log(total);
    contador.innerHTML = total;
},1000);