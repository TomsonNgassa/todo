// An example configuration file.
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //seleniumServerJar: '../jar/selenium-server-standalone-2.39.0.jar',
    //seleniumArgs: ['-Dwebdriver.ie.driver=IEDriverServer.exe'],
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
        /*'browserName': 'firefox'*/
        /*'browserName': 'internet explorer'*/
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    //specs: ['mocha/onMocha.js'],
    specs: ['../test/e2e/protractor.js'],


    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
