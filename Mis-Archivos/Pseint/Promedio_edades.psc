Algoritmo Promedio_edades
	Definir edad como Numero
	Repetir
		Escribir "Ingrese la edad :";
		Leer edad;
		sumEdad = sumEdad + edad;
		contEdad = contEdad + 1;
		Escribir "Desea ingresar otra edad s/n";
		repetir
			Leer Opc;
		Hasta Que (Opc = 's') o (Opc = 'S') o (Opc = 'n') o (Opc = 'N')
	Hasta Que (Opc = 'n') O (opc = 'N')
	promEdad = sumEdad/contEdad
	Escribir "El promedio de las edades ingresadas es : ", promEdad;
FinAlgoritmo
