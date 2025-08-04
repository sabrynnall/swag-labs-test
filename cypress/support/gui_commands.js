Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
) => {
  const login = () => {
    cy.visit('/v1/index.html')

    cy.get("[data-test='username']").type(user)
    cy.get("[data-test='password']").type(password, { log: false })
    cy.get('.btn_action').click()
  }

  login()
})

Cypress.Commands.add('add_to_cart', () => {

  const add_to_cart = () => {
    cy.get('#item_4_title_link').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').click()

    cy.get('#item_0_title_link').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').click()

    cy.get('#item_1_title_link').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').click()

    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('have.length', 3)
    cy.get('.btn_action').click()
  }

  add_to_cart()
})

Cypress.Commands.add('checkout', () => {

  const checkout = () => {
    cy.get('.subheader').should('have.text', 'Checkout: Your Information')

    cy.get('[data-test="firstName"]').type('Sabrynna')
    cy.get('[data-test="lastName"]').type('Lourenço')
    cy.get('[data-test="postalCode"]').type('58423000')

    cy.get('[value="CONTINUE"]').click()
    cy.get('.btn_action').should('have.text', 'FINISH').click()
  }

  checkout()
})
