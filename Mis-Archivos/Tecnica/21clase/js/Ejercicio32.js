console.log("Ejercicio 32")

let Htrabajadas = prompt("Introduzca sus horas trabajadas");

let PrecioPorHora = Htrabajadas*3658; 

let Sminimo = 877000;

let Sbruto =( Htrabajadas * PrecioPorHora )/100;

let Subsidio =9500;

let SNeto =(( Htrabajadas * PrecioPorHora ) + Subsidio)/100;

if((( Htrabajadas * PrecioPorHora )+ Subsidio)/100 > Sminimo)
{
    console.log("Ganas más del minimo:")
}
else{
    console.log("Ganas menos del minimo:", SNeto)
}