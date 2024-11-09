/**Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
frase invertida.
 */

// Si lo puedes imaginar lo puedes programar 


function frase() {
    var frase = "Si lo puedes imaginar, lo puedes programar";
    var fraseInvertida = "";

    for(var i = frase.length-1; i>=0; i--){
        fraseInvertida += frase[i];
    }

    alert(`Frase invertida:\n ${fraseInvertida}`);
}


frase();