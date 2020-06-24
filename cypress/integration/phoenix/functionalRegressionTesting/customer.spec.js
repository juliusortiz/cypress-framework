for (var i = 1; i <= 2; i++) {
  describe('Customer testcases: Execution count: ' + i, () => {
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
}
