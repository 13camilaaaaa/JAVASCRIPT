/**Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
todos los números impares desde 1 hasta ese número separados por coma. */

function numero() {
    let numero = 0;

    numero = parseInt(prompt("Ingrese un numero entero positivo"));

    while(isNaN(numero) || numero <= 0) {
        alert("Por favor ingrese un numero entero positivo");
        continue;
    }

    let impares = [];

    for (let i = 1; i <= numero; i++) {

        if (i % 2 != 0) {
            impares.push(i);
        }
    }
    
    console.log(impares.join(", "));
    
}

numero();