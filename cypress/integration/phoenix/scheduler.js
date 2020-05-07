describe('Scheduler testcases', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login Admin user', function () {
    cy.login({ username: 'jayscheduler', password: 'P@ssw0rd123' })
  })
  it('Navigate to notifications page', function () {
    cy.notifications()
  })
  it('Navigate to settings page', function () {
    cy.settings()
  })
  it('Logout', function () {
    cy.logout()
  })
})
