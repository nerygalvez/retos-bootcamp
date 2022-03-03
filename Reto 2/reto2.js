/**
 *
 * @param {Int32Array} nums
 * @returns
 */
var sum3 = (nums) => {
  let resultado = []; //Al menos se retorna un arreglo vacío

  //Voy a hacer 3 recorridos porque necesito evaluar 3 números al mismo tiempo
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        //No puedo evaluar un número con él mismo (i!= j && i!= k && j!= k)
        //La suma de los 3 valores debe ser igual a 0 (nums [i] + nums [j] + nums [k] == 0)
        if (i != j && i != k && j != k && nums[i] + nums[j] + nums[k] == 0) {
          //Valido que no tenga ya un número triple igual o con los mismos valores pero en diferente orden
          //Voy a ordenar los números del arreglo ascendentemente para no tener que hacer todas las combinaciones

          let numeroTriple = [nums[i], nums[j], nums[k]].sort(function (a, b) {
            return a - b;
          });

          //Busco si en el arreglo 'resultado' al menos existe un número triple igual a 'numeroTriple'
          const existeNumeroTriple = resultado.some(
            (elemento) =>
              elemento[0] == numeroTriple[0] &&
              elemento[1] == numeroTriple[1] &&
              elemento[2] == numeroTriple[2]
          );

          //Si el número triple aún NO existe lo agrego al arreglo
          if (!existeNumeroTriple) {
            resultado = resultado.concat([numeroTriple]);
          }
        }
      }
    }
  }
  return resultado;
};

//Probando la función
console.table(sum3([-1, 0, 1, 2, -1, -4])); //Output: [[-1,-1,2],[-1,0,1]]
console.table(sum3([])); //Output: []
console.table(sum3([0])); //Output: []
console.table(sum3([0, 0, 0])); //Output: [] en la prueba de Fernando y a mí me imprime [[0, 0, 0]]
console.table(sum3([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0])); //Output: [[-5, 1, 4],[-4, 0, 4],[-4, 1, 3],[ -2, -2, 4 ],[-2, 1, 1],[0, 0, 0]]
