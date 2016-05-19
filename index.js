(function() {
    'use strict';

    if (!window.hasOwnProperty('isBoolean')) window.isBoolean = isBoolean;
    if (!window.hasOwnProperty('isNotBoolean')) window.isNotBoolean = isNotBoolean;

    function isBoolean(object) {
        return toString.call(object) === '[object Boolean]';
    }

    function isNotBoolean(object) {
        return !isBoolean(object);
    }
})();
