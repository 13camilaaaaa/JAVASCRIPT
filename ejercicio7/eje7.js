/** los tramos impositivos para la declaración de la renta en un determinado país son:
a. entre 10.000 y 20.000 ---- 5%
b. entre 20.000 y 35.000 ---- 10%
c. entre 35.000 y 60.000 ---- 20%
d. más de 60.000 ---- 45%
escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
de impositivo que le corresponde.*/

let valor = 0;

    // ingresar los valores
    valor = prompt("Ingresa tu renta Anual:");

    let impositivo = 0;

    // verificar de que sea un numero
    while (isNaN(valor)) {
        alert("No es un Numero");
        valor = prompt("Ingresa tu renta Anual:");
    }


    if (valor >= 10000 && valor < 20000) {
        impositivo = 0.05;
    }
    else if (valor >= 20000 && valor < 35000) {
        impositivo = 0.1;
    }
    else if (valor >= 35000 && valor < 60000) {
        impositivo = 0.2;
    }
    else if (valor > 60000){
        impositivo = 0.45;
    }
    else {
        impositivo = 0;
    }

    // mostrar resultado
    alert(`Presentas un impositivo que corresponde al ( ${impositivo} )%\nResultado total: ( ${valor*impositivo} )`);