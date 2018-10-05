
/* #1 - npm install para descargar los paquetes...
  npm install express
  npm install socket.io --save
*/

// libreriuas
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg,user){
    socket.username = user;
    io.emit('chat message2', user + ": " + msg, user);
  });
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});
