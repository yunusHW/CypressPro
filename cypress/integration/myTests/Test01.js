describe('Test suite', function () {
    it('login', function () {
        cy.visit('www')
        cy.location('protocol').should('eq', 'https:')
        cy.get('asdsad').type('affaf')
    })
})