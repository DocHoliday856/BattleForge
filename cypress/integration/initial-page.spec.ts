describe('home page', () => {

    beforeEach(() => {
        cy.visit("/home");
    })

    it(`has title 'Welcome to BattleForge!'`, () => {
        cy.contains('Welcome to BattleForge!');
        //cy.get('h1').should('contain', 'Welcome to BattleForge!');
        cy.title().should('eq', Cypress.env('defaultTitle'));
    })

    // it(`has the correct nav elements`, () => {
    //     cy.contains('Armies');   
    //     cy.get('mat-sidenav a div').as('NavLinks');
    //     cy.get('@NavLinks').eq(0).should('contain', 'Armies'); 
    //     cy.get('@NavLinks').eq(1).should('contain', 'Factions');   
    //     cy.get('@NavLinks').eq(2).should('contain', 'Abilities');   
    //     cy.get('@NavLinks').eq(3).should('contain', 'QuickSearch');   
    // })

    it(`has the correct nav links and they direct to the appropriate url`, () => {
        cy.get('#sidenav').click();
        cy.get('#armyLink').contains('Armies').click();
        cy.url().should('include', '/army');
        cy.get('#factionsLink').contains('Factions').click();
        cy.url().should('include', '/factions');
        cy.get('#abilitiesLink').contains('Abilities').click();
        cy.url().should('include', '/abilities');
        cy.get('#homeLink').contains('QuickSearch').click();
        cy.url().should('include', '/home');
    })

    it(`has the correct logo`, () => {
        cy.get('app-home div img');   
    })

    it(`can search`, () => {
        cy.get('#search-box').type('Orks');
        //cy.get(#search-button).click();
        //cy.url().should('include', '/factions/orks');
    })
})