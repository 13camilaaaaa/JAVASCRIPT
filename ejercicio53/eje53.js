/**Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
de: Iva, Subtotal y Total de la compra de los artículos. */

function productos() {
    const IVA = 0.10;
    let total = 0;

    while (true) {
        
        // iniciar el programa
        let inicio = prompt("¿Deseas calcular el total de la compra?  (si/no)").toLowerCase();

        // finalizar
        if (inicio === "no") {
            break
        }

        // inicializado
        if (inicio === "si") {

            // intruduccio del valor de los 5 productos
            for (let i = 1; i <= 2; i++){
                let productos = parseInt(prompt("Ingrese el valor del producto "+i));
                total += productos;

                // Validar si el consumo es un número válido
                if (isNaN(productos) || productos < 0) {
                alert("Por favor, ingrese un monto válido.");
                continue; // Volver al inicio del bucle
            }
            }

            

            // calculando el IVA
            let subtotal = total * IVA;

            // calcular el total de la compra
            let totalCompra = total + subtotal;

            // mostrar el resultado
            alert(`El IVA es: $(${subtotal})\nEl subtotal es: $(${total})\nEl total de la compra es: $(${totalCompra})`);
        }
    }

    alert("¡Feliz dia!");
}

productos();