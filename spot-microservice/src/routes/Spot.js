const router = require('express').Router();
const common = require('../libs/common');
const SpotService = require(common.routing('src/business', 'Spot.js'));

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

router.route('/:id')
  .all((req, res, next) => {
    if (req.params.id === undefined)
      common.response(res, { code: 401, message: 'Missing ID in params' });
    else next();
  })
  .get( async (req, res) => {
    const response = await SpotService.getSpot(req.params.id);
    common.response(res, response)
  })
  .put( async (req, res) => {
    const response = await SpotService.updateSpot(req.params.id, req.body);
    common.response(res, response)
  })
  .delete( async (req, res) => {
    const response = await SpotService.deleteSpot(req.params.id);
    common.response(res, response)
  })

module.exports = router;
