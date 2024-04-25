/*
que es una funcion
Es un subrutina que se puede llamar desde cualquier
parte del codigo.
Esta, está estruturada de la siguiente manera

Esta presedida de la palabra reservada function
Tiene un nombre seguido de los parentesis
Puede tener uno o varios parametros
se abre y se cierra con llaves
se llama o invoca utilizando el nombre de la funcion

Solo se ejecutara cuando esta sea llamada de lo 
contrario no pasara nada
*/


function primeraFuncion(){
	alert("mi primera funcion");
	console.log("Bienvenidos")
}

//primeraFuncion();

/*Crear 4 funciones de las operaciones basicas*/
var numero1, numero2, resultado;

numero1=0;
numero2=0;
resultado=0;

numero1 = parseInt(prompt("Ingrese el primer numero"));
numero2 = parseInt(prompt("Ingrese el primer numero"));

function suma(){
	resultado = numero1+numero2;
	console.log("El resultado de la suma es: "+resultado);
}
function resta(){
	resultado = numero1 - numero2;
	console.log("El resutlado de la resta es: " + resultado);
}
function multiplicacion(){
	resultado = numero1 * numero2;
	console.log("El resutlado de la multiplicacion es: " + resultado);
}
function division(){
	resultado = numero1 / numero2;
	console.log("El resultado de la division es: " + resultado);
}

/*realizar una funcion Que muestren en consola la fecha actual */
function fechaActual(){
	var fec, fecha, mes;
	fec = new Date();
	mes = fec.getMonth()+1;
	fecha =fec.getDate()+"/"+ mes +"/"+fec.getFullYear();
	console.log(fecha);
}
/*Crear 4 funciones que pida
f1=nombre y apellido
f2=sexo y edad
f3=escolaridad y grado
f4=numero de novi@s que han tenido
mostrarlo en pagina
*/
function datos(){
	document.write(prompt("ingrese su nombre<br>"));
	document.write(prompt("ingrese su apellido<br>"));
}
function sex(){
	document.write(prompt("ingrese su SEXO")+"<br>");
	document.write(prompt("ingrese su EDAD")+"<br>");
}
function estudio(){
	document.write(prompt("ingrese su escolaridad")+"<br>");
	document.write(prompt("ingrese su grado")+"<br>");
}
function novios(){
	document.write(prompt("ingrese su cuantas novi@s a tenido"));
}
////////////////////////////
suma();
fechaActual();
resta();
fechaActual();
multiplicacion();
division();
fechaActual();
datos();
sex();
estudio();
novios();