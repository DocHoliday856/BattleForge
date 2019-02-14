'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Factions', [
      {
        name: 'Adeptus Mechanicus',
        codex: 'https://www.games-workshop.com/resources/catalog/product/920x950/60030116005_INTAdeptusMechanicusCodexHB.jpg',
        quote: 'The universe is not like a puzzle-box that you can take apart and put back together again and so solve its secrets. It is a shifting uncertain thing which changes as you consider it, which is changed by the very act of observation. A powerful man is not a man who dissects the universe like a puzzle-box, examining it piece by piece and measuring each piece with scientific precision. A powerful man has only to look upon the universe to change it.',
        description: 'Shoot bigger guns',
        classification: 'Imperium',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },{
        name: 'Craftworlds',
        codex: 'https://www.games-workshop.com/resources/catalog/product/920x950/60030104011_CodexCraftworldsENG01.jpg',
        quote: 'Through the Webway!',
        description: 'Pointy eared ponsy braggarts',
        classification: 'Xenos',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        name: 'Necrons',
        codex: 'https://www.games-workshop.com/resources/catalog/product/920x950/60030110006_ENGNecronCodex01.jpg',
        quote: 'Life neverending',
        description: 'Clanky space mummies',
        classification: 'Xenos',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        name: 'Genestealer Cult',
        codex: 'https://tienda.sharkgames.es/14261-large_default/-war-codex-genestealer-cults-sb-english.jpg',
        quote: 'From the deep we rise to strike fear into the the hearts of man!',
        description: 'Insurgent citizens who worship the Tyranids as deities from beyond the stars, the Genestealer Cults seek to destroy the Imperium from within.',
        classification: 'Xenos',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        name: 'Orks',
        codex: 'https://www.games-workshop.com/resources/catalog/product/920x950/60030103010_CodexOrksENG01.jpg',
        quote: 'WAAAAGGGHHHH!!!!!',
        description: 'WAAAAGGGHHHH!!!!!',
        classification: 'Xenos',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Factions', null, {});
  }
};
