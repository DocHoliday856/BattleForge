'use strict';
module.exports = (sequelize, DataTypes) => {
  var Warlords = sequelize.define('Warlords', {
    name: { type: DataTypes.STRING, allowNull:false},
    codex: DataTypes.STRING,
    quote: DataTypes.STRING,
    classification: DataTypes.STRING,
  }, {});
  
  return Warlords;
};