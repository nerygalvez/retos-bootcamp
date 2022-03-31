# ZigZag Conversion

## Complejidad:
Intermedia

## Descripción:
The string `PAYPALISHIRING` is written in a zigzag pattern on a given number of rows like this:
```
P   A   H   N
A P L S I I G
Y   I   R
```
And then read line by line: `PAHNAPLSIIGYIR`

Write the code that will take a string and make this conversion given a number of rows:

`string convert(string s, int numRows);`
 
## Ejemplos: 
Example 1:
```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

Example 2:
```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

Example 3:
```
Input: s = "A", numRows = 1
Output: "A"
```

## Condiciones de entrega:
1. Deben entregar una función.
2. No debe tener `console.log`.
3. Debe de aceptar un único parámetro.
4. Debe retornar un string.