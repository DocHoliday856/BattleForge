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
        type: DataTypes.STRING 
      },
      
      description: { 
        type: DataTypes.STRING 
      },
      
      points: { 
        type: DataTypes.INTEGER 
      },
      
      weapon: { 
        type: DataTypes.BOOLEAN 
      },
      
      range: { 
        type: DataTypes.STRING 
      },
      
      type: { 
        type: DataTypes.STRING 
      },
      
      strength: { 
        type: DataTypes.STRING 
      },
      
      armorPen: { 
        type: DataTypes.INTEGER 
      },
      
      damage: { 
        type: DataTypes.STRING 
      },
      
      abilities: { 
        type: DataTypes.STRING 
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
