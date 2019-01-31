'use strict';
module.exports = (sequelize, DataTypes) => {
  var Strategems = sequelize.define('Strategems', {
    name: { type: DataTypes.STRING, allowNull:false},
    flavor: DataTypes.STRING,
    description: DataTypes.STRING,
    commandPts: DataTypes.INTEGER,

    factionId: { type: DataTypes.INTEGER, allownull: false },
  }, {});
  Strategems.associate = function(models) {
    models.Strategems.belongsTo(models.Factions, {foreignKey: 'factionId', sourcekey: 'id' });
  }
  return Strategems;
};