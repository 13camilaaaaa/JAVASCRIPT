/**En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.
 */

function basquetbol() {
    
    let edad = parseInt(prompt("Ingresa tu edad:"));

    let estatura = parseFloat(prompt("Ingresa tu estatura: Ej (175)"));

    let peso = parseInt(prompt("Ingrese su peso:  Ej (79)"));

    if (edad <= 19 && estatura > 175 && peso <= 80 || peso >= 75) {
        alert("Cumples con los requisitos para el equipo de basquetbol\n¡Felicidades!");
    }
    else {
        alert("No cumples con todos los requisitos para el equipo de basquetbol");
    }
}

basquetbol();