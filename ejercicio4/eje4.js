/**Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par o impar. */

let numero;

do {
    // Pedir al usuario un número entero
    numero = prompt("Ingrese un número entero:");

    // Convertir el input a un número
    numero = Number(numero);

    // Verificar si el input es un número válido
    if (!Number.isInteger(numero)) {
        alert("Por favor, ingrese un número entero válido.");
    }
} while (!Number.isInteger(numero));

// Comprobar si el número es par o impar
if (numero % 2 === 0) {
    alert("Su número es Par");
} else {
    alert("Su número es Impar");
}