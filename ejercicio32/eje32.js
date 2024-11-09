/**Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
producto y el total de la compra. */

// Función para calcular el precio con descuento
function calcularPrecioConDescuento(precio, descuento) {
    return precio - (precio * descuento);
}

// Inicialización de variables
const productos = 5;
const descuento5 = 0.05; // 5%
const descuento2 = 0.02; // 2%
let totalCompra = 0;
let precios = [];

// Ciclo para ingresar los precios de los productos
for (let i = 1; i <= productos; i++) {
    const precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
    
    let precioConDescuento;

    // Aplicar descuentos según el número de producto
    if (i === 1 || i === 2) {
        precioConDescuento = calcularPrecioConDescuento(precio, descuento5);
    } else if (i === 3 || i === 4) {
        precioConDescuento = calcularPrecioConDescuento(precio, descuento2);
    } else {
        precioConDescuento = precio; // Sin descuento para el 5to producto
    }

    precios.push(precioConDescuento);
    totalCompra += precioConDescuento; // Sumar al total de la compra
}

// Mostrar resultados
for (let i = 0; i < precios.length; i++) {
    alert(`El precio a pagar por el producto ${i + 1} es: ${precios[i].toFixed(2)} USD`);
}

    alert(`El total de la compra es: ${totalCompra.toFixed(2)} USD`);
