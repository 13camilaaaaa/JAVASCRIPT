/**En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
horas trabajadas. */

// Planta la hora 20.000
// Adminstrativo la hora 10.000

function empresa() {
    
    while (true) {
        let inicio = prompt("¿Desea calcular el pago del empleado? (si/no)").toLowerCase();

        if (inicio === "no") {
            break
        }

        if (inicio === "si") {
            // ingresa el puesto 
            let puesto = parseInt(prompt("El empleado es de:\n1. Planta\n2. Administrativo"));

             // Validar si el puesto es un numero valido
            if (isNaN(puesto) || puesto < 0 || puesto > 2) {
                alert("Por favor, ingrese un puesto válido.");
                continue; // Volver al inicio del bucle
            }

            // ingresa las horas
            let horas = parseInt(prompt("Cuantas horas trabajo el empleado? Ej(30)"));

             // Validar si las horas es un numero valido
            if (isNaN(horas) || horas < 0) {
                alert("Por favor, ingrese horas válido.");
                continue; // Volver al inicio del bucle
            }

            let totalpago = 0;

            // calcular el pago de Planta
            if (puesto === 1) {
                totalpago = 20000 * horas;
                alert(`El pago del empleado es de $${totalpago.toFixed(2)}`)
            }
            // calcular el pago de Administrativo
            else if (puesto === 2){
                totalpago = 10000 * horas;
                alert(`El pago del empleado es de $${totalpago.toFixed(2)}`);
            }
        }
    }
    alert("¡Feliz dia!");
}

empresa();