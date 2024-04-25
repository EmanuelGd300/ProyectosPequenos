console.log("Ejercicio 33")

let nombre = prompt("Introduzca su nombre");

let carnet = prompt("Introduzca su número de carnet");

let PrimerNota = prompt("Introduzca la primera nota");
PrimerNota= parseFloat(PrimerNota);

let SegundaNota = prompt("Introduzca la segunda nota");
SegundaNota= parseFloat(SegundaNota);

let TercerNota = prompt("Introduzca la tercera nota");
TercerNota= parseFloat(TercerNota);

let CuartaNota = prompt("Introduzca la cuarta nota");
CuartaNota= parseFloat(CuartaNota);

let NotaFinal = (PrimerNota+SegundaNota+TercerNota+CuartaNota)/4;
NotaFinal = Math.round(NotaFinal)

if(NotaFinal >= 6.0){
	console.log(nombre)
	console.log(carnet)
	console.log(NotaFinal)
	console.log("Aprueba")
}
else if ((NotaFinal >=2.0) && (NotaFinal < 6.0))
{
	console.log(nombre)
	console.log(carnet)
	console.log(NotaFinal)
	console.log("Habilita")
}
else
{
	console.log(nombre)
	console.log(carnet)
	console.log(NotaFinal)
	console.log("Reprueba")
}