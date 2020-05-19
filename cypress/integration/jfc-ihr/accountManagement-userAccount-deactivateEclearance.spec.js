describe('Deactivate eClearance', () => {
    it('Visit jfc-ihr Website', function () {
      cy.visit('https://jfc-ihr-qa.herokuapp.com/cpadmin')
    })
    it('Login cpAdmin', function () {
      cy.get(':nth-child(1) > .form-control').type('jim.alabastro3p@jws.com.ph')
      cy.get(':nth-child(2) > .form-control').type('test')
      cy.get('.btn').click()
    })
    it('Navigate to Account Management', function () {
        cy.get('#side-menu > :nth-child(1) > [href="#"]').click()
        cy.server()
        cy.route({
            method: 'GET',
            url: 'https://jfc-ihr-qa.herokuapp.com/cpadmin.users',
            response: []
        })
      cy.get('.active > .nav > :nth-child(1) > a').click()

    })
    // it('Deactivate user account', function () {
    //     cy.get(':nth-child(11) > :nth-child(9) > .btn-success').should('be.visible').click()
    //     cy.get('#mdlconfirmDeactive > .modal-dialog > .modal-content > .modal-footer > .btn-danger').and('be.have.text', 'Deactivate').click()
    //   })

  })
  