/**Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
grado: a * x2 + b + x + c, siendo X un valor constante. */

function obtenerRaices(a, b, c, x) {

    let a = parseFloat(prompt("Ingrese A")); 
    let b = parseFloat(prompt("Ingrese B")); 
    let c = parseFloat(prompt("Ingrese C"));

    // Calcular el discriminante
    let discriminante = b ** 2 - 4 * a * c;

    // Verificar el valor del discriminante
    if (discriminante > 0) {
        // Dos raíces reales distintas
        const raiz1 = (-nuevoB + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-nuevoB - Math.sqrt(discriminante)) / (2 * a);
        alert(`Solucion 1: ${raiz1}
            solucion 2: ${raiz2}`)
    } else if (discriminante === 0) {
        let x = -b / (2 * a);
        alert(`Solucion: ${x}`);
    } else {
        alert(`No tienen solucion, el discriminante es negativo ${discriminante}`);
    }
}