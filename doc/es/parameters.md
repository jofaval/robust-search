# Parámetros #
Also available in English [![es](https://img.shields.io/badge/lang-es-blue.svg)](/doc/en/parameters.md)

Tablas generadas con [https://www.tablesgenerator.com/markdown_tables](https://www.tablesgenerator.com/markdown_tables)

## Parámetros de Equal/Diff/Different
Compara dos strings para saber si son iguales o son diferentes
**Returns** `Boolean`
| nombre                | requerido |    tipo    | descripción                                                    | defecto |
|-----------------------|:---------:|:----------:|----------------------------------------------------------------|:-------:|
| original              |  **yes**  |  `String`  | La string original sobre la que comparar.                      |  `null` |
| compare               |  **yes**  |  `String`  | La segunda string a comparar.                                  |  `null` |
| options               |    no     |  `Object`  | Las opciones de comparación.                                   |   `{}`  |
| options.caseSensitive |    no     |  `Boolean` | ¿Tendrá en cuenta la diferencia entre mayúsculas y minúsculas? | `false` |
| options.exact         |    no     |  `Boolean` | ¿Será una coincidencia exacta?                                 | `false` |
| options.ignoreSpace   |    no     |  `Boolean` | ¿Ignorará espacios?                                            | `false` |
| options.ignoreChars   |    no     | `String[]` | Ignora los carácteres recibidos.                               | `false` |

## Parámetros de Exact
Compara dos strings para saber si son exactamente la misma
**Returns** `Boolean`
| nombre                | requerido |    tipo    | descripción                               | defecto |
|-----------------------|:---------:|:----------:|-------------------------------------------|:-------:|
| original              |  **yes**  |  `String`  | La string original sobre la que comparar. |  `null` |
| compare               |  **yes**  |  `String`  | La segunda string a comparar.             |  `null` |
| options               |    no     |  `Object`  | Las opciones de comparación.              |   `{}`  |
| options.ignoreSpace   |    no     |  `Boolean` | ¿Ignorará espacios?                       | `false` |
| options.ignoreChars   |    no     | `String[]` | Ignora los carácteres recibidos.          | `false` |

## Parámetros de Almost/Unalike
Compara dos strings para saber si son casi la misma no son casi la misma
**Returns** `Boolean`
| nombre                    | requerido |    tipo   | descripción                                                                     | defecto |
|---------------------------|:---------:|:---------:|---------------------------------------------------------------------------------|:-------:|
| original                  |  **yes**  |  `String` | La string original sobre la que comparar                                        |  `null` |
| compare                   |  **yes**  |  `String` | La segunda string a comparar                                                    |  `null` |
| options                   |    no     |  `Object` | La configuración del método                                                     |   `{}`  |
| options.satisfactionScore |    no     |  `Number` | El mínimo de acierto a partir del cual se considera que es casi el mismo.       |  `.85`  |
| options.minLenProximity   |    no     |  `Number` | Si la longitud de las strings es diferente, ¿a partir de cuánto será demasiado? |   `.75`  |
| options.caseSensitive     |    no     | `Boolean` | ¿Tendrá en cuenta la diferencia entre mayúsculas y minúsculas?                  | `false` |

## Parámetros de Contains
Compara dos strings para saber si la primera contiene la substring resultante que es la otra
**Returns** `Boolean`
| nombre                | requerido |    tipo   | descripción                                                    | defecto |
|-----------------------|:---------:|:---------:|----------------------------------------------------------------|:-------:|
| original              |  **yes**  |  `String` | La string original sobre la que comparar                       |  `null` |
| original              |  **yes**  |  `String` | La segunda string a comparar                                   |  `null` |
| options               |    no     |  `Object` | Los parámetros de configuración                                |   `{}`  |
| options.inOrder       |    no     | `Boolean` | ¿Ha de ser exactamente en el mismo orden?                      |  `true` |
| options.caseSensitive |    no     | `Boolean` | ¿Tendrá en cuenta la diferencia entre mayúsculas y minúsculas? | `false` |

## Parámetros de IsMatch/IsNotMatch
Compara dos strings para saber si hay coincidencia entre ellas, bien sea porque son iguales, o porque se parecen
**Returns** `Boolean`
| nombre   | requerido |   tipo   | descripción                              | defecto |
|----------|:---------:|:--------:|------------------------------------------|:-------:|
| original |  **yes**  | `String` | La string original sobre la que comparar |  `null` |
| compare  |  **yes**  | `String` | La segunda string a comparar             |  `null` |

## Parámetros de Search/Exclude
Realiza una búsqueda en un array de strings usando los métodos de comparación mencionados anteriormente
**Returns** `Array`
| nombre            | requerido |        tipo        | descripción                              | defecto |
|-------------------|:---------:|:------------------:|------------------------------------------|:-------:|
| dataset           |  **yes**  |       `Array`      | The array containing the strings         |  `null` |
| original          |  **yes**  |      `String`      | La string original sobre la que comparar |  `null` |
| options           |     no    |      `Object`      | Las opciones de configuración            |   `{}`  |
| options.justThere |     no    |      `Object`      | Solamente comprobará si está ahí         | `false` |
| options.filter    |     no    | `CallableFunction` | La función de filtrado                   |  `null` |
| options.json      |     no    |      `Boolean`     | ¿El array contiene valores json/objeto?  | `false` |