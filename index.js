const { almost , notQuite          } = require("./src/almost");
const { equal  , different         } = require("./src/equal");
const { isMatch, search, searchNot } = require("./src/search");
const { contains                   } = require("./src/contains");

// They get implemented as "primitive" String methods
String.prototype.equal    = function (compare, options = {}) { return equal    (this, compare, options = {}); }
String.prototype.diff     = function (compare, options = {}) { return different(this, compare, options = {}); }
String.prototype.almost   = function (compare, options = {}) { return almost   (this, compare, options = {}); }
String.prototype.notQuite = function (compare, options = {}) { return notQuite (this, compare, options = {}); }
String.prototype.isMatch  = function (compare, options = {}) { return isMatch  (this, compare, options = {}); }
String.prototype.contains = function (compare, options = {}) { return contains (this, compare, options = {}); }

exports.equal     = equal;
exports.different = different;
exports.almost    = almost;
exports.notQuite  = notQuite;
exports.isMatch   = isMatch;
exports.search    = search;
exports.searchNot = searchNot;
exports.contains  = contains;