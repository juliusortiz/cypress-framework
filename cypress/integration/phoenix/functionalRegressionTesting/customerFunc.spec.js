import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import CustomerPage from '../../../pageObjects/phoenix/customerPage'
import NotifObjects from '../../../pageObjects/phoenix/notificationPage'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'

describe('Customer functional regression testing:', () => {

  const globalObjects = new GlobalObjects()
  const customerObjects = new CustomerPage()
  const notifObjects = new NotifObjects()
  const settingsObjects = new SettingsObjects()

  it('Visit Phoenix Website', function () {
    cy.navigatePDSQAS()
  })

  it('Login customer user', function () {
    globalObjects.businesstype().select('Phoenix Petroleum').should('have.value', 'PP')
    globalObjects.username().type('0001002022').should('have.value', '0001002022')
    globalObjects.password().type('P@ssw0rd123').should('have.value', 'P@ssw0rd123')
    globalObjects.login().click()

  })

  it('Notifications', function () {
    notifObjects.notifBell().click()
    notifObjects.notifTitle()
    notifObjects.refreshButton()
  })

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
    customerObjects.customerPopUp()
    globalObjects.logoutButton().click()
  })
})

