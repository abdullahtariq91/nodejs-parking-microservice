const routing = (type, fileName) => {
  return require('path').join(ROOTURL, '/' + type + '/', fileName);
};

const response = (res, response) => {
  return res.status(response.code).send({
    status : response.code,
    message : response.message || 'Success',
    data : response.result
  });
};

module.exports = {
  routing,
  response
};
