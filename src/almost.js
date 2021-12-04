/**
 * Private method to compare if values are all string
 * 
 * @param  {...any} values The values to compare
 * 
 * @returns {Boolean} Are they all String?
 */
const areStrings = (...values) => {
    const valueLen = values.length;
    for (let valueIndex = 0; valueIndex < valueLen; valueIndex++) {
        const value = values[valueIndex];
        
        // If it's a string, continue
        if (typeof value === 'string' || value instanceof String) continue;

        // If it isn't return false
        // TODO: throw Exception if they're not strings?
        return false;
    }

    // By default they're all strings
    return true;
}

/**
 * **WARNING!!** It's an efficiency heavy operation compared to the "equal".
 * ---------------
 * ### Only works with **String**.
 * Compares two strings and determines wether they're close or not, it may be an almost the same string
 * Specially good for user input in searches.
 * 
 * @param {String} original The original string to compare
 * @param {String} compare The second string to be compared
 * @param {Object} options The method configuration
 * @param {Number} [options.satisfactionScore] The minimum score of almost the same to say it's really almost the same
 * @param {Number} [options.minLenProximity] If the two strings have different lengths, when will it be too much?
 * @param {Boolean} [options.caseSensitive] Will it take into account upper/lower case difference?
 * 
 * @returns {Boolean} Are they almost the same?
 */
const almost = (original, compare, options = {}) => {
    // They all must be strings
    if (!areStrings(original, compare)) return false;

    // Default values are set
    if (!options?.satisfactionScore) options.satisfactionScore = .85;
    if (!options?.minLenProximity) options.minLenProximity = .75;
    if (!options?.caseSensitive) options.caseSensitive = false;

    const originalLen = original.length;
    const compareLen = compare.length;

    // Implements case insensitive options, it's sensitive by default
    if (!options.caseSensitive) {
        original = original.toUpperCase();
        compare = compare.toUpperCase();
    }

    // TODO: implement case sensitive detection

    // TODO: Implement minLenProximity in search?
    // Compare the lengths to determine the method to use
    if ((Math.min(originalLen, compareLen) / Math.max(originalLen, compareLen)) < options.minLenProximity) {
        // If there's too much length difference, an almost match will happen if the substring is found
        const almost = compare.includes(original) || original.includes(compare);

        return almost;
    }

    let matches = 0;

    // A temp compare string is created to remove any match from the pool
    let tempCompare = compare;
    let tempCompareIndex = tempCompare.length;
    
    // TODO: implement inOrder option so it's a closer match, if wanted

    // Loop through the original
    for (let originalIndex = 0; originalIndex < originalLen; originalIndex++) {
        const originalChar = original[originalIndex];

        // Loop through the compare
        for (let compareIndex = 0; compareIndex < compareLen; compareIndex++) {
            const compareChar = tempCompare[compareIndex];
            
            // If the char is found
            if (originalChar == compareChar) {
                // It's deleted
                delete tempCompare[compareIndex];
                // The length gets computed only when it gets mutated
                tempCompareIndex = tempCompare.length;

                // And it adds to the matches count
                matches++;
                break;
            }
        }
    }

    // Compute the match score
    const score = matches / originalLen;
    // And determine if it's a success or not
    const almost = score >= options.satisfactionScore;

    return almost;
};

/**
 * **WARNING!!** It's an efficiency heavy operation compared to the "equal".
 * ---------------
 * ### Only works with **String**.
 * Compares two strings and determines wether they're close or not, it may be an almost the same string
 * Specially good for user input in searches.
 * 
 * *This one compares them to see if they're **NOT** close, if they're **NOT** almost the same*.
 * 
 * @param {String} original The original string to compare
 * @param {String} compare The second string to be compared
 * @param {Object} options The method configuration
 * @param {Number} [options.satisfactionScore] The minimum score of almost the same to say it's really almost the same
 * @param {Number} [options.minLenProximity] If the two strings have different lengths, when will it be too much?
 * @param {Boolean} [options.caseSensitive] Will it take into account upper/lower case difference.
 * 
 * @returns {Boolean} Are they almost **NOT** the same?
 */
const notQuite = (original, compare, options = {}) => !almost(original, compare, options);

exports.almost = almost;
exports.notQuite = notQuite;