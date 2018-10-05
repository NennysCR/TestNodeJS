/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 7.1: Read/Write Stream
*/


// 1 - READ Stream
var fs = require("fs");
// va a almacenar la informacion del stream
var data = '';

// se creat el stream de lectura
var readerStream = fs.createReadStream('input.txt');

// se define el encoding a UTF8
readerStream.setEncoding('UTF8');

// Se crean los metodos non-blocking para data, end y error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

// 2 - WRITE Stream
var fs = require("fs");
var data = 'Stream Creado en Universidad Cenfotec MSEG-10';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");
