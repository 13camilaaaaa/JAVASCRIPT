/**Calcule el mayor de tres números, permitiendo leer 3 valores diferentes. */


function Calcular() {
    let numeros = [];
    
    for(i = 1; i <= 3; i++){
        let num = parseInt(prompt("Ingrese el valor del numero " + i + " :"));
        // agrega el numero en la array
        numeros.push(num);
    }

    let mayor = Math.max(...numeros);

    alert(`El numero mayor es: ( ${mayor} )`)
}

Calcular();