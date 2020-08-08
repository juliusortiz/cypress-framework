import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import DispatcherObjects from '../../../pageObjects/phoenix/dispatcherPage'
import NotifObjects from '../../../pageObjects/phoenix/notificationPage'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'


describe('Dispatcher navigation regression testing:', () => {

    const globalObjects = new GlobalObjects()
    const dispatcherObjects = new DispatcherObjects()
    const notifObjects = new NotifObjects()
    const settingsObjects = new SettingsObjects()

    beforeEach(() => {
        cy.log('Start test case execution . . .')
    })

    afterEach(() => {
        cy.log('End of test case execution . . . ')
    })

    it('Login dispatcher', function () {
        cy.navigatePDS()
        globalObjects.businesstype().select('Phoenix Petroleum')
            .should('have.value', 'PP')
        globalObjects.username().type('pp.dp_1')
            .should('have.value', 'pp.dp_1')
        globalObjects.password().type('P@ssw0rd123')
            .should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Dashboard page', function () {
        globalObjects.pageTitle()
            .and('be.have.text', 'Dashboard')
        dispatcherObjects.dashFilter()
            .should('be.visible')
        dispatcherObjects.dashSearch()
            .should('be.visible')

        cy.get('thead>tr').find('th').eq(0).contains('Trip Ticket No.')
        cy.get('thead>tr').find('th').eq(1).contains('Delivery Instructions')
        cy.get('thead>tr').find('th').eq(2).contains('SO No.')
        cy.get('thead>tr').find('th').eq(3).contains('Order Approval Date')
        cy.get('thead>tr').find('th').eq(4).contains('OB No.')
        cy.get('thead>tr').find('th').eq(5).contains('Hauler Name')
        cy.get('thead>tr').find('th').eq(6).contains('Plate No.')
        cy.get('thead>tr').find('th').eq(7).contains('Driver')
        cy.get('thead>tr').find('th').eq(8).contains('Status')
    })

    it('Delivery history page', function () {
        globalObjects.menuButton().click()
        dispatcherObjects.delHistoryPage()
            .and('be.have.text', 'Delivery History').click()

        globalObjects.pageTitle()
            .and('be.have.text', 'Delivery History')

        dispatcherObjects.delHistorySearch()
            .should('be.visible')
    })

    it('Problems Reported page', function () {
        globalObjects.menuButton().click()
        dispatcherObjects.problemsRepPage()
            .and('be.have.text', 'Problems Reported').click()

        globalObjects.pageTitle()
            .and('be.have.text', 'Problems Reported')

        cy.get('thead>tr').find('th').eq(0).contains('Driver\'s Name')
        cy.get('thead>tr').find('th').eq(1).contains('Vehicle Code')
        cy.get('thead>tr').find('th').eq(2).contains('Plate Number')
        cy.get('thead>tr').find('th').eq(3).contains('Sold To')
        cy.get('thead>tr').find('th').eq(4).contains('Ship To')
        cy.get('thead>tr').find('th').eq(5).contains('Location')
        cy.get('thead>tr').find('th').eq(6).contains('Shipment No.')
        cy.get('thead>tr').find('th').eq(7).contains('Trip Ticket No.')
        cy.get('thead>tr').find('th').eq(8).contains('Outbound Delivery No.')
        cy.get('thead>tr').find('th').eq(9).contains('Date and Time')
        cy.get('thead>tr').find('th').eq(10).contains('Reason')
        cy.get('thead>tr').find('th').eq(11).contains('Problem Description')
        cy.get('thead>tr').find('th').eq(12).contains('Action')
    })

    it('Reasons page', function () {
        globalObjects.menuButton().click()
        dispatcherObjects.reasonsPage()
            .and('be.have.text', 'Reasons').click()

        globalObjects.pageTitle()
            .and('be.have.text', 'Reasons')

        dispatcherObjects.reasonsFilter()
            .should('be.visible')
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

