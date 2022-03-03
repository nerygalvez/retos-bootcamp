const teclado = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const letterCombinations = (digitos = "234") => {
  if (!digitos) {
    return [];
  }

  let resultado = teclado[digitos[0]];

  for (let i = 1; i < digitos.length; i++) {
    const letras = teclado[digitos[i]];

    resultado = resultado.reduce((anterior, letra1) => {
      return anterior.concat(
        letras.map((letra2) => {
          return letra1 + letra2;
        })
      );
    }, []); //Inicialmente el valor anterior es un arreglo vacío []
  }

  return resultado;
};

console.log(letterCombinations("234"));
