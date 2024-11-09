/**Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
expresada en kilómetros por hora, proporcione la velocidad en metros por segundo. */

function convetir() {
    let velocidadkm = 0;
    let velocidadm = 0;
    let cambiokm = 0;

    // Expresion km en Metros (m)
    const convetirkm = 1000;

    // Expresion hora en segundos (s)
    const hora = 3600;

    // Ingresa la velocidad
    velocidadkm = parseFloat(prompt("Ingrese la velocidad en: (km/h)"));

    // Convierte la velocidad de km/h a m/s
    cambiokm = convetirkm * velocidadkm;
    velocidadm = cambiokm / hora;

    // muestra el resultado
    alert (`La velocidad del Automivil es de:  ( ${velocidadm.toFixed(2)} ) m/s`)
}

convetir();