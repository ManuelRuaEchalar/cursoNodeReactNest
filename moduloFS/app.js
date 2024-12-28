const fs = require('fs');

fs.readFile('index.html', 'utf8', (err, contenido) => {
    if (err) {
        throw err;
    } else {
        console.log(contenido);
    }
    console.log('Leyendo archivo...'); //no se ejecuta si hay error en throw
});

fs.rename('index.html', 'main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Nombre cambiado exitosamente');
});

//agregar contenido al final de un archivo

fs.appendFile('main.html', '<p>Hola</p>', (err) => {
    if (err) {
        throw err;
    }
    console.log('Contenido agregado exitosamente');
});

fs.writeFile('main.html', '<h1>Titulo</h1>', (err) => {
    if (err) {
        throw err;
    }
    console.log('Contenido reemplazado exitosamente');
});