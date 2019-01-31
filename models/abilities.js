'use strict';
module.exports = (sequelize, DataTypes) => {
  var Abilities = sequelize.define('Abilities', {
    name: { type: DataTypes.STRING, allowNull:false},
    description: DataTypes.STRING,
    reference: DataTypes.STRING
  }, {});
  Abilities.associate = function(models) {
    models.Abilities.belongsToMany(models.Units, {through: 'UnitsAbilities' });
    models.Abilities.belongsToMany(models.Factions, {through: 'FactionsAbilities' });
  }
  return Abilities;
};
