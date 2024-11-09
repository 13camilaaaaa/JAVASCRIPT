/**Escribir un programa que pida al usuario un número entero y muestre por pantalla un
triángulo rectángulo como el de más abajo, de altura el número introducido. */

function mostrarTriangulo() {
    
    const altura = parseInt(prompt("Ingrese un número entero para la altura del triángulo:"));

    if (isNaN(altura) || altura <= 0) {
        console.log("Por favor, ingrese un número entero positivo.");
        return;
    }

    for (let i = 1; i <= altura; i++) {
        console.log('*'.repeat(i));
    }
}


mostrarTriangulo();