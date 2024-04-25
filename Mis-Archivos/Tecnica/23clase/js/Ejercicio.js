console.log("Ejercicio Bucle")

let Estudiante1 = prompt("Introduzca su nombre");

	let PrimerNota = prompt("Introduzca la primera nota");
	PrimerNota= parseFloat(PrimerNota);

	let SegundaNota = prompt("Introduzca la segunda nota");
	SegundaNota= parseFloat(SegundaNota);

	let TercerNota = prompt("Introduzca la tercera nota");
	TercerNota= parseFloat(TercerNota);

let Estudiante2 =("Introduzca su nombre");

	let PrimerNota = prompt("Introduzca la primera nota");
	PrimerNota= parseFloat(PrimerNota);

	let SegundaNota = prompt("Introduzca la segunda nota");
	SegundaNota= parseFloat(SegundaNota);

	let TercerNota = prompt("Introduzca la tercera nota");
	TercerNota= parseFloat(TercerNota);

let Estudiante3 = prompt("Introduzca su nombre");

	let PrimerNota = prompt("Introduzca la primera nota");
	PrimerNota= parseFloat(PrimerNota);

	let SegundaNota = prompt("Introduzca la segunda nota");
	SegundaNota= parseFloat(SegundaNota);

	let TercerNota = prompt("Introduzca la tercera nota");
	TercerNota= parseFloat(TercerNota);

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