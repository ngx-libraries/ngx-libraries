const {
  releaseCommon,
  releaseNPM,
  releaseGit
} = require('./projects/infrastructure/semantic-release/common');

const libraries = Object.entries(require('./angular.json').projects)
  .filter(([ , { projectType }]) => projectType === 'library')
  .map(([ project ]) => project.replace(/^@ngx-library\//, ''));

const {
  RELEASE_BRANCH
} = process.env;

const plugins = [
  ...releaseCommon(),
  ...libraries.map((library) => releaseNPM(`@ngx-library/${library}`)),
  ['@semantic-release/exec', {
    prepareCmd: 'node projects/infrastructure/versions/adjust-versions.js'
  }],
  ...releaseGit(
    [
      'projects/**/package.json'
    ],
    'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    [
      ...libraries.map((library) => ({
        url: `https://www.npmjs.com/package/@ngx-library/${library}/v/\${nextRelease.version}`,
        label: `@ngx-library/${library}@\${nextRelease.version}`,
        type: 'package'
      }))
    ]
  )
];

module.exports = {
  branches: [
    {
      name: RELEASE_BRANCH
    }
  ],
  plugins
};
