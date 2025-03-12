/*
Tipos de Streams en Node.js:
Streams de Lectura: Permiten leer datos de una fuente.
Streams de Escritura: Usados para escribir datos hacia un destino.
Streams de Doble Sentido: Permiten leer y escribir datos.    
 */

// El modulo fs sirve para interactuar con el sistema de archivos
const fs = require('fs')

let data = '';
const readerStream = fs.createReadStream('./memoria/input.txt');

readerStream.setEncoding('UTF-8');

readerStream.on('data', function(chuck){
    data += chuck;
});

readerStream.on('end', function(){
    console.log(data);
})

readerStream.on('error', function(err){
    console.log(err.stack);
});

/*
Crear un stream de lectura: Usamos fs.createReadStream.
Escuchar eventos: Responder a la llegada de datos, finalizar la lectura y manejar errores.
Procesar los datos por paquetes: Acumulamos los datos leídos en trozos, típicamente para manejar archivos grandes.
 */

//Escribir en un archivo

const writeData = 'Escribiendo datos en un archivo de texto';

const writerStream = fs.createWriteStream('output.txt');

writerStream.write(writeData, 'UTF8');
writerStream.end();

writerStream.on('finish', function(){
    console.log('Escritura completada');
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

/*
Crear un stream de escritura: Con fs.createWriteStream.
Escribir y finalizar: Usamos stream.write para escribir y stream.end para terminar.
Manejo de eventos: Detectamos cuando la escritura finaliza o si ocurre algún error.
 */

/*
    A menudo, es necesario transformar datos mientras fluyen de una fuente a un destino. Utiliza streams de transformación para aplicar operaciones de ajuste, como cambiar mayúsculas o filtrar datos.
 */

const { Transform} = require('stream');

class UpperCaseTransform extends Transform {
    _transform(chuck, enconding, callback){
        this.push(chuck.toString().toUpperCase());
        callback();
    }
}

const upperCaseTransform = new UpperCaseTransform();

//Piping data trough a transform stream
readerStream.pipe(upperCaseTransform).pipe(process.stdout);

/*
Crear streams de transformación: Extiende la clase Transform y redefine el método _transform.
Uso de transformaciones: Pipear datos a través de estos streams para modificarlos antes de dirigirlos a su destino final.

 */