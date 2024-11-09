/**Escribir un programa que calcule la longitud y el área de una circunferencia */

function circunferencia() {
    const PI = 3.14;
    let longitud = 0;
    let Area = 0;

    // ingresa el radio 
    let radio = parseInt(prompt("Ingrese el radio de la circunferencia"));

    // calcula la longitud 
    longitud = 2 * PI * radio;

    // calcula el Area
    Area = PI * (radio ** 2);

    // muestra el resultado
    alert(`La longitud es:  ( ${longitud} )\nEl Area es:  ( ${Area} )`)
}

circunferencia();