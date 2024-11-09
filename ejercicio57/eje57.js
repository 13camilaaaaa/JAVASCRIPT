/**Consideramos la asignación de una calificación literal a un rango dado de calificaciones
numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
Aprobado.
 */

function calificación() {

    let literal;

    // ingresa su calificacion
    let num = parseFloat(prompt("Ingresa la Calificacion numerica: Ej (8.1)"));

    // validar su calicacion numerica 
    if (num >= 9.1 && num <= 10){
        literal = "Excelente";
        alert(`Su calificacion literaria es: ( ${literal} )`);
    }
    else if (num >= 8.1 && num < 9.1){
        literal = "Muy bien";
        alert(`Su calificacion literaria es: ( ${literal} )`);
    }
    else if (num >= 7.5 && num < 8) {
        literal = "Bien menor";
        alert(`Su calificacion literaria es: ( ${literal} )`);
    }
    else if (num < 7.5 && num > 0) {
        literal = "No Aprobado";
        alert(`Su calificacion literaria es: ( ${literal} )`);
    }
    else{
        alert("Calificacion numero, no existente");
    }
}

calificación();