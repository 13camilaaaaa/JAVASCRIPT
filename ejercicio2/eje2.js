/**escribir un programa que almacene la cadena de caracteres contraseña de una variable,
pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.  */


// Almacenar la contraseña en una variable
let contraseña = "Contraseña123";

// Función para validar si la entrada es alfanumérica
function esAlfanumerico(input) {
    return /^[a-zA-Z0-9]+$/.test(input);
}

// Preguntar al usuario por la contraseña
let usuarioInput = prompt("Introduce la contraseña:");

// Ventana de error
while (contraseña.toLowerCase() != usuarioInput.toLowerCase()) {
    alert("Contraseña incorrecta");
    usuarioInput = prompt("Introduce la contraseña:");
}


    // Comparar la contraseña sin tener en cuenta mayúsculas y minúsculas
    if (usuarioInput.toLowerCase() == contraseña.toLowerCase()) {
        alert("La contraseña es correcta.");
    }