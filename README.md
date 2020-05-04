
<img  align="left" width="150" style="float: left;" src="https://www.upm.es/sfs/Rectorado/Gabinete%20del%20Rector/Logos/UPM/CEI/LOGOTIPO%20leyenda%20color%20JPG%20p.png">
<img  align="right" width="60" style="float: right;" src="http://www.dit.upm.es/figures/logos/ditupm-big.gif">

<br/><br/><br/>

# P4_SQL_BBDDR

## Objetivos

 * Familiarizarse con el uso del lenguaje SQL.
 * Familiarizarse con la gestión de sistemas de Bases de Datos relacionales, en concreto con MySQL

## Descripción de la práctica

Esta práctica consiste en el uso del lenguaje SQL a través del SGBD MySQL para examinar una base de datos, determinar su estructura y realizar una serie de consultas y modificaciones. 

Para la realización de esta práctica es necesario tener instalado MySQL así como el software necesario para la utilización de la herramienta autocorector (git, nodejs y el paquete autocorector), ya utiliada previamente en otras prácticas de la asignatura. 

## Configuración previa e importación de la base de datos

El proyecto debe clonarse en el ordenador desde el que se está trabajando:

```
$ git clone https://github.com/aalonsog/P4_SQL_BBDDR
```
A continuación se debe acceder al directorio donde se encuentra el dump de la base de datos sobre la que se va a trabajar para proceder a su importación ejecutando las siguientes órdenes:

```
$ cd P4_SQL_BBDDR/dump
$ mysql -u <nombre_usuario_mysql> -p -t < employees.sql
```
Una vez importados los datos conectarse a mysql y comprobar que se ha creado una nueva base de datos llamada "employees".

## Actividades a desarrollar

0. Examinar la base de datos importada y dibujar un diagrama con las diferentes tablas y las relaciones entre ellas (no evaluable). 
1. 

## Prueba de la práctica 

Para ayudar al desarrollo, se provee una herramienta de autocorrección que prueba las distintas funcionalidades que se piden en el enunciado. Para utilizar esta herramienta debes tener node.js (y npm) ([https://nodejs.org/es/](https://nodejs.org/es/)) y Git instalados. 

Para instalar y hacer uso de la [herramienta de autocorrección](https://www.npmjs.com/package/autocorector) en el ordenador local, ejecuta los siguientes comandos en el directorio del proyecto:

```
$ npm install -g autocorector     ## Instala el programa de test
$ autocorector                    ## Pasa los tests al fichero a entregar
............................      ## en el directorio de trabajo
... (resultado de los tests)
```
También se puede instalar como paquete local, en el caso de que no se dispongas de permisos en el ordenador desde el que estás trabajando:
```
$ npm install autocorector     ## Instala el programa de test
$ npx autocorector             ## Pasa los tests al fichero a entregar
............................   ## en el directorio de trabajo
... (resultado de los tests)
```

Se puede pasar la herramienta de autocorrección tantas veces como se desee sin ninguna repercusión en la calificación.

## Instrucciones para la Entrega y Evaluación.

Una vez satisfecho con su calificación, el alumno puede subir su entrega a Moodle con el siguiente comando:
```
$ autocorector --upload
```
o, si se ha instalado como paquete local:
```
$ npx autocorector --upload
```

La herramienta de autocorrección preguntará por el correo del alumno y el token de Moodle. En el enlace [https://www.npmjs.com/package/autocorector](https://www.npmjs.com/package/autocorector) se proveen instrucciones para encontrar dicho token.

