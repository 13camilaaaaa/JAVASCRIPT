/**Escribir un programa que calcule el volumen de un elipsoide */

// V = 4 * PI * a * b *c / 3

function elipsoide() {
    let alto = 0;
    let ancho = 0;
    let largo = 0;

    // ingresar valores 
    alto = parseInt(prompt("Ingresa el Alto del elipsoide:"));
    ancho = parseInt(prompt("Ingresa el Ancho del elipsoide:"));
    largo = parseInt(prompt("Ingresa el Largo del elipsoide:"));

    // resultado del volumen
    let V = (4 * Math.PI * alto * ancho * largo) / 3;
    let resultado = parseFloat(V.toFixed(2));
    
    // mostrar resultado
    alert(`El volumen del Elipsoide es: ( ${resultado} )cm^3`);
}
elipsoide();