var addStrings = function (num1, num2) {
  //return num1 * 1.0 + num2 * 1.0; //Esta es mi solución, pero no acepta números grandes (BigInt)

  let resultado = "";
  let acarreo = 0;

  while (num1.length || num2.length || acarreo) {
    //at(-1) me devuelve el digito más a la derecha del número
    // algo || 0 me dice que si lo de la derecha NO se puede hacer o no tiene algo me retorna lo de la derecha
    let suma = acarreo + Number(num1.at(-1) || 0) + Number(num2.at(-1) || 0);
    num1 = num1.slice(0, -1); //Quito el digito más a la derecha
    num2 = num2.slice(0, -1);

    if (suma <= 9) {
      resultado = suma + resultado;
      acarreo = 0;
    } else {
      resultado = (suma % 10) + resultado;
      acarreo = Math.floor(suma / 10);
    }
  }

  return resultado;
};
//2 E 53 - 1

console.log(addStrings("1231231231233331233", "11"));
console.log(addStrings("11", "123"));
console.log(addStrings("456", "77"));
console.log(addStrings("0", "0"));

/**
 * Hacer un contador de cuánto tiempo falta para llegar
 * a la hora actual desde una hora ingresada por el usuario
 *
 */
