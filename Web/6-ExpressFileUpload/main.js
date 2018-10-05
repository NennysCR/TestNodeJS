/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: juan.zamora@nerdyne.com

    Ejemplo 6: Subir un archivo al servidor
*/

// librerias
var express = require('express');
var fileUpload = require('express-fileupload');

// variable que controla Express
var app = express();
app.use(fileUpload());
app.use(express.static('Uploads'));

// GET
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

// POST
app.post('/file_upload2',  function (req, res) {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  if (!req.files)
    return res.status(400).send('No existe archivo para la carga.');
    
  let sampleFile = req.files.archivo;

  // Use the mv() method to place the file somewhere on your server
  /*sampleFile.mv('/Users/d_yen/Downloads/BORRAR/filename.jpg', function(err) {*/
  sampleFile.mv('Uploads/Sakura.jpg', function(err) {
      if (err)
        return res.status(500).send(err);

      res.send('Archivo cargado!');
    });

});


// Inicia el server...
var server = app.listen(8081, function () {
  console.log("Aplicacion activa en 8081");

});
