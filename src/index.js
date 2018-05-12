import 'babel-polyfill';

const handler = (event, context, callback) => {
  const response = {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {},
    body: ''
  };

  callback(null, response);
};

export default handler;
