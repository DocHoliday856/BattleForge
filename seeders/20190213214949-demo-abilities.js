'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Abilities', [

    {
      name: 'Adept Snek',
      description: 'The sneakiest snek',
      reference: 'Tome of glory pg. 37',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      name: 'Skilled Outriders',
      description: 'Subtract 1 from hit rolls for attacks that target this unit in the Shooting phase.',
      reference: 'https://www.warhammer-community.com/2019/01/30/30th-jan-genestealer-cults-rules-preview-part-2gw-homepage-post-1/',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      name: 'Fly',
      description: 'Seed Test',
      reference: 'Book',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },

      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Abilities', null, {});
  }
};
