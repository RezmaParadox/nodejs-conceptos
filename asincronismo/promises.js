function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1000)
    })
}

function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(`${nombre}: Blah blah blah`)
            resolve(nombre);
        }, 1000)
    })
}

function adios(nombre){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log(`Adios ${nombre}`)
            resolve();
        }, 1000)
    })
}

console.log('Iniciando el proceso')
hola('Roberto')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .catch(error => {
        console.log('Hubo un error')
        console.log(error)
    })

