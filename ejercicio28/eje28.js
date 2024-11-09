/**Calcular el sueldo de un empleado dados como datos de entrada:
a. Nombre.
b. horas de trabajo.
c. pago en hora. */

// pago x hora = entre 4.000 y 10.000
// horas de trabajo = horas
// nombre = empleado

function sueldo() {
    let pago = 0;
    let horas = 0;
    let nombre;
    let inicio;

    // inicializar en bucle
    do {

        inicio = prompt("Desea calcular el sueldo de un empleado?  (si/no)");

        if (inicio.toLowerCase() == "si"){

        // ingresar datos
        nombre = prompt("Ingresa el nombre del empleado:");
        horas = parseInt(prompt("Ingresa las horas trabajadas:"));
        pago = parseInt(prompt("Ingrese el valor a pagar por horas:"));

        // calcular el sueldo
        let sueldo = horas * pago;

        // mostrar resultado
        alert(`El sueldo del empleado ${nombre} es: $( ${sueldo} )`);
        }

        // finalizar bucle
    } while (inicio != "no");

    alert("Feliz dia");
    }


sueldo();