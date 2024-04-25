/*Elaborar un D.F. que lea el número de horas 
trabajadas por mes y valor por hora trabajada 
para un trabajador; calcular el salario bruto 
por mes. Calcular el salario neto por mes restando 
el 10% al salario bruto por seguro social y 
agregamos un subsidio de $9500. 
Si el salario neto es mayor del mínimo vigente, 
imprimir el mensaje "GANA MÁS DEL MÍNIMO", 
si no es así imprimir el salario neto.*/

let numeroHoras = prompt("Ingres el numero de horas");
let valorHora = prompt("Ingrese el valor de la hora");
let salarioBruto = numeroHoras * valorHora;
let seguridadSocial = salarioBruto * 0.1;
let subsidio = 9500;
let salarioMinimo = 877802;
let salarioNeto = salarioBruto - seguridadSocial + subsidio;

if( salarioNeto > salarioMinimo ){
	console.log('GANA MÁS DEL MÍNIMO ' + salarioNeto);
} else {
	alert(salarioNeto);
}