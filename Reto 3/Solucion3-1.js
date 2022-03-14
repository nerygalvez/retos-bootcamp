/**
 * Primera solución y no tan óptima
 * 
 * @param {*} x 
 * @returns 
 */
function palindromo(x) {
  const str = "" + x; //Convierto el número a string
  return str === str.split("").reverse().join("");
}

/**
 * Segunda solución y un poco más óptima
 * 
 * @param {*} x 
 * @returns 
 */
function palindromo(x) {
  if (x < 0) return false; //Si es negativo NO es palíndromo

  const str = "" + x;

  const longitud = str.length;

  for (let izquierda = 0; izquierda < longitud; izquierda++) {
    const derecha = longitud - 1 - izquierda; //Le quito uno porque el arreglo empieza de 0

    if (str[izquierda] != str[derecha]) return false; //Ya no es un palíndromo
  }

  return true; //Sí es un palíndromo
}

console.log(palindromo(121)); //true
console.log(palindromo(-121)); //false
console.log(palindromo(10)); //false
console.log(palindromo(14941)); //true
console.log(palindromo(81924)); //false
console.log(palindromo(112232211)); //true
console.log(palindromo(1221)); //true
