const Room = require('../models/Room');

class HomeController {
  async create(req, res) {
    const rooms = await Room.findAll({
      where: {
        user_id: req.session.user.id,
      },
    });
    return res.render('home', { username: req.session.user.name, rooms });
  }
}

module.exports = new HomeController();
