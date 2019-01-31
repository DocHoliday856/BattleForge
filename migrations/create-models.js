'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Models', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type: Sequelize.STRING
      },

      example: { 
        type: DataTypes.STRING 
      },
    
      move: { 
        type: DataTypes.INTEGER 
      },
    
      weapon: { 
        type: DataTypes.INTEGER 
      },
    
      ballistic: { 
        type: DataTypes.INTEGER 
      },
    
      strength: { 
        type: DataTypes.INTEGER 
      },
    
      toughness: { 
        type: DataTypes.INTEGER 
      },
    
      wounds: { 
        type: DataTypes.INTEGER 
      },
    
      attacks: { 
        type: DataTypes.INTEGER 
      },
    
      leadership: { 
        type: DataTypes.INTEGER 
      },
    
      save: { 
        type: DataTypes.INTEGER 
      },
    
      points: { 
        type: DataTypes.INTEGER 
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Models');
  }
};
