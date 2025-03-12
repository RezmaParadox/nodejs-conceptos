/*
  En el desarrollo de software, es fundamental 
  comprender cómo funcionan los procesos internos 
  de nuestras aplicaciones, especialmente cuando se 
  trata de aplicaciones de Node.js. Aprender a escuchar 
  y manejar eventos puede marcar la diferencia entre una 
  aplicación robusta o una que 
  falla ante la menor falta de control.   
 */

//Detecta cuando el programa esta a  punto de finalizar
process.on('exit', () => {
    console.log('El proceso de se a acabado, listo.');    
    setTimeout(() => {
        console.log('Esto no se va a ejecutar');
    }, 0);
})

//Ejecutamos acciones antes de cerrar el programa
process.on('beforeExit', () =>{
    console.log('El proceso va a terminar');
    //Aqui se pueden ejecutar acciones finales
})


/*
    A menudo, al desarrollar rápidamente, puedes pasar por alto excepciones que destruyen el flujo de tu aplicación. Node.js proporciona maneras de capturarlas y manejarlas adecuadamente.
 */

process.on('uncaughtException', (err) => {
    console.error('Vaya se nos ha olvidado capturar un error', err);
    //Aqui puedes gestionar el error, por ejemplo, escribiendolo en un archivo
});

//Para casos en donde las promesas se rechazan sin un manejo adecuado, tambien existe un evento en especifico

process.on('unhandledRejection',(reason,promise) => {
    console.error('Rechazo no manejado en: ', promise, 'razon', reason);
})

/*
    Es importante entender cómo funcionan los eventos en relación con el Event Loop, especialmente al 
    desconectarse de este durante el proceso de salida.
 */



// En cambio, si se establecen temporizadsores fuera del momento de desconexión, se ejecutarán en el Event Loop.

setTimeout(() => {
    console.log('Esto si se va a ejecutar');
}, 0);

/*
    Gestionar de manera adecuada los eventos y excepciones permite que nuestras aplicaciones se mantengan estables y seguras. Además, un manejo adecuado te permitirá:

    Monitorizar en producción: Detectar errores antes de que afecten al usuario final.
    Garantizar la estabilidad: Reducir las interrupciones inesperadas en los servicios.
    Tomar acciones preventivas: Como escribir registros de errores o enviar alertas.
    
    Es fundamental aprovechar el módulo process de Node.js, que ya viene integrado de manera global, 
    sin necesidad de importar nada adicional. Este conocimiento fortalecerá tus aplicaciones y las preparará para situaciones imprevistas.
 */