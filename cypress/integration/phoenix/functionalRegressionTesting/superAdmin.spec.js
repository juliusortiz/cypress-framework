for (var i = 1; i <= 2; i++) {
  describe('Super admin testcases: Execution count:' + i, () => {

    before(() => {
      cy.navigate()
      cy.login({ username: 'pp.sa_1', password: 'P@ssw0rd123' })
      cy.headerElements()
    })

    after(() => {
      cy.settings()
      cy.logout()
    })

    beforeEach(() => {
      cy.log('Start testing of page elements . . .')
    })

    afterEach(() => {
      cy.log('End of testing of page elements . . . ')
    })
    it('Manage user', function () {
      cy.get('.navbar__sidebar-toggle-icon').click()
      cy.get('[href="/dashboard/users"] > .sidebar-menu-item').click()

      cy.log('CRUD admin user')
      cy.CreateUser({
        user: 'admin_user',
        email: 'admin_user@mailinator.com',
        fname: 'Admin',
        lname: 'User'
      })
      cy.get('.action-button-green').click()

      cy.EditUser({
        email_edited: 'admin_user_edited@mailinator.com',
        fname_edited: 'Admin_edited',
        lname_edited: 'User_edited',
      })
      cy.get('.modal-footer > .action-button-orange').click()

      cy.DeleteUser()
      cy.log('Done CRUD admin user')
      ///////////////////////////////////////////////////////////////////////////////////////////
      cy.log('CRUD sales user')
      cy.CreateUser({
        user: 'sales_user',
        email: 'sales_user@mailinator.com',
        fname: 'Sales',
        lname: 'User'
      })
      cy.SelectRoleSales()
      cy.get('.action-button-green').click()

      cy.EditUser({
        email_edited: 'sales_user_edited@mailinator.com',
        fname_edited: 'Sales_edited',
        lname_edited: 'User_edited',
      })
      cy.get('.modal-footer > .action-button-orange').click()
      cy.DeleteUser()
      cy.log('Done CRUD sales user')
      ///////////////////////////////////////////////////////////////////////////////////////////
      cy.log('CRUD IRT user')
      cy.CreateUser({
        user: 'IRT_user',
        email: 'IRT_user@mailinator.com',
        fname: 'IRT',
        lname: 'User'
      })
      cy.SelectRoleIRT()
      cy.get('.action-button-green').click()

      cy.EditUser({
        email_edited: 'IRT_user_edited@mailinator.com',
        fname_edited: 'IRT_edited',
        lname_edited: 'User_edited',
      })
      cy.get('.modal-footer > .action-button-orange').click()
      cy.DeleteUser()
      cy.log('Done CRUD IRT user')
      ///////////////////////////////////////////////////////////////////////////////////////////
      cy.log('CRUD Scheduler user')
      cy.CreateUser({
        user: 'scheduler_user',
        email: 'scheduler_user@mailinator.com',
        fname: 'Scheduler',
        lname: 'User'
      })
      cy.SelectRoleScheduler()
      cy.get('.action-button-green').click()

      cy.EditUser({
        email_edited: 'scheduler_user_edited@mailinator.com',
        fname_edited: 'scheduler_edited',
        lname_edited: 'User_edited',
      })
      cy.get('.modal-footer > .action-button-orange').click()
      cy.DeleteUser()
      cy.log('Done CRUD Scheduler user')
      ///////////////////////////////////////////////////////////////////////////////////////////
      cy.log('CRUD Invoicing Clerk user')
      cy.CreateUser({
        user: 'invoicingClerk_user',
        email: 'ivoicingClerk_user@mailinator.com',
        fname: 'invoicingClerk',
        lname: 'User'
      })
      cy.SelectRoleinvoicingClerk()
      cy.get('.action-button-green').click()

      cy.EditUser({
        email_edited: 'invoicingClerk_user_edited@mailinator.com',
        fname_edited: 'invoicingClerk_edited',
        lname_edited: 'User_edited',
      })
      cy.get('.modal-footer > .action-button-orange').click()
      cy.DeleteUser()
      cy.log('Done CRUD Invoicing clerk user')
      ///////////////////////////////////////////////////////////////////////////////////////////
      cy.log('CRUD Dispatcher user')
      cy.CreateUser({
        user: 'dispatcher_user',
        email: 'dispatcher_user@mailinator.com',
        fname: 'Dispatcher',
        lname: 'User'
      })
      cy.SelectRoleDispatcher()
      cy.get('.action-button-green').click()

      cy.EditUser({
        email_edited: 'dispatcher_user_edited@mailinator.com',
        fname_edited: 'dispatcher_edited',
        lname_edited: 'User_edited',
      })
      cy.get('.modal-footer > .action-button-orange').click()
      cy.DeleteUser()
      cy.log('Done CRUD dispatcher user')
    })
  })
}