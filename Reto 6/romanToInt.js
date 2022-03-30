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

const romanToInt = (s) => {
  let numero = 0;
  let arreglo = [...s]; //Convierto en arreglo la cadena

  arreglo.reduce((anterior, actual) => {
    console.log("Actual: ", actual, " Anterior: ", anterior);

    if (izquierdaPermitido[actual].includes(anterior)) {
      numero += numerosRomanos[actual] - numerosRomanos[anterior];
    } else {
      numero += numerosRomanos[actual];
    }

    return actual;
  }, "");

  return numero;
};

//console.log(romanToInt("III")); //3
console.log(romanToInt("IX")); //9
