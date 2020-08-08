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
        globalObjects.businesstype().select('Phoenix Petroleum')
        .should('have.value', 'PP')
        globalObjects.username().type('pp.inv_1')
        .should('have.value', 'pp.inv_1')
        globalObjects.password().type('P@ssw0rd123')
        .should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Dashboard page', function () {
        globalObjects.pageTitle()
        .and('be.have.text', 'Dashboard')

        cy.get('thead>tr').find('th').eq(0).contains('Delivery Date')
        cy.get('thead>tr').find('th').eq(1).contains('Shipment No.')
        cy.get('thead>tr').find('th').eq(2).contains('Driver')
        cy.get('thead>tr').find('th').eq(3).contains('Vehicle Code')
        cy.get('thead>tr').find('th').eq(4).contains('Shipping Condition')
        cy.get('thead>tr').find('th').eq(5).contains('Customer Name')
        cy.get('thead>tr').find('th').eq(6).contains('Status')
        cy.get('thead>tr').find('th').eq(7).contains('Action')
    })

    it('Scheduling page', function () {
        globalObjects.menuButton().click()
        invoicingClerkObjects.schedPage()
        .and('be.have.text', 'Scheduling').click()

        globalObjects.pageTitle()
        .and('be.have.text', 'Scheduling')
        invoicingClerkObjects.bulkShipCodeDrop()
        .should('be.visible')
        invoicingClerkObjects.tppDrop()
        .should('be.visible')
        invoicingClerkObjects.driverDrop()
        .should('be.visible')
        invoicingClerkObjects.vehicleDrop()
        .should('be.visible')

        cy.get('thead>tr').eq(1).find('th').eq(0).contains('Action')
        cy.get('thead>tr').eq(1).find('th').eq(1).contains('Trip Number')
        cy.get('thead>tr').eq(1).find('th').eq(2).contains('Outbound Delivery Number')
        cy.get('thead>tr').eq(1).find('th').eq(3).contains('Sold To')
        cy.get('thead>tr').eq(1).find('th').eq(4).contains('Ship To')
        cy.get('thead>tr').eq(1).find('th').eq(5).contains('Product')
        cy.get('thead>tr').eq(1).find('th').eq(6).contains('Planned Quantity')
        cy.get('thead>tr').eq(1).find('th').eq(7).contains('Unscheduled Quantity')

        invoicingClerkObjects.compartGuide()
        .and('be.have.text', 'Compartmentation Guide')
        invoicingClerkObjects.addOutBound()
        .and('be.have.text', 'Add Outbound Number')
        
        invoicingClerkObjects.submitButton()
        .should('be.visible').and('be.have.text', 'Submit')
    })

    it('History page', function () {
        globalObjects.menuButton().click()
        invoicingClerkObjects.historyPage()
        .and('be.have.text', 'History').click()

        globalObjects.pageTitle()
        .and('be.have.text', 'History')

        cy.get('thead>tr').find('th').eq(0).contains('Date')
        cy.get('thead>tr').find('th').eq(1).contains('Shipment No.')
        cy.get('thead>tr').find('th').eq(2).contains('Driver')
        cy.get('thead>tr').find('th').eq(3).contains('Vehicle Code')
        cy.get('thead>tr').find('th').eq(4).contains('Shipping Condition')
        cy.get('thead>tr').find('th').eq(5).contains('Customer Name')
        cy.get('thead>tr').find('th').eq(6).contains('Status')
        cy.get('thead>tr').find('th').eq(7).contains('Action')
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
