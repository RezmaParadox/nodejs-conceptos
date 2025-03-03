const{exec,spawn} = require('child_process');

console.clear();

exec('dir', (error, stdout, stderr) => {
    if(error){
        console.error(error);
        return false;
    }

    console.log(stdout);
})

let proceso = spawn('cmd.exe', ['/c','dir']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (data) => {
    console.log('Esta muerto?');
    console.log(proceso.killed);
    console.log(data.toString());
})

proceso.on('exit', () => {
    console.log('El proceso termino');
    console.log(proceso.killed);
})