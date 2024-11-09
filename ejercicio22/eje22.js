/**Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
minuto cuesta $355 pesos y un IVA 20% */

function llamada() {
    const dinero = 355;
    const IVA = 0.20;
    let minuto = 0;

    minuto = parseInt(prompt("Ingresa el numero de tiempo de la llamada:  (10/5)"));

    // El valor por los minutos
    let pagar = dinero * minuto;

    // El valor mas IVA
    let porcentaje = pagar * IVA;

    // El valor Total
    let pagarTotal = porcentaje + pagar;

    // mostrar resultado
    alert(`El valor es:  $ ( ${pagar} )\nEl IVA es de:  $ ( ${porcentaje} )\nCon un total de:  $ ( ${pagarTotal} )`)
}

llamada();