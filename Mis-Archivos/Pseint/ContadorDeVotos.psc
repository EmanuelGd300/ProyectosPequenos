
// Analisis: Se debe realizar un aplicativo que analice la cantidad de votos para los diferentes candidatos.
// El usuario podrá seleccionar el candidato y el aplicativo sumará los votos para el respectivo candidato.
// Se le ofrecerá al usuario la posibilidad de votar por otro candidato, hasta que el usuario ingrese que no votará más.
// Es entonces cuando se arrojaran los resultados de la votación, la cantidad de votos para cada candidato, y el candidato ganador.

Algoritmo ContadorDeVotos
	Definir voto como numerico 
	
	Escribir " 1 Candidato Juan";
	Escribir " 2 Candidato Pedro";
	Escribir " 3 Candidato Luisa";
	Escribir " 4 Candidato Hugo";
	Escribir " 5 Voto en blanco";
	
	Escribir "Seleccione el candidato a votar";
	Leer voto;
	
	si voto = 1 Entonces
		contvoto1 = contvoto1 + voto;
		Escribir "¿Desea ingresar otro voto? s/n";
		repetir
			Repetir
				Leer Opc;
			Hasta Que (Opc = 's') o (Opc = 'S') o (Opc = 'n') o (Opc = 'N')
		Hasta Que (Opc = 'n') O (opc = 'N')
	SiNo
		si voto = 2 Entonces
			contvoto2 = contvoto2 + voto;
		SiNo
			si voto = 3 Entonces
				contvoto3 = contvoto3 + voto;
			SiNo
				si voto = 4 Entonces
					contvoto4 = contvoto4 + voto;
					
				SiNo
					si voto = 5 Entonces
						contvoto5 = contvoto3 + voto;
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi 
	Escribir "La cantidad de voto para el candidato 1 Juan fueron:", contvoto1;
	Escribir "La cantidad de voto para el candidato 2 Pedro fueron:", contvoto2;
	Escribir "La cantidad de voto para el candidato 3 Luisa fueron:", contvoto3;
	Escribir"La cantidad de voto para el candidato 4 Hugo fueron:", contvoto4;
	Escribir"La cantidad de voto para el candidato 5 Juan fueron:", contvoto5;
	
FinAlgoritmo

