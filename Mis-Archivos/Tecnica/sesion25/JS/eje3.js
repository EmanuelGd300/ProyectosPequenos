/*
Se tiene un archivo de datos con un numero desconocido de registros, 
por registro se tiene: Edad, Estado civil, (1:Soltero, 2:Casado), 
Nivel de estudio (1:Primaria, 2:Secundaria, 3:Universidad) y 
seccion de periodico que mas prefiere (1:Internacional, 2:Local, 
3:Economica, 4:Cultural).

A. Promedio de edad de los que prefieren la seccion internacional.

*/
//DEFINICION DE VARIABLES
let edad, estadoCivil, nivelEstudio, seccionPeriodico, rta;
let acuEdad, conEdad, promedioEdad,contadorRegistro, contadorLocal;
let porcentajeLocal, contadorGeneralEconomica, contadorEspEconomicaCasada;
let porcentajeEconomicoCasado,contadorUniversitarioCultural;
//INICIALIZACION DE VARIABLES
edad = 0;
estadoCivil=0;
nivelEstudio=0; 
seccionPeriodico=0;
rta = "si";
acuEdad = 0;
conEdad = 0;
promedioEdad = 0;
contadorRegistro=0;
contadorLocal=0;
porcentajeLocal=0;
contadorGeneralEconomica=0;
contadorEspEconomicaCasada=0;
porcentajeEconomicoCasado=0;
contadorUniversitarioCultural=0;

while (rta == "si"){
	edad = parseInt(prompt("Ingrese su edad"));
	estadoCivil=parseInt(prompt("Ingrese su estado civil 1:Soltero, 2:Casado"));
	nivelEstudio=parseInt(prompt("Ingrese su Nivel de Estudio 1:Primaria, 2:Secundaria, 3:Universidad")); 
	seccionPeriodico=parseInt(prompt("Ingrese la seccion del periodico favorito 1:Internacional, 2:Local,3:Economica, 4:Cultural"));
	/*Esto es para el primer punto*/
	if(seccionPeriodico==1){
		acuEdad+=edad;
		conEdad++;
	}
	/*Esto es para el segundo punto
	Porcentaje de los que representan la seccion local
	formula de porcentaje = (contadorEspecifico/contadorGeneral)*100
	la formula del procentaje se hace por fuera del ciclo
	*/
	if(seccionPeriodico==2){
		contadorLocal+=1;
	}
	/*Esto es para el tercer punto
	Porcente de los casados que prefieren la seccion economica
	*/	
	
	if(seccionPeriodico==3){
		contadorGeneralEconomica++;
		if(estadoCivil==2){
			contadorEspEconomicaCasada+=1;
		}
	}
	/*Esto es para el cuerto punto
		cuantos universitarios prefieren la sesion cultural
	*/
	if(seccionPeriodico==4){
		if(nivelEstudio==3){
			contadorUniversitarioCultural++;
		}
	}

	contadorRegistro++;
	rta = prompt("Desea ingresar otro registro? si/no");
}//fin ciclo while
promedioEdad = acuEdad/conEdad;
porcentajeLocal = (contadorLocal/contadorRegistro)*100;
porcentajeEconomicoCasado=(contadorEspEconomicaCasada/contadorGeneralEconomica)*100;

console.log(promedioEdad);
console.log(porcentajeLocal);
console.log(porcentajeEconomicoCasado);
console.log(contadorUniversitarioCultural);
