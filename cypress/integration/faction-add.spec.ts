describe('Add Faction', () => {

    it('Adds a new faction', () => {
        const newFaction = 'fixture:singleFaction'
        cy.server()
        cy.route({
            method: 'POST',
            url: 'http://localhost:3000/factions',
            response: {id: 5, newFaction}
        }).as('save')

        cy.seedAndVisit()

        cy.get('.btn').click()

        cy.get('[rows="3"]')
            .type('https://www.games-workshop.com/resources/catalog/product/920x950/60030101042_ENGUMCodex01.jpg')

        cy.get('.well > :nth-child(5)')
            .type('Ultramarines')

        cy.get('.well > :nth-child(7)')
            .type('Imperium')

        cy.get('[rows="5"]')
            .type('Smurfs')

        cy.get('.btn-primary').click()

        cy.wait('@save')

        cy.get('#factionRow > :nth-child(5)').should('contain', 'Ultramarines')
    })
})