const longest = (s) => {
  //Creo una función para saber si una cadena es palíndromo o no
  const esPalindromo = (cadena) => {
    for (let izquierda = 0; izquierda < cadena.length; izquierda++) {
      let derecha = cadena.length - 1 - izquierda; //Le quito uno porque el arreglo empieza de 0
      if (cadena[izquierda] != cadena[derecha]) return false; //Si no cumple ya NO es palíndromo
    }

    //Si llega hasta aquí es porque SÍ es palíndromo
    return true;
  };

  //El palíndromo más pequeño sería el primer caracter de la cadena
  //let palindromo = s[0];
  let longestPalindromo = "";

  //Me indica en qué caracter de izquierda a derecha estoy dentro de la cadena
  let izquierda = 0;
  let iterador = 0;

  let temp = "";

  while (izquierda < s.length) {
    temp = temp + s[iterador];

    //Veo si la cadena es palíndromo y si es más grande que la actual
    if (esPalindromo(temp) && temp.length > longestPalindromo.length)
      longestPalindromo = temp;

    iterador++;
    if (iterador == s.length) {
      //Si ya me pasé del último caracter a la derecha
      izquierda++; //Me corro un caracter a la derecha
      iterador = izquierda; //Ahora itero desde donde empieza izquierda
      temp = ""; //Vacío la cadena temporal para buscar nuevos palíndromos
    }
  }

  return longestPalindromo;
};

/*
console.log(longest("babad")); //Output: "bab" Note: "aba" is also a valid answer.
console.log(longest("cbbd")); //Output: "bb"
console.log(longest("a")); //Output: "a"
console.log(longest("ac")); //Output: "a"

console.log(
  longest(
    "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
  )
);
*/
/*
const esPalindromo = (cadena) => {
  let palindromo = "";

  for (let iterador = 0; iterador < cadena.length; iterador++) {
    for (let izquierda = iterador; izquierda < cadena.length; izquierda++) {
      let derecha = cadena.length - 1 - izquierda; //Le quito uno porque el arreglo empieza de 0
      //if (cadena[izquierda] != cadena[derecha]) return false; //Si no cumple ya NO es palíndromo
      if (cadena[izquierda] === cadena[derecha]) {
        let temp = cadena.slice(iterador, derecha + 1);
        palindromo = temp.length > palindromo.length ? temp : palindromo;
      }
    }
  }

  return palindromo;
};
*/

/**
 * Esta es una solución más óptima, la encontré en internet
 *
 * @param {*} s
 * @returns
 */
const esPalindromo = (s) => {
  let res = "";
  resLen = 0;

  for (let i = 0; i < s.length; i++) {
    //Verificamos cadenas impares
    //i es nuestra posición central actualmente
    //Creo punterores para moverme a la izquierda(left o l) y a la derecha (right o r)
    let l = i;
    let r = i;

    //Mientras mis punteros de izquierda y derecha estén dentro de los límites
    //y mientras sea un palíndromo (el caracter a la izquierda y el caracter de la derecha tienen que ser iguales)

    console.log("******************************* i = ", i);

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      console.log("Izquierda = ", l, " Derecha: ", r);
      console.log("s[l] = ", s[l], " s[r] = ", s[r]);
      console.log("r - l + 1 > resLen ------>", r - l + 1, " > ", resLen);
      //Verifico si el tamaño de este palíndromo es mayor que la longitud de mi palíndromo actual ('res')
      if (r - l + 1 > resLen) {
        //Actualizo mi palíndromo
        res = s.slice(l, r + 1); //r + 1 porque slice no toma en cuenta la última posicíon
        resLen = r - l + 1;
      }

      l -= 1; //Desplazo el puntero izquierdo hacia la izquierda
      r += 1; //Desplazox mi puntero derecho hacia la derecha

      console.log("Izquierda = ", l, " Derecha: ", r);
      console.log("s[l] = ", s[l], " s[r] = ", s[r]);
      console.log("r - l + 1 > resLen ------>", r - l + 1, " > ", resLen);
    }

    //Verificamos cadenas pares
    //i es nuestra posición central actualmente
    //Creo punterores para moverme a la izquierda(left o l) y a la derecha (right o r)
    l = i;
    r = i + 1; //Ahora empiezo un valor más a la derecha

    //Mientras mis punteros de izquierda y derecha estén dentro de los límites
    //y mientras sea un palíndromo (el caracter a la izquierda y el caracter de la derecha tienen que ser iguales)
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      //Verifico si el tamaño de este palíndromo es mayor que la longitud de mi palíndromo actual ('res')
      if (r - l + 1 > resLen) {
        //Actualizo mi palíndromo
        res = s.slice(l, r + 1); //r + 1 porque slice no toma en cuenta la última posicíon
        resLen = r - l + 1;
      }

      l -= 1; //Desplazo el puntero izquierdo hacia la izquierda
      r += 1; //Desplazox mi puntero derecho hacia la derecha
    }
  }

  return res;
};

console.log(esPalindromo("babad"));
/*
console.log(
  esPalindromo(
    "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
  )
);
*/
