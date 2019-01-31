'use strict';
module.exports = (sequelize, DataTypes) => {
  var Factions = sequelize.define('Factions', {
    name: { type: DataTypes.STRING, allowNull:false},
    codex: DataTypes.STRING,
    quote: DataTypes.STRING,
    classification: DataTypes.STRING,
  }, {});
  Factions.associate = function(models) {
    models.Factions.belongsToMany(models.Keywords, {through: 'FactionsKeywords' });
    models.Factions.belongsToMany(models.Abilities, {through: 'FactionsAbilities' });
    models.Factions.belongsToMany(models.Wargear, {through: 'FactionsWargear' });
    models.Factions.hasMany(models.FKeywords, {foreignKey: 'factionId', sourceKey: 'id' });
    models.Factions.hasMany(models.Strategems, {foreignKey: 'factionId', sourceKey: 'id' });
    models.Factions.hasMany(models.subFactions, {foreignKey: 'factionId', sourceKey: 'id' });
    models.Factions.hasMany(models.Objectives, {foreignKey: 'factionId', sourceKey: 'id' });
    models.Factions.hasMany(models.Psykers, {foreignKey: 'factionId', sourceKey: 'id' });
    models.Factions.hasMany(models.Warlords, {foreignKey: 'factionId', sourceKey: 'id' });
    models.Factions.hasMany(models.Units, {foreignKey: 'factionId', sourceKey: 'id' });
  }
  return Factions;
};
