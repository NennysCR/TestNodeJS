/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 5: Event Emitter 2
    Agregar y remover eventos.
*/

// Muchos objetos de Node ejecutan eventos por default
// net.Server emite un evento cada vez que existe una conexion
// fs.readStream emite un evento cuando un archivo se abre...


// libreria para gestionar eventos
var events = require('events');

// se crea un emisor de eventos
var eventEmitter = new events.EventEmitter();

// evento #1
var eventA = function eventA() {
   console.log('Event A executed.');
}

// evento #2
var eventB = function eventB() {
  console.log('Event B executed.');
}

// Se establecen los bindings...
eventEmitter.addListener('connection', eventA);
eventEmitter.on('connection', eventB);

// cuenta la cantidad de eventos anidados para connection
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " available events for connection...");

///// Ejecutamos el evento connection /////
eventEmitter.emit('connection');

// vamos a remover el eventA
eventEmitter.removeListener('connection', eventA);
console.log('Event A has been removed');

///// Ejecutamos nuevamente el evento connection /////
eventEmitter.emit('connection');

// cuenta la cantidad de eventos anidados para connection
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " available events for connection...");
