/**Escribir un programa que calcule el área de un rectángulo: */

//A = a × b


function Area() {

    // se ingresas las variables
    let ancho = parseInt(prompt("Ingresa el Ancho del rectangulo:"));
    let alto = parseInt(prompt("Ingrese el Alto del rectangulo:"));
    
    // muestra el resultado
    alert (`Con los datos ${ancho} y ${alto} el Area de este rectangulo es:  ( ${ancho * alto} )`)
}

Area();