describe('Invoicing Clerk testcases', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login invoicing clerk user', function () {
    cy.login({ username: 'jayinvoicing', password: 'P@ssw0rd123' })
  })
  it('Navigate to notifications page', function () {
    cy.notification()
  })
  it('Navigate to settings page', function () {
    cy.settings()
  })
  it('Logout', function () {
    cy.logout()
  })
})
