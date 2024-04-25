Algoritmo vector_edades
	Definir edad Como Entero

	Escribir "Determine la longitud del vector";
	Leer n;
	
	Dimension VecEdades[n]
	
	Para i = 0 Hasta n-1 con paso 1 hacer 
		Escribir "Ingrese la edad : ";
		Leer edad //Podria ser tambien leer VecEdades[i]//
		
		VecEdades[i] = edad 
				
	FinPara
	
	sumEdad = sumEdad + edad;
	promEdad = sumEdad / n
	
	Escribir "El promedio de las"  n "edades es" promEdad; 
FinAlgoritmo
