let i = 0
let intervalo = setInterval(() => {
    console.log('Hi interval');
    if(i === 3){
        // clearInterval sirve para detener un intervalo
        clearInterval(intervalo);
    }

    i++;
},1000);

//setImmediate sirve para ejecutar una instruccion de forma inmediata
setImmediate(()=>{
    console.log('Saludo inmediato');
})

// La sentencia requiere se utiliza para agregar
// modulos a nuestro proyecto

console.log(process);

//Muestra el directorio en donde nos encontramos trabajando
console.log(__dirname);

//Muestra el directorio y el nombre del archivo que se 
//encuentra abierto
console.log(__filename);

//Es una buena practica el no usar variables globales
//porque pueden ser alteradas por otros modulos

//En caso de necesitarlo, asi se puede hacer:

globalm.miVariable = 'Gibran';

console.log(miVariable);