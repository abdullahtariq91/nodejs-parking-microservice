const common = require('../libs/common');
const reservationModel = require(common.routing('src/models', 'Reservation.js'));
const spotModel = require(common.routing('src/models', 'Spot.js'));

// public functions
const reserveSpot = async (spotId, params) => {
  try {
    if (!params.license || !params._spotId) {
      return ({
        code: 400,
        message: 'Incomplete request body'
      });
    }
    let reservationObj = {};
    reservationObj.license = params.license;
    reservationObj._spotId = params.spotId;
    reservationObj.paid = params.paid;
    reservationObj.status = 'reserved';
    reservationObj.createdTime = new Date();

    const reservation = await reservationModel.create(reservationObj);
    if (!reservation) {
      return ({
        code: 404,
        message: 'Reservation not created'
      });
    } else {
      await spotModel.findOneAndUpdate({ _id: _spotId }, { status: 'reserved' });
      return ({
        code: 200,
        message: 'Created reservation',
        result: reservation
      });
    }
  } catch (error) {
    return ({
      code: 501,
      message: 'Server Error'
    });
  }
};

const getReservations = async (spotId) => {
  try {
    const reservations = await reservationModel.find({
      _spotId: spotId
    });
    if (!reservations) {
      return ({
        code: 404,
        message: 'Reservation not found'
      });
    } else {
      return ({
        code: 200,
        message: 'Retrieved reservations',
        result: reservations
      });
    }
  } catch (error) {
    return ({
      code: 501,
      message: 'Server Error'
    });
  }
};

const updateReservation = async (spotId, reservationId, params) => {
  try {
    if (params.status !== 'finished') {
      return ({
        code: 400,
        message: 'Incomplete request body'
      });
    }
    const reservation = await reservationModel.findOneAndUpdate({ _id: reservationId, _spotId: spotId }, params);
    if (!reservation) {
      return ({
        code: 404,
        message: 'Reservation not found'
      });
    } else {
      await spotModel.findOneAndUpdate({ _id: spotId }, { status: 'free' });
      return ({
        code: 200,
        message: 'Reservation updated'
      });
    }
  } catch (error) {
    return ({
      code: 501,
      message: 'Server Error'
    });
  }
};

module.exports = {
  reserveSpot,
  getReservations,
  updateReservation
};