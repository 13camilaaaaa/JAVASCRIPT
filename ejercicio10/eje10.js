/**La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
ingredientes para cada tipo de pizza aparecen a continuación.
a. Ingredientes vegetarianos: Pimiento y tofu.
b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
función de su respuesta le muestre un menú con los ingredientes disponibles para que
elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
o no y todos los ingredientes que lleva.*/




// Función principal para elegir pizza
function elegirPizza() {
    let tipoPizza = prompt("¿Quieres una pizza vegetariana? (sí/no)");
    let ingredientes;

    if (tipoPizza.toLowerCase() === "si") {
        ingredientes = ["Pimiento", "Tofu"];
        tipoPizza = "vegetariana";
    } else if (tipoPizza.toLowerCase() === "no") {
        ingredientes = ["Pepperoni", "Jamón", "Salmón"];
        tipoPizza = "no vegetariana";
    } else {
        alert("Opción no válida. Por favor, elige 'sí' o 'no'.");
        return;
    }

    // Mostrar menú de ingredientes
    let mensajeIngredientes = "Elige un ingrediente adicional: Ej (1)\n";
    for (let i = 0; i < ingredientes.length; i++) {
        mensajeIngredientes += `${i + 1}. ${ingredientes[i]}\n`;
    }

    // ingresa lo que desea agregar
    let eleccion = parseInt(prompt(mensajeIngredientes)) - 1;

    if (eleccion < 0 || eleccion >= ingredientes.length) {
        alert("Opción no válida. Por favor, elige un número del menú.");
        return;
    }

    // Mostrar resultado final
    let ingredienteElegido = ingredientes[eleccion];
    alert(`Has elegido una pizza ${tipoPizza} con los siguientes ingredientes:\nMozzarella, Tomate, ${ingredienteElegido}`);
}

// Llamar a la función
elegirPizza();