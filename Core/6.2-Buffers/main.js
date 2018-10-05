/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    6.2 JSON ASCII Buffer
*/

// Los buffers nos permiter trabajar con archivos binarios y streams
// regresa cadena ASCII
// https://nodejs.org/api/buffer.html#buffer_buf_tojson

var buffer = new Buffer('Universidad Cenfotec');
var json = buffer.toJSON(buffer);

console.log(json);
