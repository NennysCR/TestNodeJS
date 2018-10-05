/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Encadenamiento de Streams - Parte III
*/

/// Chaining
var fs = require("fs");
var zlib = require('zlib');

// Se comprime input.txt en input.zip

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.zip'));

console.log("Archivo Comprimido.");

// Todo: Intente descomprimir el archivo utilizando el siguiente codigo.
// Ejercicio
//Habilitar despues de comprimir...

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input2.txt'));

console.log("Archivo Descomprimido");
