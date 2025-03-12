//La libreria sharp sirve para trabajar con imagenes
const sharp = require('sharp');

sharp('./original.webp')
    .resize(80)
    .grayscale()
    .toFile('resized.png');