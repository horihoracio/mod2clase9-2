const medias = "medias";
const precio_medias = 50;
const codigo_medias = "A1001";
const verduras = "verduras";
const precio_verduras = 25;
const codigo_verduras = "B1010";
const carne = "carne";
const precio_carne = 100;
const codigo_carne = "C1100";
const zapatilla = "zapatillas"
const precio_zapatillas = 800;
const codigo_zapatillas = "D1101";
const golosinas = "golosinas";
const precio_golosinas = 150;
const codigo_golosinas = "E1011";
let acumulador = 0;

console.log("primer ejemplo");
if (codigo_medias === "A1001" && codigo_zapatillas === "E1001") {
    acumulador += precio_medias + precio_zapatillas;
    console.log("El total de su compra es: $" + acumulador);
}
else console.log("Alguno de los codigos de los productos antes marcado es incorrecto. Por favor, intente cargar el producto nuevamente.");

console.log("segundo ejemplo");
if (codigo_verduras === "B1010" && codigo_carne === "C1100" && codigo_golosinas === "E1011") {
    acumulador += precio_verduras + precio_carne + precio_golosinas;
    console.log("El total de tu compra es $"+acumulador+" gracias por tu compra!");
}

// QUEDA POR VER ESTE ULTIMO EJEMPLO
// console.log("tercer ejemplo");
// if (codigo_golosinas === "pera") {
//     acumulador = + precio_golosinas;
//     console.log("tus caramelos valen $" + precio_golosinas);
// } 
// else if (codigo_golosinas === "null"){
//     console.log("el codigo es incorrecto ura");
// }
// else(codigo_golosinas === "E1011"){
//     acumulador =+ precio_golosinas;
//     console.log("esta todo correcto");
// }






