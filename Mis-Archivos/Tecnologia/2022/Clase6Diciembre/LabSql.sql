--CONSULTAS--
--Muestre los salarios de los profesores ordenados por categoría.
SELECT `sal_prof` FROM `profesor` order by `sal_prof`

--Muestre los cursos cuyo valor sea mayor a $500.000.
SELECT * FROM `curso` WHERE `valor_curs`>'500000'

--Cuente el número de estudiantes cuya edad sea mayor a 22.
SELECT count(`doc_est`) FROM `estudiante` WHERE `edad_est`>'22'

--Muestre el nombre y la edad del estudiante más joven.
SELECT `nom_est`, min(`edad_est`) FROM `estudiante`

--Calcule el valor promedio de los cursos cuyas horas sean mayINNores a 40.
SELECT AVG(`valor_curs`) FROM curso WHERE `horas_curs`>'40'

--Obtener el sueldo promedio de los profesores de la categoría 1.
SELECT AVG(`sal_prof`) FROM `profesor` WHERE `cate_prof`='1'

--Muestre todos los campos de la tabla curso en orden ascendente según el valor.
Select * from curso order by `valor_curs` asc

--Muestre el nombre del profesor con menor sueldo.
SELECT `nom_prof`, min(`sal_prof`) FROM `profesor`

--Visualizar todos los estudiantes (código y nombre) que iniciaron cursos el 01/02/2011, del curso debe mostrarse el nombre, las horas y el valor.
SELECT estudiante.`doc_est`, estudiante.`nom_est`, estudiantexcurso.`fec_ini_estcur`, curso.`nom_curs`, curso.horas_curs, curso.valor_curs From estudiante,estudiantexcurso,curso where estudiantexcurso.`fec_ini_estcur`='2011-02-01'

--Visualice los profesores cuyo sueldo este entre $500.000 y $700.000.
SELECT * FROM `profesor` WHERE `sal_prof`>'500000' and `sal_prof`<'700000'

--Visualizar el nombre, apellido y dirección de todos aquellos clientes que hayan realizado un pedido el día 25 /02/2012.
SELECT cliente.nom_cli, cliente.ape_cli, cliente.dir_cli FROM cliente, pedido WHERE pedido.fec_ped='2012-02-25'

--Listar todos los pedidos realizados incluyendo el nombre del articulo.
SELECT pedido.id_ped, articulo.tit_art, pedido.id_cli_ped, pedido.fec_ped, pedido.val_ped FROM pedido, articulo WHere 1

--Visualizar los clientes que cumplen años en marzo.
SELECT * FROM `cliente` WHERE `mes_cum_cli`='Marzo'

--Visualizar los datos del pedido 1, incluyendo el nombre del cliente, la dirección del mismo, el nombre y el valor de los artículos que tiene dicho pedido.
SELECT cliente.nom_cli, cliente.dir_cli, articulo.tit_art,articulo.prec_art FROM cliente, articulo, pedido WHERE pedido.id_ped='1'

--Visualizar el nombre del cliente, la fecha y el valor del pedido más costoso.
SELECT MAX(pedido.val_ped), cliente.nom_cli,pedido.fec_ped, pedido.val_ped FROM cliente, pedido WHERE 1

--Mostrar cuantos artículos se tienen de cada editorial.
SELECT COUNT(`edi_art`) FROM `articulo` WHERE 1

--Mostrar los pedidos con los respectivos artículos (código, nombre, valor  y cantidad pedida).
SELECT articulo.id_art, articulo.tit_art,articulo.prec_art, articuloxpedido.can_art_artped FROM articulo, articuloxpedido WHERE 1

--Visualizar todos los clientes organizados por apellido.
SELECT * FROM `cliente` ORDER BY `ape_cli`

--Visualizar todos los artículos organizados por autor.
SELECT * FROM `articulo` ORDER by `aut_art`

--Visualizar los pedidos que se han realizado para el articulo con id 2, el listado debe mostrar el nombre y dirección del cliente, el respectivo número de pedido y la cantidad solicitada.
SELECT cliente.nom_cli, cliente.dir_cli, pedido.id_ped, articuloxpedido.can_art_artped FROM cliente, pedido, articulo, articuloxpedido WHERE articulo.id_art='2'

