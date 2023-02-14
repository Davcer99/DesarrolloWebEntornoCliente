function calcularPrecioConIVA(precio: number): void {
  const IVA = 0.21;
  const precioIVA = precio * IVA;
  const precioTotal = precio + precioIVA;
  
  console.log(`Precio sin IVA: ${precio.toFixed(2)}`);
  console.log(`IVA: ${precioIVA.toFixed(2)}`);
  console.log(`Precio con IVA: ${precioTotal.toFixed(2)}`);
}
  
  let precioArticulo = Number(prompt("Introduce el precio del artículo:"));
  calcularPrecioConIVA(precioArticulo);
  