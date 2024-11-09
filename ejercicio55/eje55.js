/**En una tienda de HELADO da un descuento por compra a sus clientes con membresía
dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
20% de descuento. */

// Descuentos depende de la membresia
// Tipo A = 10%
// Tipo B = 15%
// Tipo C = 20%

function heladeria() {
    let totaldescuento = 0;
    let descuento = 0;

    
    while (true) {
    
        // inicio del programa
        let inicio = prompt("Bienvenidos a la heladería\nDesea validar el precio de su compra: (si/no)").toLowerCase();

        // final del programa
        if (inicio === "no") {
            break;
        }

        // inicializar
        if (inicio === "si") {

            // cantidad de helados
            let cantidad = parseInt(prompt("Ingrese el numero de helados que deseas comprar: Ej (3)"));

            // validar que se un numero y positivo
            if (isNaN(cantidad) || cantidad < 0) {
                alert("Por favor, Ingrese una cantidada valida");
                continue;
            }

            let total = 0;

            // ingresa el valor de cada helado
            for(let i = 1; i <= cantidad; i++){
                let valor = parseInt(prompt("Ingresa el valor del Helado "+i));

                // valor de todos los helados
                total += valor;

                // validar que sean numeros y positivos
                if (isNaN(valor) || valor < 0) {
                    alert("Por favor, Ingrese una Valor valido");
                    continue;
                }
            }

            let eleccion = prompt("Eres un cliente Membresia (si/no)"). toLowerCase();

            // cliente sin membresia
            if (eleccion === "no"){
                alert(`Valor a pagar es: $ (${total})`)
            }

            // cliente con membresia
            if (eleccion === "si") {
                let tipoMembresia = prompt("Ingrese el tipo de Membresia\nTipo (A - B - C)").toLowerCase();

                if (tipoMembresia === "a") {
                    descuento = total * 0.10;
                    totaldescuento = total - descuento;
                    alert(`Por ser cliente con membresia Tipo ${tipoMembresia.toLocaleUpperCase()}\nTe brinderemos un descuento del ( 10% )\nValor total es: $ ( ${totaldescuento} )`);
                }
                else if (tipoMembresia === "b") {
                    descuento = total * 0.15;
                    totaldescuento = total - descuento;
                    alert(`Por ser cliente con membresia Tipo ${tipoMembresia.toLocaleUpperCase()}\nTe brinderemos un descuento del ( 15% )\nValor total es: $ ( ${totaldescuento} )`);
                }
                else if (tipoMembresia === "c") {
                    descuento = total * 0.20;
                    totaldescuento = total - descuento;
                    alert(`Por ser cliente con membresia Tipo ${tipoMembresia.toLocaleUpperCase()}\nTe brinderemos un descuento del ( 20% )\nValor total es: $ ( ${totaldescuento} )`);
                }
                else{
                    alert("Tipo de membresia no existe");
                }
            }
        }
    }

}

heladeria();