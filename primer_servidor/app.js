const http = require('http');

const servidor = http.createServer((req, res) => {
    console.log('solicitud nueva');
    res.end('Hola, mundo');
});

const port = 3000;

servidor.listen(port, () => {
    console.log(`Servidor escuchandoen puerto ${port}`);
});