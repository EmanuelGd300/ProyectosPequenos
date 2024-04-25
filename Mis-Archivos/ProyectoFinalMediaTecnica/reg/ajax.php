<?php
$action = (isset($_REQUEST['action'])&& $_REQUEST['action'] !=NULL)?$_REQUEST['action']:'';
if($action == 'ajax'){
	
	include("clases/orders.php");
	$database=new orders();
	//Recibir variables enviadas
	$query=strip_tags($_REQUEST['query']);
	$location=strip_tags($_REQUEST['location']);
	$status=strip_tags($_REQUEST['status']);
	$per_page=intval($_REQUEST['per_page']);
	$tables="orders";
	$campos="*";
	//Variables de paginación
	$page = (isset($_REQUEST['page']) && !empty($_REQUEST['page']))?$_REQUEST['page']:1;
	$adjacents  = 4; //espacio entre páginas después del número de adyacentes
	$offset = ($page - 1) * $per_page;
	
	
	$search=array("query"=>$query,"location"=>$location,"status"=>$status,"per_page"=>$per_page,"offset"=>$offset);
	//consulta principal para recuperar los datos
	$datos=$database->getData($tables,$campos,$search);
	$countAll=$database->getCounter();
	$row = $countAll;
	
	if ($row>0){
		$numrows = $countAll;;
	} else {
		$numrows=0;
	}	
	$total_pages = ceil($numrows/$per_page);
	
	
	//Recorrer los datos recuperados

	if ($numrows>0){
		?>
	 	 <table class="table table-striped table-hover ">	
		<thead>
            <tr><center>	
                <th>Ficha</th>
<!--		    	<th>Municipio</th>	-->
		    	<th>I.E</th>
		    	<th>Programa</th>
		    	<th>Id</th>
				<th>Alumno</th>
                <th>Datos Ok</th>
         <!--       <th>Inicio</th>		-->				
			   
            </tr>
        </thead>
        <tbody>
		<?php
		$finales=0;
		foreach ($datos as $key=>$row){
				$status_order=$row['status'];
				if ($status_order=='Formacion'){
					$class_css="text-success";
				} elseif ($status_order=='Retiro Voluntario'){
					$class_css="text-danger";
				} elseif ($status_order=='Cancelado'){
					$class_css="text-warning";
				} else {
					$class_css="";
				}
		?>
		<tr>
		    <td><?=$row['location'];?></td>
<!--		    <td><img height="44px" src="data:image/jpg;base64,<?php echo base64_encode($row['Imagen']); ?>"/></td>   -->
   <!--        <td><?=$row['mpio'];?></td>	-->
            <td><?=$row['institucion'];?></td>
            <td><?=$row['programa'];?></td>
             <td><?=$row['id'];?></td>
		    <td><?=$row['name'];?></a></td>
		     <td><?=$row['actualiza'];?></a></td>

	<!--		<td><a href="https://asemlasalada.co" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td> -->
			<th><a href="actualizar.php?id=<?php echo $row['id'];?>">Actualizar</th>

		</tr>
			<?php
			$finales++;
		}	
	?>
		</tbody>
		</table>
		<div class="clearfix">
			<?php 
				$inicios=$offset+1;
				$finales+=$inicios -1;
				echo '<div class="hint-text">Mostrando '.$inicios.' al '.$finales.' de '.$numrows.' registros</div>';
				
				
				include 'clases/pagination.php'; //include pagination class
				$pagination=new Pagination($page, $total_pages, $adjacents);
				echo $pagination->paginate();

			?>
        </div>
	<?php
	}
}
?>