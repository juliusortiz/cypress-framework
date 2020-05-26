require('./commandsCustomer')

Cypress.Commands.add("logoutCustomer", () => {
    cy.get('.navbar__dropdown-toggle-icon')
       .should('be.visible')
       .click()
    cy.get('.customer-popup-menu')
       .should('be.visible')
    cy.get('.popup-menu__logout > .popup-menu__label')
       .should('be.visible')
       .click()
    cy.log('Logout Successful!')
 })