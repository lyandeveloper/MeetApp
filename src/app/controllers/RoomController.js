const { v4: uuidV4 } = require('uuid');
const Room = require('../models/Room');

class RoomController {
  async create(req, res) {
    return res.render('create-room');
  }

  async index(req, res) {
    const { roomId } = req.params;
    const findExistRooms = await Room.findOne({
      where: {
        room_id: roomId,
      },
    });

    if (!findExistRooms) {
      return res.status(404).send('Room id not found');
    }

    console.log(findExistRooms);

    return res.render('room', {
      roomId: req.params.roomId,
      user: req.session.user.name,
    });
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

  async delete(req, res) {
    const { roomId } = req.params;
    await Room.destroy({
      where: {
        room_id: roomId,
      },
    });

    return res.redirect(`/home`);
  }

  async renderLoadRoom(req, res) {
    return res.render('load-room');
  }

  async loadRoom(req, res) {
    const { roomId } = req.body;

    return res.redirect(`/room/${roomId}`);
  }
}
module.exports = new RoomController();
