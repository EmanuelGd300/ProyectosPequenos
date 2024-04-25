<?php
/**
 	--------------------------
	Gracias a: Obed Alvarado
	Web: obedalvarado.pw
	Mail: info@obedalvarado.pw
	----------------------------
 
*/
class database{
	private $host="localhost";
	private $user="root";
	private $pass="";
	private $db="asem";
	public $counter;
	
	public  function conectar(){
		$conexion = new mysqli($this->host, $this->user, $this->pass, $this->db);
		$conexion->query("SET NAMES 'utf8'");
		return $conexion;
	}
}
?>