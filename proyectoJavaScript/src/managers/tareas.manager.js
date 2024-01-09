import { elementosHtml, formularioUsuarios } from "../elements/html.elements.js";
import { Moneda, convertirMoneda, indicadorMoneda } from "../models/tareas.model.js";



//Conversion

export function gestionarConversion() {
    const { botonIntercambio, mainItem, mainItem2, convertidorMain, botonConvertir, resultadoConversion } = elementosHtml;

    botonIntercambio.addEventListener("click", function () {
        const valorMainItem = mainItem.value;
        const valorMainItem2 = mainItem2.value;

        mainItem.value = valorMainItem2;
        mainItem2.value = valorMainItem;
    });

    botonConvertir.addEventListener("click", function () {
        const cantidad = parseFloat(convertidorMain.value);
        const monedaOrigen = indicadorMoneda(mainItem.value);
        const monedaDestino = indicadorMoneda(mainItem2.value);

        if (!isNaN(cantidad) && monedaOrigen && monedaDestino) {
            const resultado = convertirMoneda(cantidad, monedaOrigen, monedaDestino);
            resultadoConversion.innerText = `Equivale a ${resultado.toFixed(2)} ${monedaDestino.tipoMoneda}`;
        } else {
            resultadoConversion.innerText = "Ingrese un monto válido y seleccione las monedas.";
        }
    });
}



//Registro Usuarios


export let usuariosRegistrados = obtenerUsuariosRegistrados();

export const mostrarUsuarios = () => {
    formularioUsuarios.listaDeUsuarios.innerText = "";
    usuariosRegistrados.forEach(usuario => {
        let li = document.createElement("li");
        li.innerText = `${usuario.nombre} - ${usuario.email}`;
        formularioUsuarios.listaDeUsuarios.appendChild(li);
    });
}

const mensajeDiv = document.createElement("div");
formularioUsuarios.listaDeUsuarios.appendChild(mensajeDiv);
formularioUsuarios.registroForm.onsubmit = (event) => {
    event.preventDefault();

    if (usuariosRegistrados.length > 0) {
        mostrarMensaje('Solo puede registrar un usuario por conversión');
        return;
    }

    let usuario = {
        nombre: formularioUsuarios.formNombre.value,
        email: formularioUsuarios.formEmail.value,
    }
    usuariosRegistrados.push(usuario);
    formularioUsuarios.registroForm.reset();
    guardarUsuariosRegistrados();
    mostrarUsuarios();
}

const mensajeContainer = document.getElementById("mensajeContainer");

const mostrarMensaje = (mensaje) => {
    mensajeContainer.innerText = mensaje;
    setTimeout(() => {
        mensajeContainer.innerText = "";
    }, 7000);
}


//sessionStorage de Usuarios (ampliar)



function obtenerUsuariosRegistrados() {
    const usuariosGuardados = sessionStorage.getItem('usuariosRegistrados');
    return usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
}

function guardarUsuariosRegistrados() {
    sessionStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));
}














