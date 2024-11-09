/**En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos
de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. ¿La
cantidad de gramos de harina para hacer el bizcocho es?
 */

// son 100 gramos de harina * cada 10 gramos de cacao

function bizcocho() {
    const harina = 10;
    const cacao = 20;

    // calcular los gramos de harina
    let resultado = harina * cacao;
    const nueces = 100;


    // mostrar resultado 
    alert(`En esta receta se necesita ( ${resultado} ) gramos de harina\nY ( ${resultado / nueces} ) puños de nueces`);
}

bizcocho();