describe('Factions Page', () => {

    beforeEach(() => {
        cy.visit("/factions");
    })

    it('contains faction links', () => {
        cy.get('#factionRow div div').should('have.length', 5 );
    })
})