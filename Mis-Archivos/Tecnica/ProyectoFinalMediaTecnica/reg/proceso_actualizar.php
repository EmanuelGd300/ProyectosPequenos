<?php
	include("conexion.php");

	$id = $_REQUEST['id'];
	$actualiza = $_POST['actualiza'];
	


	$query = "UPDATE orders SET actualiza='$actualiza' WHERE id = '$id' ";
	$resultado = $conexion->query($query);

	if($resultado){
		
		header("location: index.html");
	}
		else
		{

			echo "No se modificó";			
		}
	
?>