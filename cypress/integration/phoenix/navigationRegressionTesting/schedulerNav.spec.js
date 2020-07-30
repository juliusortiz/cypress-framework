import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import InvoicingClerkObjects from '../../../pageObjects/phoenix/invoicingClerkPage'
import NotifObjects from '../../../pageObjects/phoenix/notificationPage'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'

describe('Scheduler navigation regression testing:', () => {

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

    it('Login scheduler', function () {
        cy.navigatePDS()
        globalObjects.businesstype().select('Phoenix Petroleum').should('have.value', 'PP')
        globalObjects.username().type('pp.sch_1').should('have.value', 'pp.sch_1')
        globalObjects.password().type('P@ssw0rd123').should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Dashboard page', function () {
        cy.get('.menu-label-breed').and('be.have.text', 'Dashboard')

        cy.get(':nth-child(1) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get('.section-inputs > :nth-child(2) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get(':nth-child(3) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get('.section-inputs > :nth-child(4) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get('.header-row--secondary > :nth-child(1)').and('be.have.text', 'Action')
        cy.get('.header-row--secondary > :nth-child(2)').and('be.have.text', 'Trip Number')
        cy.get('.header-row--secondary > :nth-child(3)').and('be.have.text', 'Outbound Delivery Number')
        cy.get('.header-row--secondary > :nth-child(4)').and('be.have.text', 'Sold To')
        cy.get('.header-row--secondary > :nth-child(5)').and('be.have.text', 'Ship To')
        cy.get('.header-row--secondary > :nth-child(6)').and('be.have.text', 'Product')
        cy.get('.header-row--secondary > :nth-child(7)').and('be.have.text', 'Planned Quantity')
        cy.get('.header-row--secondary > :nth-child(8)').and('be.have.text', 'Unscheduled Quantity')
        cy.get('[colspan="0"]').and('be.have.text', 'Compartmentation Guide')
        cy.get('.btn-small').and('be.have.text', 'Add Outbound Number')
        cy.get('.btn-tertiary-green').should('be.visible').and('be.have.text', 'Submit')
    })

    it('Current Deliveries page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/dispatcherDashboard"] > .sidebar-menu-item').and('be.have.text', 'Current Deliveries').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Current Deliveries')
        cy.get('.float-right').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Trip Ticket No.')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Delivery Instructions')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'SO No.')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Order Approval Date')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'OB No.')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Hauler Name')
        cy.get('.data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'Plate No.')
        cy.get('.data-list-table__head > tr > :nth-child(8)').and('be.have.text', 'Driver')
        cy.get('.data-list-table__head > tr > :nth-child(9)').and('be.have.text', 'Scheduler')
        cy.get('.data-list-table__head > tr > :nth-child(10)').and('be.have.text', 'Status')
    })

    it('Deliveries History page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/deliveries-history"] > .sidebar-menu-item').and('be.have.text', 'Delivery History').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Delivery History')
        cy.get('.col-3').should('be.visible')

    })

    it('Problems Reported page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/problems-reported"] > .sidebar-menu-item').and('be.have.text', 'Problems Reported').click()

        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Driver\'s Name')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Vehicle Code')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Plate Number')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Sold To')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Ship To')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Location')
        cy.get('.data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'Shipment No.')
        cy.get('.data-list-table__head > tr > :nth-child(8)').and('be.have.text', 'Trip Ticket No.')
        cy.get('.data-list-table__head > tr > :nth-child(9)').and('be.have.text', 'Outbound Delivery No.')
        cy.get('.data-list-table__head > tr > :nth-child(10)').and('be.have.text', 'Date and Time')
        cy.get('.data-list-table__head > tr > :nth-child(11)').and('be.have.text', 'Reason')
        cy.get('.data-list-table__head > tr > :nth-child(12)').and('be.have.text', 'Problem Description')
    })

    it('Reasons page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/manage-reasons-scheduler"] > .sidebar-menu-item').and('be.have.text', 'Reasons').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Reasons')
        cy.get('.container__select--active').should('be.visible')
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
