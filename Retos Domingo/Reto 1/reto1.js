const sumarUno = (digitos) => {
    
    console.log("ENTRADA: ", digitos);
    

    let numero = BigInt(0);

  numero = digitos.reduce((anterior, actual) => {
    return  (BigInt(anterior) * BigInt(10)) + BigInt(actual);
  });

  //Le sumo uno al resultado
  numero = numero + BigInt(1);

  return String(numero)
    .split("")
    .map((num) => {
      return Number(num);
    });

};


/**
 * Función que presentó Fernando
 * 
 * @param {*} d 
 * @returns 
 */
const plusOne = (d) =>{
    let i = d.length - 1;

    while(i >= 0){
        d[i]++;
        if(d[i] < 10) return d;

        d[i] = 0;

        if(i === 0){
            d.unshift(1);
        }

        i--;
    }
    return d;
}
//Cadena de entrada que dio Fernando
//[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]

//Llamando a mi solución
//console.log("SALIDA: ", sumarUno([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 9]));
//Quiero ver el tipo de dato de los elementos del arreglo
//console.log(typeof sumarUno([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])[0])
console.log("SALIDA: ", sumarUno([2, 9, 9]));


//Probando solución de Fernando
console.log(plusOne([2, 9, 9]));