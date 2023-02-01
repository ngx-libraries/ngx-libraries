const {
  releaseCommon,
  releaseDocker,
  releaseGit
} = require('../common');

const {
  DOCKER_BUILD_ARGS,
  DOCKER_IMAGE_NAME,
  DOCKER_REGISTRY_URL,
  DOCKER_BUILD_PATH,
  DOCKER_USERNAME,
  DOCKER_PASSWORD,
  RELEASE_BRANCH
} = process.env;

const verifyCmd = `
docker login "${DOCKER_REGISTRY_URL}" -u "${DOCKER_USERNAME}" -p "${DOCKER_PASSWORD}"
`;
const prepareCmd = `
docker build ${DOCKER_BUILD_ARGS ? DOCKER_BUILD_ARGS : ''} -t ${DOCKER_IMAGE_NAME} ${DOCKER_BUILD_PATH ? DOCKER_BUILD_PATH : '.'}
`;
const publishCmd = `
docker tag "${DOCKER_IMAGE_NAME}:latest" "${DOCKER_IMAGE_NAME}:\${nextRelease.version}";
docker push "${DOCKER_IMAGE_NAME}:latest";
docker push "${DOCKER_IMAGE_NAME}:\${nextRelease.version}";
docker logout "${DOCKER_REGISTRY_URL}"
`;

module.exports = {
  releaseApplication: function() {
    return {
      branches: [
        {
          name: RELEASE_BRANCH
        }
      ],
      plugins: [
        ...releaseCommon(),
        releaseDocker(
          verifyCmd,
          prepareCmd,
          publishCmd
        ),
        ...releaseGit(
          [],
          'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}'
        )
      ]
    }
  }
};
