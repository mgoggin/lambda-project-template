'use strict';

const Lambda = require('aws-sdk/clients/lambda');

const client = new Lambda({
  apiVersion: '2015-03-31'
});

/**
 * @function functionExists
 * @description Checks if a function with the specified name already exists.
 * @param {string} functionName Name of the function for which to check.
 * @returns {Promise} Promise object returns a boolean.
 */
const functionExists = async functionName => {
  const checkForExistingFunction = functionName => {
    const request = client.getFunction({
      'FunctionName': functionName
    });

    return request
      .promise()
      .then(() => true)
      .catch(err => {
        if(err.code === 'ResourceNotFoundException') {
          return false;
        }

        throw err;
      });
  };

  const result = await checkForExistingFunction(functionName);

  return result;
};

module.exports = exports = functionExists;
