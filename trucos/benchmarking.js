/*
    En el mundo del desarrollo, uno de los mayores desafíos es detectar procesos que ralentizan el rendimiento de nuestro código. En esta clase, exploraremos técnicas efectivas para identificar y medir tiempos de ejecución en JavaScript, utilizando la consola para facilitar esta tarea.

    Para determinar cuánto tiempo tarda en ejecutarse un proceso específico en nuestro código, podemos usar console.time(). Esta función nos permite monitorizar el tiempo de ejecución desde el inicio hasta el final de un bloque de código.
*/

let suma = 0;

console.time('Bucle Normal')

for(let i = 0; i < 1000000; i++){
    suma += i;
}

console.timeEnd('Bucle Normal');


/*
Las funciones asincrónicas son comunes en JavaScript, y 
medir su tiempo de ejecución sigue siendo crucial. Para hacer esto, 
empleamos promesas junto con async/await.
*/

function funcionAsincrona(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('Proceso asincrono terminado');
            resolve();
        },1000);
    })
}

console.time('Proceso asincrono');
funcionAsincrona().then(() => {
    console.timeEnd('Proceso asincrono');
})

/*
En este ejemplo, simulamos un proceso asincrónico con un setTimeout. 
La función console.time('asincronico') inicia el contador, y 
console.timeEnd('asincronico') muestra cuánto tiempo ha transcurrido al 
resolver la promesa.
*/

/*
Optimización de código: Puedes identificar y optimizar las partes del código que consumen más tiempo.
Mantenimiento eficiente: Facilita el mantenimiento al ofrecer claridad sobre qué partes podrían necesitar revisión.
Mejor experiencia del usuario: Al reducir el tiempo de espera, ofreces una experiencia más fluida y eficaz.
*/