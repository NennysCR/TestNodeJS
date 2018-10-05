/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: juan.zamora@nerdyne.com

    Ejemplo 3: Callback con SIN Bloqueo
    lectura de archivos
*/

// Libreria del FileSystem
var fs = require("fs");

// lectura asyncrona del archivo
// esto NO genera bloque ya que la llamada es asincrona.

fs.readFile('input2.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

fs.readFile('input1.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Fin de la ejecucion");
