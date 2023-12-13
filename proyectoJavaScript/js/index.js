



class Moneda {
    constructor(tipoMoneda, valorEnPesos) {
        this.tipoMoneda = tipoMoneda;
        this.valorEnPesos = valorEnPesos;
    }
}

function convertirMoneda(cantidad, monedaOrigen, monedaDestino) {
    const tasaCambio = monedaDestino.valorEnPesos / monedaOrigen.valorEnPesos;
    return cantidad * tasaCambio;
    
}


const valores = [
    {
        nombre: "Peso", 
        precio: 1054,
    },
    {
        nombre: "Dólar",
        precio: 1,
    },
    {
        nombre: "Euro",
        precio: 0.85,
    }

] 

const nombresMonedas = valores.map((valor)=> valor.nombre) 

const precioMonedas = valores.map((elemento)=> elemento.precio)



const peso = new Moneda(nombresMonedas[0], precioMonedas[0]);
const dolar = new Moneda(nombresMonedas[1], precioMonedas[1]);
const euro = new Moneda(nombresMonedas[2], precioMonedas[2]); 



let ciclo = true;

while (ciclo) {
    const cantidadUsuario = parseFloat(prompt("Ingrese la cantidad de dinero en pesos argentinos:"));

    if (!isNaN(cantidadUsuario)) {
        const cantidadConvertidaPeso = convertirMoneda(cantidadUsuario, peso, dolar);
        const cantidadConvertidaEuro = convertirMoneda(cantidadUsuario, peso, euro);

        alert(`${cantidadUsuario} pesos equivalen a aproximadamente ${cantidadConvertidaPeso.toFixed(2)} dólares.`);
        alert(`${cantidadUsuario} pesos equivalen a aproximadamente ${cantidadConvertidaEuro.toFixed(2)} euros.`);
    } else {
        alert("Por favor, ingrese una cantidad válida.");
    }

    const respuesta = prompt("¿Desea realizar otra conversión? (Sí/No)").toLowerCase();
    ciclo = respuesta === 'si';
}

alert("Gracias por utilizar el convertidor de moneda. ¡Saludos!");















