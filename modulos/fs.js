/*
El módulo FS (File System) en Node.js es 
una herramienta poderosa y esencial que te 
permitirá acceder a archivos en tu sistema 
operativo. Con FS, podrás leer, escribir, 
modificar y renombrar archivos, entre muchas
*/

const fs = require("fs");

function leerArchivo(ruta, callback) {
  fs.readFile(ruta, (error, data) => {
    if (error) {
      console.error("Error al leer el archivo:", error);
    } else {
      callback(data.toString());
    }
  });
}

function escribirArchivo(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, (error) => {
    if (error) {
      console.error("No se puedo escribir en el archivo:", error);
    } else {
      console.log("Archivo escrito correctamente.");
      if (callback) callback;
    }
  });
}

function borrarArchivo(ruta, callback) {
  fs.unlink(ruta, (error) => {
    if (error) {
      console.error("Error al borrar el archivo:", error);
    } else {
      console.log("Archivo borrado exitosamente.");
      if (callback) callback;
    }
  });
}

//Leemos un archivo
// leerArchivo(__dirname + '/archivo.txt', console.log);

//Escribimos un archivo
// escribirArchivo(__dirname + '/archivoNuevo.txt', 'Este es un archivo nuevo',()=>{
//     console.log('Escritura Completada');
// })

//Borramos el archivo
borrarArchivo(__dirname + "/archivoNuevo.txt", () => {
  console.log("Borrado confirmado");
});
