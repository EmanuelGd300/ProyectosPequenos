<?php

include_once 'source/session.php';

?>

<!DOCTYPE html>
<html lang="es-ES">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="UTF-8">
	<link rel="stylesheet" href="css/diseño2.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="shortcut icon" href="images/icono2.png">
	<title>LaboralPlace</title>
</head>
<body background="images/undraw_work_time_lhoj.svg">
	<?php if(!isset($_SESSION['username'])): header("location: logout.php");?>

	<?php else: ?>

	<?php endif	?>
	<center>
	<?php echo "<h5> Bienvenido " .$_SESSION['username'],  
	", esta es la pantalla de inicio de LaboralPlace. <h5>" ?>
	<h6><a href="index.html">Entrar<h6>
	<h6><a href="logout.php">Salir<h6>
	</center>
</body>
</html>