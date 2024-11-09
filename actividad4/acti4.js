/**Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
cortas menores de 5 caracteres). */

// ingresar una palabra
let palabra = prompt("Ingresa una palabra");

// verificar si es larga o corta
const calcular = () => palabra.length > 5 ? alert("palabra larga") : alert("palabra corta");

calcular(palabra);