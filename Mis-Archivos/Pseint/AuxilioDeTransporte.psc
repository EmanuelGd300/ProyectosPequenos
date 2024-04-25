Proceso  AuxilioDeTransporte
	Definir salario, at Como Entero
	Definir documento, nombre, apellido, edad, genero Como Caracter 
	
	AT = 117172 
	
	Mostrar "Ingrese su documento";
	Leer documento
	
	Mostrar "Ingrese su nombre";
	Leer nombre
	
	Mostrar "Ingrese su apellido";
	Leer apellido
	
	Mostrar "Ingrese su edad";
	Leer edad
	
	Mostrar "Ingrese su genero";
	Leer genero 
	
	Mostrar "Ingrese su salario";
	Leer salario
	
	Si (salario > 2000000) Entonces
		Mostrar "Usted no recibe auxilio de transporte"
	SiNo
		si (genero = masculino) y (salario < 2000000 ) Entonces 
			Mostrar "Usted recibe auxilio de transporte", AT;
		SiNo
			si (genero = femenino) y (salario < 2000000 ) Entonces 
				Mostrar "Usted recibe auxilio de transporte $", AT "Y $100.000 de bonificacion por ser mujer";
			FinSi
		FinSi
		
	FinSi
FinProceso
