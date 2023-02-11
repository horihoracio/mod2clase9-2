const medias="medias";
const precio_medias=50;
const codigo_medias="A1001";
const verduras="verduras";
const precio_verduras=25;
const codigo_verduras="B1010";
const carne="carne";
const precio_carne=100;
const codigo_carne="C1100";
const zapatilla="zapatillas"
const precio_zapatillas=800;
const codigo_zapatillas="D1101";
const golosinas="golosinas";
const precio_golosinas=150;
const codigo_golosinas="E1011";
let acumulador=0;

if(codigo_medias === "A1001" && codigo_zapatillas === "E1001"){
    acumulador += precio_medias + precio_zapatillas;
}
else console.log("ta mal")
