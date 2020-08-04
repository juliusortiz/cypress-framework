import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import SchedObjects from '../../../pageObjects/phoenix/schedulerPage'
import InvoicingClerkObjects from '../../../pageObjects/phoenix/invoicingClerkPage'
import DispatcherObjects from '../../../pageObjects/phoenix/dispatcherPage'
import NotifObjects from '../../../pageObjects/phoenix/notificationPage'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'

describe('Scheduler navigation regression testing:', () => {

    const globalObjects = new GlobalObjects()
    const schedObjects = new SchedObjects()
    const invoicingClerkObjects = new InvoicingClerkObjects()
    const dispatcherObjects = new DispatcherObjects()
    const notifObjects = new NotifObjects()
    const settingsObjects = new SettingsObjects()

    beforeEach(() => {
        cy.log('Start test case execution . . .')
    })

    afterEach(() => {
        cy.log('End of test case execution . . . ')
    })

    it('Login scheduler', function () {
        cy.navigatePDS()
        globalObjects.businesstype().select('Phoenix Petroleum').should('have.value', 'PP')
        globalObjects.username().type('pp.sch_1').should('have.value', 'pp.sch_1')
        globalObjects.password().type('P@ssw0rd123').should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Dashboard page', function () {
        schedObjects.schedHeader()
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

    it('Current Deliveries page', function () {
        globalObjects.menuButton().click()
        schedObjects.currDelPage().click()

        schedObjects.currDelHeader()
        schedObjects.currDelFilter()
        schedObjects.currDelSearch()
        schedObjects.tripCol()
        schedObjects.delInstCol()
        schedObjects.soCol()
        schedObjects.orderAppCol()
        schedObjects.obNoCol()
        schedObjects.haulerCol()
        schedObjects.plateNoCol()
        schedObjects.driverCol()
        schedObjects.schedCol()
        schedObjects.statusCol()
    })

    it('Deliveries History page', function () {
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
        schedObjects.reasonsPage().click()

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
