/**Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
$100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
un interés anual de 4%. Al final mostrar el saldo final y el interés pagado. */

function banco() {
    let intereses = 0;
    let saldo = 0;
    let saldofinal = 0;

    saldo = parseFloat(prompt("Ingresa el saldo del banco:"));

    if (saldo > 0 && saldo < 100000) {
        intereses = saldo * 0.3;
        saldofinal = saldo - intereses;
        alert(`El interes que debes pagar es: $ ( ${intereses} )\nCon un saldo final de: $ ( ${saldofinal} ) `);
    }
    else if (saldo > 100000) {
        intereses = saldo * 0.4;
        saldofinal = saldo - intereses;
        alert(`El interes que debes pagar es: $ ( ${intereses} )\nCon un saldo final de: $ ( ${saldofinal} ) `);
    }
    else{
        alert("El saldo ingresado no es correcto");
    }
}

banco();