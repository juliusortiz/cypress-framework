describe('Super admin testcases', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login Admin user', function () {
    cy.login({ username: 'pp.sa_1', password: 'P@ssw0rd123' })
  })
  it('Manage user', function () {
    // cy.ManageUsers({
    //   useradmin: 'jdelacruzautomatedtest',
    //   adminemail: 'jdelacruzautomatedtest@mailinator.com',
    //   adminfname: 'Juan',
    //   adminlname: 'Dela Cruz',
    //   useradminedited: 'jdelacruzautomatedtestedited',
    //   adminemailedited: 'jdelacruzautomatedtestedited@mailinator.com',
    //   adminfnameedited: 'Juan edited',
    //   adminlnameedited: 'Dela Cruz edited',
    // })
  })


  // it('Navigate to notifications page', function () {
  //   cy.notifications()
  // })
  it('Settings', function () {
    cy.settings()
  })
  it('Logout', function () {
    cy.logout()
  })
})
