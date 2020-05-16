describe('Super admin testcases', () => {
  it('Visit Phoenix Website', function () {
    cy.navigate()
  })
  it('Login Admin user', function () {
    cy.login({ username: 'jayadmin', password: 'P@ssw0rd321' })
  })
  it('Manage User test cases', function () {
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
  it('Navigate to settings page', function () {
    cy.settings()
  })
  it('Logout', function () {
    cy.logout()
  })
})
