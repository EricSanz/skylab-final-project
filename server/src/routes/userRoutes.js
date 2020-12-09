const { Router } = require('express');
const userController = require('../controllers/userControllers/userController');

function userRoute(User) {
  const userRouter = Router();
  const user = userController(User);

  userRouter.route('')
    .get(user.getMethod)
    .post(user.postMethod);

  return userRouter;
}

module.exports = userRoute;
