/*
Node.js ofrece un módulo llamado 'os' que permite acceder a una serie de características del sistema operativo que usualmente estarían reservadas para lenguajes de bajo nivel.
*/

const os = require('os');
console.log(os.arch());
// Salida esperada: 'x64' (para 64 bits) o 'x32'/'x86' (para 32 bits)

/*
Conocer la plataforma sobre la que tu código corre puede ser esencial, especialmente si tu software requiere ejecutar comandos específicos de un sistema operativo. El método os.platform() te proporciona esta información:    
 */

console.log(os.platform());
// Salida esperada: 'linux', 'win32', 'darwin', etc.

/*
    Saber cuántos núcleos tiene tu procesador y cómo se están utilizando puede ayudar a optimizar el rendimiento de tus aplicaciones. Node.js te permite acceder a esta información con os.cpus():
 */

console.log(os.cpus());
// Proporciona detalles sobre cada núcleo de la CPU, como su modelo y velocidad.

/*
    Cuando desarrollamos aplicaciones que requieren gran cantidad de memoria, 
    es crucial saber cuánta memoria libre hay disponible y cuál es su capacidad total. 
    Puedes utilizar os.freemem() y os.totalmem() para esto:
 */
    const SIZE = 1024;
    function kb(bytes){return bytes / SIZE }
    function mb(bytes){return kb(bytes) / SIZE}
    function gb(bytes){return mb(bytes) / SIZE}
    console.log(kb(os.freemem()));
    console.log(mb(os.freemem()));
    console.log(gb(os.freemem()));
    console.log(`${os.freemem()} bytes en memoria libre`);
    console.log(`${os.totalmem()} bytes en memoria total`);

/*
    Node.js ofrece una lista de constantes del sistema que pueden ser vitales al trabajar con procesos a muy bajo nivel. El método os.constants te proporciona una serie de señas y códigos de error clave:
 */

console.log(os.constants);
//Muestra las diferentes senales y errores del sistema

/*
    Saber dónde almacenar archivos temporales o específicos del usuario es e
    sencial para evitar errores o pérdida de información. Node.js nos da acceso a 
    esta información con os.homedir() y os.tmpdir().
 */

    console.log(os.homedir());
    //Directorio de raiz del usuario
    console.log(os.tmpdir());
    //Directorio de archivos temporales

/*
    Cuando se trabaja con redes, conocer el nombre del host y las interfaces de red 
    disponibles puede ser crítico. Node.js te proporciona los métodos os.hostname() y 
    os.networkInterfaces() para obtener esta información:
*/

console.log(os.hostname()); //Nombre del host
console.log(os.networkInterfaces()); // Detalles de las interfaces de red


