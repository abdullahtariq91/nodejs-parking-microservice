const mongoose = require('mongoose');
const common = require('src/libs/common');
const checkerService = require(common.routing('src/business', 'Checker.js'));

mongoose.connect(require('./src/configurations/default').database.development, { useNewUrlParser: true });

setInterval(async () => {

}, 10 * 1000);