/**los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.
 */

// Función para determinar el grupo
function determinarGrupo() {
    // Solicitar nombre y sexo al usuario
    const nombre = prompt("Por favor, ingresa tu nombre:").trim();
    const sexo = prompt("Por favor, ingresa tu sexo (M/F):").trim().toUpperCase();

    // Obtener la primera letra del nombre
    const primeraLetra = nombre.charAt(0).toUpperCase();

    // Inicializar variable para el grupo
    let grupo = "";

    // Determinar el grupo
    if (sexo === "F" && primeraLetra < 'M') {
        grupo = "A";  // Mujer con nombre anterior a M
    } else if (sexo === "M" && primeraLetra > 'N') {
        grupo = "A";  // Hombre con nombre posterior a N
    } else {
        grupo = "B";  // Resto
    }

    // Mostrar el resultado
    alert(`Perteneces al grupo ${grupo}.`);
}

// Llamar a la función
determinarGrupo();
