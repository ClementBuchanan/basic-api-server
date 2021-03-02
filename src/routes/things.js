'use strict';

const express = require('express');
const Things = require('../models/thing.js');
const items = new Things();


const router = express.Router();

router.get('/things', getThings);    // step 1 --> hit the route (REST)
router.get('/things:id', getOneThing);
router.post('/things', createThing);
// router.put('/things/:id', updateThing);
// router.delete('/things/:id', deleteThing);

function getThings(req, res) {
    // step2 --> get all items from the db (CRUD)
    let all = items.get();
    // step 3 --> send those items back to the user (RESPONSE)
    res.status(200).json(all);
}

function getOneThing(req, res) {
    let id = parseInt(req.params.id);
    let item = items.get(id);
    res.status(200).json(item);
}

function createThing(req, res) {
    let obj = req.body;
    let newItem = items.create(obj);
    res.status(201).json(newItem);
}

// function undateThing(req, res) {

// }

// function deleteThing(req, res) {

// }

module.exports = router;