const mongoose = require('mongoose');
const checkerService = require('./src/business/Checker').checkSpots;
mongoose.connect(require('./src/configurations/default').database.development, { useNewUrlParser: true });

setInterval(async () => {
  checkerService();
}, 10 * 1000);