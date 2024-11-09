/** Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
parte le corresponde a Lorena? */

// Martin toma 2/3 del total
// Jairo toma 1/4 del total
// Lorena se queda con el resto


function calcularParteLorena() {
    
    let parteMartin = 2 / 3;    
    let parteJairo = 1 / 4;
    let parteLorena = 1 - (parteMartin + parteJairo);
    
    return parteLorena;
}

let parteLorena = calcularParteLorena();
confirm("A Lorena le corresponde: " + parteLorena.toFixed(2));
