const { almost, unalike } = require("./src/almost");
const { equal, different } = require("./src/equal");
const { isMatch, search, exclude } = require("./src/search");
const { contains } = require("./src/contains");

// They get implemented as "primitive" String methods in their own files

module.exports = {
    equal,
    different,
    almost,
    unalike,
    isMatch,
    search,
    exclude,
    contains,
}