describe('Dispatcher testcases', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login dispatcher user', function () {
    cy.login({ username: 'pp.dp', password: 'P@ssw0rd123' })
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
