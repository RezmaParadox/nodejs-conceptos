// La libreria bcrypt sirve para encriptar contrasenias

const bcrypt = require('bcrypt');
const password = '12345678';

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);

    bcrypt.compare(password, hash, function(err, res){
        //console.log(err);
        console.log(res);
    })
})