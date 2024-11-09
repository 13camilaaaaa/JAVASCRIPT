/**Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
la presencia de comillas y caracteres escapados. */


const regex = /\"([^\"\\]*(\\.[^\"\\]*)*)\"/;


let testStrings = [
    `Esto es una cadena`,
    '"Esta es una cadena con una comilla escapada: \\""',
    '"Cadena con barra invertida: \\\\ y comillas \\""',
    '"Cadena vacía: \\""'
];


testStrings.forEach(str => {
    let match = str.match(regex);
    if (match) {
        console.log(`Cadena encontrada: ${match[0]}`);
    } else {
        console.log("No se encontró una cadena válida.");
    }
});
