

//Modelo moneda

export class Moneda {
    constructor(tipoMoneda, valorEnPesos) {
        this.tipoMoneda = tipoMoneda;
        this.valorEnPesos = valorEnPesos;
    }
}

export function convertirMoneda(cantidad, monedaOrigen, monedaDestino) {
    const tasaCambio = monedaDestino.valorEnPesos / monedaOrigen.valorEnPesos;
    return cantidad * tasaCambio;
}

const peso = new Moneda("Pesos Argentinos", 1054);
const dolar = new Moneda("Dólares Estadounidenses", 1);
const euro = new Moneda("Euros", 0.85);

export { peso, dolar, euro };

export function indicadorMoneda(valor) {
    switch (valor) {
        case "1":
            return peso;
        case "2":
            return dolar;
        case "3":
            return euro;
        default:
            return null;
    }
}



