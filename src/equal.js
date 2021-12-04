/**
 * Comapres two strings and returns if they're equal.
 * 
 * @param {String} original The original string to compare.
 * @param {String} compare The second string to be compared.
 * @param {Object} [options] The comparison options.
 * @param {Boolean} [options.caseSensitive] Will it take into account upper/lower case difference? ***False** by default*
 * @param {Boolean} [options.exact] Will it be an exact match of type? ***False** by default*
 * @param {Boolean} [options.ignoreSpaces] Will it ignore spaces? ***False** by default*
 * @param {String[]} [options.ignoreChars] Ignores the given chars. ***False** by default*
 * 
 * @returns {Boolean} If they're equal or not.
 */
const equal = (original, compare, options = {}) => {
    // If they don't get filled, default values are set in
    if (!options?.caseSensitive) options.caseSensitive = false;
    if (!options?.exact) options.exact = false;
    if (!options?.ignoreSpaces) options.ignoreSpaces = false;

    // If it's not caseSensitive, characters will be forced to lowercase
    if (!options.caseSensitive) {
        original = original.toUpperCase();
        compare = compare.toUpperCase();
    }

    // If spaces are ignored, they're removed before the comparison
    if (options.ignoreSpaces) {
        original = original.replace(/\s+/, '');
        compare = compare.replace(/\s+/, '');
    }

    // Ignores the given chars
    // TODO: to implement, inside the for-loop or an outside regex replace? it'd be faster the first option

    // If it's exact, there's no need to compare anymore
    if (options.exact) return original === compare;

    // Extract their lengths
    const originalLen = original.length;
    const compareLen = compare.length

    // If their lengths are not equal, it doesn't get compared
    if (originalLen != compareLen) return false;

    // Manual comparison for efficiency
    for (let charIndex = 0; charIndex < originalLen; charIndex++) {
        const originalChar = original[charIndex];
        const compareChar = compare[charIndex];

        // As soon as they're not the same value, it's returned false
        if (originalChar != compareChar) return false;
    }

    // It's true by default, true until proved different
    return true;
};

/**
 * Comapres two strings and returns if they're different, **NOT** equal.
 * 
 * @param {String} original The original string to compare.
 * @param {String} compare The second string to be compared.
 * @param {Object} [options] The comparison options.
 * @param {Boolean} [options.caseSensitive] Will it take into account upper/lower case difference? ***False** by default*
 * @param {Boolean} [options.exact] Will it be an exact match of type? ***False** by default*
 * @param {Boolean} [options.ignoreSpaces] Will it ignore spaces? ***False** by default*
 * @param {String[]} [options.ignoreChars] Ignores the given chars. ***False** by default*
 * 
 * @returns {Boolean} If they're different or not.
 */
const different = (original, compare, options = {}) => !equal(original, compare, options);

exports.equal = equal;
exports.different = different;