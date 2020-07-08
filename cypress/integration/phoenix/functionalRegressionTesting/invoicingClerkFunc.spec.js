describe('Invoicing Clerk functional regression testing:', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login invoicing clerk user', function () {
    cy.login({ username: 'pp.inv_1', password: 'P@ssw0rd123' })
    cy.mockGeolocation();
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

