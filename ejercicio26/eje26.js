/**Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit. */

//(°C × 9/5) + 32 =  °F


function grados() {
    
    // Ingresa los grados celsius
    let centígrados = parseFloat(prompt("Ingresa los grados °C"));

    // convertir grados celsius a fahrenheit
    let Fahrenheit = (centígrados * 9 / 5) + 32;

    //mostrar resultado
    alert (`Grado Fahrenheit: ${Fahrenheit} °F`)
}

grados();