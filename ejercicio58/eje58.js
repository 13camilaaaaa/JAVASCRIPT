/**Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
zodiacal pertenece, para ello usar if_else anidados. */

function anidada() {
    let signozodiacal = "";

    let nombremes = prompt("Ingresa el nombre de un mes").toLowerCase();

    if (nombremes == "enero") {
        signozodiacal = "Capricornio";
        alert(`El signo Zodiacal de ${nombremes} es:\n| ${signozodiacal} |`);
    }
    else if (nombremes == "febrero") {
        signozodiacal = "Acuario";
        alert(`El signo Zodiacal de ${nombremes} es:\n| ${signozodiacal} |`);
    }
    else if (nombremes == "marzo") {
        signozodiacal = "Piscis";
        alert(`El signo Zodiacal de ${nombremes} es:\n| ${signozodiacal} |`);
    }
    else if (nombremes == "abril") {
        signozodiacal = "Aries";
    }
    else if (nombremes == "mayo") {
        signozodiacal = "Tauro";
        alert(`El signo Zodiacal de ${nombremes} es:\n| ${signozodiacal} |`);
    }
    else if (nombremes == "junio") {
        signozodiacal = "Geminis";
        alert(`El signo Zodiacal de ${nombremes} es:\n| ${signozodiacal} |`);
    }
    else if (nombremes == "julio") {
        signozodiacal = "Cancer";
        alert(`El signo Zodiacal de ${nombremes} es:\n| ${signozodiacal} |`);
    }
    else if (nombremes == "agosto") {
        signozodiacal = "Leo";
        alert(`El signo Zodiacal de ${nombremes} es:\n| ${signozodiacal} |`);
    }
    else if (nombremes == "septiembre") {
        signozodiacal = "Virgo";
        alert(`El signo Zodiacal de ${nombremes} es:\n| ${signozodiacal} |`);
    }
    else if (nombremes == "octubre") {
        signozodiacal = "Libra";
        alert(`El signo Zodiacal de ${nombremes} es:\n| ${signozodiacal} |`);
    }
    else if (nombremes == "noviembre") {
        signozodiacal = "Escorpio";
        alert(`El signo Zodiacal de ${nombremes} es:\n| ${signozodiacal} |`);
    }
    else if (nombremes == "diciembre") {
        signozodiacal = "Sagitario";
    }
    else{
        alert("Por favor ingresa un nombre de mes");
    }

}


anidada();