let sumar =  document.getElementById ("sumar");
let restar =  document.getElementById ("restar");
let multiplicar =  document.getElementById ("multiplicar");
let num1 = document.getElementById ("num1");
let num2 = document.getElementById ("num2");

sumar.addEventListener("click",sumar);
function sumar(num1,num2){
    num1 + num2 = 
}

validar.addEventListener("click", confirmar);
function confirmar(){
    if (cedula.value == ""){
        console.log("No hay datos");
        cedula.style.borderColor= "red";
        mensaje.innerHTML = "Faltan datos";
        mensaje.classList.add("mensaje");
        prueba.classList.add("mensaje");
    }
}