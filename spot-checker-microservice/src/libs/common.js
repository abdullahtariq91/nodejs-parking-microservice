const routing = (type, fileName) => {
  return require('path').join(ROOTURL, '/' + type + '/', fileName);
};

module.exports = {
  routing
};
