/**Determinar si un número es positivo y menor que 100. */

function determinar() {
    let numero = 0;
    
    numero = parseInt(prompt("Ingresa un numero:"));

    while (isNaN (numero)) {
        alert("Ingresaste un numero Negativo");
        numero = parseInt(prompt("Ingresa un numero positivo:"));
    }

    while (numero >=100) {
        alert("Ingresaste un numero mayor que 100");
        numero = parseInt(prompt("Ingresa un numero menor de 100:"));
    }

        alert("El numero que ingresaste es positivo y menor de 100");
}

determinar();