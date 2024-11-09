/**Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
los $130.000 el descuento será del 15%, de lo contrario no hay descuento. */


function restaurante() {
    const DESCUENTO_PORCENTAJE = 0.15;
    let total = 0;

    while (true) {
        let inicio = prompt("¿Desea ingresar el consumo de un cliente? (si/no)").toLowerCase();

        if (inicio === "no") {
            break;
        }

        if (inicio === "si") {
            let consumo = parseFloat(prompt("Ingrese el consumo del cliente: $"));

            // Validar si el consumo es un numero valido
            if (isNaN(consumo) || consumo < 0) {
                alert("Por favor, ingrese un monto válido.");
                continue; // Volver al inicio del bucle
            }

            let descuento = 0;

            if (consumo > 130000) {
                descuento = consumo * DESCUENTO_PORCENTAJE;
                consumo -= descuento;
                alert(`El consumo del cliente es de $${consumo.toFixed(2)} y el descuento fue de: $${descuento.toFixed(2)}`);
            } else {
                alert(`El consumo del cliente es de $${consumo.toFixed(2)}`);
            }

            total += consumo;
        } else {
            alert("Por favor, responda 'si' o 'no'.");
        }
    }

    alert(`Los pagos del día son de: $${total.toFixed(2)}\n¡Feliz día!`);
}

restaurante();
