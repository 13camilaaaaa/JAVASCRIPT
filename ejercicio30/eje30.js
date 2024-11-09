/**. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
caracteres, y al menos una mayúscula, una minúscula, y un dígito. */

// Longitud entre 8 y 12 caracteres.
// Al menos una letra mayúscula.
// Al menos una letra minúscula.
// Al menos un dígito.

function validarContrasena(contrasena) {
    // Comprobar longitud
    if (contrasena.length < 8 || contrasena.length > 12) {
        return "La contraseña debe tener entre 8 y 12 caracteres.";
    }

    // Expresiones regulares para comprobar los requisitos
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneMinuscula = /[a-z]/.test(contrasena);
    const tieneDigito = /\d/.test(contrasena);

    // Comprobar si se cumplen todas las condiciones
    if (!tieneMayuscula) {
        return alert("La contraseña debe contener al menos una letra mayúscula.");
    }
    if (!tieneMinuscula) {
        return alert("La contraseña debe contener al menos una letra minúscula.");
    }
    if (!tieneDigito) {
        return alert("La contraseña debe contener al menos un dígito.");
    }

    return alert("La contraseña es fuerte.");
}

// Ejemplo de uso
const contrasena = prompt("Ingresa una contraseña:\nPara verificar su segurida");
validarContrasena(contrasena);
