/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 4: Event Loop
    Como Node gestiona eventos en el servidor
*/

// Node es una tecnologia basada en eventos basado en el siguiente flujo
// 1 - EventEmitter (Emite un evento)
// 2 - Events
// 3 - Event Loop (Escucha eventos)
// 4 - Event Handler

// libreria para gestionar eventos
var events = require('events');

// se crea un emisor de eventos
var eventEmitter = new events.EventEmitter();

// evento de conexion
var connectHandler = function connected(){
  console.log('Conexion iniciada...');

  // se dispara un evento de conexion exitosa
  eventEmitter.emit('connection_executed');
}

// se registra el evento 'connection' y se asigna el handler.
eventEmitter.on('connection', connectHandler);

eventEmitter.on('connection_executed', function(){
  console.log('Se ha conectato exitosamente!');
});

// ahora se ejecuta el evento de conexion cuando se ejecute main.js
eventEmitter.emit('connection');

console.log('Fin del Programa');
