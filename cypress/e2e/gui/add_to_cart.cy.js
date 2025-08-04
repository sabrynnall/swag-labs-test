describe('Add products to cart', () => {

    beforeEach(() => {
        cy.login()
    })

    it('successfully', () => {
        cy.add_to_cart()
    })
})
