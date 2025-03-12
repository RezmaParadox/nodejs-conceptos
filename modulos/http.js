const http = require('http');

const port = 3000;

http.createServer(router).listen(port);

function router (req,res){
    console.log('Nueva Peticion!');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            const saludo = saludar();
            res.write(saludo);
            res.end();
            break;
        default:
            res.write('Error 404: No se encontra el recurso');
            res.end();
    }

    // res.writeHead(201, {'Content-Type': 'text/plain'});

    // //Escribir respuesta del usuario
    // res.write('Hola, ya se usar HTTP de NodeJS');

    // res.end();
};

function saludar(){
    return 'Hola Mundo!';
}

console.log('Escuchando en el puerto ' + port);