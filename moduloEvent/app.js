const EventEmmiter = require('events');

//console.log(EventEmmiter);

//ahora definimos nuestros propios eventos

const emisorProductos = new EventEmmiter();

emisorProductos.on('compra', (total) => {
    console.log(`Gracias por su compra de ${total} Bs.`);
});

emisorProductos.emit('compra', 500);

// los emisores sirven para comunicar modulos entre si, por ejemplo, si un modulo necesita saber que otro modulo ha terminado de hacer algo, se puede emitir un evento para que el otro modulo lo escuche y actue en consecuencia