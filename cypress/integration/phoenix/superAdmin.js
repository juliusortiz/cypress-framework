describe('Super admin testcases', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login Admin user', function () {
    cy.login({ username: 'pp.sa', password: 'P@ssw0rd123' })
  })
  it('Navigate to settings page', function (){
    cy.settings()
  })
  it('Logout', function () {
    cy.logout()
  })
})
