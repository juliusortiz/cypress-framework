require('./commands')
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

Cypress.Commands.add('mockGeolocation', (latitude = 30, longitude = -98) => {
   cy.window().then(($window) => {
      cy.stub($window.navigator.geolocation, 'getCurrentPosition', (callback) => {
         return callback({ coords: { latitude, longitude } });
      });
   })
})

Cypress.Commands.add("navigatePDS", () => {
   cy.log('Check elements in Login page')
   cy.visit('https://qasphoenixdeliverysystem.phoenixfuels.ph/')
   cy.get('.login100-form-title > .login100-form')
      .should('be.visible')
   cy.get('.login-image')
      .should('be.visible')
   cy.get('.validate-inpu > .input100')
      .should('be.visible')
   cy.get('.validate-input.m-b-35 > .input100')
      .should('be.visible')
   cy.get('.m-b-50 > .input100')
      .should('be.visible')
   cy.get('#pass_read').should('be.visible')
   cy.get('.login100-form-btn').and('be.have.text', 'Log In')
   cy.get('.pr-1').should('be.visible').and('be.have.text', 'Contact |')
   cy.get('[href="https://www.phoenixfuels.ph"]').and('be.have.text', 'Phoenix Petroleum Philippines, Inc. | Copyright 2019')

   cy.log('Check elements in Forgot your password? page')
   cy.get('.regular__link > a').and('be.have.text', 'Forgot your password?').click()
   cy.get('.reset-form-title').should('be.visible').and('be.have.text', 'Please input email address to reset')
   cy.get('.input100')
      .should('be.visible')
      .type('juandelacruz@mailinator.com').should('have.value', 'juandelacruz@mailinator.com')
   cy.get('.login100-form-btn').and('be.have.text', 'SUBMIT')
   cy.get('.regular-label').and('be.have.text', 'Already a member? Login')
   cy.get('u').should('be.visible').and('be.have.text', 'Login').click()
   cy.log('Navigation Successful!')
})









