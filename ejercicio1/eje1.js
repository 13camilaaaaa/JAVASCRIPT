/**
 * Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o menor de edad, el programa+ * debe validar que solo se puedan ingresar números positivos. 
 */

// * (>) mayor que
// * (<) menor que


function verificarEdad() {
    let edad = prompt("Por favor, ingresa tu edad:");

    
    while (isNaN(edad) || edad < 0) {
        alert("Por favor, ingresa un número positivo.");
        edad = prompt("Por favor, ingresa tu edad:");
    }
    
    edad = Number(edad);

    if (edad >= 18) {
        alert("Eres mayor de edad.");
    } else {
        alert("Eres menor de edad.");
    }
}

verificarEdad();

