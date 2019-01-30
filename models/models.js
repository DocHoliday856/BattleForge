'use strict';
module.exports = (sequelize, DataTypes) => {
  var Models = sequelize.define('Models', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    example: { type: DataTypes.STRING },
    move: { type: DataTypes.INTEGER },
    weapon: { type: DataTypes.INTEGER },
    ballistic: { type: DataTypes.INTEGER },
    strength: { type: DataTypes.INTEGER },
    toughness: { type: DataTypes.INTEGER },
    wounds: { type: DataTypes.INTEGER },
    attacks: { type: DataTypes.INTEGER },
    leadership: { type: DataTypes.INTEGER },
    save: { type: DataTypes.INTEGER },
    points: { type: DataTypes.INTEGER },

    unitId: { type: DataTypes.INTEGER, allowNull: false },
  }, {});
  Models.associate = function (models) {
    Models.belongsTo(models.Units, { foreignKey: 'unitId', sourceKey: 'id' });
  }
  return Models;
};