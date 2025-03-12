function asincrona(callback){
    setTimeout(function(){
        try{
            let a = 3 + z;
            callback(null,a)
        }catch(e){
            callback(e);
        }
    }, 1000);
}

asincrona((error,resultado)=>{
    if(error){
        console.error('Error capturado:', error);
        return;
    }
    console.log('El resultado es:', resultado);
})