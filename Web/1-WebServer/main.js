/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 1: El Web Server con Node *NO EXPRESS*
*/

// libreria de servidor http
var http = require('http');
// libreria de acceso al file system
var fs = require('fs');
// libreria de gestion de rutas web
var url = require('url');

http.createServer( function (request, response) {

  // se obtiene el nombre del archivo del request
  var pathname = url.parse(request.url).pathname;

  // Se imprime el nombre del archivo en la consola
  console.log("Archivo " + pathname + " recibido.");

  // se hace lectura del archivo
  fs.readFile(pathname.substr(1), function (err, data) {
     if (err) {
        console.log(err);
        // HTTP Status: 404 : NOT FOUND
        // Content Type: text/plain
        response.writeHead(404, {'Content-Type': 'text/html'});
     }else{
        // Page found
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, {'Content-Type': 'text/html'});

        // Se responde con el contenido del archivo
        response.write(data.toString());
     }
     // Se envia la respuesta al cliente
     response.end();
  });

}).listen(8088);

console.log('Server ejecutandose en http://127.0.0.1:8088/');
