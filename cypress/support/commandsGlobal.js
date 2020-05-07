require('./commandsGlobal')
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("navigate", () => {
   cy.visit('https://qasphoenixdeliverysystem.phoenixfuels.ph/')
   cy.get('.login100-form-title > .login100-form')
      .should('be.visible')
   cy.get('.login-image')
      .should('be.visible')
   cy.get('.pr-1')
      .should('be.visible')
      //.click()
   cy.get('[href="https://www.phoenixfuels.ph"]')
      .should('be.visible')
      //.click()
   cy.log('Testing Forgot your password elements')
   cy.get('.regular__link > a')
      .should('be.visible')
      .click()
   cy.get('.reset-form-title')
      .should('be.visible')
   cy.get('.input100')
      .should('be.visible')
      .type('juandelacruz@mailinator.com').should('have.value', 'juandelacruz@mailinator.com')
   cy.get('.login100-form-btn')
      .should('be.visible')
   cy.get('.regular-label')
      .should('be.visible')
   cy.get('u')
      .should('be.visible')
   .click()
   cy.log('Navigation Successful!')
})

Cypress.Commands.add("login", (user) => {
   cy.log('Logging in user')
   cy.get('.validate-inpu > .input100')
      .should('be.visible')
      .select('Phoenix Petroleum')
   cy.get('[data-validate="Enter username"] > .input100')
      .should('be.visible')
      .type(user.username).should('have.value', user.username)
   cy.get('.m-b-50 > .input100')
      .should('be.visible')
      .type(user.password).should('have.value', user.password)
   cy.get('.login100-form-btn')
      .should('be.visible')
      .click()
   cy.log('Login Successful!')
})












Cypress.Commands.add('notifications', () => {
   cy.get('.navbar__notifications-bell')
   .should('be.visible').click()
   //cy.get('.notifications__system-icon').should('be.visible')
   cy.get('.menu-label-breed').should('contain', 'Notifications').and('be.visible')
   cy.get('.data-create__btn').should('contain', 'Refresh').and('be.visible')
})









Cypress.Commands.add("settings", () => {
   cy.get('.navbar__dropdown-toggle-icon')
      .should('be.visible')
      .click()
   cy.get('.popup-menu__settings > .popup-menu__label')
      .should('be.visible')
      .click()
   cy.get(':nth-child(1) > .request-box__input-container > .request-box__input').should('be.visible')
      .type('jdelacruz').should('have.value', 'jdelacruz')
   cy.get(':nth-child(2) > .request-box__input-container > .request-box__input').should('be.visible')
      .type('juandelacruz2020@mailinator.com').should('have.value', 'juandelacruz2020@mailinator.com')
   cy.get(':nth-child(3) > .request-box__input-container > .request-box__input').should('be.visible')
      .type('P@ssw0rd123').should('have.value', 'P@ssw0rd123')
   cy.get(':nth-child(4) > .request-box__input-container > .request-box__input').should('be.visible')
      .type('09356285322').should('have.value', '09356285322')


   cy.get('[href="/dashboard/settings/send-feedback"]').should('be.visible')
      .click()
   cy.get('.feedback__textarea').should('be.visible')
      .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')
      .should('have.value', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')


   cy.get('[href="/dashboard/settings/about-this-app"]').should('be.visible')
      .click()
   cy.get('.about-app__container').should('be.visible')
})





Cypress.Commands.add("logout", () => {
   cy.get('.navbar__dropdown-toggle-icon')
      .should('be.visible')
      .click()
   cy.get('.popup-menu')
      .should('be.visible')
   cy.get('.popup-menu__logout > .popup-menu__label')
      .should('be.visible')
      .click()
   cy.log('Logout Successful!')
})

