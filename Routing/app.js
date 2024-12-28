const http = require('http');

const cursos = require('./cursos');

const servidor = http.createServer((req, res) => {
    const {method} = req;
    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req, res);

        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            console.log(`Método no soportado: ${method}`);
    }
});

function manejarSolicitudGET(req, res){
    const path = req.url;

    if (path ==='/') {
        res.statusCode = 200;
        res. writeHead(200, {'Content-Type': 'application/json'});
        res.end('Bienvenidos a mi primer server y api con node js');
    } else if (path === '/cursos') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion));
    } 

    res.statusCode = 404;
    res.end('Ruta no encontrada');
}

function manejarSolicitudPOST(req, res){
    const path = req.url;

    if (path === '/cursos/programacion') {

        let cuerpo = '';

        req.on( 'data', contenido => {
            cuerpo += contenido.toString();
        });
        
        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);
            cuerpo = JSON.parse(cuerpo);
            console.log(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.nombre);
            res.end('Datos recibidos en el servidor');
        });

        res.end('El servidor ha recibido una solicitud POST en la ruta /cursos/programacion');
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});