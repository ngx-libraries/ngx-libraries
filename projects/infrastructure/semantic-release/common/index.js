const {
  releaseCommon,
  releaseNPM,
  releaseDocker,
  releaseGit
} = require('./semantic-release-common');

module.exports = {
  releaseCommon: releaseCommon,
  releaseNPM: releaseNPM,
  releaseDocker: releaseDocker,
  releaseGit: releaseGit
};
