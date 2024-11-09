/**Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
calificación se compone de los siguientes porcentajes:
a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
b. 30% de la calificación examen final.
c. 15% de la calificación trabajo final. */


function calcularPromedioFinal(califParcial1, califParcial2, califParcial3, examenFinal, trabajoFinal) {
    
    let promedioParciales = (califParcial1 + califParcial2 + califParcial3) / 3;    
    let promedioFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
    return promedioFinal;
}

let califParcial1 = parseFloat(prompt("Ingresa la Calificación del primer parcial"));
let califParcial2 = parseFloat(prompt("Ingresa la Calificación del segundo parcial"));; 
let califParcial3 = parseFloat(prompt("Ingresa la Calificación del tercer parcial"));;
let examenFinal = parseFloat(prompt("Ingresa la Calificación del examen final"));;
let trabajoFinal = parseFloat(prompt("Ingresa la Calificación del trabajo final"));;


let promedioFinal = calcularPromedioFinal(califParcial1, califParcial2, califParcial3, examenFinal, trabajoFinal);
alert("El promedio final de la materia es: " + promedioFinal.toFixed(2));
