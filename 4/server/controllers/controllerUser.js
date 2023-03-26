const { createToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");
const { User } = require("../models/index");

class Controller {
  static async register(req, res, next) {
    try {
      let { email, password } = req.body;
      let user = await User.create({
        email,
        password,
      });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email || !password) {
        throw { name: "BadRequest" };
      }

      let user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "InvalidCredentials" };
      }

      let compare = comparePassword(password, user.password);
      if (!compare) {
        throw { name: "InvalidCredentials" };
      }
      let payload = {
        id: user.id,
      };

      let access_token = createToken(payload);
      res
        .status(200)
        .json({ access_token, email: user.email });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;