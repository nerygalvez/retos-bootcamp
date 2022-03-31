const romanToInt = (s) => {
  const numerosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  //Qué números pueden estar a la izquierda del número actual y restarle en lugar de sumar
  const izquierdaPermitido = {
    I: [],
    V: ["I"],
    X: ["I"],
    L: ["X"],
    C: ["X"],
    D: ["C"],
    M: ["C"],
  };

  let numero = 0;
  let arreglo = [...s]; //Convierto la cadena en un arreglo

  arreglo.reduce((anterior, actual) => {
    if (izquierdaPermitido[actual].includes(anterior)) {
      let numeroActual = numerosRomanos[actual];
      let numeroAnterior = numerosRomanos[anterior];

      numero -= numeroAnterior; //Quito lo que había sumado
      //A 'numero' le sumo el número actual menos el valor del número a la izquierda
      numero += numeroActual - numeroAnterior;
    } else {
      numero += numerosRomanos[actual];
    }

    return actual;
  }, "");

  return numero;
};

console.log(romanToInt("III")); //3
console.log(romanToInt("IX")); //9
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MCMXCIV")); //1994
console.log(romanToInt("I")); //1
console.log(romanToInt("MMMCMXCIX")); //3999
