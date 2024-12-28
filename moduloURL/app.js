const miURL = new URL('http://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(miURL.hostname); //www.ejemplo.org

console.log(miURL.pathname); // /cursos/programacion

console.log(miURL.searchParams); // ?ordenar=vistas&nivel=1

console.log(miURL.searchParams.get('ordenar')); // vistas
console.log(miURL.searchParams.get('nivel')); // 1


