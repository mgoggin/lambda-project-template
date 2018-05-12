'use strict';

const Lambda = require('aws-sdk/clients/lambda');

const client = new Lambda({
  apiVersion: '2015-03-31'
});

/**
 * @function createFunction
 * @description Creates a new Lambda function and publishes it.
 * @param {string} functionName Name of the Lambda function.
 * @param {string} role IAM role that this Lambda function should have.
 * @param {string} handler Handler for the Lambda function.
 * @param {Buffer} binaryBundleArtifact Buffer which contains the base64-encoded binary bundle artifact.
 * @returns {Promise} Promise object returns the new Lambda function's properties as an object.
 */
const createFunction = (functionName, role, handler, binaryBundleArtifact) => {
  return client.createFunction({
    'FunctionName': functionName,
    'Role': role,
    'Runtime': 'nodejs8.10',
    'Publish': true,
    'Handler': handler,
    'Code': {
      'ZipFile': binaryBundleArtifact
    }
  }).promise();
};

module.exports = exports = createFunction;
