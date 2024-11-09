/**Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
minutos, exprese el resultado en metros/segundo. */

// Velocidad = d / t


function Velocidad() {
    
    // distancia de 2km
    let D = 2000;

    // tiempo de 5 minutos
    let T = 300;

    //resultado
    let V = D / T;

    // resultado con 2 decimales
    let resultado = parseFloat(V.toFixed(2));

    // mostrar resultado
    alert(`La velocidad del Proyectil es:  ( ${resultado} ) m/s`)

}

Velocidad();