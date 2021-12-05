# Parameters #
Versión disponible en Castellano [![es](https://img.shields.io/badge/lang-es-red.svg)](/doc/es/parameters.md)

Tables generated with [https://www.tablesgenerator.com/markdown_tables](https://www.tablesgenerator.com/markdown_tables)

## Equal/Diff/Different parameters
**Returns** `Boolean`
| name                  | required |    type    | description                                            | default |
|-----------------------|:--------:|:----------:|--------------------------------------------------------|:-------:|
| original              |  **yes** |  `String`  | The original string to compare.                        |  `null` |
| compare               |  **yes** |  `String`  | The second string to be compared.                      |  `null` |
| options               |    no    |  `Object`  | The comparison options.                                |   `{}`  |
| options.caseSensitive |    no    |  `Boolean` | Will it take into account upper/lower case difference? | `false` |
| options.exact         |    no    |  `Boolean` | Will it be an exact match of type?                     | `false` |
| options.ignoreSpace   |    no    |  `Boolean` | Will it ignore spaces?                                 | `false` |
| options.ignoreChars   |    no    | `String[]` | Ignores the given chars.                               | `false` |

## Almost/Unalike parameters
**Returns** `Boolean`
| name                      | required |    type   | description                                                              | default |
|---------------------------|:--------:|:---------:|--------------------------------------------------------------------------|:-------:|
| original                  |  **yes** |  `String` | The original string to compare                                           |  `null` |
| compare                   |  **yes** |  `String` | The second string to be compared                                         |  `null` |
| options                   |    no    |  `Object` | The method configuration                                                 |   `{}`  |
| options.satisfactionScore |    no    |  `Number` | The minimum score of almost the same to say it's really almost the same. |  `.85`  |
| options.minLenProximity   |    no    |  `Number` | If the two strings have different lengths, when will it be too much?     |   `.75`  |
| options.caseSensitive     |    no    | `Boolean` | Will it take into account upper/lower case difference?                   | `false` |

## Contains parameters
**Returns** `Boolean`
| name                  | required |    type   | description                                            | default |
|-----------------------|:--------:|:---------:|--------------------------------------------------------|:-------:|
| original              |  **yes** |  `String` | The original string to compare                         |  `null` |
| original              |  **yes** |  `String` | The second string to be compared                       |  `null` |
| options               |    no    |  `Object` | The configuration parameters                           |   `{}`  |
| options.inOrder       |    no    | `Boolean` | Must it be in the same exact order?                    |  `true` |
| options.caseSensitive |    no    | `Boolean` | Will it take into account upper/lower case difference? | `false` |

## isMatch parameters
**Returns** `Boolean`
| name     | required |   type   | description                      | default |
|----------|:--------:|:--------:|----------------------------------|:-------:|
| original |  **yes** | `String` | The original string to compare   |  `null` |
| compare  |  **yes** | `String` | The second string to be compared |  `null` |

## Search/Exclude parameters
**Returns** `Array`
| name     | required |   type   | description                      | default |
|----------|:--------:|:--------:|----------------------------------|:-------:|
| dataset  |  **yes** |  `Array` | The array containing the strings |  `null` |
| original |  **yes** | `String` | The original string to compare   |  `null` |
| options  |    no    | `Object` | The configuration options        |   `{}`  |