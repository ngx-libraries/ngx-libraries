const {
  releaseCommon,
  releaseNPM,
  releaseGit
} = require('../common');

const {
  PROJECT_NAME,
  RELEASE_BRANCH
} = process.env;

module.exports = {
  releaseLibrary: function() {
    return {
      branches: [
        {
          name: RELEASE_BRANCH
        }
      ],
      plugins: [
        ...releaseCommon(),
        releaseNPM(PROJECT_NAME),
        ['@semantic-release/exec', {
          'prepareCmd': 'node node_modules/@ngx-library/infrastructure/versions/adjust-versions.js'
        }],
        ...releaseGit(
          [
            'projects/**/package.json'
          ],
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        )
      ]
    }
  }
};
