/**Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
constante el valor de una moneda. */



const VALOR_DOLAR = 0.00027; // 1 peso colombiano = 0.00027 dólares
const VALOR_EURO = 0.00025;   // 1 peso colombiano = 0.00025 euros


function convertirMoneda(pesosColombianos) {
    const dolares = pesosColombianos * VALOR_DOLAR;
    const euros = pesosColombianos * VALOR_EURO;

    return {
        dolares: dolares.toFixed(2), // Formatear a 2 decimales
        euros: euros.toFixed(2)      // Formatear a 2 decimales
    };
}


const pesosColombianos = parseInt(prompt("Ingrese la cantidad a convertir: ")); // Cantidad en pesos colombianos
const conversion = convertirMoneda(pesosColombianos);
alert(`$${pesosColombianos} son ${conversion.dolares} USD y ${conversion.euros} EUR`);