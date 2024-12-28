const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    console.log
    return estatus;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()){
            resolve('La pizza está lista');
        } else {
            reject('Tenemos un error, intentar de nuevo');
        }
    }, 1000);
});

const pizzaCumplida = (mensajeConfirmacion) => {
    console.log(mensajeConfirmacion); 
}

const rechazarPedido = (razonRechazo) => {
    console.log(razonRechazo);
}

miPedidoDePizza.then(pizzaCumplida, rechazarPedido);


//miPedidoDePizza
//    .then((mensajeConfirmacion) => {
//        console.log(mensajeConfirmacion);
//    })
//    .then(null, (razonRechazo) => {
//        console.log(razonRechazo);
//    });

//CON CATCH

miPedidoDePizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion);
    })
    .catch((razonRechazo) => {
        console.log(razonRechazo);
    });

// esto es method chaining


