TESTING!

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initial data
const initialLocations = [
  {
    id: 'id1',
    name: 'Denver',
    lat: 39.742043,
    lng: -104.991531,
  },
  {
    id: 'id2',
    name: 'LA',
    lat: 34.052235,
    lng: -118.243683,
  },
  {
    id: 'id3',
    name: 'Boston',
    lat: 42.364506,
    lng: -71.038887,
  },
];

const initialPolygonMarkers = []

app.locals.idIndex = 3;
app.locals.locations = initialLocations;
app.locals.polygonMarkers = initialPolygonMarkers

// GET requests
app.get('/locations', (req, res) => res.send({ locations: app.locals.locations }));

app.get('/polygon-coordinates', (req, res) => res.send({ polygonMarkers: app.locals.polygonMarkers }));

// POST helper function
const verifyLocationData = (newLocation) => {
  const isNameValid = (newLocation.length >= 1)
  const isLatValid = (newLocation.lat !== '') && isFinite(newLocation.lat) && Math.abs(newLocation.lat) <= 90
  const isLngValid = (newLocation.lng !== '') && isFinite(newLocation.lng) && Math.abs(newLocation.lng) <= 180;

  if (isNameValid && isLatValid && isLngValid) {
    return true
  } else {
    return false
  }
}

// POST requests
app.post('/locations', (req, res) => {
  const newLocation = req.body;
  if (!verifyLocationData(newLocation)) {
    return res.status(422).send({ message: 'Invalid data in request'});
  } else {
    if (app.locals.locations.length === 0) {
      newLocation.id = 1;
    } else {
      let length = app.locals.locations.length
      newLocation.id = `id${++length}`
    }
    app.locals.locations.push(newLocation);
    return res.status(201).json(newLocation);
  }
});

app.post('/polygon-coordinates', (req, res) => {
  const newPolygonCoordinates = req.body;
  app.locals.polygonMarkers = newPolygonCoordinates
  res.send({ polygonMarkers: app.locals.polygonMarkers })
});


app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
  console.log('RrrarrrrRrrrr server alive on port 3001');
});