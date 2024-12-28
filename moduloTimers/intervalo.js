function mostrarTema(tema, escuela) {
    console.log(`Estoy aprendiendo ${tema} en ${escuela}`);
}

setInterval(mostrarTema, 2000, 'Node.js', 'freeCodeCamp');

function sumar (a, b) {
    console.log(a + b);
}

setInterval(sumar, 1500, 3, 4);