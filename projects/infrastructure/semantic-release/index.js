const {
  releaseApplication
} = require('./application/semantic-release-application');
const {
  releaseLibrary
} = require('./library/semantic-release-library');

module.exports = {
  releaseApplication: releaseApplication,
  releaseLibrary: releaseLibrary
};
