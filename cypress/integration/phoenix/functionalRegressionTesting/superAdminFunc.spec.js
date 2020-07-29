import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'


describe('Super admin functional regression testing:', () => {

  const globalObjects = new GlobalObjects()
  const settingsObjects = new SettingsObjects()

  it('Visit Phoenix Website', function () {
    cy.navigatePDSQAS()
  })

  it('Login super admin user', function () {
    globalObjects.businesstype().select('Phoenix Petroleum').should('have.value', 'PP')
    globalObjects.username().type('pp.sa_1').should('have.value', 'pp.sa_1')
    globalObjects.password().type('P@ssw0rd123').should('have.value', 'P@ssw0rd123')
    globalObjects.login().click()
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

  it('Manage Reasons', function () {
    cy.get('.navbar__sidebar-toggle-icon').click()
    cy.get('[href="/dashboard/manage-reasons"] > .sidebar-menu-item').click()

    cy.log('CRUD Backload reason')
    cy.CreateReason({
      reason: 'This is automated created reason for Backload'
    })

    cy.log('Access the last page of the list')
    cy.get(':nth-child(3) > .table-pagination__link').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > div > #edit_reason').click()
    cy.EditReason({
      reason_edited: 'This is automated created reason for Backload edited'
    })

    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > div > #delete_reason').click()
    cy.DeleteReason()
    cy.log('Done CRUD Backload reason')
    ///////////////////////////////////////////////////////////////////////////////////////////
    cy.log('CRUD Partial acceptace reason')
    cy.SelectReasonPartiallyAccepted()
    cy.CreateReason({
      reason: 'This is automated created reason for partially acceptance'
    })

    cy.get(':nth-child(6) > :nth-child(2) > div > #edit_reason').click()
    cy.EditReason({
      reason_edited: 'This is automated created reason for partially acceptance edited'
    })

    cy.wait(2000)
    cy.get(':nth-child(6) > :nth-child(2) > div > #delete_reason').click()
    cy.DeleteReason()
    cy.log('Done CRUD Partial Acceptance reason')
    ///////////////////////////////////////////////////////////////////////////////////////////
    cy.log('CRUD Problems Reported reason')
    cy.SelectReasonProblemsReported()
    cy.CreateReason({
      reason: 'This is automated created reason for Problems Reported'
    })

    cy.wait(2000)
    cy.get(':nth-child(3) > :nth-child(2) > div > #edit_reason').click()
    cy.EditReason({
      reason_edited: 'This is automated created reason for Problems Reported edited'
    })

    cy.wait(2000)
    cy.get(':nth-child(3) > :nth-child(2) > div > #delete_reason').click()
    cy.DeleteReason()
    cy.log('Done CRUD Problems Reported reason')

    it('Settings', function () {
      globalObjects.profileDropdown().click()
      globalObjects.settingsButton().click()

      settingsObjects.usernameField().type('jdelacruz')
        .should('have.value', 'jdelacruz')
      settingsObjects.emailField().type('juandelacruz2020@mailinator.com')
        .should('have.value', 'juandelacruz2020@mailinator.com')
      settingsObjects.passwordField().type('P@ssw0rd123')
        .should('have.value', 'P@ssw0rd123')
      settingsObjects.contactNumber().type('09356285322')
        .should('have.value', '09356285322')
      settingsObjects.saveButton()

      settingsObjects.sendFeedbackTab().click()
      settingsObjects.textArea().type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
        .should('have.value', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
      settingsObjects.submitButton()

      settingsObjects.AboutthisAppTab().click()
      settingsObjects.AboutthisAppContainer()
    })

    it('Logout', function () {
      globalObjects.profileDropdown().click()
      globalObjects.userPopUp()
      globalObjects.logoutButton().click()
    })
  })
})
