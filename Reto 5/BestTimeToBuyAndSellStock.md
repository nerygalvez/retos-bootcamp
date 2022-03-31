# Best Time to Buy and Sell Stock

## Complejidad:
Fácil

## Descripción
Se le da una matriz de precios donde `precios[i]` es el precio de una acción determinada en el `i-ésimo` día.

Desea maximizar sus ganancias eligiendo **un solo día** para comprar una acción y eligiendo **un día diferente en el futuro** para vender esa acción.

Devuelva la máxima ganancia que pueda obtener de esta transacción. Si no puede obtener ningún beneficio, devuelva 0.

## Ejemplos:

**Ejemplo 1:**
```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

**Ejemplo 2:**
```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

## Condiciones de entrega:
1. Deben entregar una función.
2. No debe tener `console.log`.
3. Debe de aceptar un único parámetro.
4. Debe retornar un número.
