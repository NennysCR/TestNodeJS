/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 8.2: Pipe Streams
*/

/// PIPING
var fs = require("fs");

// Create a readable stream
var readerStream1 = fs.createReadStream('a-wing.txt');
var readerStream2 = fs.createReadStream('j-type-327.txt');
console.log("Guardando con PiPe");
// Create a writable stream
var EndFile = fs.createWriteStream('Erick_Brenes-PIPE.txt');
// Se lee input.txt y se agrega la data a output.txt
readerStream1.pipe(EndFile);
readerStream2.pipe(EndFile);

//----------------------- APPEND FILE ---------------------------------------//

console.log("Guardando con Append File");
var data1 = fs.readFileSync('a-wing.txt');
var data2 = fs.readFileSync('j-type-327.txt');
fs.appendFile('Erick_Brenes-Append.txt', data1 + data2, function (err) {
  if (err) throw err;
  console.log('Updated!');
});

console.log("Archivos creados");
