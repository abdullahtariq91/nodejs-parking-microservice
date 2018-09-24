# nodejs-parking-microservice

## Project Structure

```
reservation-microservice/
  package.json
  app.js
  bin/
    www
  test/
    Reservation.js
    Spot.js
  src/
    business/
      Reservation.js
      Spot.js
    configurations/
      default.js
    libs/
      common.js
    models/
      Reservation.js
      Spot.js
    routes/
      index.js
      Reservation.js
      Spot.js
  Dockerfile
spot-checker-microservice
  app.js
  src/
    business/
      Checker.js
    configurations/
      default.js
    models/
      Reservation.js
      Spot.js
  Dockerfile
```

## Requirements

### node.js >= 8.11.3
### MongoDB

## Reservation Microservice:

### Scripts & Installation
####

#### `npm test`
Runs test for the API.

### Endpoints
`GET /api/spots`
Returns Spots.

`POST /api/spots`
Creates a Spot. Send `number` (Number) in request body.

`GET /api/spots/:spotId`
Returns single Spot based on Spot id.

`PUT /api/spots/:spotId`
Updates single Spot based on Spot id. Send `number` (Number) & `price` (Number) in request body.

`DELETE /api/spots/:spotId`
Deletes single Spot based on Spot id.

`POST /api/spots/:spotId/reserve`
Creates Reservation based on Spot id. Send `license` (String), `_spotId` (String), & `paid` (Boolean) in request body.

`GET /api/spots/:spotId/reservations`
Returns Reservations based on Spot id.

`PUT /api/spots/:spotId/reservations/:reservationId`
Updates reservation based on Spot id & Reservation Id. Send `status` (String) in request body (should be 'finished').

## Spot Checker Microservice
Runs every minute to update all 'expired' (>= 15 minutes) Spot and Reserved records to 'free' and 'cancelled' respectively.
