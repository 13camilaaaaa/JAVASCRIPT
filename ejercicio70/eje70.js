/**Escribir un programa que almacene la cadena de caracteres contraseña en una variable, pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta. */


const contrasenaCorrecta = "contraseña";

function solicitarContrasena() {
    let contrasenaUsuario = "";


    while (contrasenaUsuario !== contrasenaCorrecta) {
        contrasenaUsuario = prompt("Introduce la contraseña:");
        
        if (contrasenaUsuario === contrasenaCorrecta) {
            alert("Contraseña correcta. Acceso concedido.");
        } else {
            alert("Contraseña incorrecta. Inténtalo de nuevo.");
        }
    }
}

solicitarContrasena();
