const express = require('express');
const videogamesController = require('../controllers/videogamesController');
const videogameController = require('../controllers/videogameController');

function videogameRoute(Videogame) {
  const videogameRouter = express.Router();
  const videogames = videogamesController(Videogame);
  const videogame = videogameController(Videogame);

  videogameRouter.route('/')
    .get(videogames.getMethod)
    .put(videogames.putMethod);

  videogameRouter.route('/detail')
    .get(videogame.getMethod);

  return videogameRouter;
}

module.exports = videogameRoute;
