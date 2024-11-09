/**Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos. */

function calificación() {

    let calificaciones = 0;
    let suma = 0;

    // ingresa la calificacion de los examenes
    for (i=1; i <=4; i++){
        calificaciones = parseInt(prompt(`Ingresa la calificacion #${i}: \nRecuerda que va del 1 al 5`));
        suma +=calificaciones;
    }

    // resultado promedio
    let promedio = suma / 4;

    // mostrar resultado
    alert(`El promedio de los examenes es: ( ${promedio} )`);
}

calificación();