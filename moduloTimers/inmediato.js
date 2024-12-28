function mostrarTema(tema, escuela) {
    console.log(`Estoy aprendiendo ${tema} en ${escuela}`);
}

console.log('Iniciando proceso...');

setImmediate(mostrarTema, 'Node.js', 'freeCodeCamp');

console.log('Terminando proceso...');