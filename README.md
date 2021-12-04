# Robust Search #
Disponible en Castellano [![es](https://img.shields.io/badge/lang-es-red.svg)](/doc/es/README.md)

## Description
It's a robust and flexible search component.
### Objective
It allows for an almost match, i.e., "Jenna" wouldn't equal "jena", but now it can.
So it's objectivie it's to give more tools to compare, taking into account user's human mistakes

## Usage
````
import {
    equal,
    different,
    almost,
    notQuite,
    isMatch,
    search,
    searchNot,
    contains
} from "robust-search"

// String equal
"test".equal("test") // returns true

// String equal
"test".equal("tset") // returns false

// String not equal
"test".diff("tset") // returns true

// String almost
"test".almost("tset") // returns true

// String notQuite
"test".notQuite("tset") // returns false

// String isMatch (does an almost or equal)
"test".isMatch("tset") // returns true

// String contains
"test".contains("est") // returns true
// String doesn't contain
"test".contains("tset") // returns false

// String search
search([ "test", "hello", "world!" ], "test") // returns ["test"]

// String searchNot
searchNot([ "test", "hello", "world!" ], "test") // returns ["hello", "world!"]
````