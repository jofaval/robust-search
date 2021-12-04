import {
    equal,
    different
} from "./src/equal";

// They get implemented as "primitive" String methods
String.prototype.equal = equal;
String.prototype.diff = different;

export {
    equal,
    different
};