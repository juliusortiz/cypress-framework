describe('IRT testcases', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login IRT user', function () {
    cy.login({ username: 'jayirt', password: 'P@ssw0rd123' })
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
