import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import SalesObjects from '../../../pageObjects/phoenix/salesPage'
import NotifObjects from '../../../pageObjects/phoenix/notificationPage'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'


describe('Sales navigation regression testing:', () => {

    const globalObjects = new GlobalObjects()
    const salesObjects = new SalesObjects()
    const notifObjects = new NotifObjects()
    const settingsObjects = new SettingsObjects()

    beforeEach(() => {
        cy.log('Start test case execution . . .')
    })

    afterEach(() => {
        cy.log('End of test case execution . . . ')
    })

    it('Login sales', function () {
        cy.navigatePDS()
        globalObjects.businesstype().select('Phoenix Petroleum')
            .should('have.value', 'PP')
        globalObjects.username().type('pp.sl_1')
            .should('have.value', 'pp.sl_1')
        globalObjects.password().type('P@ssw0rd123')
            .should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Dashboard page', function () {
        globalObjects.pageTitle()
            .and('be.have.text', 'Dashboard')
        salesObjects.dashFilter()
            .should('be.visible')
        salesObjects.dashSearchField()
            .should('be.visible')
        salesObjects.dashTimeDrop()
            .should('be.visible')

        cy.get('thead>tr').find('th').eq(0).contains('SO #')
        cy.get('thead>tr').find('th').eq(1).contains('Sold To Code')
        cy.get('thead>tr').find('th').eq(2).contains('Sold To Name')
        cy.get('thead>tr').find('th').eq(3).contains('Ship To Code')
        cy.get('thead>tr').find('th').eq(4).contains('Ship To Name')
        cy.get('thead>tr').find('th').eq(5).contains('Ship To Address')
        cy.get('thead>tr').find('th').eq(6).contains('Delivery Date')
        cy.get('thead>tr').find('th').eq(7).contains('Status')
        cy.get('thead>tr').find('th').eq(8).contains('Product')
        cy.get('thead>tr').find('th').eq(9).contains('Action')
    })

    it('Delivery Status page', function () {
        globalObjects.menuButton().click()
        salesObjects.delStatusPage()
            .and('be.have.text', 'Delivery Status').click()
    })

    it('History page', function () {
        globalObjects.menuButton().click()
        salesObjects.historyPage()
            .and('be.have.text', 'History').click()

        globalObjects.pageTitle()
            .and('be.have.text', 'History')

        salesObjects.historyFilter()
            .should('be.visible')
        salesObjects.historySearchField()
            .should('be.visible')

        cy.get('thead>tr').find('th').eq(0).contains('Order #')
        cy.get('thead>tr').find('th').eq(1).contains('Sold to Name')
        cy.get('thead>tr').find('th').eq(2).contains('Ship to Name')
        cy.get('thead>tr').find('th').eq(3).contains('Status')
        cy.get('thead>tr').find('th').eq(4).contains('Delivery Date')
        cy.get('thead>tr').find('th').eq(5).contains('Action')
    })

    it('Customers list page', function () {
        globalObjects.menuButton().click()
        salesObjects.custListPage()
            .and('be.have.text', 'Customer List').click()

        globalObjects.pageTitle()
            .and('be.have.text', 'Customer List')

        cy.get('thead>tr').find('th').eq(0).contains('Sold To Code')
        cy.get('thead>tr').find('th').eq(1).contains('Sold To Name')
        cy.get('thead>tr').find('th').eq(2).contains('Sold To Address')
        cy.get('thead>tr').find('th').eq(3).contains('First Name')
        cy.get('thead>tr').find('th').eq(4).contains('Last Name')
        cy.get('thead>tr').find('th').eq(5).contains('Username')
        cy.get('thead>tr').find('th').eq(6).contains('E-mail')
        cy.get('thead>tr').find('th').eq(7).contains('Ship To')
        // cy.get(':nth-child(1) > :nth-child(6) > .table-button-rectangle').and('be.have.text', 'View').click()
        // cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', '#')
        // cy.get('.data-l  ist-table__head > tr > :nth-child(2)').and('be.have.text', 'Ship To')
        // cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Ship To Name')
        // cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Ship To Address')
        // cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Location')
        // cy.get(':nth-child(1) > :nth-child(5) > .data-list__receipt-location-button').should('be.visible').click()
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
