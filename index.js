const medias = "medias";
let precio_medias = 50;
const codigo_medias = "A1001";
const verduras = "verduras";
let precio_verduras = 25;
const codigo_verduras = "B1010";
const carne = "carne";
let precio_carne = 100;
const codigo_carne = "C1100";
const zapatilla = "zapatillas"
let precio_zapatillas = 800;
const codigo_zapatillas = "D1101";
const golosinas = "golosinas";
let precio_golosinas = 150;
const codigo_golosinas = "E1011";
let acumulador = 0;
const descuento_efectivo= 0.8;
const recargo_cuotas_3_6= 1.22;
const recargo_cuotas_12= 1.40;



console.log("Primer Ejercicio");
console.log("Ejemplo 1");
if (codigo_medias === "A1001" && codigo_zapatillas === "E1001") {
    acumulador += precio_medias + precio_zapatillas;
    console.log("El total de su compra es: $" + acumulador);
}
else console.log("Alguno de los codigos de los productos antes marcado es incorrecto. Por favor, intente cargar el producto nuevamente.");

console.log("Ejemplo 2");
if (codigo_verduras === "B1010" && codigo_carne === "C1100" && codigo_golosinas === "E1011") {
    acumulador += precio_verduras + precio_carne + precio_golosinas;
    console.log("El total de tu compra es $"+acumulador+" gracias por tu compra!");
}

console.log("Ejemplo 3");
if (codigo_golosinas === "pera") {
    acumulador = + precio_golosinas;
    console.log("tus caramelos valen $" + precio_golosinas);
} 
else if (codigo_golosinas === "null"){
    console.log("el codigo es incorrecto, proba de vuelta");
}
else if(codigo_golosinas === "E1012")
{
    acumulador =+ precio_golosinas;
}
else(codigo_golosinas === codigo_golosinas)
{
    acumulador += precio_golosinas;
    console.log("el total de tu compra es: $"+precio_golosinas);
}
acumulador= 0;
console.log("Ejercicio 2")
if(codigo_carne === codigo_carne && codigo_golosinas === codigo_golosinas && codigo_verduras === codigo_verduras){
    acumulador += precio_carne+precio_golosinas+(precio_verduras*3);
    console.log("Carne x1Kg $"+precio_carne);
    console.log("Bolsa de chupetines Pop x1 Unidad $"+precio_golosinas);
    console.log("Tomate x3Kg $"+precio_verduras*3);
    console.log("El monto total es: $"+acumulador);
    console.log("El precio a abonar de su compra en efectivo es: $"+acumulador*descuento_efectivo);
    console.log("El precio a abonar en 3 cuotas seria un monto final de: $"+acumulador*recargo_cuotas_3_6+" y el valor de cada cuota seria de: $"+(acumulador*recargo_cuotas_3_6)/3);
    console.log("El precio a abonar en 6 cuotas seria un monto final de: $"+acumulador*recargo_cuotas_3_6+" y el valor de cada cuota seria de: $"+(acumulador*recargo_cuotas_3_6)/6);
    console.log("El precio a abonar en 12 cuotas seria un monto final de: $"+acumulador*recargo_cuotas_12+" y el valor de cada cuota seria de: $"+(acumulador*recargo_cuotas_12)/12);
}
