/*se tiene 5 estudiantes de los cuales se les conoce
las cuatro nos con igual porcentaje.

Se desea conocer la nota definitiva de cada estudiante
*/
//declaracion de variable que se van a utilizar 
let carnet;
let nombre;
let n1;
let n2;
let n3;
let n4;
let definitiva;

for ( i=1; i<=5; i=i+1){

	//carnet = prompt("Ingrese su carnet, estudiante numero:"+i);
	//nombre = prompt("Ingrese su nombre");
	n1 = parseFloat(prompt("Ingrese su primera nota"));
	n2 = parseFloat(prompt("Ingrese su segunda nota"));
	n3 = parseFloat(prompt("Ingrese su tercera nota"));
	n4 = parseFloat(prompt("Ingrese su cuarta nota"));

	definitiva = (n1+n2+n3+n4)/4;
	console.log("Su nota definitiva es:"+definitiva);
}
alert("Este proceso termino");