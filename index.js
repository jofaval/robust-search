const { almost , notQuite          } = require("./src/almost");
const { equal  , different         } = require("./src/equal");
const { isMatch, search, searchNot } = require("./src/search");

// They get implemented as "primitive" String methods
String.prototype.equal    = function (compare) { return equal    (this, compare); }
String.prototype.diff     = function (compare) { return different(this, compare); }
String.prototype.almost   = function (compare) { return almost   (this, compare); }
String.prototype.notQuite = function (compare) { return notQuite (this, compare); }
String.prototype.isMatch  = function (compare) { return isMatch  (this, compare); }

exports.equal     = equal;
exports.different = different;
exports.almost    = almost;
exports.notQuite  = notQuite;
exports.isMatch   = isMatch;
exports.search    = search;
exports.searchNot = searchNot;