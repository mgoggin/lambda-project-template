'use strict';

const fs = require('fs');

/**
 * @function encodeBundleArtifactFile
 * @description Reads the binary bundle artifact in to memory.
 * @param {string} file Path to the binary bundle artifact.
 * @returns {Promise} Promise object returns the binary data from the file as a base64-encoded string.
 */
const encodeBundleArtifactFile = file => {
  return new Promise(resolve => {
    return fs.readFile(file, { flag: 'r' }, (err, data) => {
      if(err) {
        throw err;
      }

      const encodedData = new Buffer(data, 'binary');

      return resolve(encodedData);
    });
  });
};

module.exports = exports = encodeBundleArtifactFile;
