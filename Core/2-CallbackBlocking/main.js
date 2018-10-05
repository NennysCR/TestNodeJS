/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 2: Callback con Bloqueo (ejecucion secuencial)
    lectura de archivos de texto
*/

// Libreria del FileSystem
var fs = require("fs");

// lectura syncrona del archivo
// esto genera un bloqueo.
var data2 = fs.readFileSync('input2.txt');
console.log(data2.toString());

var data1 = fs.readFileSync('input1.txt');
console.log(data1.toString());

console.log("Fin de la ejecucion");
