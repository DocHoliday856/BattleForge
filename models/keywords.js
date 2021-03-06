'use strict';
module.exports = (sequelize, DataTypes) => {
  var Keywords = sequelize.define('Keywords', {
    name: { type: DataTypes.STRING, allowNull:false},
  }, {});
  Keywords.associate = function(models) {
    models.Keywords.belongsToMany(models.Units, {through: 'UnitsKeywords' });
    models.Keywords.belongsToMany(models.Factions, {through: 'FactionsKeywords' });
  }
  return Keywords;
};