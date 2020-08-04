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
        globalObjects.businesstype().select('Phoenix Petroleum').should('have.value', 'PP')
        globalObjects.username().type('pp.dp_1').should('have.value', 'pp.dp_1')
        globalObjects.password().type('P@ssw0rd123').should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Dashboard page', function () {
        dispatcherObjects.dashHeader()
        dispatcherObjects.dashFilter()
        dispatcherObjects.dashSearch()

        dispatcherObjects.tripCol()
        dispatcherObjects.delInstrucCol()
        dispatcherObjects.soNoCol()
        dispatcherObjects.orderAppDateCol()
        dispatcherObjects.obNoCol()
        dispatcherObjects.haulerCol()
        dispatcherObjects.plateNumCol()
        dispatcherObjects.driverCol()
        dispatcherObjects.statusCol()
    })

    it('Delivery history page', function () {
        globalObjects.menuButton().click()
        dispatcherObjects.delHistoryPage().click()
        dispatcherObjects.delHistoryHeader()
        dispatcherObjects.delHistorySearch()
    })

    it('Problems Reported page', function () {
        globalObjects.menuButton().click()
        dispatcherObjects.problemsRepPage().click()

        dispatcherObjects.driverCol0()
        dispatcherObjects.vehicleCol0()
        dispatcherObjects.plateNumCol0()
        dispatcherObjects.soldToCol()
        dispatcherObjects.shipToCol()
        dispatcherObjects.locCol()
        dispatcherObjects.shipmentNoCol()
        dispatcherObjects.tripTicketNoCol()
        dispatcherObjects.outboundDelCol()
        dispatcherObjects.dateAndTimeCol()
        dispatcherObjects.reasonCol()
        dispatcherObjects.problemDescCol()
    })

    it('Reasons page', function () {
        globalObjects.menuButton().click()
        dispatcherObjects.reasonsPage().click()

        dispatcherObjects.reasonsFilter()
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

