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
        type: Sequelize.STRING 
      },
    
      move: { 
        type: Sequelize.INTEGER 
      },
    
      weapon: { 
        type: Sequelize.INTEGER 
      },
    
      ballistic: { 
        type: Sequelize.INTEGER 
      },
    
      strength: { 
        type: Sequelize.INTEGER 
      },
    
      toughness: { 
        type: Sequelize.INTEGER 
      },
    
      wounds: { 
        type: Sequelize.INTEGER 
      },
    
      attacks: { 
        type: Sequelize.INTEGER 
      },
    
      leadership: { 
        type: Sequelize.INTEGER 
      },
    
      save: { 
        type: Sequelize.INTEGER 
      },
    
      points: { 
        type: Sequelize.INTEGER 
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
