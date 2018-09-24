const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');
const expect = chai.expect;

chai.use(chaiHttp);
// testing endpoints only
describe('Unit Testing', () => {
  beforeEach((done) => {
  });

  describe('Do Something', () => {
    it('it should print something', (done) => {
      console.log('something');
    });
  });
});
