'use strict';

if (!global.hasOwnProperty('isBoolean')) global.isBoolean = isBoolean;
if (!global.hasOwnProperty('isNotBoolean')) global.isNotBoolean = isNotBoolean;

/**
 * Check does the given javascript object is a Boolean.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isBoolean(object) {
    return toString.call(object) === '[object Boolean]';
}

/**
 * Check does the given javascript object is not a Boolean.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotBoolean(object) {
    return !isBoolean(object);
}

module.exports = {isBoolean, isNotBoolean};
