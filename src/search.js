/**
 * Determines if two values are a match or not
 * 
 * @param {String} original The original string to compare
 * @param {String} compare The second string to be compared
 * 
 * @returns {Boolean} Are they a match?
 */
const isMatch = (original, compare) => almost(original, compare) || equal(original, compare);

/**
 * **WARNING!!** It's an efficiency heavy operation it uses "almost".
 * ---------------
 * Search for a value in a string array
 * 
 * @param {Array} dataset The array containing the strings
 * @param {String} original The original string to compare
 * @param {Object} options The configuration options
 * 
 * @returns {Array} The occurences, if empty, it wasn't found
 */
const search = (dataset, original, options = {}) => {
    // TODO: implement the possibility to find number of ocurrecences? return value
    // and possibility to find if it's just there, not the number of times

    let occurrences = [];

    const datasetLen = dataset.length
    for (let datasetIndex = 0; datasetIndex < datasetLen; datasetIndex++) {
        const compare = dataset[datasetIndex];

        // If it's a match, add to the occurrences
        if (isMatch(original, compare)) occurrences.push(compare);
    }

    return occurrences;
};

/**
 * **WARNING!!** It's an efficiency heavy operation it uses "almost".
 * ---------------
 * Search for everything but the value in a string array
 * 
 * @param {Array} dataset The array containing the strings
 * @param {String} original The original string to compare
 * @param {Object} options The configuration options
 * 
 * @returns {Array} The occurences, if empty, it wasn't found
 */
const searchNot = (dataset, original, options = {}) => {
    let occurrences = [];

    const datasetLen = dataset.length

    // oneliner, test efficiency, nope, it's way slower than a for-loop
    // occurrences = dataset.filter(compare => !isMatch(original, compare));

    for (let datasetIndex = 0; datasetIndex < datasetLen; datasetIndex++) {
        const compare = dataset[datasetIndex];

        // If it's a match, add to the occurrences
        if (!isMatch(original, compare)) occurrences.push(compare);
    }

    return occurrences;
}

exports.isMatch = isMatch;
exports.search = search;
exports.searchNot = searchNot;