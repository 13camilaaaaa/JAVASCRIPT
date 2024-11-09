/**Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o
no. */
try {
    
    // ingresa los valores
    let edad = prompt("Ingresa tu edad:");
    let ingresos = prompt("Ingresa tus Ingresos mensuales:");

    // convertir en Number
    edad = Number(edad);
    ingresos = Number(ingresos);

    if (edad > 16 && ingresos >= 1000){
    alert("Usted debe tributar su impuesto");
}
else{
    alert("Usted no debe tributar su impuesto");
}

if (isNaN(edad,ingresos))
    throw new Error("Ingreso un valor, que no es un Numero");

} catch (error) {
    console.error(`Se presenta el siguiente ${error}`);
}

