const common = require('../libs/common');
const spotModel = require(common.routing('src/models', 'Spot.js'));

// public functions
const getSpots = async () => {
  try {
    const spots = await spotModel.find({ });
    if (!spots) {
      return ({
        code: 404,
        message: 'Spots not found'
      });
    } else {
      return ({
        code: 200,
        message: 'Retrieved spots',
        result: spots
      });
    }
  } catch (error) {
    return ({
      code: 501,
      message: 'Server Error'
    });
  }
};

const createSpot = async (params) => {
  try {
    if (!params.name) {
      return ({
        code: 400,
        message: 'Name not found in request body'
      });
    }
    const spot = await spotModel.create(params);
    if (!spot) {
      return ({
        code: 404,
        message: 'Spot could not be created'
      });
    } else {
      return ({
        code: 200,
        message: 'Created spot',
        result: spot
      });
    }
  } catch (error) {
    return ({
      code: 501,
      message: 'Server Error'
    });
  }
};

const getSpot = async (id) => {
  try {
    const spot = await spotModel.findOne({ _id: id });
    if (!spot) {
      return ({
        code: 404,
        message: 'Spot not found'
      });
    } else {
      return ({
        code: 200,
        message: 'Retrieved spot',
        result: spot
      });
    }
  } catch (error) {
    return ({
      code: 501,
      message: 'Server Error'
    });
  }
};

const updateSpot = async (id, params) => {
  try {
    const spot = await spotModel.findOneAndUpdate({ _id: id }, params);
    if (!spot) {
      return ({
        code: 404,
        message: 'Spot not found'
      });
    } else {
      return ({
        code: 200,
        message: 'Spot updated'
      });
    }
  } catch (error) {
    return ({
      code: 501,
      message: 'Server Error'
    });
  }
};

const deleteSpot = async (id) => {
  try {
    const spot = await spotModel.findByIdAndRemove({ _id: id });
    if (!spot) {
      return ({
        code: 404,
        message: 'Spot not found'
      });
    } else {
      return ({
        code: 200,
        message: 'Spot removed'
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
  getSpots,
  createSpot,
  getSpot,
  updateSpot,
  deleteSpot
};