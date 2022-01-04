# Robust Search #
[![Disponible en Castellano](https://img.shields.io/badge/lang-es-red.svg)](/doc/es/)

[![npm version](https://badge.fury.io/js/robust-search.svg)](http://badge.fury.io/js/robust-search)\
[![NPM](https://nodei.co/npm/robust-search.png?downloads=true)](https://nodei.co/npm/robust-search/)

Download at, [NPM-Package site](https://www.npmjs.com/package/robust-search) or https://www.npmjs.com/package/robust-search

## Description
It's a robust and flexible search component.
### Objective
It allows for an almost match, i.e., "Jenna" wouldn't equal "jena", but now it can.
So it's objective it's to give more tools to compare, taking into account user's human mistakes

## Usage
For the parameters, [click here](/doc/en/parameters.md)
<br />
For advanced examples, [click here](/doc/en/advanced.md)

### Install
#### Browser
```html
<script src="https://cdn.jsdelivr.net/npm/robust-search/index.js"></script>
```

#### Node.js
```bash
npm i --save-dev robust-search
```

### Import
Without this, it won't work
````javascript
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
Is a `string` the same as another?
````javascript
// String equal
"test".equal("test") // returns true

// String equal
"test".equal("tset") // returns false
````
### String.prototype.diff, or different
Is a `string` not the same as another?
````javascript
// String not equal
"test".diff("tset") // returns true
````
### String.prototype.almost
Is a `string` almost same as another?
````javascript
// String almost
"test".almost("tset") // returns true
````
### String.prototype.unalike
Is a `string` not quite the same as another?
````javascript
// String unalike
"test".unalike("tset") // returns false
````
### String.prototype.isMatch
This will use all of the above to check for a match
````javascript
// String isMatch (does an almost or equal)
"test".isMatch("tset") // returns true
````
### String.prototype.contains
Does it contain the `substring` given? Sort of an `includes`
````javascript
// String contains
"test".contains("est") // returns true
// String doesn't contain
"test".contains("tset") // returns false
````
### search
Searchs using the above methods inside an `array`
````javascript
// String search
search([ "test", "hello", "world!" ], "test") // returns ["test"]
````
### exclude
Searchs for non-matches using the above methods inside an `array`
````javascript
// String exclude
exclude([ "test", "hello", "world!" ], "test") // returns ["hello", "world!"]
````