module.exports = function (config) {
    config.set({
        basePath: '../',

        files: [
            'app/lib/angular/angular.js',
            'app/lib/angular/angular-*.js',
            'app/js/**/*.js',
            'test/unit/**/*.js'
        ],

        exclude: [
            'app/lib/angular/angular-loader.js',
            'app/lib/angular/*.min.js',
            'app/lib/angular/angular-scenario.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],
        //browsers: ['PhantomJS','Firefox', 'IE'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-phantomjs-launcher',
            'karma-script-launcher',
            'karma-jasmine'
        ]
    });
};
