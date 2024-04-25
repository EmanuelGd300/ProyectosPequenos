let $persona = {
    "identidad":"101181255",
    "nombre":"JULIAN",
    "apellido":"PEREZ"
}

let $humanos = [{
    "identidad":"225GD",
    "nombre":"CAROL",
    "apellido":"BETANCUR"
},{
    "identidad":"2342355",
    "nombre":"ALFREDO",
    "apellido":"FLORES"
},{
    "identidad":"23134",
    "nombre":"ARTURO",
    "apellido":"DEL CARMEN"
},{
    "identidad":"1036927314",
    "nombre":"EMANUEL",
    "apellido":"GOMEZ"
},{
    "identidad":"ATRX03",
    "nombre":"JHON",
    "apellido":"RAMIREZ"
},{
    "identidad":"123456",
    "nombre":"JAIRO",
    "apellido":"RESTREPO"
},{
    "identidad":"78910",
    "nombre":"ROBERTO",
    "apellido":"DE JESUS"
},{
    "identidad":"1036EGD",
    "nombre":"ALBEIRO",
    "apellido":"PEREZ"
},{
    "identidad":"927EGD",
    "nombre":"JAIME",
    "apellido":"GARCIA"
},{
    "identidad":"314EGD",
    "nombre":"CARLOS",
    "apellido":"JIMENEZ"
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
$estruc += "<tr bgcolor= 'Green'>";
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