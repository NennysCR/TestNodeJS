/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: juan.zamora@nerdyne.com

    Ejemplo 6: Subir un archivo al servidor
*/

// librerias
var express = require('express');               //npm install express
var fileUpload = require('express-fileupload'); //npm install --save express-fileupload

// variable que controla Express
var app = express();
app.use(fileUpload());
app.use(express.static('public'));

// GET
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})

// POST
app.post('/file_upload',  function (req, res) {
  if (!req.files)
    return res.status(400).send('No se subio ningun archivo.');

  let upFile = req.files.archivo; //agarra el archivo de pantalla.

  upFile.mv('public/'+req.files.archivo.name, function(err){ //Mueve el archivo a la carpeta deseada.
      if (err)
          return res.status(500).send(err);
      res.send('Archivo se subio con exito');
  });

  console.log(req.files.archivo.name); //imprime el nombre del archivo
});


// Inicia el server...
var server = app.listen(8081, function () {
  console.log("Aplicacion activa en 8081");

});
