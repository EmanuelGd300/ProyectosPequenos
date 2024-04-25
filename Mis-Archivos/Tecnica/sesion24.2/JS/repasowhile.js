//Declaracion o creacion de variables
let restaurante, mesa, comida, numeroEmpleado;
let nombreEmpleado, control, rta;

//Inicializacion de variables
restaurante = "";
mesa = 0;
comida = []; //vectores
numeroEmpleado = 0;//prompt("Ingrese el numero de empleados");
control = 1;
rta = "si";

restaurante = prompt("Ingrese el nombre del restaurante");



while (  control <= numeroEmpleado ){

	nombreEmpleado = prompt("Ingrese el nombre del empleado" + numeroEmpleado);
	control++;

}//For
control = 0;
//comidas
while ( rta == "si" ){ //ciclo infinito

	comida[ control ] = prompt("Ingrese el nombre el plato");
	rta = prompt("Desea ingresar otro plato si/no");
	control++;

}

for ( i=0; i < control; i++){
	console.log(comida[i]);
}

