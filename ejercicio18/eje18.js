/**. Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b */

    function evalúe() {
        let a = parseFloat(prompt("Ingrese valor a"));
        let b = parseFloat(prompt("Ingrese valor b"));
        let c = parseFloat(prompt("Ingrese valor c"));
    
        let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;

        alert(`El resultado es: ( ${resultado} )`);
    }

    evalúe();