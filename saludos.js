function saludar(nombre){
    return `Hola, ${nombre}`;
}

function saludarHolaMundo(){
    return 'Hola, mundo';
}

//module.exports.saludar = saludar;
//module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo

};