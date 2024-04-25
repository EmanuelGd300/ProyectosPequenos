Algoritmo NumeroMayorQue
	Definir Num1, Num2 Como Entero
	
	Mostrar "Ingrese el primer número";
	Leer Num1
	
	Mostrar "Ingrese el segundo número";
	Leer Num2
	
	Si (Num1 = Num2) Entonces
		Mostrar "No se puede determinar cual número es mayor debido a que ambos numeros son iguales";
	SiNo 
		Si (Num1 > Num2) Entonces
		Mostrar "El primer número ingresado es el mayor";
	SiNo
		Mostrar "El segundo número ingresado es el mayor";
	FinSi
FinSi
FinAlgoritmo
