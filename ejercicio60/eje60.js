/**Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
de cursos es mayor que 6 el pago será únicamente de $1.200.000. */

let n = 0;

function cursos() {
    n = parseInt(prompt("Ingrese la cantidad de cursos: "));
    if (n < 6) {
        alert(`El pago total por sus curso es: ${2000000 * n}`);
    }
    else if (n > 6) {
        alert(`El pago total por cursos es $1.200.000`);
    }
}

cursos();