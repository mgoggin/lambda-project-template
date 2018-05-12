'use strict';

const Lambda = require('aws-sdk/clients/lambda');

const client = new Lambda({
  apiVersion: '2015-03-31'
});

/**
 * @function updateFunction
 * @description Updates an existing Lambda function.
 * @param {string} functionName Name of the Lambda function.
 * @param {Buffer} binaryBundleArtifact Buffer which contains the base64-encoded binary bundle artifact.
 * @returns {Promise} Promise object returns the Lambda function's properties as an object.
 */
const updateFunction = (functionName, binaryBundleArtifact) => {
  return client.updateFunctionCode({
    'FunctionName': functionName,
    'Publish': true,
    'ZipFile': binaryBundleArtifact
  }).promise();
};

module.exports = exports = updateFunction;
