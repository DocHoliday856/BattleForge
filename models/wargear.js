'use strict';
module.exports = (sequelize, DataTypes) => {
  var Wargear = sequelize.define('Wargear', {
    name: { type: DataTypes.STRING, allowNull: false },
    flavor: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    points: { type: DataTypes.INTEGER },
    weapon: { type: DataTypes.BOOLEAN },
    range: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    strength: { type: DataTypes.STRING },
    armorPen: { type: DataTypes.INTEGER },
    damage: { type: DataTypes.STRING },
    abilities: { type: DataTypes.STRING },

  }, {});
  Wargear.associate = function (models) {
    Wargear.belongsToMany(models.Factions, {through: 'FactionsWargear' });
    Wargear.belongsToMany(models.Units, {through: 'UnitsWargear' });
  }
  return Wargear;
};