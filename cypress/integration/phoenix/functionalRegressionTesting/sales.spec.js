describe('Sales testcases', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login sales user', function () {
    cy.login({ username: 'jaysales', password: 'P@ssw0rd123' })
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
