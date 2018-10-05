/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 8.2: Pipe Streams
*/

/// PIPING
var fs = require("fs");

// Create a readable stream
//var readerStream = fs.createReadStream('a-wing.txt');
var readerStreamB = fs.createReadStream('j-type-327.txt');
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Se lee input.txt y se agrega la data a output.txt
readerStreamB.pipe(writerStream);
//readerStream.pipe(writerStream);

readerStreamB.on('end',function(){
  console.log("Termino archivo B.");
  //Cuando termina de copiar un archivo , pasa al siguiente.
  var dataA = fs.readFileSync('a-wing.txt');
  //readerStream.pipe(writerStream); Este no sirvio porq da q el wirter ya esta cerrado
  fs.appendFile('output.txt', dataA, (err) => {
    if (err) throw err;
    console.log('Termino el archivo A');
  });
});

readerStreamB.on('error', function(err){
   console.log("Stream B: " + err.stack);
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");
