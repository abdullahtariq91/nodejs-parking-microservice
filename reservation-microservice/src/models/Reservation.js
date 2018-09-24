const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);

const reservationObj = new Schema({
  license: { type: String, unique: true, required: true },
  _spotId: {type: Schema.Types.ObjectId, ref: 'Spots'},
  paid: { type: Boolean, default: false },
  status: { type: String, enum: ['canceled', 'finished', 'reserved'] },
  createdTime: { type: Date }
});

module.exports = mongoose.model('Reservations', reservationObj);