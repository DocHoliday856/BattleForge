'use strict';
module.exports = (sequelize, DataTypes) => {
  var Units = sequelize.define('Units', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    basePower: { type: DataTypes.INTEGER },
    role: { type: DataTypes.ENUM(
        'HQ', 
        'Troops', 
        'Elites', 
        'Fast Attack', 
        'Heavy Support', 
        'Dedicated Transport', 
        'Flyer', 
        'Fortification', 
        'Lord of War')},  
    
    factionId: { type: DataTypes.INTEGER, allownull: false },
  }, {});
  Units.associate = function (models) {
    Units.belongsTo(models.Factions, {foreignKey: 'factionId', sourceKey: 'id' });
    Units.belongsToMany(models.Abilities, {through: 'UnitsAbilities' });
    Units.belongsToMany(models.Wargear, {through: 'UnitsWargear' });
    Units.belongsToMany(models.Keywords, {through: 'UnitsKeywords' });
    Units.belongsToMany(models.FKeywords, {through: 'UnitsFKeywords' });
    Units.hasMany(models.Models, {foreignKey: 'unitId', sourceKey: 'id' });
  }
  return Units;
};