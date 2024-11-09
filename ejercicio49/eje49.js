/**Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
positivos: área triangulo= base * altura / 2
 */

function area() {
    // ingresar los datos
    a = parseFloat(prompt("Ingrese la base del Triangulo:"));
    b = parseFloat(prompt("Ingrese la altura del Triangulo:"));

    // verificar que no sea un numero negativo
    while (isNaN(a) || isNaN(b) && a < 0 || b < 0) {
        alert("No puedes calcular el Area de este rectangulo");
        a = parseFloat(prompt("Ingrese la base del Triangulo:"));
        b = parseFloat(prompt("Ingrese la altura del Triangulo:"));
    }
    
    alert(`El area de triangulo es: ( ${(a *  b / 2).toFixed(2)} )`);
}

area();