const router = require('express').Router();
const common = require('../libs/common');
const ReservationService = require(common.routing('src/business', 'Reservation.js'));

// add middleware for each call here
router.route('/:spotId/reserve')
  .post( async (req, res) => {
    const response = await ReservationService.reserveSpot(req.params.spotId, req.body);
    common.response(res, response)
  })

router.route('/:spotId/reservations')
  .get( async (req, res) => {
    const response = await ReservationService.getReservations(req.params.spotId);
    common.response(res, response)
  })

router.route('/:spotId/reservations/:reservationId')
  .post( async (req, res) => {
    const response = await ReservationService.updateReservation(req.params.spotId, req.params.reservationId, req.body);
    common.response(res, response)
  })

module.exports = router;
