'use strict';
module.exports = (sequelize, DataTypes) => {
  var Psykers = sequelize.define('Psykers', {
    name: { type: DataTypes.STRING, allowNull:false},
    codex: DataTypes.STRING,
    quote: DataTypes.STRING,
    classification: DataTypes.STRING,
  }, {});
  
  return Psykers;
};