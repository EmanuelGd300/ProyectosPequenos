/*2.) Elaborar un programa que calcule la nota 
promedio de un grupo de N estudiantes, cada 
estudiante tiene un nombre y 3 notas.
N =es un numero conocido de estudiantes*/

let N, nombre, n1, n2, n3, promedioAlumno, acumulador;

acumulador = 0;

N = prompt("Ingrese el numero de estudiantes");

for (i=1; i<=N; i++){

	nombre = prompt("Ingrese su nombre");
	n1  = parseFloat(prompt("Ingrese su primero nota"));
	n2  = parseFloat(prompt("Ingrese su segunda nota"));
	n3  = parseFloat(prompt("Ingrese su tersera nota"));

	promedioAlumno = ( n1 + n2 + n3 ) / 3;
	//console.log(promedioAlumno);
	acumulador = acumulador + promedioAlumno;
	//acumulador += promedioAlumno;
}
console.log(acumulador);

let promedio = acumulador / N;

console.log(promedio);

/*
4.9
5.0
1.0
____
10.9 / 3 = 3.3
*/