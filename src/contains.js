// TODO: implement, string and array, two different implementations, one calls the other?
/**
 * 
 * @param {String} original The original string to compare
 * @param {String} compare The second string to be compared
 * @param {Object} [options] The configuration parameters
 * @param {Boolean} [options.inOrder] Must it be in the same exact order? ***True** by default*
 * @param {Boolean} [options.caseSensitive] Will it take into account upper/lower case difference? ***False** by default*
 * 
 * @returns {Boolean} Does it contain the substring?
 */
const contains = (original, compare, options = {}) => {
    if (options)

    // includes is way faster
    let matches = 0;

    const originalLen = original.length;
    const compareLen = compare.length;

    // If the substring is longer than the original, it won't be found
    if (compareLen > originalLen) return false;

    if (!options?.inOrder) options?.inOrder = false;
    if (!options?.caseSensitive) options?.caseSensitive = false;

    const { inOrder, caseSensitive } = options;

    // Implements case insensitive options, it's sensitive by default
    if (!caseSensitive) {
        original = original.toUpperCase();
        compare = compare.toUpperCase();
    }

    // Loop through the original
    for (let originalIndex = 0; originalIndex < originalLen; originalIndex++) {
        const originalChar = original[originalIndex];
        
        // Comparison starts at the last char it checked
        for (let compareIndex = matches; compareIndex < compareLen; compareIndex++) {
            const compareChar = compare[compareIndex];
            
            // If there's a match, matches gets updated, if there isn't matches gets a reset
            if (originalChar == compareChar) {
                matches++;

                // It'll continue to the original's next char
                break;
            }

            // Updated matches only if it must be in the same exact order
            if (inOrder) matches = 0;
        }

        // If there was already a full match, exit
        if (matches == compareLen) break;
    }

    // If the matches is the compareLen, its a match
    const contains = matches == compareLen;

    return contains;
}

exports.contains = contains;