
/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: juan.zamora@nerdyne.com

    Ejemplo 6: Subir un archivo al servidor
*/

// librerias
var express = require('express');               //npm install express
var fileUpload = require('express-fileupload'); //npm install --save express-fileupload
                                                //npm install mv --save-dev //se usa para mover archivos

// variable que controla Express
var app = express();
app.use(fileUpload());
app.use(express.static('public'));
const SocketIOFile = require('socket.io-file');

//librerias
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8081;

/*Gets con los JSs*/
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/', (req, res, next) => {
    return res.sendFile(__dirname + '/client/index.html');
});
/*app.get('/app.js', (req, res, next) => {
    return res.sendFile(__dirname + '/client/app.js');
});*/
app.get('/socket.io.js', (req, res, next) => {
    return res.sendFile(__dirname + '/node_modules/socket.io-client/dist/socket.io.js');
});
app.get('/socket.io-file-client.js', (req, res, next) => {
    return res.sendFile(__dirname + '/node_modules/socket.io-file-client/socket.io-file-client.js');
});
/*Fin gets con los JSs*/

io.on('connection', function(socket){
  var uploader = new SocketIOFile(socket, {
			// uploadDir: {			// multiple directories
			// 	music: 'data/music',
			// 	document: 'data/document'
			// },
			uploadDir: 'uploads',							// simple directory
			// accepts: ['audio/mpeg', 'audio/mp3'],		// chrome and some of browsers checking mp3 as 'audio/mp3', not 'audio/mpeg'
			// maxFileSize: 4194304, 						// 4 MB. default is undefined(no limit)
			chunkSize: 10240,							// default is 10240(1KB)
			transmissionDelay: 0,						// delay of each transmission, higher value saves more cpu resources, lower upload speed. default is 0(no delay)
			overwrite: false, 							// overwrite file if exists, default is true.
			// rename: function(filename) {
			// 	var split = filename.split('.');	// split filename by .(extension)
			// 	var fname = split[0];	// filename without extension
			// 	var ext = split[1];

			// 	return `${fname}_${count++}.${ext}`;
			// }
			//rename: 'MyMusic.mp3'
		});
  uploader.on('start', (fileInfo) => {
    console.log('Inicia carga');
    console.log(fileInfo);
  });
  uploader.on('stream', (fileInfo) => {
    //console.log(`${fileInfo.wrote} / ${fileInfo.size} byte(s)`);
    var vPorcCarga = ((fileInfo.wrote/fileInfo.size)*100);
    console.log("Porcentaje de carga: " + vPorcCarga);
    io.emit('StreamResponse', vPorcCarga);
    //Hago un llamado a la interfaz para enviarle el porcentaje de carga
  });
  uploader.on('complete', (fileInfo) => {
    console.log('Carga completa');
    console.log(fileInfo);
    io.emit('clean_field');
  });
  uploader.on('error', (err) => {
    console.log('Error!', err);
  });
  uploader.on('abort', (fileInfo) => {
    console.log('Proceso abortado: ', fileInfo);
  });
});

http.listen(port, function(){
  console.log('Escuchando Puerto *:' + port);
});
