/**Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
obtuvieron las siguientes calificaciones:
a. «a» = menor que 100 y mayor igual que 90
b. «b» = menor que 90 y mayor igual que 80
c. «c» = menor que 80 y mayor igual que 70
d. «d» = menor que 70 y mayor igual que 60
 */

function ingresarNotas() {
    const notas = [];
    let n = parseInt(prompt("¿Cuántas notas desea ingresar?"), 10);

    while (isNaN(n) || n < 0) {
        alert("Por favor ingrese un número entero positivo");
        continue;
    }

    for (let i = 0; i < n; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota del alumno ${i + 1} (0 - 100):`));
        

        while (nota < 0 || nota > 100) {
            nota = parseFloat(prompt("Por favor ingrese una nota válida (0 - 100):"));
        }

        notas.push(nota);
    }

    return notas;
}

function analizarNotas(notas) {
    const maxNota = Math.max(...notas);
    const minNota = Math.min(...notas);
    const cantidadMax100 = notas.filter(nota => nota === 100).length;
    const cantidadA = notas.filter(nota => nota < 100 && nota >= 90).length;
    const cantidadB = notas.filter(nota => nota < 90 && nota >= 80).length;
    const cantidadC = notas.filter(nota => nota < 80 && nota >= 70).length;
    const cantidadD = notas.filter(nota => nota < 70 && nota >= 60).length;

    console.log(`Nota alta: ${maxNota}`);
    console.log(`Nota baja: ${minNota}`);
    console.log(`Cantidad de alumnos con nota máxima de 100: ${cantidadMax100}`);
    console.log(`Cantidad de alumnos con nota "a" (90-99): ${cantidadA}`);
    console.log(`Cantidad de alumnos con nota "b" (80-89): ${cantidadB}`);
    console.log(`Cantidad de alumnos con nota "c" (70-79): ${cantidadC}`);
    console.log(`Cantidad de alumnos con nota "d" (60-69): ${cantidadD}`);
}

const notas = ingresarNotas();
analizarNotas(notas);
