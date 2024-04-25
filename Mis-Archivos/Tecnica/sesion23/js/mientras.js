/*Ciclo mientra
Es aquel que permite repetir infinitamente un proceso
de forma controlada. este ciclo tambien puede emplearse
como un ciclo PARA.

while(codicion o prposicion){

}

let rta = "si";
while(rta == "si"){

	console.log("repetior");
	console.log("otra cosa");
	rta = prompt("Desea continuar");

}
*/
//CICLO MIENTRA UTILIZADO COMO CICLO PARA
let tope = 1;

while (tope <= 100){
	console.log("Esto es una prueba "+tope);
	//tope = tope + 1;
	tope+=5;
	//tope++;
}
