//Limpiar la consola
console.clear();
//Console normal
console.log('Hi');
//Informando sobre algo
console.info('El mensaje');
//Marcando un error
console.error('El error');
//Advirtiendo
console.warn('Advirtiendo sobre algo');
//Mostrando informacion sobre una tabla
let tabla =[
   {
    a:1,
    b:'A'
   },
   {
    a:2,
    b:'B'
   } 
]

console.table(tabla);

//Agrupar impresiones
console.log("Conversacion:");

console.group("Conver")
console.log("Hola");

console.group("Conver");
console.log("Blablabla");
console.groupEnd("Conver")

console.log("Adios");
console.groupEnd("conver")

console.log("Otra cosa");

//Ejemplo para agruparlos en funciones
function function1() {
    console.group("Funcion 1");
    console.log("Soy la funcion 1");
    function2()
    console.log("Sigo siendo la funcion 1");
    console.groupEnd("Funcion 1")
}
function function2() {
    console.group("Funcion 2")
    console.log("Soy la funcion 2");
    console.groupEnd("Funcion 2")

}
console.log("Empezamos");
function1()

//Contador de veces
console.count("Veces")
console.count("Veces")
console.count("Veces")
console.count("Veces")
console.countReset("Veces");
console.count("Veces")
console.count("Veces")
console.count("Veces")

//Temporizador
console.time('Timer');
console.log('----');
console.timeEnd('Timer');