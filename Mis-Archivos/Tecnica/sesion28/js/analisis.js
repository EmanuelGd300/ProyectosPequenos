function agregar(){
	var objcontenido = document.querySelector(".contenido");

	var objcuadrado = document.createElement("section");
	var objtit = document.createElement("section");
	var	objdes = document.createElement("section");

	var texto = document.querySelector("#txtDes");

	objtit.className = "tit"
	objdes.className = "des"

	objdes.innerHTML = texto.value;

	objcuadrado.appendChild(objTit);
	objcuadrado.appendChild(objDes);

	objcuadrado.className = "cuadrado";

	objContent.appendChild(objCuadro);
}