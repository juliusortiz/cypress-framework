describe('Visit Phoenix Prod website', () => {
    it('Visit Phoenix Website', function() {
      cy.visit('https://qasphoenixdeliverysystem.phoenixfuels.ph/')
      cy.get('.login100-form-btn').should('be.visible')
      .screenshot()
    })
    it('Login Admin user', function() {
      cy.get('.validate-inpu > .input100')
      .select('Phoenix Petroleum')
      cy.get('[data-validate="Enter username"] > .input100')
      .type('pp.sa')
      cy.get('.m-b-50 > .input100')
      .type('P@ssw0rd123')
      cy.get('.login100-form-btn')
      .click()
      .screenshot()
    })
    it('Navigate to Manage Users page', function() {
      cy.get('.navbar__sidebar-toggle-icon').click()
      cy.get('[href="/dashboard/users"] > .sidebar-menu-item').click()
    })
})
