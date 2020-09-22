describe('Login page UI', () => {

    it('Should return true if title === Web - Cardinal', () => {
        cy.visit('/')
        cy.title().should('eq', 'Web - Cardinal')
    })

    it('Should do a success login', () => {
        cy.get('[id=login]').type('****')
        cy.get('[id=senha]').type('****')
        cy.get('input[value=Conectar]').click()
    })

})