const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spotObj = new Schema({
  number: { type: String, unique: true },
  price: { type: Number },
  paid: { type: Boolean, default: false },
  status: { type: string, enum: ['free', 'reserved'] },
  reservationTime: { type: Date }
});

module.exports = mongoose.model('Spot', spotObj);