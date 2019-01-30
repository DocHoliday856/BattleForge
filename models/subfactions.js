'use strict';
module.exports = (sequelize, DataTypes) => {
  var subFactions = sequelize.define('subFactions', {
    name: { type: DataTypes.STRING, allowNull:false},
    codex: DataTypes.STRING,
    quote: DataTypes.STRING,
    classification: DataTypes.STRING,
  }, {});
  
  return subFactions;
};