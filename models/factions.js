'use strict';
module.exports = (sequelize, DataTypes) => {
  var Factions = sequelize.define('Factions', {
    name: { type: DataTypes.STRING, allowNull:false},
    codex: DataTypes.STRING,
    quote: DataTypes.STRING,
    classification: DataTypes.STRING,
  }, {});
  
  return Factions;
};
