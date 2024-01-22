// Modelo moneda

export class Moneda {
    constructor(tipoMoneda, valorEnPesos) {
        this.tipoMoneda = tipoMoneda;
        this.valorEnPesos = valorEnPesos;
    }
}



// Función para convertir moneda

export function convertirMoneda(cantidad, monedaOrigen, monedaDestino) {
    const tasaCambio = monedaDestino.valorEnPesos / monedaOrigen.valorEnPesos;
    return cantidad * tasaCambio;
}




// Array de monedas

let monedas = [];

const obtenerMonedas = async () => {
    try {
        const resp = await fetch("/data/productos.json");
        const data = await resp.json();
        console.log(data);

        procesarDatos(data);
        
    } catch (error) {
        console.log(error);
    }
}

const procesarDatos = (data) => {
    monedas = data;
    console.log("Monedas procesadas:", monedas);
}

obtenerMonedas();


// Exportar monedas

export const [peso, dolar, euro] = monedas;



// Función para obtener una moneda por su índice

export function indicadorMoneda(valor) {
    const indice = parseInt(valor) - 1;
    return monedas[indice] || null;
}



