const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');

class Room extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        room_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Room;
