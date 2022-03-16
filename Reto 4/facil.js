const validar = (s) => {
  let pila = []; //Voy a simular una pila con un arreglo

  for (let i = 0; i < s.length; i++) {
    let actual = s[i]; //Obtengo el caracter actual

    /**
     * Si viene un caracter de cierre ),},] saco el primer elemento de la pila (último del arreglo)
     * y verifico si es el caracter de apertura que corresponde (,{,[
     *
     * pila.pop(); //Obtengo el último elemento del arreglo, en la pila este es el primero
     */

    if (actual === ")" && pila.pop() != "(") return false;

    if (actual === "}" && pila.pop() != "{") return false;

    if (actual === "]" && pila.pop() != "[") return false;

    //Si actual es un caracter de apertura (, {, [ lo agrego a la pila
    if (actual != ")" && actual != "}" && actual != "]") pila.push(actual);
  }

  //Si la pila tiene algún elemento la entrada NO es válida
  if (pila.length > 0) return false;

  //Si la pila está vacía la entrada es válida
  return true;
};

console.log(validar("()")); //true
console.log(validar("()[]{}")); //true
console.log(validar("(]")); //false
console.log(validar("([)]")); //false
console.log(validar("{[]}")); //true

//Pruebas
console.log("Pruebas");
console.log(validar("{[]}")); //true
console.log(validar("{")); //false
console.log(validar("{[)")); //false
console.log(validar("{}([])")); //true

console.log(
  validar("()()((()()()()({()})()([[[[[[[[]]]]]]]][][][])(){}{})){}")
); //true
