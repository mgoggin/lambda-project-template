'use strict';

const fs = require('fs');
const archiver = require('archiver');

/**
 * @function createBundleArtifact
 * @description Creates the bundle artifact as a ZIP file with the name {file} from the build artifacts in {buildDir}.
 * @param {string} file Path to which the file should be written.
 * @param {string} buildDir Path to the directory containing build artifacts to be bundled.
 * @returns {Promise} Promise object returns the number of bytes written.
 */
const createBundleArtifact = (file, buildDir) => {
  return new Promise(resolve => {
    const output = fs.createWriteStream(file);
    const archive = archiver('zip',
      {
        zlib: {
          level: 9
        }
      }
    );

    output.on('close', () => {
      resolve(archive.pointer());
    });

    output.on('warning', err => { throw err; });
    output.on('error', err => { throw err; });

    archive.pipe(output);

    archive.directory(buildDir, false);

    archive.finalize();
  });
};

module.exports = exports = createBundleArtifact;
