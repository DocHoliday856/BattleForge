describe('Factions Page', () => {

    beforeEach(() => {
        cy.seedAndVisit();
    })

    it('contains faction links', () => {
        cy.get('#factionRow div div').should('have.length', 5 );
    })
})