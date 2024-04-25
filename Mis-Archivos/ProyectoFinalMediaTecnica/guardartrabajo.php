<?php
include("conexion.php");
	$salario = $_POST['salario'];
	$titulo = $_POST['titulo'];
	$empresa = $_POST['empresa'];
	$contactos =$_POST['contactos'];
	$horario = $$_POST['horario'];
	$departamento =$_POST['departamento'];
	$ciudad =$_POST['ciudad'];
	$descripcion =$_POST['descripcion'];
	$requerimientos =$_POST['requerimientos'];

	$query="INSERT INTO `trabajos`(`salario`, `titulo`, `empresa`, `contactos`, `horario`, `departamento`, `ciudad`, `descripcion`, `requerimientos`) 
	VALUES ('$salario', '$titulo','$empresa', '$contactos', '$horario','$departamento', '$ciudad', '$descripcion', '$requerimientos')";
		//$query = "SELECT `salario`, `titulo`, `empresa`, `contactos`, `horario`, `departamento`, `ciudad`, `descripcion`, `requerimientos` FROM `trabajos` WHERE 1;
		$resultado = $conexion->query($query);

		if($resultado){
		header("location: publicado.html");
	}
	else
		echo "No se insertaron los datos";
?>