/*Diseñe un algoritmo que lea tres longitudes y determine si forman o no un triángulo. 
Si es un triángulo determine de que tipo de triángulo se trata entre: 
equilátero (si tiene tres lados iguales), isósceles (si tiene dos lados iguales) o escaleno 
(si tiene tres lados desiguales). Considere que para formar un triángulo se requiere que: 
"el lado mayor sea menor que la suma de los otros dos lados".*/

/*
	OL = OPERADORES LOGICOS
	==
	>=
	<=
	!=
	<
	>
	
	OLR OPERADORES LOGICOS RELACIONALES
	&& = Y = AMPERSAND
	|| = O = PIPE

	( mandado == true ) && ( vuela >= 2000 ) = true
	( mandado == true ) || ( platos == true ) = true

	TABLAS DE VERDAD

	Y == &&
	V  |  V  = V
	V  |  F  = F
	F  |  V  = F
	F  |  F  = F

	O == ||
	V  |  V  = V
	V  |  F  = V
	F  |  V  = V
	F  |  F  = F

*/

let long1 = 49;
let long2 = 50;
let long3 = 50;

if ( ( long1 > long2 ) && (long1 > long3) ) {

	if ( long1 < ( long2 + long3 ) ){

		if ( long2 == long3 ){

			console.log("Isoceles1");

		} else {

			console.log("Escaleno1");

		}

	} else {

		console.log("no cumple la condicion del triuangulo1");

	}

} else if ( ( long2 > long1 ) && (long2 > long3) ) {

	if ( long2 < ( long1 + long3 ) ){

		if ( long1 == long3 ){

			console.log("Isoceles2");

		} else {

			console.log("Escaleno2");

		}

	} else {

		console.log("no cumple la condicion del triuangulo2");

	}

} else if ( ( long3 > long1 ) && (long3 > long2) ) {

	if ( long3 < ( long1 + long2 ) ){

		if ( long1 == long2 ){

			console.log("Isoceles3");

		} else {

			console.log("Escaleno3");

		}

	} else {

		console.log("no cumple la condicion del triuangulo3");

	}

} else if( ( ( long1==long2 ) && ( long1 != long3) ) || ( ( long1==long3 ) && ( long1 != long2) ) ||
		( ( long2==long1 ) && ( long2 != long3 ) ) || ( ( long2 == long3 ) && ( long2 != long1 ) ) ||
		( ( long3==long1 ) && ( long3!= long2 ) ) || ( ( long3==long2 ) && ( long3!=long1 ) ) ) {
	console.log("Escaleno");
	
} else {

	console.log("Equilatero");

}