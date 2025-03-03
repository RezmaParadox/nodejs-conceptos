//La parabra async convierte inmendiatamente la funcion en 
//asincrona. El await sirve para esperar la respuesta de una 
//promesa.

async function hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Hola'+ nombre);
            resolve(nombre);
        }, 1500);
    });
}


async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla Bla Bla ...');
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    });
}


// Await solo es valido dentro de una funcion asincrona

async function main(){
    let nombre = await hola('Gibran');
    await hablar();// Se ejecuta en segundo plano con await
    await hablar();
    await hablar();

    await adios(nombre);

    console.log('Termina el proceso');
}

//Esto nos permitira saber si nuestra funcion se
//esta ejecutando de forma asicrona

console.log('Enpezamos el proceso');
main();
console.log('Va a se la segunda instruccion');

