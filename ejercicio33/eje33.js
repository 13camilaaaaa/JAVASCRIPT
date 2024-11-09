/**Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos. */


function Calcularedad() {
    let edadhiijo = 0;
    let edadmadre = 0 ;

    // ingresar la edad del hijo
    edadhiijo = parseInt(prompt("Ingresa la edad del hijo: Ej (20)"));

    // ingresa la edad de la madre
    edadmadre = parseInt(prompt("Ingresa la edad de la madre"));

    // mostrar resultado
    alert(`La edad de la madre era de ${edadmadre - edadhiijo}`);
}

Calcularedad();