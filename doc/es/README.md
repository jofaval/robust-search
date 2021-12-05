# Robust Search #
[![Available in English](https://img.shields.io/badge/lang-en-blue.svg)](/doc/en/)

Descárgatelo en, [NPM-Package site](https://www.npmjs.com/package/robust-search) o https://www.npmjs.com/package/robust-search

## Descripción
Es un componente de búsquda robusto y flexible.
### Objetivo
Permite buscar coincidencias cercanas, "Jenna" no sería una coincidencia de "jena", pero ahora sí puede serlo.
El objetivo es dar más herramientas para comparar, teniendo en cuenta los fallos humanos del usuario.

## Uso
Para los parámetros, [clica aquí](/doc/es/parameters.md)
<br />
Para ejemplos avanzados, [clica aquí](/doc/es/advanced.md)

### Import
Sin esto, no funcionará
````
import {
    equal,
    different,
    almost,
    unalike,
    isMatch,
    search,
    exclude,
    contains
} from "robust-search"
````
### String.prototype.equal
¿Es la `string` igual que otra?
````
// String equal
"test".equal("test") // devuelve true

// String equal
"test".equal("tset") // devuelve false
````
### String.prototype.diff, or different
¿No es la `string` igual que otra?
````
// String not equal
"test".diff("tset") // devuelve true
````
### String.prototype.almost
¿Es la `string` casi igual que otra?
````
// String almost
"test".almost("tset") // devuelve true
````
### String.prototype.unalike
¿La `string` no llega a ser casi la misma que otra?
````
// String unalike
"test".unalike("tset") // devuelve false
````
### String.prototype.isMatch
Esto usará todos los métodos de arriba para determinar una coincidencia
````
// String isMatch (does an almost or equal)
"test".isMatch("tset") // devuelve true
````
### String.prototype.contains
¿Contendrá la `substring` dada? Una especie de `includes`
````
// String contains
"test".contains("est") // devuelve true
// String doesn't contain
"test".contains("tset") // devuelve false
````
### search
Busca una coincidencia en un `array` usando los métodos de arriba
````
// String search
search([ "test", "hello", "world!" ], "test") // devuelve ["test"]
````
### exclude
Busca los que no son una coincidencia en un `array` usando los métodos de arriba
````
// String exclude
exclude([ "test", "hello", "world!" ], "test") // devuelve ["hello", "world!"]
````