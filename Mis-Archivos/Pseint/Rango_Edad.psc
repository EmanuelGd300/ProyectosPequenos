Algoritmo Rango_Edad
	Definir edad como Numerico
	Escribir "Ingrese la edad : ";
	Leer edad;
	Si (edad < 18) Entonces
		Escribir "Es menor de edad";
	SiNo
		Si (edad < 60) Entonces
			Escribir "Es mayor de edad";
		SiNo
			Escribir "Es adulto mayor";
		FinSi
	Finsi
FinAlgoritmo
