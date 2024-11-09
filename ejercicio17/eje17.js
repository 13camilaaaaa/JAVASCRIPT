/**Escribir un programa que calcule el volumen de una esfera. */

// V = 4/3 * PI * r^3

function volumen() {
    let radio = 0;
    const PI = 3.14;

    // ingresar el radio
    radio = parseInt(prompt("Ingrese el radio de la esfera"));

    // resultado del volumen
    let volumen = (4/3) * PI * Math.pow(radio, 3);
    let resultado = parseFloat(volumen.toFixed(2));

    // mostrar resultado
    alert (`El volumen de la Esfera es de: ( ${resultado} )cm^3`);
}

volumen();