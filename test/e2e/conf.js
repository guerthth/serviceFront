/**
 * Created by thomas on 05.09.16.
 */
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    specs: [
        'templates/book_list.spec.js'
    ],

    capabilities: {
        browserName: 'firefox'
    }
};