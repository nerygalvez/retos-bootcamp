# Sumar Uno

## Complejidad:
Fácil

## Descripción
Se le da un **entero grande** representado como una matriz de `dígitos` de números enteros, donde cada `digito[i]` es el `i-ésimo` dígito del número entero. Los dígitos están ordenados del más significativo al menos significativo en orden de izquierda a derecha. El **entero grande** no contiene ceros a la izquierda.

Incrementa el **entero grande** en uno y devuelve la matriz de dígitos resultante.

## Ejemplos:

**Ejemplo 1:**
```
Entrada: digitos = [1,2,3]
Salida: [1,2,4]
Explicación: El array representa el entero 123.
Incrementar en uno da 123 + 1 = 124.
Por tanto, el resultado debe ser [1,2,4].
```

**Ejemplo 2:**
```
Entrada: digitos = [4,3,2,1]
Salida: [4,3,2,2]
Explicación: El array representa el entero 4321.
Incrementar en uno da 4321 + 1 = 4322.
Por tanto, el resultado debe ser [4,3,2,2].
```

**Ejemplo 3:**
```
Entrada: digitos = [0]
Salida: [1]
Explicación: El array representa el entero 0.
Incrementar en uno da 0 + 1 = 1.
Por tanto, el resultado debe ser [1].
```

**Ejemplo 4:**
```
Entrada: digitos = [9]
Salida: [1,0]
Explicación: El array representa el entero 9.
Incrementar en uno da 9 + 1 = 10.
Por tanto, el resultado debe ser [1,0].
```

## Restricciones
1. `1 <= digitos.length <= 100`
2. `0 <= digitos[i] <= 9`
3. los `dígitos` no contienen ceros a la izquierda.