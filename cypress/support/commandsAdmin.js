require('./commandsAdmin')


Cypress.Commands.add('CreateUser', (input) => {
    cy.log('Test create user')
    cy.get('.create-button').click()
    cy.get('#username').type(input.user).should('have.value', input.user)
    cy.get('#email').type(input.email).should('have.value', input.email)
    cy.get('#first_name').type(input.fname).should('have.value', input.fname)
    cy.get('#last_name').type(input.lname).should('have.value', input.lname)
})

Cypress.Commands.add('EditUser', (input) => {
    cy.log('Test edit the created user')
    cy.get(':nth-child(1) > :nth-child(6) > div > #edit_user').click()
    cy.get('#email').clear().
        type(input.email_edited).should('have.value', input.email_edited)
    cy.get('#first_name').clear()
        .type(input.fname_edited).should('have.value', input.fname_edited)
    cy.get('#last_name').clear()
        .type(input.lname_edited).should('have.value', input.lname_edited)
})


Cypress.Commands.add('DeleteUser', (input) => {
    cy.log('Test delete the created user')
    cy.get(':nth-child(1) > :nth-child(6) > div > #delete_user').click()
    cy.get('.action-button-red').click()
    cy.log('Successfully deleted admin user!')
})

Cypress.Commands.add('SelectRoleSales', () => {
    cy.get('.container__dateSelect--active').click()
    cy.wait(500)
    cy.get('.container__options-div > :nth-child(1)').click()
})

Cypress.Commands.add('SelectRoleIRT', () => {
    cy.get('.container__dateSelect--active').click()
    cy.wait(500)
    cy.get('.container__options-div > :nth-child(2)').click()
})

Cypress.Commands.add('SelectRoleScheduler', () => {
    cy.get('.container__dateSelect--active').click()
    cy.wait(500)
    cy.get('.container__options-div > :nth-child(3)').click()
})

Cypress.Commands.add('SelectRoleinvoicingClerk', () => {
    cy.get('.container__dateSelect--active').click()
    cy.wait(500)
    cy.get('.container__options-div > :nth-child(4)').click()
})

Cypress.Commands.add('SelectRoleDispatcher', () => {
    cy.get('.container__dateSelect--active').click()
    cy.wait(500)
    cy.get('.container__options-div > :nth-child(5)').click()
})














