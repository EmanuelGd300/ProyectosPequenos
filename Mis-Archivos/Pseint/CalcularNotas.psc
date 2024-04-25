Algoritmo CalcularNotas
	Definir Nota1, Nota2, Nota3, Nota4, NotaFinal Como Real
	Definir Nombre, Documento Como Caracter 
	
	Mostrar "Ingrese su nombre";
	Leer Nombre
	
	Mostrar "Ingrese su documento";
	Leer Documento
	
	Mostrar "Ingrese la Nota 1";
	Leer Nota1
	si(Nota1 < 0.0) Entonces
		Mostrar "Las notas deben ser entre 0.0 y 5.0";
	SiNo    
		Si (Nota1 > 5.0) Entonces
			Mostrar "Las notas deben ser entre 0.0 y 5.0";
		SiNo
			Mostrar "Ingrese la Nota 2";
			Leer Nota2
			si(Nota2 > 5.0) Entonces
				Mostrar "Las notas deben ser entre 0.0 y 5.0";
			SiNo    
				Si (Nota2 < 0.0) Entonces
					Mostrar "Las notas deben ser entre 0.0 y 5.0";
				SiNo
					Mostrar "Ingrese la Nota 3";
					Leer Nota3
					si(Nota3 > 5.0) Entonces
						Mostrar "Las notas deben ser entre 0.0 y 5.0";
					SiNo    
						Si (Nota3 < 0.0) Entonces
							Mostrar "Las notas deben ser entre 0.0 y 5.0";
						SiNo
							Mostrar "Ingrese la Nota 4";
							Leer Nota4
							si(Nota4 > 5.0) Entonces
								Mostrar "Las notas deben ser entre 0.0 y 5.0";
							SiNo    
								Si (Nota4 < 0.0) Entonces
									Mostrar "Las notas deben ser entre 0.0 y 5.0";
								SiNo
									NotaFinal= (Nota1+Nota2+Nota3+Nota4)/4;
									
									Si (NotaFinal > 3.5) Entonces
										Mostrar "El estudiante"    Nombre    "con documento"    documento    "Aprobo";
									SiNo
										Si (NotaFinal < 3.5) Entonces
											Mostrar "El estudiante"   Nombre    "con documento"    documento   "Reprobo"
										FinSi
									FinSi
								FinSi
							FinSi
						Fin si
					Fin si
				Fin si
			Fin si
		Fin si
	Fin si
FinAlgoritmo












