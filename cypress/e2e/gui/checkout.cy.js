describe('checkout', () => {

    beforeEach(() => {
        cy.login()
        cy.add_to_cart()
    })

    it('successfully', () => {
        cy.checkout()

        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
    })
})
