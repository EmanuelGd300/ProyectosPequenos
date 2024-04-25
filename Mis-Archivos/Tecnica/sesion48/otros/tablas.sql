CRUD
___________
Create
Read
Update
Delete

------------
read = lectura

select nombre, telefono 
from datosbasicos1

select codigo, nombre, telefono, direccion
from datosbasicos1

select *
from datosbasicos1

select *
from undecimo
where precio < 1000;

-----------------------------

select ID_MUESTREO,FECHA,TIPO_SITIO,ANCHO_SITIO,
ALTO_TOTAL,PRIMERAS_RAMAS,ALT_COPA,CALIDAD,
CONDICION,DIFICULTAD,ESTADO_MADUREZ,RAICES,
ESPINA,OBSTRUCCION_VEHICULAR,FRUTOS_CARNOSOS

from muestreo

where OBSTRUCCION_VEHICULAR != "";

1: que quiero ver  select
2: de donde sacar  from
3: cual condicion  where

--------------------------

select CODIGO,DESCRIPCION,DIRECCION,
TELEFONO,FAX,EMAIL,PRESENTACION,URL,
CELULAR,NIVEL,TIPO,NUMERO_PRODUCCTOS,
HORA_APERTURA,HORA_CIERRE,DUEÑO
from farmacia
where DUEÑO = "juan";