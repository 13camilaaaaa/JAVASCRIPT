/**Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
depósito.
a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
b. Volumen = PI *(radio^2)* H (altura del depósito).
El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
en segundos.*/


function calcularTiempoLlenado(radio, altura, caudal) {
    
    let volumen = Math.PI * Math.pow(radio, 2) * altura;
    
    let tiempoSegundos = volumen / caudal;

    let tiempoMinutos = tiempoSegundos / 60;

    return tiempoMinutos;
}


let radio = parseFloat(prompt("Ingresa el Radio en centímetros"));      // Radio en centímetros
let altura = parseFloat(prompt("Ingresa la Altura en centímetros")); // Altura en centímetros
let caudal = parseFloat(prompt("Ingresa el Caudal en litros por segundo"));     // Caudal en litros por segundo

let tiempoLlenadoMinutos = calcularTiempoLlenado(radio, altura, caudal);
confirm("El tiempo estimado para llenar el depósito es: " + tiempoLlenadoMinutos.toFixed(2) + " minutos");


