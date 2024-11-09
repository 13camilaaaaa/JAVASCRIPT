/**Escribir un programa que lea 4 números y calcule la media. */


function calculo() {
    let numero = 0;
    let suma = 0;
    
    // ingresa los 4 valores 
    for (i=1; i <= 4; i++){
        numero = parseInt(prompt("Ingresa un numero: "+i));  
        // suma todas los valores       
        suma += numero;
    }

    // realiza el promedio de la suma
    let media = suma / 4;

    // muestra el resultado
    alert (`La media es:  ( ${media} )`);
}


calculo();