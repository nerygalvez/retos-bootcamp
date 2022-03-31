const isHappy = (n) => {
  let numeroFeliz = n;
  let ultimoNumeroFeliz = null; //Cuando ultimoNumeroFeliz sea igual al actual voy a saber que se encicló y
  //por lo tanto NO tengo un número feliz
  let numerosGenerados = 0; //Cada 8 iteraciones verifico 'ultimoNumeroFeliz'. Empiezo desde 0 porque tengo 0 numeros generados

  while (numeroFeliz != 1) {
    let arreglo = [];
    let numero = numeroFeliz;
    let cantidadDigitos = String(numero).length; //Obtengo cuántos digitos conforman el número

    for (let i = 0; i < cantidadDigitos; i++) {
      let digito = numero % 10;
      numero = numero / 10;
      let parteDecimal = numero % 1; //tomo una posible parte decimal de la división
      numero = numero - parteDecimal; //le resto la posible parte decimal para que quede un número entero
      //numero = (numero / 10) | 0; //Esto hace lo que tengo arriba, pero no entiendo cómo
      arreglo.unshift(digito); //Agrego el digito al inicio del arreglo
    }

    //Sumo los cuadrados de cada digito que conforman el número
    numeroFeliz = arreglo.reduce((anterior, actual) => {
      return anterior + actual ** 2;
      //return anterior + Math.pow(actual, 2);
    }, 0);

    ultimoNumeroFeliz =
      ultimoNumeroFeliz == null ? numeroFeliz : ultimoNumeroFeliz; //Si es el primer número generado

    //Verifico si se encicló
    numerosGenerados++;

    if (numerosGenerados == 9) {
      // console.log("----------------- Verifico si se encicló -----------------");

      // console.log(
      //   "UltimoNumeroFeliz",
      //   ultimoNumeroFeliz,
      //   "NumeroFeliz:",
      //   numeroFeliz
      // );
      if (ultimoNumeroFeliz == numeroFeliz) return false; //Se encicló, NO es happy number

      numerosGenerados = 1; //Reinicio la cuenta para buscar si se encicló el proceso. Le pongo 1 en lugar de 0
      //porque ya generé el primer número de 8 de la otra ronda

      ultimoNumeroFeliz = numeroFeliz; //Actualizo el últimoNumeroFeliz con el primer numero de la nueva serie de 8 números
    }

    //console.log(arreglo);
    // console.log("NumeroFeliz:", numeroFeliz);
  }

  //Si salió del ciclo es un happy number
  return true;
};

console.log(isHappy(1)); //true
console.log(isHappy(2)); //false
console.log(isHappy(7)); //true
console.log(isHappy(19)); //true
console.log(isHappy(1995)); //true
console.log(isHappy(5464654)); //false
console.log(isHappy(455555555555555555555555555555555555)); //false
