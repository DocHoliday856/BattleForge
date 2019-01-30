'use strict';
module.exports = (sequelize, DataTypes) => {
  var Strategems = sequelize.define('Strategems', {
    name: { type: DataTypes.STRING, allowNull:false},
    codex: DataTypes.STRING,
    quote: DataTypes.STRING,
    classification: DataTypes.STRING,
  }, {});
  
  return Strategems;
};