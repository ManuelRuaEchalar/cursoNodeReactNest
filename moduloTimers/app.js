function mostrarTema(tema, escuela) {
    console.log(`Estoy aprendiendo ${tema} en ${escuela}`);
}

console.log('Iniciando proceso...');
setTimeout(mostrarTema, 1500, 'Node.js', 'freeCodeCamp');

function sumar(a, b) {
    console.log(a + b);
}

setTimeout(sumar, 5000, 7, 10);