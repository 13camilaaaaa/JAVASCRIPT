/**Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
en la consola. */

let palabra = prompt("Ingrese una palabra");

const silabas = (palabra) =>{
    // const contar = /([aeiuoáéíóú])(?:[aeiouyáéíóú]?)(?![aeiouyáéíóú)])/gi;
    const contar = /[aeiou]/gi;
    const cantidad = palabra.match(contar);
    alert(cantidad);
    
    const palabras = texto.split(/\s+/);
        return palabras.length - 1;
}

silabas(palabra);