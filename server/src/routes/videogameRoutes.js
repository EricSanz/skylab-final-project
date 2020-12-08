const { Router } = require('express');
const videogamesController = require('../controllers/videogamesController');
const videogameController = require('../controllers/videogameController');

function videogameRoute(Videogame) {
  const videogameRouter = Router();
  const videogames = videogamesController(Videogame);
  const videogame = videogameController(Videogame);

  videogameRouter.route('/products')
    .get(videogames.getMethod)
    .put(videogames.putMethod);

  videogameRouter.route('/product/:id')
    .get(videogame.getMethod);

  return videogameRouter;
}

module.exports = videogameRoute;
