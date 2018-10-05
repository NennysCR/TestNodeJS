/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 2: Intro a ExpressJS
*/

//1.  npm install express

// libreria de express JS
var express = require('express');

// variable que controla Express
var app = express();

app.get('/', function (req, res) {
   res.send('Mi Primera Aplicacion con NodeJS y ExpressJS! (get)');
});

app.get('/usuarios', function (req, res) {
   console.log("Obtiene la lista de usuarios");
   res.send('Lista de Usuarios... (get)');
});

app.post('/', function (req, res) {
   res.send('Mi Primera Aplicacion con NodeJS y ExpressJS! (post)');
   res.send('Hello POST');
})

app.delete('/del_user', function (req, res) {
   res.send('El usuario ha sido eliminado');
})

var server = app.listen(8081, function () {
  // Inicie El Server en e puerto 8081
  console.log('Express app en el puerto 8081');

})
