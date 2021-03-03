'use strict';

const express = require('express');
const PlacesModel = require('../models/places.js');
const Places = require('../models/places.js');
const location = new Places();

const placesRouter = express.Router();

placesRouter.get('/places', getAllPlaces);    // step 1 --> hit the route (REST)
placesRouter.get('/places/:id', getOnePlaces);
placesRouter.post('/places', createPlaces);
placesRouter.put('/places/:id', updatePlaces);
placesRouter.delete('/places/:id', deletePlaces);

function getAllPlaces(req, res) {
  // step2 --> get all items from the db (CRUD)
  let allPlaces = location.get();
  // step 3 --> send those items back to the user (RESPONSE)
  res.status(200).json(allPlaces);
}

function getOnePlaces(req, res) {
  let id = parseInt(req.params.id);
  let item = location.get(id);
  res.status(200).json(item);
}

function createPlaces(req, res) {
  let obj = req.body;
  console.log(obj);
  let newPlaces = location.create(obj);
  console.log(newPlaces);
  res.status(200).json(newPlaces);
}

function updatePlaces (req, res) {
  let id = parseInt(req.params.id);
  let content = req.body;
  let updatedPlaces = location.update(id, content);
  res.status(200).json(updatedPlaces);
}

function deletePlaces (req, res) {
  let id = parseInt(req.params.id);
  let deletedPlaces = location.delete(id);
  res.status(200).json(deletedPlaces);
}

module.exports = placesRouter;
