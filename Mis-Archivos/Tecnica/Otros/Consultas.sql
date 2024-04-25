1. Mostrar los datos completos de los empleados.

Select *;
From empleados;

2. Listar el nombre de todos los hombre.

Select NomEmp;
From empleados;
Where SexEmp = "M";

3. Mostrar los datos de los empleados con cargo 'Secretaria'.;

Select *;
From empleados;
Where CargoE = "Secretaria";

4. Mostrar el nombre y salario de los empleados.

Select NomEmp, SalEmp;
From empleados;

5. Mostrar los datos de los empleados vendedores.

Select *;
From empleados;
Where CargoE = "Vendedor";

6. Mostrar los salario de las mujeres.

Select SalEmp;
From empleados;
Where SexEmp = "F";

7. Mostrar el nombre y cargo de todos los empleados.

Select NomEmp, CargoE;
From empleados;

8. Mostrar los datos completos de aquellos que ganan mas del SMLV - 2020.

Select * ;
From empleados;
Where salEmp > "877802";

9. Mostrar la comision de todos los codDepto que sean 2000.

Select ComisionE;
From empleados;
Where CodDepto = "2000";

10. Mostrar el nombre de los empleados cuya comision sea superio al salario del empleado.

Select NomEmp;
From empleados;
Where ComisionE > SalEmp;