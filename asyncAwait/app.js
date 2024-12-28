function ordenarProducto(producto){
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de freeCodeCamp`);
        setTimeout(() => {
            if (producto === 'taza'){
                resolve('ordenando una taza con el log de freeCodeCamp'); 
            } else {
                reject('Este producto no esta disponible actualmente.');
            }
        }, 2000);
    });
}

function procesarPedido(respuesta){
    return new Promise((resolve) => {
        console.log('Procesando respuesta...');
        console.log(`la respuesta fue: ${respuesta}`);
        setTimeout(() => {
            resolve(`Pedido procesado exitosamente: ${respuesta}`);
        }, 2000);
    });
}

// ordenarProducto('Lapiz')
//     .then(respuesta => {
//         console.log('Respuesta recibida');
//         console.log('respuesta');
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada);
//     })
//     .catch(error => {
//         console.log(error);
//     });


//aqui se aplica method chaining, se encadenan las promesas

//Ahora con async await

async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error){
        console.log(error);
    }
    
}

realizarPedido("taza");