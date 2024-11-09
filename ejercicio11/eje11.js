/**Escribir un programa que sume, resta, multiplique y divida dos números. */


function elegiroperacion() {

    // verificar  si desea iniciar el sistema
    let Inicio = prompt("Deseas realizar unas operaciones?  (si/no)")
    let a;
    let b;

    // si la respuesta es (si)
    if (Inicio.toLowerCase() == "si"){
        operaciones =["suma", "resta","multiplicacion","division"];
    }

        // muestra el arreglo
        let mensajeoperacion = "Las operacipones que se realizaran son:\n";
        for (let i = 0; i < operaciones.length; i++) {
            mensajeoperacion += `${i + 1}. ${operaciones[i]}\n`;
        }
        // las operaciones
        alert (mensajeoperacion)- 1;

        // Ingreso de los numeros
        a = parseFloat(prompt("Ingrese el primer numero:"));
        b = parseFloat(prompt("Ingrese el segundo numero:"));

        // Mostrar resultado final
            alert(`la suma ${a} y ${b} es:  ( ${a+b} )\nLa resta ${a} y ${b} es:  ( ${a-b} )\nLa multiplicacion ${a} y ${b} es:  ( ${a*b} )\nLa division ${a} y ${b} es:  ( ${a/b} )`);
}


elegiroperacion();