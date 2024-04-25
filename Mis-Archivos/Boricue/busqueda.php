<?php 

require_once "conexion.php";
$tabla="";
$consulta=" SELECT * FROM trabajos LIMIT 100";
$termino= "";
if(isset($_POST['trabajos']))
{
	$termino=$conexion->real_escape_string($_POST['trabajos']);
	$consulta="SELECT * FROM trabajos WHERE 
	titulo LIKE '%".$termino."%' OR
	salario LIKE '%".$termino."%' OR
	empresa LIKE '%".$termino."%' OR
	horario LIKE '%".$termino."%'";
}
$consultaBD=$conexion->query($consulta);
if($consultaBD->num_rows>=1){
	echo "
	<table class='responsive-table table table-hover table-bordered'>
	<thead>
	<tbody>";
	while($fila=$consultaBD->fetch_array(MYSQLI_ASSOC)){
		echo "<tr>
		<td>".$fila['titulo']."</td>	
		<td>".$fila['salario']."</td>
		<td>".$fila['empresa']."</td>
		<td>$ ".$fila['horario']."</td>
		<td>$ ".$fila['departamento']."</td>
		<td>$ ".$fila['ciudad']."</td>	
		<td>$ ".$fila['descripcion']."</td>
		<td>".$fila['requerimientos']."</td>
		<td>".$fila['contactos']."</td>
		</tr>";
	}
	echo "</tbody>
	</table>";
}else{
	echo "<center><h4>No hemos encontrado ningun registro con la palabra "."<strong class='text-uppercase'>".$termino."</strong><h4><center>";
}
?>