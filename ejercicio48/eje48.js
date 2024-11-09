/**Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
desea calcular "Triángulo y Círculo: (Escriba T o C):
a. Triangulo = base * altura / 2
b. Circulo = PI * radio* radio
 */

function Area() {

    while (true) {
        let a;
        let b;
        let eleccion;
        let Inicio

        // verificar  si desea iniciar el sistema
        Inicio = prompt("Deseas calcular el Area de una figura?  (si/no)").toLowerCase();
        
        if (Inicio === "no") {
            break;
        }

        // si la respuesta es (si)
        if (Inicio == "si") {
            figura = ["Triangulo", "Circulo", "Rectangulo", "Cuadrado"];


            // muestra la array
            let mensaje = "Que figura deseas? Ej (1)\n";
            for (let i = 0; i < figura.length; i++) {
                mensaje += `${i + 1}. ${figura[i]}\n`;
            }

            // preguntar que figura desea
            eleccion = parseInt(prompt(mensaje)) - 1;

            // verificar que la eleccion sea correcta
            while (eleccion < 0 || eleccion >= figura.length) {
                alert("Opción no válida. Por favor, elige un número de las figuras");
                eleccion = parseInt(prompt(mensaje));
            }

            /** calcular el Area de cada figura*/

            // triangulo
            if (eleccion == 0) {
                // ingresar los datos
                a = parseFloat(prompt("Ingrese la base del Triangulo:"));
                b = parseFloat(prompt("Ingrese la altura del Triangulo:"));

                alert(`El area de triangulo es: ( ${a * b / 2} )`);
            }

            // circulo
            else if (eleccion == 1) {
                // ingresra los datos
                a = parseFloat(prompt("Ingrese la radio del Circulo:"));

                alert(`El area del circulo es: ( ${(Math.PI * a ** 2).toFixed(2)} )`);
            }

            // rectangulo 
            else if (eleccion == 2) {
                // ingresar los datos
                a = parseFloat(prompt("Ingrese el largo del Rectangulo"));
                b = parseFloat(prompt("Ingrese el ancho del Rectangulo"));

                alert(`El area del Rectangulo es: ( ${a * b} )`);
            }

            // cuadrado
            else if (eleccion == 3) {
                // ingresar los datos
                a = parseFloat(prompt("Ingresa un lado del Cuadrado:"));
                b = parseFloat(prompt("Ingresa el otro lado del Cuadrado"));

                // verificar que los datos si sean de un cuadrado
                while (a != b) {
                    alert("No es un cuadrado");
                    a = parseFloat(prompt("Ingresa un lado del Cuadrado:"));
                    b = parseFloat(prompt("Ingresa el otro lado del Cuadrado"));
                }

                if (a == b) {
                    alert(`El area del Cuadrado es: ( ${a * b} )`);
                }
            }
        }
    }
}

Area();