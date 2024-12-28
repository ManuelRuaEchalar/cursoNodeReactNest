const curso = require('./curso.json');

console.log(curso);

let infoCurso = {
    "titulo": "Curso de Node.js",
    "numVistas": 1000,
    "numLIkes": 500,
    "Temas": [ 
        "Javascript",
        "Node.js"
    ],
    "esPublico": true
};  

// Convertir un objeto a JSON
let datos = JSON.stringify(infoCurso);
console.log(typeof infoCurso)
console.log(datos);
console.log(typeof datos);

// Convertir un JSON a objeto

let objeto = JSON.parse(datos);
console.log(typeof objeto);