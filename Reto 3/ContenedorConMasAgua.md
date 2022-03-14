# Contenedor con más agua

## Complejidad:
Intermedia

## Descripción
Dados `n` números enteros no negativos `a1, a2, ..., an`, donde cada uno representa un punto en la coordenada `(i, ai)`. Se dibujan `n` líneas verticales de modo que los dos puntos de la línea `i` estén en `(i, ai)` y `(i, 0)`. Encuentre dos líneas que, junto con el eje x, formen un recipiente, de modo que el recipiente contenga la mayor cantidad de agua.

Tenga en cuenta que no puede inclinar el recipiente.

## Ejemplos:

**Ejemplo 1:**
![image](https://user-images.githubusercontent.com/7839474/145052375-af8befd8-c377-4e92-bed2-fe765187eb20.png)

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explicación: Las líneas verticales anteriores están representadas por la matriz `[1,8,6,2,5,4,8,3,7]`. En este caso, el área máxima de agua (sección azul) que puede contener el contenedor es 49.
```

**Ejemplo 2:**
```
Input: height = [1,1]
Output: 1
```

**Ejemplo 3:**
```
Input: height = [4,3,2,1,4]
Output: 16
```

**Ejemplo 4:**
```
Input: height = [1,2,1]
Output: 2
```


## Condiciones de entrega:
1. Deben entregar una función.
2. No debe tener `console.log`.
3. Debe de aceptar un único parámetro.
4. Debe retornar un numero.
5. 