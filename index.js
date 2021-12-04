const { almost, notQuite } = require("./src/almost");
const { equal, different } = require("./src/equal");

// They get implemented as "primitive" String methods
String.prototype.equal = equal;
String.prototype.diff = different;
String.prototype.almost = almost;
String.prototype.notQuite = notQuite;

exports = {
    equal,
    different,
    almost,
    notQuite
};