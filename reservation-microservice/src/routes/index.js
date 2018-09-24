const common = require('../libs/common');

// add each route for application here
module.exports = function (app) {
  app.use('/api/spots', require(common.routing('src/routes', 'Reservation.js')));
};
