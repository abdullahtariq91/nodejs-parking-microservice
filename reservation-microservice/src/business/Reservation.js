const common = require('../libs/common');
const reservationModel = require(common.routing('src/models', 'Reservation.js'));

// public functions
const getReservations = async () => {
  try {
    const reservations = await reservationModel.find({ });
    if (!reservations) {
      return ({
        code: 404,
        message: 'Reservations not found'
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

const createReservation = async (params) => {
  try {
    if (!params.license || !params._spotId) {
      return ({
        code: 400,
        message: 'Incomplete request body'
      });
    }
    let reservationObj = {};
    reservationObj.license  = params.license;
    reservationObj._spotId = params._spotId;
    reservationObj.booking = params.booking;
    reservationObj.status = 'active';
    reservationObj.createdDate = new Date();
    const reservation = await reservationModel.create(reservationObj);
    if (!reservation) {
      return ({
        code: 404,
        message: 'Reservation could not be created'
      });
    } else {
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

const getReservation = async (id) => {
  try {
    const reservation = await reservationModel.findOne({ _id: id });
    if (!reservation) {
      return ({
        code: 404,
        message: 'Reservation not found'
      });
    } else {
      return ({
        code: 200,
        message: 'Retrieved reservation',
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

const updateReservation = async (id, params) => {
  try {
    const reservation = await reservationModel.findOneAndUpdate({ _id: id }, params);
    if (!reservation) {
      return ({
        code: 404,
        message: 'Reservation not found'
      });
    } else {
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
  getReservations,
  createReservation,
  getReservation,
  updateReservation
};