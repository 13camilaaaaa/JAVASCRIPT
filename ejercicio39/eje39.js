/**Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
Considere que se cobra por m2 y realice el código que representen el algoritmo que le
permita ir generando presupuestos para cada cliente. */

// M^2 es el area de un cuadrado

function calcularPresupuesto(largo, ancho, precioPorM2) {
    
    let area = largo * ancho;
    let costoTotal = area * precioPorM2;
    
    return costoTotal;
}




let precioPorM2 = parseInt(prompt("Ingrese el precio por M^2"));  

let largo = parseFloat(prompt("Ingrese el Largor en metros"));   // Largo en metros
let ancho = parseFloat(prompt("Ingresa el Ancho en metros"))   // Ancho en metros

let presupuesto = calcularPresupuesto(largo, ancho, precioPorM2);
console.log("El presupuesto para pintar el área de " + largo + "m x " + ancho + "m es: " + presupuesto + " unidades monetarias.");
