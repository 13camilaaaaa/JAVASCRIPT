/**Crea una función que tome un número como argumento y devuelva la cadena si el
número es par o impar. */

// ingresar un valor
let num = parseInt(prompt("Ingrese el numero"));

// verificar si es par o impar
const parOimpar = (num) => num % 2 === 0 ? alert(`El número es par`) : alert(`El numero es impar`);

parOimpar(num);