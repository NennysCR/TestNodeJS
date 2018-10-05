/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 6.1: Buffers
*/

// Los buffers nos permiter trabajar con archivos binarios y streams

buffer = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buffer[i] = i + 97;
}

console.log( buffer.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buffer.toString('ascii',0,5));   // outputs: abcde
console.log( buffer.toString('utf8',0,5));    // outputs: abcde
console.log( buffer.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde
