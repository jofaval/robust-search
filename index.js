const { almost, notQuite } = require("./src/almost");
const { equal, different } = require("./src/equal");
const { isMatch, search, searchNot } = require("./src/search");

// They get implemented as "primitive" String methods
String.prototype.equal    = (string) => equal(this, string);
String.prototype.diff     = (string) => different(this, string);
String.prototype.almost   = (string) => almost(this, string);
String.prototype.notQuite = (string) => notQuite(this, string);
String.prototype.isMatch  = (string) => isMatch(this, string);

exports = {
    equal,
    different,
    almost,
    notQuite,
    isMatch,
    search,
    searchNot,
};