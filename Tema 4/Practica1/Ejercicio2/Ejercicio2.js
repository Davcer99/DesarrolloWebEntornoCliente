function calcularPrecioConIVA(precio) {
    var IVA = 0.21;
    var precioIVA = precio * IVA;
    var precioTotal = precio + precioIVA;
    console.log("Precio sin IVA: ".concat(precio.toFixed(2)));
    console.log("IVA: ".concat(precioIVA.toFixed(2)));
    console.log("Precio con IVA: ".concat(precioTotal.toFixed(2)));
}
var precioArticulo = Number(prompt("Introduce el precio del artículo:"));
calcularPrecioConIVA(precioArticulo);
