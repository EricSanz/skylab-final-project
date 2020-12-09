function userController(User) {
  function getMethod(req, res) {
    const query = {};
    User.find(query, (errorFindUser, user) => ((errorFindUser)
      ? res.send(errorFindUser) : res.json(user)));
  }

  function postMethod({ body }, res) {
    const userId = body.uid;
    const query = { uid: userId };
    userController.findOneAndUpdate(query, body, { upsert: true, useFindAndModify: false }, (
      errorFindUser, userModified,
    ) => (
      (errorFindUser) ? res.send(errorFindUser) : res.json(userModified)));
  }

  return {
    getMethod,
    postMethod,
  };
}

module.exports = userController;
