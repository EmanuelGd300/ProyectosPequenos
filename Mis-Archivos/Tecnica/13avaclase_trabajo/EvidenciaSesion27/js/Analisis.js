function agregar(){
	var objContent = document.querySelector(".content");

	var objCuadro = document.createElement("section");
	var objTit = document.createElement("section");
	var objDes = document.createElement("section");

	var texto = document.querySelector("#txtDes");
	
	objTit.className="tit";
	objDes.className="des";

	objDes.innerHTML = texto.value;

	objCuadro.appendChild(objTit);
	objCuadro.appendChild(objDes);

	objCuadro.className = "cuadro";

	objContent.appendChild(objCuadro);
}