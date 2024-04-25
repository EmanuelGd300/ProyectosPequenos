let nombre =  document.getElementById ("cedula");
let cedula = document.getElementById ("nombre");
let validar = document.getElementById ("validar");
let mensaje = document.getElementById ("mensaje");
let prueba = document.getElementById ("prueba");
let borrar = document.getElementById ("borrar");

borrar.addEventListener("click",eliminar);
function eliminar(){
    prueba.classList.remove("mensaje");
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