/**Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
2.3e-1, -3e2, 23, 3.2). */

function expresión() {
    const regex = /^-?\d+(\.\d+)(e-?\d+)?$/;

    let numero = prompt("Ingrese un numero:");

    if (regex.test(numero) === true) {
        alert("El numero contiene un punto flotante");
    }
    else{
        alert("El numero no contiene un punto flotante");
    }
}

expresión();