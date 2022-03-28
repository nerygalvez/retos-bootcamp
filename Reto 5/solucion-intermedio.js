function zigZag(s, numFilas) {
  if (numFilas == 1 || s.length == 1) return s;

  //matrix = [ [], [], [], ...]
  const matrix = [...new Array(numFilas)].map(() => []);

  let fila = 0;
  let orden = "desc"; //Empiezo descendentemente

  //Recorro cada uno de los caracteres
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i); //Obtengo el caracter en la posición i
    matrix[fila].push(c);

    if (orden == "desc") {
      fila++; //Si voy para abajo me muevo abajo en las filas

      if (fila === numFilas - 1) orden = "asc";
    } else {
      fila--; //Si voy para arriba me muevo arriba en las filas
      if (fila === 0) orden = "desc";
    }
  }

  //Hasta aquí tengo la matriz de esta forma
  //[ [P, A, H,N] , [A, P, L, S, I, I, G], [Y, I, R]]

  //Convierto la matrix en una cadena
  //Aplano matrices anidadas usando 'flat'
  return matrix.flat().join("");

  //Otra forma
  /*
  return matrix.reduce((anterior, actual) => {
    anterior += actual.join("");
    return anterior;
  }, "");
  */
}

console.log(zigZag("PAYPALISHIRING", 3));
console.log(zigZag("PAYPALISHIRING", 4));
