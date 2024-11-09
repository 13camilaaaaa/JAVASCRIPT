/**. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
monto total de la venta, según la cantidad de artículos solicitados durante el día. */

// libros = 10.000
// cuadernos = 7.550
// lapiceros = 5.550

function papelería() {
    const libros = 10000;
    const cuadernos = 7550;
    const lapiceros = 5550;
    let productos;

    let total = 0;

    let inicio;

    do {

        inicio = prompt("Deseas algun producto de la papeleria?  (si/no)").toLowerCase();

        if (inicio == "si") {
            productos = ["Libros", "Cuadernos", "Lapiceros"];
        }

            // Mostrar menú de ingredientes
            let mensaje = "Elige un producto: Ej (1)\n";
            for (let i = 0; i < productos.length; i++) {
                mensaje += `${i + 1}. ${productos[i]}\n`;
            }
            // ingresa lo que desea agregar
            let eleccion = parseInt(prompt(mensaje)) -1;

            // ingresa la cantidad que desea del articulo
            let cantidad = parseInt(prompt("Ingresa la cantidad de articulos"));

            // 
            if (eleccion < 0 || eleccion > productos.length) {
                alert("Opción no válida. Por favor, elige un número del catalogo.");
                return;
            }
            if (eleccion == 0){
                total = libros * cantidad;
            }
            else if (eleccion == 1){
                total = cuadernos * cantidad;
            }
            else if (eleccion == 2){
                total = lapiceros * cantidad;
            }

            // mostrar resultado
            alert(`Has comprado:  ( ${cantidad} ) ${productos[eleccion]} con un total de:  ( ${total} ) `);

    } while (inicio != "no");
    alert("Feliz dia");


}

papelería();