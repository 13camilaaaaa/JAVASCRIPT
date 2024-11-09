/**Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si el divisor es cero el programa debe mostrar un error, se debe manejar mediante excepciones y el mensaje debe ser personalizado. */

try {

    // ingresa los valores
    let a = prompt("Ingrese el Diviendo:");
    let b = prompt("Ingrese el Divisor:");

    function división(a,b) {
    let resultado = a / b;
    return resultado;
    }

    alert(división(a,b));

    if (b == 0)
        throw new Error("Su divisor es, el numero (0)");

} catch (error) {
    console.error(`se produjo el siguiente ${error}`);
}


