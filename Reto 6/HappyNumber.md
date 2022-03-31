# Happy Number

## Complejidad:
Fácil

## Descripción
Escribe un algoritmo para determinar si un número `n` es feliz.

Un **número feliz** es un número definido por el siguiente proceso:

- Comenzando con cualquier entero positivo, reemplaza el número por la suma de los cuadrados de sus dígitos.
- Repita el proceso hasta que el número sea igual a 1, o **se repite sin fin en un ciclo** que no incluye 1.
- Aquellos números para los que este proceso termina en 1 son felices.
Devuelve **verdadero** si `n` es un número feliz y **falso** si no lo es.

## Ejemplos:

**Ejemplo 1:**
```
Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```

**Ejemplo 2:**
```
Input: n = 2
Output: false
```