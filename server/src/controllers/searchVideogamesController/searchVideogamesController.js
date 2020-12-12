function searchVideogamesController(Videogame) {
  function getMethod(req, res) {
    const query = { name: req.query.name };
    Videogame.find(query, (errorSearchingVideogame, videogame) => (
      errorSearchingVideogame ? res.send(errorSearchingVideogame)
        : res.json(videogame)));
  }
  return {
    getMethod,
  };
}

module.exports = searchVideogamesController;
