const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spotObj = new Schema({
  number: { type: String, unique: true, required: true },
  price: { type: Number, default: 0 },
  status: { type: string, enum: ['free', 'reserved'] },
  reservationTime: { type: Date }
});

module.exports = mongoose.model('Spot', spotObj);