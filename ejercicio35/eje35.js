/** Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
Después de pagar le sobran $91000. ¿Cuánto dinero tenía? */

// cada caja de llaves tuvo un valor de = 11.500 * 5
// la bomba tuvo un valor de = 1´168.000
// cada caja de pernos tuvo un valor de = 87.000 * 3
// le sobra 91.000

function dinero() {

    // ingresamos los datos 
    const sobra = 91000;
    const bomba = 1168000;
    const pernos = 87000 * 3;
    const llaves = 11500 * 5;

    // mostramos el resultado 
    alert(`En dinero tenia $ ( ${sobra + bomba + pernos + llaves} )`);
}

dinero();