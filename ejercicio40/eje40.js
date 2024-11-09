/**Una empresa que contrata personal requiere determinar la edad de las personas que
solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
nacieron. Realice el código que representen el algoritmo para solucionar este problema. */

// edad = año de naciemiento - año altual

function edad() {
    let edad = 2024;

    let añoNacimiento = parseInt(prompt("Ingrese el año de nacimiento;"));

    alert(`Presenta una edad de:  ( ${edad - añoNacimiento} )`);
}

edad();