/**Escribir un programa que calcule el área de un triángulo. */

//área = a × b / 2

function Areatriangulo() {

    // ingresa el valor de los lados
    let ancho = parseInt(prompt("Ingresa el Ancho del triangulo:"));
    let alto = parseInt(prompt("Ingrese el Alto del triangulo:"));
    
    // muestra el resultado
    alert (`Con los datos ${ancho} y ${alto} el Area de este rectangulo es:  ( ${ancho * alto/2} )`)
}

Areatriangulo();