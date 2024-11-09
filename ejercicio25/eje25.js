/**Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
que ingresando el costo de los medicamentos calcule el descuento y el precio final. */

// ingresar la cantidad del producto

function farmacia() {
    let medicamentos;
    let valor = 0;
    const descuento = 0.10;

    // verificar si desea inicializar el programa
    let inicio = prompt("¿Quieres comprar algun medicamento? (sí/no)");

    
    if (inicio.toLowerCase() === "si") {
        medicamentos = ["Acetaminofen", "Ibufromeno", "Naproxeno", "Amoxicilina", "Vitamina C", "Mareol"];
    }

    let mensajemedicamentos = "Elige el medicamento que deseas: Ej (1)\n";
    for (let i = 0; i < medicamentos.length; i++) {
        mensajemedicamentos += `${i + 1}. ${medicamentos[i]}\n`;
    }

    // ingresa el producto que desea
    let eleccion = parseInt(prompt(mensajemedicamentos)) ;

    // verificar su eleccion
    if (eleccion < 0 || eleccion >= medicamentos.length) {
        alert("Opción no válida. Por favor, elige un número del menú.");
        return;
    }
    else if (eleccion == 1){
        valor = 6000;
    }
    else if (eleccion == 2) {
        valor = 8000;
    }
    else if (eleccion == 3) {
        valor = 10000;
    }
    else if (eleccion == 4) {
        valor = 15000;
    }
    else if (eleccion == 5) {
        valor = 4000;
    }
    else if (eleccion == 6) {
        valor = 5000;
    }

    // resultado del porcentaje
    let porcentaje = valor * descuento;
    let precioFinal = valor - porcentaje;


        // Mostrar resultado final
        let medicamentoeElegido = medicamentos[eleccion];
        alert(`Has elegido un ${medicamentoeElegido} Con un valor de:  $ ( ${valor} )\nPresenta un descuento del 10%\nValor total:  $ ( ${precioFinal} )  `);
}

farmacia();