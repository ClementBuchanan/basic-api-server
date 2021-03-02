'use strict';

const express = require('express');
const PlacesModel = require('../models/places.js');
const Places = new PlacesModel();

const placesRouter = express.Router();

placesRouter.get('/place', getAllPlaces);    // step 1 --> hit the route (REST)
placesRouter.get('/place:id', getOnePlaces);
placesRouter.post('/place', createPlaces);
placesRouter.put('/place/:id', updatePlaces);
placesRouter.delete('/place/:id', deletePlaces);

function getAllPlaces(req, res) {
    // step2 --> get all items from the db (CRUD)
    let allPlaces = Places.get();
    // step 3 --> send those items back to the user (RESPONSE)
    res.status(200).json(allPlaces);
}

function getOnePlaces(req, res) {
    let id = parseInt(req.params.id);
    let item = Places.get(id);
    res.status(200).json(item);
}

function createPlaces(req, res) {
    let obj = req.body;
    console.log(obj);
    let newPlaces = Places.create(obj);
    console.log(newPlaces);
    res.status(201).json(newPlaces);
}

function updatePlaces (req, res) {
    let id = parseInt(req.params.id);
    let content = req.body;
    let updatedPlaces = Places.update(id, content);
    res.status(200).json(updatedPlaces);
  }
  
  function deletePlaces (req, res) {
    let id = parseInt(req.params.id);
    let deletedPlaces = Places.delete(id);
    res.status(204).json(deletedPlaces);
  }

module.exports = placesRouter;
