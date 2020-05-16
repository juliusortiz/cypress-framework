
Cypress.Commands.add('ManageUsers', (input) => {
    cy.get('.navbar__sidebar-toggle-icon')
        .should('be.visible')
        .click()
    cy.get('[href="/dashboard/users"] > .sidebar-menu-item')
        .should('be.visible')
        .click()
    cy.get('.menu-label-breed').should('contain', 'Manage Users').and('be.visible')


    cy.log('Test create admin user')
    cy.get('.create-button').should('contain', 'Create User').and('be.visible').click()
    cy.get('#username').should('be.visible').type(input.useradmin).should('have.value', input.useradmin)
    cy.get('#email').should('be.visible').type(input.adminemail).should('have.value', input.adminemail)
    cy.get('#first_name').should('be.visible').type(input.adminfname).should('have.value', input.adminfname)
    cy.get('#last_name').should('be.visible').type(input.adminlname).should('have.value', input.adminlname)
    cy.get('.action-button-green').should('be.visible').and('contain', 'Create').click()
    cy.log('Successfully created admin user!')


    // cy.log('Test edit admin user')
    // cy.get(':nth-child(1) > :nth-child(6) > div > #edit_user').should('be.visible').and('contain', 'Edit').click()
    // cy.get('#username').should('be.visible').type(input.useradminedited).should('have.value', input.useradminedited)
    // cy.get('#email').should('be.visible').type(input.adminemailedited).should('have.value', input.adminemailedited)
    // cy.get('#first_name').should('be.visible').type(input.adminfnameedited).should('have.value', input.adminfnameedited)
    // cy.get('#last_name').should('be.visible').type(input.adminlnameedited).should('have.value', input.adminlnameedited)
    // cy.get('.modal-footer > .action-button-orange').should('be.visible').and('contain', 'Update').click()
    // cy.log('Successfully edited admin user!')


    


})
