# Paréntesis Válido

## Complejidad:
Fácil

## Descripción
Dado un string `s` que contiene únicamente los caracteres `'(', ')', '{', '}', '[' and ']'`, determine si la entrada es válida.

Una entrada es válida si:

1. Los paréntesis abiertos deben cerrarse con el mismo tipo de paréntesis.
1. Los paréntesis abiertos deben cerrarse en el orden correcto.

## Ejemplos:

**Ejemplo 1:**
```
Input: s = "()"
Output: true
```

**Ejemplo 2:**
```
Input: s = "()[]{}"
Output: true
```

**Ejemplo 3:**
```
Input: s = "(]"
Output: false
```

**Ejemplo 4:**
```
Input: s = "([)]"
Output: false
```

**Ejemplo 5:**
```
Input: s = "{[]}"
Output: true
```

## Pruebas:
```
Input: s = "{[]}"
Input: s = "{"
Input: s = "{[)"
Input: s = "{}([])"
```



## Condiciones de entrega:
1. Deben entregar una función.
2. No debe tener `console.log`.
3. Debe de aceptar un único parámetro.
4. Debe retornar un booleano.