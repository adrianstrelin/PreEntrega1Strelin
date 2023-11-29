
function calculadoraConvertidor(operador) {
    switch (operador) {
        case "/":
            return ingreseMonto / monedaExtranjera;
        case "*":
            return ingreseMonto * monedaExtranjera;
    }
}

let ingreseMonto = prompt("Ingrese el monto de la moneda a convertir");

while (isNaN(ingreseMonto)) {
    alert("Ingrese caracteres válidos");
    ingreseMonto = prompt("Ingrese el monto de la moneda a convertir en su moneda local ($, €, etc.)");
}

let monedaExtranjera = prompt("Ingrese cotización de la moneda extranjera");

while (isNaN(monedaExtranjera)) {
    alert("Ingrese caracteres válidos");
    monedaExtranjera = prompt("Ingrese cotización de la moneda extranjera");
}

let operador = prompt(`Ingrese el tipo de operación que quiera realizar "/", "*"`);
while (true) {
if (operador !== "/" && operador !== "*") {
    alert(`Ingrese caracteres válidos, solo se permite "/", o "*"`);
    operador = prompt(`Ingrese el tipo de operación que quiera realizar "/", "*"`).toLowerCase();
} else {
    let resultado = calculadoraConvertidor(operador);
    alert(`El resultado de la conversión es: ${resultado}`);
    break;
}
}

calculadoraConvertidor(operador);