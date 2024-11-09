/** Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
segundo, en caso contrario indicar con un mensaje que la operación no es posible
realizarla. */

// el primer numero debe ser siempre mayor (>)
// en caso contrario no se puede realizar la operacion;

function operación() {

    while (true) {

        let inicio = prompt("Deseas Iniciar el programa: (si/no)").toLowerCase();

        if (inicio === "no") {
            break;
        }

        if (inicio === "si") {

            // ingresar los numeros
            let num1 = parseInt(prompt("Ingresa el primer numero:"));
            let num2 = parseInt(prompt("Ingresa el segundo numero:"));

            // validar que sean valores numericos y positivos
            if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
                alert("Por favor ingrese un valor numerico y positivo");
                continue;
            }

            // validar que num1 sea mayor que num2
            if (num1 > num2) {
                alert(`El resultado de la resta es:  ( ${num1 - num2} )`);
            }
            else {
                alert("La operacion no es posible realizar");
            }
        }
    }
}

operación();