--Visualizar los datos de las empresas fundadas entre el año 1991 y 1998.
SELECT * FROM `compañia` WHERE `comañofun`>='1991' and `comañofun`<='1998'

--Listar los todos datos de los automotores cuya póliza expira en octubre  de 2013, este reporte debe visualizar la placa, el modelo, la marca,  número de pasajeros, cilindraje nombre de automotor, el valor de la  póliza y el valor asegurado.
/*SELECT automotores.autoplaca, automotores.automodelo, automotores.automarca, automotores.autonumpasajeros, automotores.autocilindraje, automotores.autotipo,aseguramientos.asecosto, aseguramientos.asevalorasegurado FROM aseguramientos, automotores WHERE `asefechaexpiracion`>'2013-08-31' and `asefechaexpiracion`<'2013-10-01'
*/
--Visualizar los datos de los incidentes ocurridos el 30 de septiembre de  2012, con su respectivo número de póliza, fecha de inicio de la póliza, valor asegurado y valor de la póliza.
SELECT aseguramientos.asecodigo,aseguramientos.asefechainicio,aseguramientos.asevalorasegurado, aseguramientos.asecosto FROM incidentes, aseguramientos WHERE `incifecha`='2012-09-30'

--Visualizar los datos de los incidentes que han tenido un(1) herido, este  reporte debe visualizar la placa del automotor, con los respectivos datos de la póliza como son fecha de inicio, valor, estado y valor asegurado.
SELECT automotores.autoplaca,aseguramientos.asefechainicio, aseguramientos.asecosto,aseguramientos.aseestado,aseguramientos.asevalorasegurado FROM incidentes,automotores, aseguramientos WHERE `incicantheridos`='1'

--Visualizar todos los datos de la póliza más costosa.
SELECT * FROM `aseguramientos` where 1 ORDER BY `asevalorasegurado` desc

--Visualizar los incidentes con el mínimo número de autos involucrados,  de este incidente visualizar el estado de la póliza y el valor asegurado.
SELECT MIN(`incicanautosinvolucrados`),aseguramientos.aseestado,aseguramientos.asevalorasegurado FROM aseguramientos,incidentes WHERE 1

--Visualizar los incidentes del vehículo con placas " FLL420", este reporte  debe visualizar la fecha, el lugar, la cantidad de heridos del incidente, la fecha de inicio la de expiración de la póliza y el valor asegurado.
SELECT incidentes.incifecha, incidentes.incilugar, incidentes.incicantheridos, aseguramientos.asefechaexpiracion, aseguramientos.asevalorasegurado FROM aseguramientos, incidentes WHERE incidentes.inciplaca='FLL420'

--Visualizar los datos de la empresa con nit 899999999-5.
SELECT * FROM `compañia` WHERE `comnit`='899999999-5'

--Visualizar los datos de la póliza cuyo valor asegurado es el más costoso, este reporte además de visualizar todos los datos de la póliza,  debe presentar todos los datos del vehículo que tiene dicha póliza.
SELECT MAX(aseguramientos.asevalorasegurado), aseguramientos.asecodigo, aseguramientos.asefechainicio, aseguramientos.asefechaexpiracion, aseguramientos.asevalorasegurado,aseguramientos.aseestado, aseguramientos.asecosto, automotores.autoplaca, automotores.automarca, automotores.autotipo, automotores.automodelo,automotores.autopasajeros,automotores.autocilindraje, automotores.autonumchasis FROM aseguramientos, automotores WHERE 1

--Visualizar los datos de las pólizas de los automotores tipo 1, este  reporte debe incluir placa, marca, modelo, cilindraje del vehículo junto  con la fecha de inicio, de finalización y estado de la póliza.
SELECT automotores.autoplaca, automotores.automarca, automotores.autocilindraje, aseguramientos.asefechainicio, aseguramientos.asefechaexpiracion, aseguramientos.aseestado FROM automotores, aseguramientos WHERE automotores.autotipo=1