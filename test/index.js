const $ = require('../main');

const test = require('jsmicro-test');

// Call function to give arguments
StartTest('first', 2, ['thrid']);

function StartTest() {
    // Run the isBoolean() Test.
    test($.isBoolean)
        .accept(true)
        .reject([])
        .reject('Test')
        .reject({})
        .reject(2394)
        .reject(() => {})
        .reject(test.args(arguments))
        .queue(true);

    // Run the isNotBoolean() Test.
    test(isNotBoolean)
        .accept(10)
        .accept([])
        .accept('Test')
        .accept({})
        .accept(new Date())
        .accept(() => {})
        .accept(test.args(arguments))
        .reject(false)
        .queue(true);
}
