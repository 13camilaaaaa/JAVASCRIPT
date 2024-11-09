/**Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
menor o si son iguales.
 */

function diagrama() {
    let numeros = [];
    
    for(let i = 1; i <= 3; i++){
        let num = parseInt(prompt("Ingrese el valor del numero " + i + " :"));

        // agrega el numero en la array
        numeros.push(num);
    }

    
    let mayor = Math.max(...numeros);

    let menor = Math.min(...numeros);

    // verificar que hay numero iguales en la array
    let duplicados = [];
    const conteo = {};

    numeros.forEach(num =>{
        conteo[num] = (conteo[num] || 0) + 1;
    });

    // hace el conteo, si hay duplicados
    for (const num in conteo){
        if (conteo[num] > 1){
            duplicados.push(num);
        }
    }

    // imprime si hay algun duplicado 
    if(duplicados.length > 0){
        alert(`Los numeros son iguales: ( ${duplicados.join(`, `)} )`);
    }
    else{
        alert(`No hay numeros iguales`);
    }

    // mostrar el resultado 
    alert(`El numero mayor es: ( ${mayor} )\nEl numero menor es: ( ${menor} )`);
}

diagrama();