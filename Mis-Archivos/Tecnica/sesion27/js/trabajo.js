//Crear una pagina que capture los datos basicos
/*
nombre
cedula
telefono
fechaNacimiento
direccion
salario por dia
horas trabajadas

mostrar en un pagina neto ganado por la persona
utilizando funciones para las operaciones
debera mostrar un mensaje de bienvendia
debera mostrar mensaje de culminacion del proceso
*/
function calcular(){
	//definir variables
	let salario, horas, neto, nombre;
	let objSalario;
	//iniciarliar variables
	salario = 0;
	horas = 0;
	neto = 0;
	nombre = "";
	objSalario = document.querySelector("#salario");
	//procesar
	//salario = document.getElementById('salario').value;
	salario = objSalario.value;

	horas = document.getElementById('horas').value;
	nombre = document.getElementById("nombre").value;
	neto = ( salario / 8 ) * horas;
	//document.write("El salario de "+ nombre + " es: " + neto);
	document.getElementById("resultado").innerHTML=neto;
	//document.getElementById("resu")
}
function prender(){
	let alerta;
	alerta = document.getElementById("prendace");
	alerta.style.backgroundColor="#F08080";
}
function publicidad(){
	var caj = document.getElementById("caja");
	var pub = document.createElement("section");
	pub.className = "publici";
	caj.appendChild(pub);

}