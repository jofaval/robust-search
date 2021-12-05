# Robust Search #

[![Available in English](https://img.shields.io/badge/lang-en-blue.svg)](/doc/en/)
[![Disponible en Castellano](https://img.shields.io/badge/lang-es-red.svg)](/doc/es/)
<br />
<br />
Package details at: [robust-search](https://www.npmjs.com/package/robust-search) or https://www.npmjs.com/package/robust-search

## Description
It's a robust and flexible search component.
### Objective
It allows for an almost match, i.e., "Jenna" wouldn't equal "jena", but now it can.
So it's objective it's to give more tools to compare, taking into account user's human mistakes

## Usage
For the complete documentation, [click here](/doc/en/)

### Import
Without this, it won't work
````
import {
    equal,
    different,
    almost,
    notQuite,
    isMatch,
    search,
    exclude,
    contains
} from "robust-search"
````
### String.prototype.equal
Is a `string` the same as another?
````
// String equal
"test".equal("test") // returns true

// String equal
"test".equal("tset") // returns false
````
### String.prototype.diff, or different
Is a `string` not the same as another?
````
// String not equal
"test".diff("tset") // returns true
````
### String.prototype.almost
Is a `string` almost same as another?
````
// String almost
"test".almost("tset") // returns true
````
### String.prototype.notQuite
Is a `string` not quite the same as another?
````
// String notQuite
"test".notQuite("tset") // returns false
````
### String.prototype.isMatch
This will use all of the above to check for a match
````
// String isMatch (does an almost or equal)
"test".isMatch("tset") // returns true
````
### String.prototype.contains
Does it contain the `substring` given? Sort of an `includes`
````
// String contains
"test".contains("est") // returns true
// String doesn't contain
"test".contains("tset") // returns false
````
### search
Searchs using the above methods inside an `array`
````
// String search
search([ "test", "hello", "world!" ], "test") // returns ["test"]
````
### exclude
Searchs for non-matches using the above methods inside an `array`
````
// String exclude
exclude([ "test", "hello", "world!" ], "test") // returns ["hello", "world!"]
````