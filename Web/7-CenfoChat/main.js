var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var os = require('os');
var randomColor = require('randomcolor'); // import the script

var port = process.env.PORT || 3000;

var clients = [];
var clientsColors = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
<<<<<<< HEAD
  console.log("socket.id " + socket.id);
  //Asign the client and the color
  clients[socket.id] = socket.id;
  clientsColors[socket.id] = getRandomColor();

  socket.on('chat message', function(usr, msg){
    socket.txtUser = usr;
    io.emit('chat message2', socket.txtUser, msg, clientsColors[socket.id]);
  });
=======
  console.log('a user connected');
  // #2 - Generar Eveto de broadcast
  // ESCUCHAR EVENTO "chat message"
  // DESPUES VUELVA A EMITIR EL MENSAJE (broadcast)
>>>>>>> c7521d14eae787cc3f0b68f3ce05751db5cee88c


  socket.on('disconnect', function(){
    deleteFromArray(clients, socket.id);
    deleteFromArray(clientsColors, socket.id);
  });
});

function deleteFromArray(my_array, element) {
  position = my_array.indexOf(element);
  my_array.splice(position, 1);
}

//listener
http.listen(port, function(){
  console.log('listening on *:' + port);
});

//genera el  color automatico
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
