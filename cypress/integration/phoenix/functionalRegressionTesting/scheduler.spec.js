describe('Scheduler testcases', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login scheduler user', function () {
    cy.login({ username: 'pp.sch_1', password: 'P@ssw0rd123' })
  })
  it('Notifications', function () {
    cy.notification()
  })
  it('Settings', function () {
    cy.settings()
  })
  it('Logout', function () {
    cy.logout()
  })
})
