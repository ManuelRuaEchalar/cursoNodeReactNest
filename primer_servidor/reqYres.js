const http = require('http');

const servidor = http.createServer((req, res) =>{
    console.log('===> req (solicitud)');
    //console.log(req); muestra toda la informacion de la solicitud
    console.log(req.url);
    console.log(req.method);    
    console.log(req.headers);
    console.log('===> res (respuesta)');
    //console.log(res); muestra toda la informacion de la respuesta
    console.log(res.statusCode);
});

const port = 3000;

servidor.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
});