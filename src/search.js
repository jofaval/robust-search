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
 * Private method to check if a variable is an Object
 * 
 * @param {any} variable The variable to check the type on
 * 
 * @returns {Boolean} Is it an object?
 */
const isObject = variable => typeof variable === 'object' && variable !== null;

/**
 * **WARNING!!** It's an efficiency heavy operation it uses "almost".
 * ---------------
 * Search for a value in a string array
 * 
 * @param {Array} dataset The array containing the strings
 * @param {String} original The original string to compare
 * @param {Object} [options] The configuration options
 * @param {Object} [options.justThere] Will just check if it's there. By default it won't
 * @param {CallableFunction} [options.filter] The callable filter function. Null by default
 * @param {CallableFunction} [options.json] Does the array contain objects/json. False by default
 * 
 * @returns {Array} The occurences, if empty, it wasn't found
 */
const search = (dataset, original, options = {}) => {
    // Default values are added
    options = { json: false, filter: null, justThere: false, ...options, }
    
    const filter = options.filter ?? isMatch;

    let occurrences = [];

    const datasetLen = dataset.length
    for (let datasetIndex = 0; datasetIndex < datasetLen; datasetIndex++) {
        const compare = dataset[datasetIndex];

        // Implements JSON comparison, if wanted
        if (options.json && isObject(compare)) {
            for (const compareKey in compare) {
                if (Object.hasOwnProperty.call(compare, compareKey)) {
                    const compareElement = compare[compareKey];

                    // If it isn't a match, add to the occurrences
                    if (filter(original, compareElement)) {
                        // If we were looking for it not to be there, and it is, false is returned
                        if (options.justThere) return true;

                        occurrences.push(compare);
                        break;
                    }
                }
            }
        }

        // If it's a match, add to the occurrences
        if (filter(original, compare)) {
            // If we were looking for it to just be there and it was found, true is returned
            if (options.justThere) return true;

            occurrences.push(compare);
        }
    }

    // If we were looking for it to just be there and it wasn't found, false is returned
    if (options.justThere) return false;

    return occurrences;
};

/**
 * **WARNING!!** It's an efficiency heavy operation it uses "almost".
 * ---------------
 * Search for everything but the value in a string array
 * 
 * @param {Array} dataset The array containing the strings
 * @param {String} original The original string to compare
 * @param {Object} [options] The configuration options
 * @param {Object} [options.justThere] Will just check if it's there. By default it won't
 * @param {CallableFunction} [options.filter] The callable filter function. Null by default
 * @param {CallableFunction} [options.json] Does the array contain objects/json. False by default
 * 
 * @returns {Array} The occurences, if empty, it wasn't found
 */
const exclude = (dataset, original, options = {}) => {
    let occurrences = [];

    const datasetLen = dataset.length

    // oneliner, test efficiency, nope, it's way slower than a for-loop
    // occurrences = dataset.filter(compare => !isMatch(original, compare));

    // Default values are added
    options = { json: false, filter: null, justThere: false, ...options, }

    const filter = options.filter ?? isMatch;

    for (let datasetIndex = 0; datasetIndex < datasetLen; datasetIndex++) {
        const compare = dataset[datasetIndex];

        // Implements JSON comparison, if wanted
        if (options.json && isObject(compare)) {
            for (const compareKey in compare) {
                if (Object.hasOwnProperty.call(compare, compareKey)) {
                    const compareElement = compare[compareKey];

                    // If it isn't a match, add to the occurrences
                    if (!filter(original, compareElement)) {
                        occurrences.push(compare);
                        break;
                    }
                    // If we were looking for it not to be there, and it is, false is returned
                    else if (options.justThere) return false;
                }
            }
        }
        
        // If it isn't a match, add to the occurrences
        if (!filter(original, compare)) occurrences.push(compare);
        // If we were looking for it not to be there, and it is, false is returned
        else if (options.justThere) return false;
    }

    // If we were just looking for the array not to have it, and it doesn't, true is returned
    if (options.justThere) return true;

    return occurrences;
}

exports.isMatch = isMatch;
exports.search = search;
exports.exclude = exclude;

/**
 * String implementations
 */
/**
 * Determines if two values are a match or not
 * 
 * @param {String} compare The string to be compared
 * 
 * @returns {Boolean} Are they a match?
 */
String.prototype.isMatch = function (compare, options = {}) {
    return isMatch(this, compare, options);
}
/**
 * Determines if two values are a match or not
 * 
 * @param {String} compare The string to be compared
 * 
 * @returns {Boolean} Are they **NOT** a match?
 */
String.prototype.isNotMatch = function (compare, options = {}) {
    return !isMatch(this, compare, options);
}