/**Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5
* 5, nos debe mostrar el resultado para las demás multiplicaciones */

let tabla = parseInt(prompt("Ingrese tabla de multiplicar que desea"));
let inicio = parseInt(prompt("Ingrese de donde inicia la tabla"));
let final = parseInt(prompt("Ingresa en donde termina la tabla"));

(() => {
    for (let i = inicio; i <= final; i++){ 
        if (i === 5) {
            continue;
        }
        alert(`${tabla} x ${i} =  ${tabla * i}`);
    }
})(tabla, inicio, final); // fuction anonima