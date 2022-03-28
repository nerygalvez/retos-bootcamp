function profit(precios) {
  let ganancia = 0;
  let compra = precios[0];

  for (let i = 1; i < precios.length; i++) {
    let venta = precios[i];

    if (venta < compra) {
      compra = venta;
    }

    ganancia = Math.max(ganancia, venta - compra);
  }

  return ganancia;
}

console.log(profit([7, 1, 5, 3, 6, 4]));
console.log(profit([7, 6, 4, 3, 1]));
