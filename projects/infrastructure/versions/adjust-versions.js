#!/usr/bin/env node

'use strict';

const { glob } = require('glob')
const { EOL } = require('os');
const { writeFileSync } = require('fs');

const cwd = process.cwd();
const projectsPath = `${cwd}/projects`;
const project = require(`${cwd}/package.json`)
const angular = require(`${cwd}/angular.json`);

const {
  PROJECT_NEXT_VERSION
} = process.env;

const libraries = Object.entries(angular.projects)
  .filter(([ , { projectType }]) => projectType === 'library')
  .map(([ project ]) => project);

const projectNextVersion = PROJECT_NEXT_VERSION ?? project.version;

const packages = {
  ...project.dependencies,
  ...project.devDependencies,
  ...Object.fromEntries(libraries.map((library) => [library, projectNextVersion]))
};

function isDefined(val) {
  return val !== undefined && val !== null && val !== '';
}

function mapDependencies(point, key, prefix = '') {
  return isDefined(point[key])
    ? {
      [key]: Object.fromEntries(
        Object.entries(point[key])
          .sort(([a], [b]) => {
            if (a < b){
              return -1;
            } else if (a > b){
              return 1;
            } else {
              return 0;
            }
          })
          .map(([name]) => [name, `${prefix}${packages[name]}`])
      )
    }
    : {}
}

glob(`${projectsPath}/**/package.json`, {})
  .then((files) => files.forEach((file) => {
    const entryPoint = require(file);

    const content = JSON.stringify({
      ...entryPoint,
      ...isDefined(entryPoint.version)
        ? {version: projectNextVersion}
        : {},
      ...mapDependencies(entryPoint, 'dependencies'),
      ...mapDependencies(entryPoint, 'devDependencies'),
      ...mapDependencies(entryPoint, 'peerDependencies', '^')
    }, null, 2)

    writeFileSync(file, `${content}${EOL}`)
  }));
