'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Units', [
      
        {
        name: 'BOYZ',
        description: 'This unit contains 10 Ork Boyz. It can include up to 10 additional Ork Boyz (Power Rating +3) or up to 20 additional Ork Boyz (Power Rating +7). A Boss Nob can take the place of one Ork Boy. Each model is armed with a slugga, choppa and stikkbombs.',
        basePower: 4,
        role: 2,
        factionId: 5,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },{
        name: 'WARBOSS',
        description: 'A Warboss is a single model armed with a kombi-weapon with rokkit launcha, power klaw, two sluggas and stikkbombs.',
        basePower: 4,
        role: 1,
        factionId: 5,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        name: 'OBELISK',
        description: 'An Obelisk is a single model equipped with four tesla spheres.',
        basePower: 22,
        role: 9,
        factionId: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        name: 'CLAMAVUS',
        description: 'A Clamavus is a single model armed with an autopistol.',
        basePower: 3,
        role: 3,
        factionId: 4,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        name: 'KASTELAN ROBOTS',
        description: 'This unit contains 2 Kastelan Robots. It can include up to 2 additional Kastelan Robots (Power Rating +12) or up to 4 additional Kastelan Robots (Power Rating +24). Each Kastelan Robot is armed with Kastelan fists and an incendine combustor.',
        basePower: 12,
        role: 5,
        factionId: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Units', null, {});
    
  }
};
