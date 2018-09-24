const router = require('express').Router();
const common = require('../libs/common');
const SpotService = require(common.routing('src/business', 'Spot.js'));
const ReservationService = require(common.routing('src/business', 'Reservation.js'));

// add middleware for each call here
router.route('/')
  .get( async (req, res) => {
    const response = await SpotService.getSpots();
    common.response(res, response)
  })
  .post( async (req, res) => {
    const response = await SpotService.createSpot(req.body);
    common.response(res, response)
  })

router.route('/:spotId')
  .all((req, res, next) => {
    if (req.params.id === undefined)
      common.response(res, { code: 401, message: 'Missing ID in params' });
    else next();
  })
  .get( async (req, res) => {
    const response = await SpotService.getSpot(req.params.spotId);
    common.response(res, response)
  })
  .put( async (req, res) => {
    const response = await SpotService.updateSpot(req.params.spotId, req.body);
    common.response(res, response)
  })
  .delete( async (req, res) => {
    const response = await SpotService.deleteSpot(req.params.spotId);
    common.response(res, response)
  })

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
  .put( async (req, res) => {
    const response = await ReservationService.updateReservation(req.params.spotId, req.params.reservationId, req.body);
    common.response(res, response)
  })

module.exports = router;
