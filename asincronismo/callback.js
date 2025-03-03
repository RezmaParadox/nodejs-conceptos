function hola(nombre,miCallback){
    setTimeout(function () {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    },1500)
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('Bla bla bla...');
        callbackHablar();
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ', nombre);
        otroCallback();
    },1000);
}

/* Para evitar el callback Hell podemos hacer uso
de una funcion recursiva, especificando el numero de veces
que se ejecutara, utilizando una funcion.
*/

function conversacion(nombre, veces, callBack){
    if(veces > 0){
        hablar(function () {
            conversacion(nombre, --veces, callBack);
        });
    }else{
        adios(nombre, callBack);
    }
}

console.log('Iniciando Proceso...');

hola('Gibran Ramses', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso Terminado ...');
    });
})

//Callback Hell
// hola('Gibran', function(nombre){
//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 adios(nombre, function(){
//                     console.log('Proceso Terminado...');
//                 });
//             });
//         });
//     });
// })




//Se va a ejecutar acorde al tiempo que tengan,
//Por eso es mejor ecapsular una dentro de otra 
//Para que sigan un orden

// hola('Carlos', function (){});
// adios('Carlos', function (){});