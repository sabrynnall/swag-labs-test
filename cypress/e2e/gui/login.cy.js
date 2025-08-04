describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('.product_label').should('be.visible')
  })
})
