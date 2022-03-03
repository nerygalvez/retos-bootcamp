# Combinaciones de letras de un número de teléfono

## Complejidad:
Intermedia

## Descripción
Dada una cadena que contiene dígitos del `2 al 9`, devuelve todas las combinaciones de letras posibles que el número podría representar. Devuelve la respuesta en cualquier orden.

A continuación se muestra un mapeo de dígitos a letras (como en los botones del teléfono). Tenga en cuenta que 1 no se asigna a ninguna letra.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/1200px-Telephone-keypad2.svg.png" width="250">

## Ejemplos:

**Ejemplo 1:**
```
Entrada: digitos = "23"
Salida: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

**Ejemplo 2:**
```
Entrada: digitos = ""
Salida: []
```

**Ejemplo 3:**
```
Entrada: digitos = "2"
Salida: ["a","b","c"]
```

## Restricciones
1. `digitos` es un string
1. `0 <= digitos.length <= 4`
1. `digitos[i]` será siempre un dígito en el rango `['2', '9']`.