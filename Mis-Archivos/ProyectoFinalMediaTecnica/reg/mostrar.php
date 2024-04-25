<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Datos Ok en Sofia Plus</title>


	<link href="tablecloth/tablecloth.css" rel="stylesheet" type="text/css" media="screen" />
	<script type="text/javascript" src="tablecloth/tablecloth.js"></script>


	<style>

	body{
		margin:0;
		padding:0;
		background:#ffffff;
		font:70% Arial, Helvetica, sans-serif; 
		color:#555;
		line-height:150%;
		text-align:left;
	}
	a{
		text-decoration:none;
		color:#057fac;
	}
	tr:hover{
		text-decoration:none;
		color:#999;
	}
	h1{
		font-size:140%;
		margin:0 20px;
		line-height:80px;	
	}
	h2{
		font-size:120%;
	}
	#container{
		margin:0 auto;
		width:900px;
		background:#fff;
		padding-bottom:20px;
	}
	#content{margin:0 20px;}
	p.sig{	
		margin:0 auto;
		width:800px;
		padding:1em 0;
	}
	form{
		margin:1em 0;
		padding:.2em 20px;
		background:#eee;
	}
	</style>

</head></br></br></br>
<body>
    
    <div id="container">
	<center><h1>Resumen por instructor - Aprendices con datos actualizados en Sofia Plus</h1></center>
	
	<div id="content">
		
<center>
    <table cellspacing="0" cellpadding="0">

		
			<thead>
				<tr>
				    <th><center>Instructor</center></th>
					<th><center>Municipio</center></th>
					<th><center>I.E</center></th>
					<th><center>Programa</center></th>
					<th><center>Ficha</center></th>
					<th><center>Datos Ok</center></th>
					<th><center>Aprendices</center></th>
				</tr>
			</thead>
			<tbody>
				<?php
					include("conexion.php");
								$query = "SELECT profe,mpio, institucion, programa, location, actualiza, status, COUNT(actualiza)  FROM orders GROUP BY profe,mpio, institucion, programa, location, actualiza, status HAVING status='Formacion' ORDER BY profe";

					$resultado = $conexion->query($query);
					$cuenta = 0;
					while ($row = $resultado->fetch_assoc()) {
				?>		
					<tr>
					    <td><?php echo $row['profe'];?></td>
					    <td><?php echo $row['mpio'];?></td>
					    <td><?php echo $row['institucion'];?></td>
					    <td><?php echo $row['programa'];?></td>
						<td><?php echo $row['location'];?></td>
						<td><?php echo $row['actualiza'];?></td>
						<td><center><?php echo $row['COUNT(actualiza)'];?></center></td>
					</tr>
				<?php
			$cuenta +=$row['COUNT(actualiza)'];
					}
				echo "Aprendices en Formacion: " .$cuenta;
				?>

				
			</tbody>
		</table>
	</center>

</body>
</html>