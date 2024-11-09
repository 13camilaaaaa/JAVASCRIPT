/**En una determinada empresa, sus empleados son evaluados al final de cada año. Los
puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando,
traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados
pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas.
A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación.
a. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la
puntuación del nivel.
b. Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más
Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento,
así como la cantidad de dinero que recibirá el usuario. */

function evaluar(puntuación) {
    
    const recibira = 2.400;
    let nivel;
    let dinero;

    if (puntuación === 0) {
        nivel = "Inaceptable";
        dinero = 0;
    }
    else if (puntuación === 0.4) {
        nivel = "Aceptable";
        dinero = puntuación * recibira;
    }
    else if (puntuación >= 0.6) {
        nivel = "Meritorio";
        dinero = puntuación * recibira;
    }
    else{
        return "Puntuación inválida. Debe ser 0.0, 0.4 o 0.6 o más.";
    }
    // toFixed(2) determina los decimales a tener
    return(`Nivel de rendimiento: ${nivel}\nCantidad de dinero: ${dinero.toFixed(2)}€`);
}

const usuario = parseFloat(prompt("Introduce tu puntuación (0.0, 0.4, 0.6 o más):"));

const resultado = evaluar(usuario);
alert(resultado);