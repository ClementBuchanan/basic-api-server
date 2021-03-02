'use strict';

const express = require('express');
//Pull in Animals constructor
const AnimalsModel = require('../models/animals.js');
const animals = new AnimalsModel();
const animalsRouter = express.Router();

animalsRouter.get('/animals', getAllAnimals);
animalsRouter.get('animal:id', getOneAnimals);
animalsRouter.get('/animal', createAnimals);
animalsRouter.put('/animal:id', updateAnimals);
animalsRouter.delete('/animal:id', deleteAnimals);

function getAllAnimals (req, res) {
    let all = animals.get();
    res.status(200).json(all);
}

function getOneAnimals (req, res) {
    let id = parseInt(req.params.id);
    let items = animals.get(id);
    res.status(200).json(items);
}

function createAnimals (req, res) {
    let obj = req.body;
    let newAnimals = animals.create(obj);
    console.log(newAnimals);
    res.status(201).json(newAnimals);
}

function updateAnimals (req, res) {
    let id = parseInt(req.params.id);
    let content = req.body;
    let updatedAnimals = animals.deleted(id, content);
    res.status(200).json(updatedAnimals);
}

function deleteAnimals (req, res) {
    let id = parseInt(req.params.id);
    let deletedAnimals = animals.delete(id);
    res.status(204).json(deletedAnimals);
}

module.exports = animalsRouter;
