'use strict';
module.exports = (sequelize, DataTypes) => {
  var Objectives = sequelize.define('Objectives', {
    name: { type: DataTypes.STRING, allowNull:false},
    flavor: DataTypes.STRING,
    description: DataTypes.STRING,
    roll: DataTypes.INTEGER,

    factionId: { type: DataTypes.INTEGER, allownull: false },
}, {});
Objectives.associate = function(models) {
  models.Objectives.belongsTo(models.Factions, {foreignKey: 'factionId', sourcekey: 'id' });
}
  return Objectives;
};