import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import NotifObjects from '../../../pageObjects/phoenix/notificationPage'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'

describe('Invoicing Clerk functional regression testing:', () => {

  const globalObjects = new GlobalObjects()
  const notifObjects = new NotifObjects()
  const settingsObjects = new SettingsObjects()

  it('Login invoicing clerk user', function () {
    cy.navigatePDS()
    globalObjects.businesstype().select('Phoenix Petroleum')
      .should('have.value', 'PP')
    globalObjects.username().type('pp.inv_1')
      .should('have.value', 'pp.inv_1')
    globalObjects.password().type('P@ssw0rd123')
      .should('have.value', 'P@ssw0rd123')
    globalObjects.login().click()
    cy.mockGeolocation();
  })

  it('Notification page', function () {
    notifObjects.notifBell().click()
    globalObjects.pageTitle()
      .and('be.have.text', 'Notifications')
    notifObjects.refreshButton()
  })

  it('Settings page', function () {
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

