/**Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
años que ha cumplido (desde 1 hasta su edad). */


function edad() {
    let edad = parseInt(prompt("Ingrese su edad: "));

    for (let i = 1; i <= edad; i++) {
        console.log(`Ha cumplido ${i} años`);
    }
}

edad();