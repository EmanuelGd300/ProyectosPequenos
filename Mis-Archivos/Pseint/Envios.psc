Algoritmo Envios
	Definir NZ como entero 
	Definir CO,PE Como real
	
	Escribir "-----------------------------";
	Escribir " Zona ubicacion  costo/gramo";
	Escribir "-----------------------------";
	Escribir " 1 America del Norte $11.00";
	Escribir " 2 America central $10.00";
	Escribir " 3 America del sur $12.00 ";
	Escribir " 4 Europa $24.00";
	Escribir " 5 Asia $27.00";
	Escribir "-----------------------------";
	
	//
	Escribir "Seleccione numero de la zona entre 1 y 5 para el envio";
	Leer NZ;
	
	//se valida la zona entre 1 y 5
	si (NZ >= 1) Y (NZ <= 5) Entonces
		
		Escribir "Ingrese el peso del paquete a enviar, en gramos (g)";
		Leer PE;
		
		Si (PE > 5000) Entonces
			Escribir "El paquete no pudo ser enviado, excede el peso maximo permitido";
		SiNo
			//
			Segun NZ Hacer
				1: 
					CO = PE * 11.00;
				2:
					CO = PE * 10.00;
				3:
					CO = PE * 12.00;
				4: 
					CO = PE * 24.00;
				5:
					CO = PE * 27.00;
					
			FinSegun
			Escribir "El costo del envio es de : $", CO;
			
		FinSi
	SiNo
		Escribir "La zona no existe, y no puede darse el servicio"
	FinSi
FinAlgoritmo
