const { v4: uuidV4 } = require('uuid');
const Room = require('../models/Room');

class RoomController {
  async create(req, res) {
    return res.render('create-room');
  }

  async store(req, res) {
    const roomId = uuidV4();
    const { name } = req.body;

    await Room.create({
      name: name,
      room_id: roomId,
      user_id: req.session.user.id,
    });

    return res.redirect(`/room/${roomId}`);
  }
}
module.exports = new RoomController();
