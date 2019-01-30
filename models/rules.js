'use strict';
module.exports = (sequelize, DataTypes) => {
  var Abilities = sequelize.define('Abilities', {
    name: { type: DataTypes.STRING, allowNull:false},
    description: DataTypes.STRING,
    reference: DataTypes.STRING
  }, {});
  
  return Abilities;
};
