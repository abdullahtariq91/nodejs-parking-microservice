const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);

const reservationObj = new Schema({
  license: { type: String, unique: true, required: true },
  _spotId: { type: String },
  paid: { type: Boolean, default: false },
  status: { type: string, enum: ['canceled', 'finished', 'reserved'] },
  createdTime: { type: Date }
});

// CertificationObj.plugin(deepPopulate);
module.exports = mongoose.model('Reservations', reservationObj);