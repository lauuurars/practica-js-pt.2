let precio = 100;
let descuento = 20; 

const totalDescuento = precio * (descuento / 100); //encontramos el descuento dividiendo entre 100

const precioFinal = precio - totalDescuento; // restamos el precio (100) - el descuento total (20) = 80

console.log(totalDescuento);
console.log(precioFinal);