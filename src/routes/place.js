'use strict';

const express = require('express');
const Places = require('../models/places.js');
const items = new Places();


const router = express.Router();

router.get('/place', getPlaces);    // step 1 --> hit the route (REST)
router.get('/place:id', getOnePlace);
router.post('/place', createPlace);
// router.put('/things/:id', updateThing);
// router.delete('/things/:id', deleteThing);

function getThings(req, res) {
    // step2 --> get all items from the db (CRUD)
    let all = items.get();
    // step 3 --> send those items back to the user (RESPONSE)
    res.status(200).json(all);
}

function getOnePlace(req, res) {
    let id = parseInt(req.params.id);
    let item = items.get(id);
    res.status(200).json(item);
}

function createPlace(req, res) {
    let obj = req.body;
    let newItem = items.create(obj);
    res.status(201).json(newItem);
}

// function undatePlace(req, res) {

// }

// function deletePlace(req, res) {

// }

module.exports = router;