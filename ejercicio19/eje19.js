/**Escribir un programa que calcule el área y el volumen de un cilindro. */

// V = PI * radio^2 * altura
// A = 2 * PI * radio * ( altura * radio )

function cilindro() {
    let radio = 0;
    let altura = 0;

    // ingresar los valores
    radio = parseInt(prompt("Ingresa el Radio del Cilindro"));
    altura = parseInt(prompt("Ingresa al Altura del Cilindro"));

    // resultado del volumen
    let V = Math.PI * (radio**2) * altura;

    // resultado del area
    let A = 2 * Math.PI * radio *  (altura + radio);

    // mostrar resultado
    alert(`El volumen del Cilindro es: ( ${V} )cm^3\nEl Area del cilindro es:  ( ${A} )cm^2`)
}

cilindro();