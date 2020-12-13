/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

function userController(User) {
  function getMethod(req, res) {
    const query = { displayName: req.query.displayName };
    User.findOne(query).populate('favorites').exec((errorFindUser, user) => ((errorFindUser)
      ? res.send(errorFindUser) : res.json(user)));
  }

  function putMethod({ body }, res) {
    const userId = body.uid;
    const query = { uid: userId };
    User.findOneAndUpdate(query, body, { upsert: true, useFindAndModify: false }, (
      errorFindUser, userModified,
    ) => (
      (errorFindUser) ? res.send(errorFindUser) : res.json(userModified)));
  }

  function postMethod({ body }, res) {
    const userId = body.uid;
    // console.log(body);
    User.findOne({ uid: userId }, (errorFindUser, user) => {
      if (user) {
        console.log(user.favorites);
        // console.log(user);
        const findVideogame = user.favorites.some(
          (videogame) => String(videogame) === body.videogame,
        );
        console.log(typeof body.videogame);
        console.log(body.videogame);
        if (findVideogame) {
          const videogameFilter = user.favorites.filter((videogame) => String(videogame) !== body.videogame);
          user.favorites = videogameFilter;
          user.save();
          res.send('delete');
        } else {
          user.favorites = [...user.favorites, body.videogame];
          user.save();
          res.json('save');
        }
      } else {
        res.send(errorFindUser);
      }
    });
  }

  return {
    getMethod,
    putMethod,
    postMethod,
  };
}

module.exports = userController;
