const express = require('express');
const router = express.Router();
const swapiController = require('../controllers/swapi.controller');

router.post('/favorites',swapiController.addFavorite);
router.get('/favorites',swapiController.getFavorites);
router.get('/planets',swapiController.getPlanets);
router.get('/characters',swapiController.getCharacters);
router.get('/starships',swapiController.getStarships);

module.exports = router;
