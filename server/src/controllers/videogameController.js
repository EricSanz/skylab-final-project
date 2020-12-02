function videogameController(Videogame) {
  function getMethod(req, res) {
    const query = { id: +req.query.id };
    Videogame.findOne(query, (errorGetVideogame, videogame) => ((errorGetVideogame)
      ? res.send(errorGetVideogame) : res.json(videogame)));
  }

  return {
    getMethod,
  };
}

module.exports = videogameController;
