let carnet = "N521";
let nombre = "PATRICIO SEUDONIMO GUTEMBER";
let nota1 = parseFloat(prompt("Ingrese la 1ra nota"));
let nota2 = parseFloat(prompt("Ingrese la 2da nota"));
let nota3 = parseFloat(prompt("Ingrese la 3ra nota"));
let nota4 = parseFloat(prompt("Ingrese la 4ta nota"));

//parseFloat("") sirve para convertir un texto a numero flotantes

let defintiva = ( nota1 + nota2 + nota3 + nota4 ) / 4;

if( defintiva >= 6.0 ){

	alert("Aprobo " + defintiva);

} else if( defintiva >= 2.0 ){

	alert("Habilita " + defintiva);

} else {
	alert("Reprobo " + defintiva);
}