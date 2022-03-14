# Número Palíndromo

## Complejidad:
Fácil

## Descripción
Dado un **entero** `x`, devuelve verdadero si `x` es un entero **palíndromo**.

Un número entero es un **palíndromo** cuando se lee lo mismo hacia atrás que hacia adelante. Por ejemplo, `121` es palíndromo mientras que `123` no lo es.
## Ejemplos:

**Ejemplo 1:**
```
Input: x = 121
Output: true
```

**Ejemplo 2:**
```
Input: x = -121
Output: false
Explanation: De izquierda a derecha, dice `-121`. De derecha a izquierda, se convierte en `121-`. Por tanto, no es un palíndromo. 
```

**Ejemplo 3:**
```
Input: x = 10
Output: false
Explanation: De derecha a izquierda es `01` por lo tanto no es un palíndromo.
```


## Condiciones de entrega:
1. Deben entregar una función.
2. No debe tener `console.log`.
3. Debe de aceptar un único parámetro.
4. Debe retornar un booleano.