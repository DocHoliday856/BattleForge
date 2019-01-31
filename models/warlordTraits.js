'use strict';
module.exports = (sequelize, DataTypes) => {
  var Warlords = sequelize.define('Warlords', {
    name: { type: DataTypes.STRING, allowNull:false},
    flavor: DataTypes.STRING,
    description: DataTypes.STRING,
    roll: DataTypes.INTEGER,
    
    factionId: { type: DataTypes.INTEGER, allownull: false },
}, {});
Warlords.associate = function(models) {
  models.Warlords.belongsTo(models.Factions, {foreignKey: 'factionId', sourcekey: 'id' });
}
  return Warlords;
};