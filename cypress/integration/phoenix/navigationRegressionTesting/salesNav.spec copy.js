import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import CustomerPage from '../../../pageObjects/phoenix/customerPage'
import SalesObjects from '../../../pageObjects/phoenix/salesPage'
import NotifObjects from '../../../pageObjects/phoenix/notificationPage'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'


describe('Sales navigation regression testing:', () => {

    const globalObjects = new GlobalObjects()
    const customerObjects = new CustomerPage()
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
        globalObjects.businesstype().select('Phoenix Petroleum').should('have.value', 'PP')
        globalObjects.username().type('pp.sl_1').should('have.value', 'pp.sl_1')
        globalObjects.password().type('P@ssw0rd123').should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Dashboard page', function () {
        salesObjects.dashHeader()
        salesObjects.dashFilter()
        salesObjects.dashSearchField()
        salesObjects.dashTimeDrop()

        salesObjects.soCol()
        salesObjects.soldToCodeCol()
        salesObjects.soldToNameCol()
        salesObjects.shipToCodeCol()
        salesObjects.shipToNameCol()
        salesObjects.shipToAddCol()
        salesObjects.delDateCol()
        salesObjects.statusCol()
        salesObjects.productCol()
        salesObjects.actionCol()
    })

    it('Delivery Status page', function () {
        globalObjects.menuButton().click()
        salesObjects.delStatusPage().click()
    })

    it('History page', function () {
        globalObjects.menuButton().click()
        salesObjects.historyPage().click()

        salesObjects.historyHeader()

        salesObjects.historyFilter()
        salesObjects.historySearchField()

        salesObjects.orderNumCol()
        salesObjects.soldToNameCol()
        salesObjects.shipToNameCol0()
        salesObjects.statusCol0()
        salesObjects.delDateCol()
        salesObjects.actionCol()
    })

    it('Customers list page', function () {
        globalObjects.menuButton().click()
        salesObjects.custListPage()

        salesObjects.custListHeader()
        salesObjects.soldToCodeCol0()
        salesObjects.soldToNameCol1()
        salesObjects.soldToAddCol()
        salesObjects.fnameCol()
        salesObjects.lnameCol()
        salesObjects.usernameCol()
        salesObjects.emailCol()
        salesObjects.shipToCol()
        // cy.get(':nth-child(1) > :nth-child(6) > .table-button-rectangle').and('be.have.text', 'View').click()
        // cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', '#')
        // cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Ship To')
        // cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Ship To Name')
        // cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Ship To Address')
        // cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Location')
        // cy.get(':nth-child(1) > :nth-child(5) > .data-list__receipt-location-button').should('be.visible').click()
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
