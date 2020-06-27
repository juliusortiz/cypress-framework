describe('Customer functional regression testing:', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login customer user', function () {
    cy.login({ username: '0001002506', password: 'P@ssw0rd123', })
  })
  it('Notifications', function () {
    cy.notification()
  })
  it('Settings', function () {
    cy.settings()
  })
  it('Logout', function () {
    cy.logoutCustomer()
  })
})

