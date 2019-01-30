'use strict';
module.exports = (sequelize, DataTypes) => {
  var FKeywords = sequelize.define('FKeywords', {
    name: { type: DataTypes.STRING, allowNull:false},
  }, {});
  FKeywords.associate = function(models) {
    models.FKeywords.belongsToMany(models.Units, {through: 'UnitsFKeywords' });
  }
  return FKeywords;
};