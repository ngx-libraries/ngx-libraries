const preset = 'conventionalcommits';

module.exports = {
  releaseCommon: function () {
    return [
      ['@semantic-release/commit-analyzer', {
        preset: preset,
        releaseRules: [
          {
            type: 'build',
            scope: 'npm',
            release: 'patch'
          },
          {
            type: 'build',
            scope: 'deps',
            release: 'patch'
          },
          {
            type: 'chore',
            scope: 'deps',
            release: 'patch'
          }
        ]
      }],
      ['@semantic-release/release-notes-generator', {
        preset: preset,
      }],
      '@semantic-release/changelog',
      ['@semantic-release/npm', {
        npmPublish: false
      }]
    ]
  },
  releaseNPM: function (project) {
    return [
      '@semantic-release/npm',
      {
        pkgRoot: `dist/${project}`
      }
    ]
  },
  releaseDocker: function (verifyCmd, prepareCmd, publishCmd) {
    return [
      '@semantic-release/exec',
      {
        'verifyConditionsCmd': verifyCmd,
        'prepareCmd': prepareCmd,
        'publishCmd': publishCmd
      }
    ]
  },
  releaseGit: function (
    gitAssets,
    gitMessage,
    gitlabAssets
  ) {
    return [
      ['@semantic-release/git', {
        message: gitMessage,
        assets: [
          'CHANGELOG.md',
          'package.json',
          'package-lock.json',
          ...(gitAssets ?? [])
        ],
      }],
      ['@semantic-release/gitlab', {
        assets: gitlabAssets ?? []
      }]
    ]
  }
};
