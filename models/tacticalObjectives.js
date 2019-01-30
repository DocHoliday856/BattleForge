'use strict';
module.exports = (sequelize, DataTypes) => {
  var Objectives = sequelize.define('Objectives', {
    name: { type: DataTypes.STRING, allowNull:false},
    codex: DataTypes.STRING,
    quote: DataTypes.STRING,
    classification: DataTypes.STRING,
  }, {});
  
  return Objectives;
};