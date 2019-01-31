'use strict';
module.exports = (sequelize, DataTypes) => {
  var subFactions = sequelize.define('subFactions', {
    name: { type: DataTypes.STRING, allowNull:false},
    flavor: DataTypes.STRING,
    description: DataTypes.STRING,
    symbol: DataTypes.STRING,

    factionId: { type: DataTypes.INTEGER, allownull: false },
}, {});
subFactions.associate = function(models) {
  models.subFactions.belongsTo(models.Factions, {foreignKey: 'factionId', sourcekey: 'id' });
}
  return subFactions;
};