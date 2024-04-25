<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Modificar estado</title>


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
	a:hover{
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
		width:480px;
		background:#fff;
		padding-bottom:20px;
	}
	#content{margin:0 20px;}
	p.sig{	
		margin:0 auto;
		width:480px;
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
	    <center><h1>Datos actualizados en Sofia Plus</h1></center>
	    <center><h4>Recuerde que únicamente se puede ingresar:</h4></center>
	    <center><h4>Si - No.</h4></center>
		<center><h4>Se recomienda copiar y pegar.</h4></center>
	
	<div id="content">
		
<center>
    <table cellspacing="0" cellpadding="0">
			<thead>
				<tr>
					<th><center>Nombre</center></th>
					<th><center>Datos OK</center></th>
				</tr>
			</thead>
			<tbody>
			   	<?php
					include("conexion.php");
					$id = $_REQUEST['id'];	
					$query = "SELECT * FROM orders where id='$id'";
					$resultado = $conexion->query($query);
					$row = $resultado->fetch_assoc();
				?>
		
        <tr>
		<form action="proceso_actualizar.php?id=<?php echo $row['id']?>" method="POST" enctype="multipart/form-data">
		<td><center><input type="text" REQUIRED name="name" placeholder="Nombre.." value="<?php echo $row['name']?>"/></center> </td>
		<td><center><input type="text" REQUIRED name="actualiza" placeholder="Si..NO" value="<?php echo $row['actualiza']?>"/></center>  </td>
		</tr>
		<tr>
		<td colspan="2"><center><input type="submit" value="Enviar"/></center></td>
		</tr> 
		</form>
		
		
	</center>
</body>
		</table>	


</html>