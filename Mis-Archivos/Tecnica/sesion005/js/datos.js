let $persona = {
    "identidad":"101181255",
    "nombre":"JULIAN",
    "apellido":"PEREZ"
}

let $humanos = [{
    "identidad":"3216565",
    "nombre":"CAROLINA",
    "apellido":"VEA"
},{
    "identidad":"244635463",
    "nombre":"SERVANDO",
    "apellido":"MUTSI"
},{
    "identidad":"3456345",
    "nombre":"ZOE",
    "apellido":"PEREZ"
},{
    "identidad":"098765",
    "nombre":"ALDRICH",
    "apellido":"GUTEMBER"
}];

let $casa = {
    "cuartos":[64,15,30],
    "banos":[15, 8],
    "garajes":[40,35,70]
}

var $varia = document.querySelector("#nota")
var $mensaje = document.getElementById("nota");

//$mensaje.innerHTML = "luis";
//$varia.innerHTML ="ESTA SI NECESITA UNA ALMUADIÑA";

$estruc = "<table border = '1'>";
//$estruc += "<tr><td>IDENTIDAD</td><td>NOMBRES</td><td>APELLIDOS</td></tr>";
$estruc += "<tr bgcolor= 'yellow'>";
$estruc += "<td>";
$estruc += "IDENTIDAD";
$estruc += "</td>";
$estruc += "<td>";
$estruc += "NOMBRE";
$estruc += "</td>";
$estruc += "<td>";
$estruc += "APELLIDOS";
$estruc += "</td>";
$estruc += "</tr>";

for( let $val of $humanos){

    $estruc += "<tr>";
    $estruc += "<td>"+$val.identidad+"</td>";
    $estruc += "<td>"+$val.nombre+"</td>";
    $estruc += "<td>"+$val.apellido+"</td>";
    $estruc += "</tr>";

}
$estruc += "</table>";

console.log($estruc);


$varia.innerHTML = $estruc;




//  += significa acumular




//document.getElementById("#nota").innerHTML = $persona.apellido;