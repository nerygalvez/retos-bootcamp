const palindromo = (x) => {
  //Convierto el número a String y lo convierto en un arreglo con split
  const numero = String(x).split("");

  for (let i = 0; i < numero.length; i++) {
    let extremo = numero.length - 1 - i; //Le quito uno porque el arreglo empieza de 0
    //console.log("i = ", i);
    //console.log("extremo = ", extremo);
    if (numero[i] != numero[extremo]) return false; //Si no cumple ya NO es palíndromo
  }

  //Si llega hasta aquí es porque SÍ es palíndromo
  return true;
};

console.log(palindromo(121)); //true
console.log(palindromo(-121)); //false
console.log(palindromo(10)); //false
console.log(palindromo(14941)); //true
console.log(palindromo(81924)); //false
console.log(palindromo(112232211)); //true
console.log(palindromo(1221)); //true
