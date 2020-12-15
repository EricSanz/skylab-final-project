const user = require('../../models/userModel');
const userController = require('./userController')(user);

describe('userController Methods', () => {
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('GetMethod', () => {
    test('Should call get Method and return json with data', () => {
      user.findOne = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(false, {});
          }),
        }),
      });

      userController.getMethod({ query: { displayName: '' } }, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Should call get Method and return error', () => {
      user.findOne = jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          exec: jest.fn().mockImplementationOnce((callback) => {
            callback(true, null);
          }),
        }),
      });

      userController.getMethod({ query: { displayName: '' } }, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
