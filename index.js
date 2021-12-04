const { almost, notQuite } = require("./src/almost");
const { equal, different } = require("./src/equal");
const { isMatch, search, searchNot } = require("./src/search");

// They get implemented as "primitive" String methods
String.prototype.equal = equal;
String.prototype.diff = different;
String.prototype.almost = almost;
String.prototype.notQuite = notQuite;
String.prototype.isMatch = isMatch;

exports = {
    equal,
    different,
    almost,
    notQuite,
    isMatch,
    search,
    searchNot,
};