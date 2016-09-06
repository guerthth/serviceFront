// Karma configuration
// Generated on Sat Sep 03 2016 14:31:56 GMT+0200 (CEST)

module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            'test/e2e/**/*.js'
        ],

        logLevel: config.LOG_DEBUG,

        autoWatch: false,

        browsers: ['Chrome'],

        frameworks: ['ng-scenario'],

        singleRun: true,

        urlRoot: '/_karma_/',

        proxies: {
            '/': 'http://localhost:8080/'
            //'/': 'http://localhost:8080/app/#/books/123'
        },

        //plugins: [
        //    'karma-firefox-launcher',
        // 'karma-jasmine',
        //    'karma-ng-scenario'//,
        //'karma-cli'
        // ]
    });
};
