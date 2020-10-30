const Sequelize = require('sequelize');
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

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Room;
