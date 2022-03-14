function AreaMaxima(alturas) {
  let izquierda = 0;
  let derecha = alturas.length - 1;
  let areaMaxima = 0;

  while (izquierda < derecha) {
    const base = derecha - izquierda;
    const alturaMinima = Math.min(alturas[izquierda], alturas[derecha]);
    const areaActual = base * alturaMinima;

    areaMaxima = Math.max(areaMaxima, areaActual);

    const alturaIzquierda = alturas[izquierda];
    const alturaDerecha = alturas[derecha];
    if (alturaIzquierda < alturaDerecha) {
      izquierda++; //Corro el valor izquierda hacia la derecha
    } else {
      derecha--; //Corro el valor derecha hacia la izquierda
    }
  }

  return areaMaxima;
}

console.log(AreaMaxima([1, 8, 6, 2, 5, 4, 8, 3, 7])); //Área = 49
console.log(AreaMaxima([1, 1])); //Área = 1
console.log(AreaMaxima([4, 3, 2, 1, 4])); //Área = 16
console.log(AreaMaxima([1, 2, 1])); //Área = 2
