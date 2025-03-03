/*
En el mundo de la programación, uno de 
los retos más comunes es lidiar con los errores. 
Saber cómo manejarlos adecuadamente puede prevenir 
la ruptura total de un proyecto. En este artículo 
exploraremos cómo gestionar errores en JavaScript 
utilizando las estructuras try-catch.
*/

function otraFuncion(){
    serompe();
}

function serompe(){
    return 3 + z;
}

function seRompeAsync(cb){
    setTimeout(() =>{
        try{
            return 3 + z;
        }catch(error){
            console.error('Error en la funcion Async/Await');
        }
    },1000);
}

try{
    seRompeAsync((error) =>{
        console.log('Hay error')
    })
}catch(error){
    console.error('Vaya, algo se ha roto ...!');
    console.error(error);
    console.log('No pasa nada, lo hemos controlado')
}

console.log('Esto de aqui va al final');