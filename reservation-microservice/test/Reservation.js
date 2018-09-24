const chai = require('chai');
const chaiHttp = require('chai-http');
const common = require('../src/libs/common');
const server = require('../app.js');
const reservationModel = require(common.routing('src/models', 'Reservation.js'));
const spotModel = require(common.routing('src/models', 'Spot.js'));
const sinon = require('sinon');

const expect = chai.expect;

chai.use(chaiHttp);
// testing endpoints only
describe('Spot Unit Testing', () => {
  let sandbox = null;
  beforeEach((done) => {
    sandbox = sinon.createSandbox();
    done();
  });
  afterEach(() => {
    sandbox.restore();
  });

  describe('Spot API', () => {
    describe('GET /api/spots', () => {
      let spotsObj = {
        "status": 200,
        "message": "Retrieved spots",
        "data": [
          {
            "reserved": false,
            "_id": "5ba8e994da19870f6b176411",
            "name": "spot1",
            "__v": 0
          }
        ]
      }
      it('it should get spots successfully', (done) => {
        sandbox
          .mock(spotModel)
          .expects('find')
          .resolves(spotsObj)
        chai.request(server)
          .get('/api/spots')
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
      });
      it('it should throw 404 if spots are not retrieved', (done) => {
        sandbox
          .mock(spotModel)
          .expects('find')
          .resolves(null)
        chai.request(server)
          .get('/api/spots')
          .end((err, res) => {
            expect(res.status).to.equal(404);
            done();
          });
      });
      it('it should throw 501 if server error', (done) => {
        sandbox
          .mock(spotModel)
          .expects('find')
          .rejects()
        chai.request(server)
          .get('/api/spots')
          .end((err, res) => {
            expect(res.status).to.equal(501);
            done();
          });
      });
    });
  });
});
