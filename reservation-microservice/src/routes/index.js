const common = require('../libs/common');

// add each route for application here
module.exports = function (app) {
  app.use('/api/spots', require(common.routing('src/routes', 'Spot.js')));
  app.use('/api/reservation', require(common.routing('src/routes', 'Reservation.js')));
};
