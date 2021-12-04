import almost, { notQuite } from "./src/almost";
import equal, { different } from "./src/equal";

// They get implemented as "primitive" String methods
String.prototype.equal = equal;
String.prototype.diff = different;
String.prototype.almost = almost;
String.prototype.notQuite = notQuite;

export {
    equal,
    different,
    almost,
    notQuite
};