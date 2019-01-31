'use strict';
module.exports = (sequelize, DataTypes) => {
  var FKeywords = sequelize.define('FKeywords', {
    name: { type: DataTypes.STRING, allowNull:false},
    factionId: { type: DataTypes.INTEGER, allownull: false },
  }, {});
  FKeywords.associate = function(models) {
    models.FKeywords.belongsToMany(models.Units, {through: 'UnitsFKeywords' });
    models.FKeywords.belongsTo(models.Factions, {foreignKey: 'factionId', sourcekey: 'id' });
  }
  return FKeywords;
};