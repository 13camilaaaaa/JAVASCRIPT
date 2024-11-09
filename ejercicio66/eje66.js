/**Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
dura la inversión. */

function programa() {

    const invertir = parseFloat(prompt("Ingrese la cantidad a invertir"));
    const interesAnual = parseFloat(prompt("Ingrese el interés anual"));
    const anos = parseInt(prompt("Ingrese el número de años"));

    while (isNaN(invertir) || isNaN(interesAnual) || isNaN(anos) || anos <= 0) {
        alert("Por favor, ingrese valores válidos.");
        continue;
    }

    console.log("Año\tCapital");
    for (let año = 1; año <= anos; año++) {
        const capitalObtenido = invertir * Math.pow((1 + interesAnual), año);
        console.log(`${año}\t${capitalObtenido.toFixed(2)}`);
    }
}

programa();