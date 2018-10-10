
/* #1 - npm install para descargar los paquetes...
  npm install express
  npm install socket.io --save
*/

// librerias
var express = require('express');               //npm install express
var fileUpload = require('express-fileupload'); //npm install --save express-fileupload
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 3000;

// variable que controla Express
var app = express();
app.use(fileUpload());
app.use(express.static('public'));

//Get
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('upload_file_srv', function(pFiles){
    var MsjProceso = "";
    var vContadorProceso = 0;
    //socket.username = user;
    /**/
    if (!pFiles){
      MsjProceso = "No se subio ningun archivo.";
      //return res.status(400).send(MsjProceso);
      console.log(MsjProceso);
      return;
    }

    let upFile = pFiles[0]; //agarra el archivo de pantalla.
    console.log("nombre del archivo es "+pFiles[0].name + ", y el tamanio es " + pFiles[0].size + "..");
    upFile.mv('public/'+pFiles[0].name, function(err){ //Mueve el archivo a la carpeta deseada.
        if (err){
          MsjProceso = "Ocurrio un error al cargar el archivo " + err + "..";
          console.log(MsjProceso);
            //return res.status(500).send(err);
            return;
        }
        MsjProceso ="Archivo se subio con exito";
        console.log(MsjProceso);
        //res.send(MsjProceso);
        return;
    });

    console.log(pFiles[0].name); //imprime el nombre del archivo
    /**/
    io.emit('upload_file_response', pFiles.length, MsjProceso);
  });
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});
