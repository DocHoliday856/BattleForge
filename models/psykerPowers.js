'use strict';
module.exports = (sequelize, DataTypes) => {
  var Psykers = sequelize.define('Psykers', {
    name: { type: DataTypes.STRING, allowNull:false},
    flavor: DataTypes.STRING,
    description: DataTypes.STRING,
    roll: DataTypes.INTEGER,

    factionId: { type: DataTypes.INTEGER, allownull: false },
  }, {});
  Psykers.associate = function(models) {
    models.Psykers.belongsTo(models.Factions, {foreignKey: 'factionId', sourcekey: 'id' });
  }
  return Psykers;
};