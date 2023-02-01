const { address } = require('ip');

const { SELENIUM_HOST, SELENIUM_PORT, KARMA_LOG_LEVEL, KARMA_HOSTNAME, CI } = process.env;

const hostname = KARMA_HOSTNAME || address('public');

module.exports = {
  karma(
    {
      junitDir,
      coverageDir,
      logLevel = KARMA_LOG_LEVEL || 'INFO',
      thresholds = {
        global: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100
        },
        each: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80
        }
      },
      chromeFlags = [
        '--disable-gpu',
        '--no-sandbox',
        '--remote-debugging-port=9222'
      ],
      defaultBrowsers = CI ?
        ['WebDriverChrome'] :
        ['ChromeHeadless'],
      defaultReporters = CI
        ? [ 'spec', 'junit', 'kjhtml' ]
        : [ 'spec' ],
      webDriverConfig = {
        remoteHost: true,
        hostname: SELENIUM_HOST,
        port: SELENIUM_PORT
      },
      availableBrowsers = {
        WebDriverChrome: {
          base: 'WebDriver',
          browserName: 'chrome',
          platform: 'ANY',
          config: webDriverConfig
        },
        WebDriverFirefox: {
          base: 'WebDriver',
          browserName: 'firefox',
          platform: 'ANY',
          config: webDriverConfig
        },
        ChromiumHeadlessNoSandbox: {
          base: 'ChromiumHeadless',
          flags: [
            ...chromeFlags
          ]
        },
        ChromeHeadless: {
          base: 'Chrome',
          flags: [
            ...chromeFlags,
            '--headless'
          ]
        }
      },
      files = [],
      proxies = {}
    }
  ) {

    return {
      basePath: '.',
      hostname: hostname,
      frameworks: [
        'jasmine',
        '@angular-devkit/build-angular'
      ],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('./webdriver-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('@angular-devkit/build-angular/plugins/karma'),
        require('karma-junit-reporter'),
        require('karma-spec-reporter')
      ],
      client: {
        clearContext: false,
        jasmine: {
          random: true
        }
      },
      junitReporter: {
        outputDir: junitDir
      },
      specReporter: {
        maxLogLines: 5,
        suppressErrorSummary: false,
        suppressFailed: false,
        suppressPassed: false,
        suppressSkipped: true,
        showSpecTiming: true,
        failFast: false
      },
      coverageReporter: {
        dir: coverageDir,
        subdir: '.',
        reporters: [
          {
            type: 'html'
          },
          {
            type: 'lcovonly'
          },
          {
            type: 'text-summary'
          },
          {
            type: 'cobertura'
          }
        ],
        check: thresholds
      },
      reporters: defaultReporters,
      port: 9876,
      colors: true,
      logLevel: logLevel,
      autoWatch: true,
      browsers: defaultBrowsers,
      browserDisconnectTimeout: 30000,
      browserDisconnectTolerance: 1,
      browserNoActivityTimeout: 30000,
      customLaunchers: availableBrowsers,
      singleRun: false,
      files: files,
      proxies: proxies
    }
  }
};
