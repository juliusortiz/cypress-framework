describe('Customer testcases', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login customer user', function () {
    cy.login({ username: '0001000940', password: 'P@ssw0rd123', })
  })
  it('Navigate to notifications page', function () {
    cy.notification()
  })
  it('Navigate to settings page', function () {
    cy.settings()
  })
  it('Logout', function () {
    cy.logoutCustomer()
  })
})