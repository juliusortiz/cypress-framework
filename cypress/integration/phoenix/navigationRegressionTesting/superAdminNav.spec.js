import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import AdminObjects from '../../../pageObjects/phoenix/adminPage'
import SalesObjects from '../../../pageObjects/phoenix/salesPage'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'

describe('Admin navigation regression testing:', () => {

    const globalObjects = new GlobalObjects()
    const adminObjects = new AdminObjects()
    const salesObjects = new SalesObjects()
    const settingsObjects = new SettingsObjects()

    beforeEach(() => {
        cy.log('Start test case execution . . .')
    })

    afterEach(() => {
        cy.log('End of test case execution . . . ')
    })

    it('Login scheduler', function () {
        cy.navigatePDS()
        globalObjects.businesstype().select('Phoenix Petroleum')
            .should('have.value', 'PP')
        globalObjects.username().type('pp.sa_1')
            .should('have.value', 'pp.sa_1')
        globalObjects.password().type('P@ssw0rd123')
            .should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Dashboard page', function () {
        globalObjects.pageTitle()
            .and('be.have.text', 'Dashboard')

        adminObjects.delStatusCont()
            .and('be.have.text', 'Statuses Details')

        cy.get('thead>tr').find('th').eq(0).contains('Hauler Name')
        cy.get('thead>tr').find('th').eq(1).contains('Vehicle Code')
        cy.get('thead>tr').find('th').eq(2).contains('Plate Number')
        cy.get('thead>tr').find('th').eq(3).contains('Driver Name')
        cy.get('thead>tr').find('th').eq(4).contains('Order Date')
        cy.get('thead>tr').find('th').eq(5).contains('Issuing Plant')

        adminObjects.viewAll()
            .and('be.have.text', 'View All')

        adminObjects.usersCont()
            .and('be.have.text', 'Users')
        adminObjects.viewAllUsers()
            .and('be.have.text', 'View All')

        cy.get('thead>tr').find('th').eq(6).contains('Name')
            .and('be.have.text', 'Name')
        cy.get('thead>tr').find('th').eq(7).contains('E-mail')
            .and('be.have.text', 'E-mail')
        cy.get('thead>tr').find('th').eq(8).contains('Role')
            .and('be.have.text', 'Role')
    })

    it('Manage Users page', function () {
        globalObjects.menuButton().click()
        adminObjects.manageUsersPage()
            .and('be.have.text', 'Manage Users').click()

        globalObjects.pageTitle()
            .and('be.have.text', 'Manage Users')

        adminObjects.createButton()
            .and('be.have.text', 'Create User')

        cy.get('thead>tr').find('th').eq(0).contains('First Name')
        cy.get('thead>tr').find('th').eq(1).contains('Last Name')
        cy.get('thead>tr').find('th').eq(2).contains('Username')
        cy.get('thead>tr').find('th').eq(3).contains('E-mail')
        cy.get('thead>tr').find('th').eq(4).contains('Role')
        cy.get('thead>tr').find('th').eq(5).contains('Actions')
        //cy.get(':nth-child(1) > :nth-child(6) > div > #edit_user').and('be.have.text', 'Edit')
        //cy.get(':nth-child(1) > :nth-child(6) > div > #delete_user').and('be.have.text', 'Delete')
    })

    it('Customers List', function () {
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

    it('Delivery Status page', function () {
        globalObjects.menuButton().click()
        adminObjects.delStatusPage()
            .and('be.have.text', 'Delivery Status').click()

        globalObjects.pageTitle()
            .and('be.have.text', 'Delivery Status')

        cy.get('thead>tr').find('th').eq(0).contains('Sold to Code')
        cy.get('thead>tr').find('th').eq(1).contains('Sold to Name')
        cy.get('thead>tr').find('th').eq(2).contains('Ship to Code')
        cy.get('thead>tr').find('th').eq(3).contains('Ship to Name')
        cy.get('thead>tr').find('th').eq(4).contains('SO Number')
        cy.get('thead>tr').find('th').eq(5).contains('SO Date')
        cy.get('thead>tr').find('th').eq(6).contains('Order Details')
        cy.get('thead>tr').find('th').eq(7).contains('Issuing Plant')
        cy.get('thead>tr').find('th').eq(8).contains('Delivery Instructions')
        cy.get('thead>tr').find('th').eq(9).contains('Status')
        cy.get('thead>tr').find('th').eq(10).contains('Location')
        cy.get('thead>tr').find('th').eq(11).contains('Delivery Receipt')
    })

    it('Manage Reasons page', function () {
        globalObjects.menuButton().click()
        adminObjects.manageReasonsPage()
            .and('be.have.text', 'Manage Reasons').click()

        globalObjects.pageTitle()
            .and('be.have.text', 'Manage Reasons')

        adminObjects.addReason()
            .should('be.visible')
            .and('contain', 'Add New Reason')
        adminObjects.reasonFilter()
            .should('be.visible')
        adminObjects.editButton()
            .should('be.visible')
            .and('contain', 'Edit')
        adminObjects.deleteButton()
            .should('be.visible')
            .and('contain', 'Delete')
    })

    it('Image Submitted page', function () {
        globalObjects.menuButton().click()
        adminObjects.imageSubmitPage()
            .and('be.have.text', 'Image Submitted').click()

        globalObjects.pageTitle()
            .and('be.have.text', 'Image Submitted')

        cy.get('thead>tr').find('th').eq(0).contains('Sold To Name')
        cy.get('thead>tr').find('th').eq(1).contains('Ship To Name')
        cy.get('thead>tr').find('th').eq(2).contains('DR Number')
        cy.get('thead>tr').find('th').eq(3).contains('Last Update')
        cy.get('thead>tr').find('th').eq(4).contains('Image Type')
        cy.get('thead>tr').find('th').eq(5).contains('Image File')
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

