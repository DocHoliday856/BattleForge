'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Wargear', {
      
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
      
      flavor: { 
        type: Sequelize.STRING 
      },
      
      description: { 
        type: Sequelize.STRING 
      },
      
      points: { 
        type: Sequelize.INTEGER 
      },
      
      weapon: { 
        type: Sequelize.BOOLEAN 
      },
      
      range: { 
        type: Sequelize.STRING 
      },
      
      type: { 
        type: Sequelize.STRING 
      },
      
      strength: { 
        type: Sequelize.STRING 
      },
      
      armorPen: { 
        type: Sequelize.INTEGER 
      },
      
      damage: { 
        type: Sequelize.STRING 
      },
      
      abilities: { 
        type: Sequelize.STRING 
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
    return queryInterface.dropTable('Wargear');
  }
};
