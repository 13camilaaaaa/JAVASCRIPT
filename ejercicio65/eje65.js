/**Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
la cuenta atrás desde ese número hasta cero separados por comas. */

function numero() {
    let numero = 0;

    numero = parseInt(prompt("Ingrese un numero entero positivo"));

    while(isNaN(numero) || numero <= 0) {
        alert("Por favor ingrese un numero entero positivo");
        continue;
    }

    let numeros = [];

    for (let i = numero; i >= 0; i--) {
            numeros.push(i);        
    }
    
    console.log(numeros.join(", "));
    
}

numero();