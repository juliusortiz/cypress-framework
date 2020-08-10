import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import AdminObjects from '../../../pageObjects/phoenix/adminPage'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'


describe('Super admin functional regression testing:', () => {

    const globalObjects = new GlobalObjects()
    const adminObjects = new AdminObjects()
    const settingsObjects = new SettingsObjects()

    it('Login super admin user', function () {
        cy.navigatePDS()
        globalObjects.businesstype().select('Phoenix Petroleum')
            .should('have.value', 'PP')
        globalObjects.username().type('pp.sa_1')
            .should('have.value', 'pp.sa_1')
        globalObjects.password().type('P@ssw0rd123')
            .should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Manage user', function () {
        globalObjects.menuButton().click()
        adminObjects.manageUsersPage().click()

        cy.log('Create sales user')
        adminObjects.createButton().click()
        adminObjects.userField({
            user: 'sales_user'
        })
        adminObjects.emailField({
            email: 'sales_user@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'Sales'
        })
        adminObjects.lnameField({
            lname: 'User'
        })
        adminObjects.createUserButton().click()
        cy.log('Successfully created sales user')

        cy.log('Edit sales user')
        adminObjects.editUserButton().click()
        adminObjects.emailField({
            email: 'sales_user_edited@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'Sales_edited'
        })
        adminObjects.lnameField({
            lname: 'Sales_edited'
        })
        adminObjects.updateUserButton().click()
        cy.log('Successfully edited sales user')


        cy.log('Delete sales user')
        adminObjects.deleteUserButton().click()
        adminObjects.deleteCancel().click()
        adminObjects.deleteUserButton().click()
        adminObjects.deleteConfirm().click()
        cy.log('Successfully deleted sales user')
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        cy.log('Create scheduler user')
        adminObjects.createButton().click()
        adminObjects.userField({
            user: 'scheduler_user'
        })
        adminObjects.emailField({
            email: 'scheduler_user@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'Scheduler'
        })
        adminObjects.lnameField({
            lname: 'User'
        })
        adminObjects.dropdownRole().click()
        cy.wait(500)
        adminObjects.schedRole().click()
        adminObjects.createUserButton().click()
        cy.log('Successfully created scheduler user')


        cy.log('Edit scheduler user')
        adminObjects.editUserButton().click()
        adminObjects.emailField({
            email: 'scheduler_user_edited@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'Scheduler_edited'
        })
        adminObjects.lnameField({
            lname: 'Scheduler_edited'
        })
        adminObjects.updateUserButton().click()
        cy.log('Successfully edited scheduler user')


        cy.log('Delete scheduler user')
        adminObjects.deleteUserButton().click()
        adminObjects.deleteConfirm().click()
        cy.log('Successfully deleted scheduler user')
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        cy.log('Create IRT user')
        adminObjects.createButton().click()
        adminObjects.userField({
            user: 'irt_user'
        })
        adminObjects.emailField({
            email: 'irt_user@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'IRT'
        })
        adminObjects.lnameField({
            lname: 'User'
        })
        adminObjects.dropdownRole().click()
        cy.wait(500)
        adminObjects.irtRole().click()
        adminObjects.createUserButton().click()
        cy.log('Successfully created IRT user')


        cy.log('Edit IRT user')
        adminObjects.editUserButton().click()
        adminObjects.emailField({
            email: 'irt_user_edited@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'IRT_edited'
        })
        adminObjects.lnameField({
            lname: 'IRT_edited'
        })
        adminObjects.updateUserButton().click()
        cy.log('Successfully edited IRT user')


        cy.log('Delete IRT user')
        adminObjects.deleteUserButton().click()
        adminObjects.deleteConfirm().click()
        cy.log('Successfully deleted IRT user')
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        cy.log('Create dispatcher user')
        adminObjects.createButton().click()
        adminObjects.userField({
            user: 'dispatcher_user'
        })
        adminObjects.emailField({
            email: 'dispatcher_user@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'Dispatcher'
        })
        adminObjects.lnameField({
            lname: 'User'
        })
        adminObjects.dropdownRole().click()
        cy.wait(500)
        adminObjects.dispatRole().click()
        adminObjects.createUserButton().click()
        cy.log('Successfully created dispatcher user')


        cy.log('Edit dispatcher user')
        adminObjects.editUserButton().click()
        adminObjects.emailField({
            email: 'dispatcher_user_edited@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'Dispatcher_edited'
        })
        adminObjects.lnameField({
            lname: 'Dispatcher_edited'
        })
        adminObjects.updateUserButton().click()
        cy.log('Successfully edited dispatcher user')


        cy.log('Delete dispatcher user')
        adminObjects.deleteUserButton().click()
        adminObjects.deleteConfirm().click()
        cy.log('Successfully deleted dispatcher user')
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        cy.log('Create admin user')
        adminObjects.createButton().click()
        adminObjects.userField({
            user: 'admin_user'
        })
        adminObjects.emailField({
            email: 'admin_user@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'Admin'
        })
        adminObjects.lnameField({
            lname: 'User'
        })
        adminObjects.dropdownRole().click()
        cy.wait(500)
        adminObjects.saRole().click()
        adminObjects.createUserButton().click()
        cy.log('Successfully created admin user')


        cy.log('Edit admin user')
        adminObjects.editUserButton().click()
        adminObjects.emailField({
            email: 'admin_user_edited@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'Admin_edited'
        })
        adminObjects.lnameField({
            lname: 'Admin_edited'
        })
        adminObjects.updateUserButton().click()
        cy.log('Successfully edited admin user')


        cy.log('Delete admin user')
        adminObjects.deleteUserButton().click()
        adminObjects.deleteConfirm().click()
        cy.log('Successfully deleted admin user')
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        cy.log('Create invoicing clerk user')
        adminObjects.createButton().click()
        adminObjects.userField({
            user: 'invoicing_clerk_user'
        })
        adminObjects.emailField({
            email: 'invoicing_clerk_user@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'Invoicing Clerk'
        })
        adminObjects.lnameField({
            lname: 'User'
        })
        adminObjects.dropdownRole().click()
        cy.wait(500)
        adminObjects.invRole().click()
        adminObjects.createUserButton().click()
        cy.log('Successfully created invoicing clerk user')


        cy.log('Edit invoicing clerk user')
        adminObjects.editUserButton().click()
        adminObjects.emailField({
            email: 'invoicing_clerk_user_edited@mailinator.com'
        })
        adminObjects.fnameField({
            fname: 'Invoicing_clerk_edited'
        })
        adminObjects.lnameField({
            lname: 'Invoicing_clerk_edited'
        })
        adminObjects.updateUserButton().click()
        cy.log('Successfully edited invoicing clerk user')


        cy.log('Delete invoicing clerk user')
        adminObjects.deleteUserButton().click()
        adminObjects.deleteConfirm().click()
        cy.log('Successfully deleted invoicing clerk user')
    })

    it('Manage Reasons', function () {
        globalObjects.menuButton().click()
        adminObjects.manageReasonsPage().click()

        cy.log('Add backload reason')
        adminObjects.addReason().click()
        adminObjects.textArea({
            reason: 'This is automated generated reason'
        })
        adminObjects.addButton().click()
        cy.log('Successfully added backload reason')
        cy.wait(1000)

        cy.log('Edit backload reason')
        cy.get('tbody>tr')
            .last()
            .find('td')
            .last()
            .contains('Edit').click()
        adminObjects.textArea({
            reason: ' edited'
        })
        adminObjects.addButton().click()
        cy.log('Successfully edited backload reason')
        cy.wait(1000)

        cy.log('Test cancel delete')
        cy.get('tbody>tr')
            .last()
            .find('td')
            .last()
            .contains('Delete').click()
        cy.wait(1000)
        adminObjects.deleteNo().click()
        cy.log('Cancel delete successfull')
        cy.wait(1000)

        cy.log('Delete backload reason')
        cy.get('tbody>tr')
            .last()
            .find('td')
            .last()
            .contains('Delete').click()
        cy.wait(1000)
        adminObjects.deleteYes().click()
        cy.log('Delete backload reason successfull')
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        adminObjects.reasonDropDown().click()
        adminObjects.filterPartial().click()

        cy.log('Add partially accepted reason')
        adminObjects.addReason().click()
        adminObjects.textArea({
            reason: 'This is automated generated reason'
        })
        adminObjects.addButton().click()
        cy.log('Successfully added partially accepted reason')
        cy.wait(1000)

        cy.log('Edit partially accepted reason')
        cy.get('tbody>tr')
            .last()
            .find('td')
            .last()
            .contains('Edit').click()
        adminObjects.textArea({
            reason: ' edited'
        })
        adminObjects.addButton().click()
        cy.log('Successfully edited partially accepted reason')
        cy.wait(1000)

        cy.log('Delete partially accepted reason')
        cy.get('tbody>tr')
            .last()
            .find('td')
            .last()
            .contains('Delete').click()
        cy.wait(1000)
        adminObjects.deleteYes().click()
        cy.log('Delete partially accepted reason successfull')
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        adminObjects.reasonDropDown().click()
        adminObjects.filterProblems().click()

        cy.log('Add problems reported reason')
        adminObjects.addReason().click()
        adminObjects.textArea({
            reason: 'This is automated generated reason'
        })
        adminObjects.addButton().click()
        cy.log('Successfully added partially accepted reason')
        cy.wait(1000)

        cy.log('Edit problems reported reason')
        cy.get('tbody>tr')
            .last()
            .find('td')
            .last()
            .contains('Edit').click()
        adminObjects.textArea({
            reason: ' edited'
        })
        adminObjects.addButton().click()
        cy.log('Successfully edited problems reported reason')
        cy.wait(1000)

        cy.log('Delete problems reported reason')
        cy.get('tbody>tr')
            .last()
            .find('td')
            .last()
            .contains('Delete').click()
        cy.wait(1000)
        adminObjects.deleteYes().click()
        cy.log('Delete problems reported reason successfull')
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


