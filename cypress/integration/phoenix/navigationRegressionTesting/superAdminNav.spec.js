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
        globalObjects.businesstype().select('Phoenix Petroleum').should('have.value', 'PP')
        globalObjects.username().type('pp.sa_1').should('have.value', 'pp.sa_1')
        globalObjects.password().type('P@ssw0rd123').should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Dashboard page', function () {
        adminObjects.dashHeader()
        
        adminObjects.delStatusCont()

        adminObjects.haulerCol()
        adminObjects.vehicleCol()
        adminObjects.plateNumCol()
        adminObjects.driverCol()
        adminObjects.orderCol()
        adminObjects.issuingCol()
        adminObjects.viewAll()

        adminObjects.usersCont()
        adminObjects.viewAllUsers()
        adminObjects.nameCol()
        adminObjects.emailCol()
        adminObjects.roleCol()
    })

    it('Manage Users page', function () {
        globalObjects.menuButton().click()
        adminObjects.manageUsersPage().click()

        adminObjects.manageUsersHead()
        adminObjects.createUserButton()
        adminObjects.fnameCol()
        adminObjects.lnameCol()
        adminObjects.userNameCol()
        adminObjects.emailCol0()
        adminObjects.roleCol0()
        adminObjects.actionsCol()
        //cy.get(':nth-child(1) > :nth-child(6) > div > #edit_user').and('be.have.text', 'Edit')
        //cy.get(':nth-child(1) > :nth-child(6) > div > #delete_user').and('be.have.text', 'Delete')
    })

    it('Customers List', function () {
        globalObjects.menuButton().click()
        salesObjects.custListPage().click()

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
        // cy.get('.data-l  ist-table__head > tr > :nth-child(2)').and('be.have.text', 'Ship To')
        // cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Ship To Name')
        // cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Ship To Address')
        // cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Location')
        // cy.get(':nth-child(1) > :nth-child(5) > .data-list__receipt-location-button').should('be.visible').click()
    })

    it('Delivery Status page', function () {
        globalObjects.menuButton().click()
        adminObjects.delStatusPage().click()

        adminObjects.delStatusHead()
        adminObjects.soldToCol()
        adminObjects.soldToNameCol()
        adminObjects.shipToCol()
        adminObjects.shipToNameCol()
        adminObjects.soNumCol()
        adminObjects.soDateCol()
        adminObjects.orderDetCol()
        adminObjects.issuingCol0()
        adminObjects.delInstructCol()
        adminObjects.statusCol
        adminObjects.locCol()
        adminObjects.delInstructCol()
    })

    it('Manage Reasons page', function () {
        globalObjects.menuButton().click()
        adminObjects.manageReasonsPage().click()

        adminObjects.manageReasonHead()
        adminObjects.addReasonButton()
        adminObjects.reasonFilter()
        adminObjects.editButton()
        adminObjects.deleteButton()
    })

    it('Image Submitted page', function () {
        globalObjects.menuButton().click()
        adminObjects.imageSubmitPage().click()
        
        adminObjects.soldToNameCol0()
        adminObjects.shipToNameCol0()
        adminObjects.drNumCol()
        adminObjects.lastUpdateCol()
        adminObjects.imgTypeCol()
        adminObjects.imgFileCol()
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

