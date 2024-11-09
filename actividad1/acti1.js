/**Crea una función que reciba dos números como parámetros y devuelva el mayor de
ellos. */

// ingresar un valor
let a = parseFloat(prompt("Ingresa el primer numero"));
let b = parseFloat(prompt("Ingresa el segundo numero"));

// verificar cual es mayor // operador ternario
const mayor = (a, b) => a < b ? alert(`El numero ${b} es el mayor`) : alert(`El numero ${a} es el mayor`);

mayor(a, b); // argumentos