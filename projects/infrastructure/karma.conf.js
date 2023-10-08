const {
  karma
} = require('./karma');

const {
  join
} = require('path');

module.exports = function (config) {
  config.set(karma({
    junitDir: join(__dirname, '../../junit-report/infrastructure'),
    coverageDir: join(__dirname, '../../coverage/infrastructure'),
    thresholds: {}
  }));
};
