require('./commandsCustomer')

Cypress.Commands.add("headerElementsCustomer", () => {
   cy.log('Checking header elements...')
   cy.get('.navbar__sidebar-toggle-icon').should('be.visible')
   cy.get('.customer-nav__title').and('be.have.text', 'Dashboard')
   cy.get('.navbar__notifications-bell').should('be.visible')
   cy.get('.customer-profile').should('be.visible')
   cy.get('.navbar__dropdown-toggle-icon').should('be.visible')
   cy.log('All header elements are present')
})

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