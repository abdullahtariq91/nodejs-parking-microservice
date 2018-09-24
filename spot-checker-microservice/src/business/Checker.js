const spotModel = require('../models/Spot.js');
const reservationModel = require('../models/Reservation.js');

const checkSpots = async () => {
  const reservations = await reservationModel.find({ status: 'reserved', paid: true });
  if (reservations) {
    let expiredReservations = [];
    let expiredSpots = [];
    const timeNow = new Date();
    for (let i = 0; i < reservations.length; i++) {
      let duration = (timeNow - reservations[i].createdTime) / 60000;
      if (duration >= 15) {
        expiredReservations.push(reservations[i]._id);
        expiredSpots.push(reservations[i]._spotId);
      }
    }
    await reservationModel.update(
      { _id: { "$in": expiredReservations } },
      { status: 'canceled' }
    );
    await spotModel.update(
      { _id: { "$in": expiredSpots } },
      { status: 'free' }
    );
  }
};

module.exports = {
  checkSpots
}