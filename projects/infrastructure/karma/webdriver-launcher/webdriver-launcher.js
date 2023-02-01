const { Builder } = require('selenium-webdriver');
const { parse, format } = require('url');

const WebDriverInstance = function (baseBrowserDecorator, args, logger) {
  const log = logger.create('WebDriver');

  const {
    config: _config,
    ..._capabilities
  } = args;

  const config = {
    ..._config,
    protocol: _config?.protocol ?? 'http',
    hostname: _config?.hostname ?? 'selemium-standalone-chrome',
    port: _config?.port ?? 4444,
    hub: _config?.hub ?? 'wd/hub'
  };

  const self = this;

  const capabilities = {
    platform: 'ANY',
    testName: 'Karma test',
    tags: [],
    version: '',
    ..._capabilities
  };

  if (!capabilities.browserName) {
    throw new Error('browserName is required!');
  }

  baseBrowserDecorator(this);

  this.name = capabilities.browserName + ' via Remote WebDriver';
  this.spec = capabilities;

  // Handle x-ua-compatible option same as karma-ie-launcher(copy&paste):
  //
  // Usage :
  //   customLaunchers: {
  //     IE9: {
  //       base: 'WebDriver',
  //       config: webdriverConfig,
  //       browserName: 'internet explorer',
  //       'x-ua-compatible': 'IE=EmulateIE9'
  //     }
  //   }
  //
  // This is done by passing the option on the url, in response the Karma server will
  // set the following meta in the page.
  //   <meta http-equiv="X-UA-Compatible" content="[VALUE]"/>
  function handleXUaCompatible(args, urlObj) {
    if (args['x-ua-compatible']) {
      urlObj.query['x-ua-compatible'] = args['x-ua-compatible'];
    }
  }

  this._start = async function (url) {
    const {search, ...parsedUrl} = parse(url, true);

    handleXUaCompatible(capabilities, parsedUrl);

    log.debug('WebDriver config: ' + JSON.stringify(config));
    log.debug('Browser capabilities: ' + JSON.stringify(capabilities));

    self.browser = await new Builder()
      .usingServer(`${config.protocol}://${config.hostname}:${config.port}/${config.hub}`)
      .withCapabilities(capabilities)
      .build();

    const session = await self.browser.getSession();

    self.browser.sessionId = session.getId();

    log.debug('Session ID: ' + self.browser.sessionId);

    const interval = setInterval(async function() {
      try {
        await self.browser.getTitle();
        log.debug('Imitate activity');
      } catch (e) {
        clearInterval(interval)
      }
    }, 45000);

    self._process = {
      kill: async function() {
        clearInterval(interval);
        await self.browser.quit();

        log.info('Killed ' + capabilities.testName + '.');

        self._onProcessExit(self.error ? -1 : 0, self.error);
      }
    };

    try {
      await self.browser.get(format(parsedUrl));
    } catch (e) {
      if (!error) {
        return;
      }

      log.error('WebDriver command failed', {
        spec: capabilities,
        error: error
      });

      // Now give up and quit.
      await self._process.kill();
    }
  };

  this._onKillTimeout = function(){};
};

WebDriverInstance.prototype = {
  name: 'WebDriver',
  DEFAULT_CMD: {
    linux: require('selenium-webdriver').path,
    darwin: require('selenium-webdriver').path,
    win32: require('selenium-webdriver').path
  },
  ENV_CMD: 'WEBDRIVER_BIN'
};

WebDriverInstance.$inject = ['baseBrowserDecorator', 'args', 'logger'];

module.exports = {
  WebDriverInstance: WebDriverInstance
};
