describe('Sales testcases', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login sales user', function () {
    cy.login({ username: 'pp.sl_1', password: 'P@ssw0rd123' })
  })
  it('Notificaitons', function () {
    cy.notification()
  })
  it('Settings', function () {
    cy.settings()
  })
  it('Logout', function () {
    cy.logout()
  })
})
