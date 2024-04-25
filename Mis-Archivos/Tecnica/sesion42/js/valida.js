var alertp = document.getElementById('alertP');

function validar(){
	var usu = document.getElementById('txtUsuario');
	if( usu.value == ""){
		alertp.classList.remove("text-hide");
	}
}