const User = require('../models/User');

class UserController {
  async create(req, res) {
    return res.render('create-account');
  }
  async store(req, res) {
    await User.create(req.body);

    return res.redirect('/');
  }
}

module.exports = new UserController();
