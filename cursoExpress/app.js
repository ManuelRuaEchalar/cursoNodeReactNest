const express = require('express');

const app = express();

const {infoCursos} = require('./datos/cursos.js');
const routerProgramacion = require('./routers/programacion.js');

app.use('/api/cursos/programacion', routerProgramacion);

app.get('/', (req, res) => {
    res.send('Mi primer servidor con Express');
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});


app.get('/api/cursos/matematicas',(req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});





const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});