Algoritmo Mayoromenordeedad
	Definir edad como Entero 
	
	Mostrar "Ingrese su edad:";
	Leer edad;
	
	si(edad < 1) Entonces
		Mostrar "edad no valida";
	SiNo    
		Si (edad < 18) Entonces
			Mostrar "Menor de edad";
		SiNo
			Si (edad <=59) Entonces
				Mostrar "Mayor de edad";
			SiNo
				Mostrar "Adulto Mayor";
			FinSi
		Fin si
	Fin si
FinAlgoritmo
