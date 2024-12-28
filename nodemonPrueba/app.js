const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('Hola Mundo, no molesten');
});

servidor.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

