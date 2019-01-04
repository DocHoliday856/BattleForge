'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rules = sequelize.define('Rules', {
    name: { type: DataTypes.STRING, allowNull:false},
    description: DataTypes.STRING,
    reference: DataTypes.STRING
  }, {});
  
  return Rules;
};
