const { almost , notQuite          } = require("./src/almost");
const { equal  , different         } = require("./src/equal");
const { isMatch, search, searchNot } = require("./src/search");
const { contains                   } = require("./src/contains");

// They get implemented as "primitive" String methods in their own files

exports.equal     = equal;
exports.different = different;
exports.almost    = almost;
exports.notQuite  = notQuite;
exports.isMatch   = isMatch;
exports.search    = search;
exports.searchNot = searchNot;
exports.contains  = contains;