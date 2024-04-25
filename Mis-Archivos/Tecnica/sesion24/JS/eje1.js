/*Una empresa desea evaluar a 10 aprendices y 
desea realizales una encuesta donde le preguntaran 
cual es su nombre, deporte favorito y salario que 
aspira. La empresa contratara el aprendiz que su 
aspiracion sea la mas bajita. El programa debera 
decir cual es el nombre de aprendiz que quedara 
contratado*/

//Definicion de variables
let cantidadAprendiz, nombre, deporte, salario, salarioMayor;

//Inicializacion de variables
cantidadAprendiz = 3;
nombre = [];
deporte = [];
salario = [];
salarioMayor = 900000000;

for (i = 1; i <= cantidadAprendiz; i++){
	nombre[i] = prompt("Ingrese su nombre aspirante nro: " + i );
	deporte[i] = prompt("Ingrese su deporte favorito aspirante nro:"+ i );
	salario[i] = prompt("Ingrese su aspiracion salarial aspirante nro:"+ i );
}

for (i = 1; i <= cantidadAprendiz; i++){

	if ( salario[i] < salarioMayor ){

		posicionSalarioMenor = i;
		salarioMayor = salario[i];

	}

}
console.log("El aprendiz que quedara contratado sera:" + nombre[posicionSalarioMenor]);