import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import InvoicingClerkObjects from '../../../pageObjects/phoenix/invoicingClerkPage'
import NotifObjects from '../../../pageObjects/phoenix/notificationPage'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'

describe('Invoicing clerk navigation regression testing:', () => {

    const globalObjects = new GlobalObjects()
    const invoicingClerkObjects = new InvoicingClerkObjects()
    const notifObjects = new NotifObjects()
    const settingsObjects = new SettingsObjects()

    beforeEach(() => {
        cy.log('Start test case execution . . .')
    })

    afterEach(() => {
        cy.log('End of test case execution . . . ')
    })

    it('Login invoicing clerk', function () {
        cy.navigatePDS()
        globalObjects.businesstype().select('Phoenix Petroleum').should('have.value', 'PP')
        globalObjects.username().type('pp.inv_1').should('have.value', 'pp.inv_1')
        globalObjects.password().type('P@ssw0rd123').should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Dashboard page', function () {
        invoicingClerkObjects.dashHeader()

        invoicingClerkObjects.delDateCol()
        invoicingClerkObjects.shipmentNoCol()
        invoicingClerkObjects.drivercol()
        invoicingClerkObjects.vehicleCodeCol()
        invoicingClerkObjects.shippingConCol()
        invoicingClerkObjects.custNameCol()
        invoicingClerkObjects.statusCol()
        invoicingClerkObjects.actionCol()
    })

    it('Scheduling page', function () {
        globalObjects.menuButton().click()
        invoicingClerkObjects.schedPage().click()

        invoicingClerkObjects.schedHeader()
        invoicingClerkObjects.bulkShipCodeDrop()
        invoicingClerkObjects.tppDrop()
        invoicingClerkObjects.driverDrop()
        invoicingClerkObjects.vehicleDrop()

        invoicingClerkObjects.actionCol0()
        invoicingClerkObjects.tripNumCol()
        invoicingClerkObjects.outDelNumCol()
        invoicingClerkObjects.soldToCol()
        invoicingClerkObjects.shipToCol()
        invoicingClerkObjects.productCol()
        invoicingClerkObjects.plannedQuanCol()
        invoicingClerkObjects.unscheQuanCol()
        invoicingClerkObjects.compartGuide()
        invoicingClerkObjects.addOutBound()
        invoicingClerkObjects.submitButton()
    })

    it('History page', function () {
        globalObjects.menuButton().click()
        invoicingClerkObjects.historyPage().click()

        invoicingClerkObjects.historyHeader()

        invoicingClerkObjects.delDateCol0()
        invoicingClerkObjects.shipmentNoCol()
        invoicingClerkObjects.drivercol()
        invoicingClerkObjects.vehicleCodeCol()
        invoicingClerkObjects.shippingConCol()
        invoicingClerkObjects.custNameCol()
        invoicingClerkObjects.statusCol()
        invoicingClerkObjects.actionCol()
    })

    it('Notification page', function () {
        notifObjects.notifBell().click()
        notifObjects.notifTitle()
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
