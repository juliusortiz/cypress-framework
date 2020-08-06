class adminObjects {
    ////////////////////////////////////////////////Dashboard page
    dashHeader() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Dashboard')
    }

    delStatusCont() {
        return cy.get('.mainblock-chart__title')
            .and('be.have.text', 'Statuses Details')
    }

    haulerCol() {
        return cy.get('.mainblock__chart > .data-list-table > .data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'Hauler Name')
    }

    vehicleCol() {
        return cy.get('.mainblock__chart > .data-list-table > .data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'Vehicle Code')
    }

    plateNumCol() {
        return cy.get('.mainblock__chart > .data-list-table > .data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'Plate Number')
    }

    driverCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(4)')
            .and('be.have.text', 'Driver Name')
    }

    orderCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(5)')
            .and('be.have.text', 'Order Date')
    }

    issuingCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(6)')
            .and('be.have.text', 'Issuing Plant')
    }

    viewAll() {
        return cy.get('.main-block-menu-label')
            .and('be.have.text', 'View All')
    }

    usersCont() {
        return cy.get('.home-sideblock-title')
            .and('be.have.text', 'Users')
    }

    viewAllUsers() {
        return cy.get('.menu-label')
            .and('be.have.text', 'View All')
    }

    nameCol() {
        return cy.get('.home-sideblock > .data-list-table > .data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'Name')
    }

    emailCol() {
        return cy.get('.home-sideblock > .data-list-table > .data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'E-mail')
    }

    roleCol() {
        return cy.get('.home-sideblock > .data-list-table > .data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'Role')
    }

    ////////////////////////////////////////////////Manage users page
    manageUsersPage() {
        return cy.get('[href="/dashboard/users"] > .sidebar-menu-item')
            .and('be.have.text', 'Manage Users')
    }

    manageUsersHead() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Manage Users')
    }

    createButton() {
        return cy.get('.create-button')
            .and('be.have.text', 'Create User')
    }

    fnameCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'First Name')
    }

    lnameCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'Last Name')
    }

    userNameCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'Username')
    }

    emailCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(4)')
            .and('be.have.text', 'E-mail')
    }

    roleCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(5)')
            .and('be.have.text', 'Role')
    }

    actionsCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(6)')
            .and('be.have.text', 'Actions')
    }

    userField(input) {
        return cy.get('#username').clear()
            .type(input.user)
            .should('have.value', input.user)
    }

    emailField(input) {
        return cy.get('#email').clear()
            .type(input.email)
            .should('have.value', input.email)
    }

    fnameField(input) {
        return cy.get('#first_name').clear()
            .type(input.fname)
            .should('have.value', input.fname)
    }

    lnameField(input) {
        return cy.get('#last_name').clear()
            .type(input.lname)
            .should('have.value', input.lname)
    }

    createUserButton() {
        return cy.get('.action-button-green')
    }

    dropdownRole() {
        return cy.get('.container__dateSelect--active')
    }

    schedRole() {
        return cy.get('.container__options-div > :nth-child(1)')
    }

    irtRole() {
        return cy.get('.container__options-div > :nth-child(2)')
    }

    dispatRole() {
        return cy.get('.container__options-div > :nth-child(3)')
    }

    saRole() {
        return cy.get('.container__options-div > :nth-child(4)')
    }

    invRole() {
        return cy.get('.container__options-div > :nth-child(5)')
    }

    editUserButton() {
        return cy.get(':nth-child(1) > :nth-child(6) > div > #edit_user')
    }

    updateUserButton() {
        return cy.get('.modal-footer > .action-button-orange')
    }

    deleteUserButton() {
        return cy.get(':nth-child(1) > :nth-child(6) > div > #delete_user')
    }

    deleteCancel() {
        return cy.get('.pr-4 > .action-button-orange')
    }

    deleteConfirm() {
        return cy.get('.action-button-red')
    }

    ////////////////////////////////////////////////Delivery status page
    delStatusPage() {
        return cy.get('[href="/dashboard/manage-delivery-receipts"] > .sidebar-menu-item')
            .and('be.have.text', 'Delivery Status')
    }

    delStatusHead() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Delivery Status')
    }

    soldToCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'Sold to Code')
    }

    soldToNameCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'Sold to Name')
    }

    shipToCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'Ship to Code')
    }

    shipToNameCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(4)')
            .and('be.have.text', 'Ship to Name')
    }

    soNumCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(5)')
            .and('be.have.text', 'SO Number')
    }

    soDateCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(6)')
            .and('be.have.text', 'SO Date')
    }

    orderDetCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(7)')
            .and('be.have.text', 'Order Details')
    }

    issuingCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(8)')
            .and('be.have.text', 'Issuing Plant')
    }

    delInstructCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(9)')
            .and('be.have.text', 'Delivery Instructions')
    }

    statusCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(10)')
            .and('be.have.text', 'Status')
    }

    locCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(11)')
            .and('be.have.text', 'Location')
    }

    delReceiptCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(12)')
            .and('be.have.text', 'Delivery Receipt')
    }

    ////////////////////////////////////////////////Manage reasons page
    manageReasonsPage() {
        return cy.get('[href="/dashboard/manage-reasons"] > .sidebar-menu-item')
            .and('be.have.text', 'Manage Reasons')
    }

    manageReasonHead() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Manage Reasons')
    }

    addReasonButton() {
        return cy.get(':nth-child(3) > :nth-child(1) > .btn')
            .should('be.visible')
            .and('contain', 'Add New Reason')
    }
     // Cypress.Commands.add('CreateReason', (input) => {
    //     cy.log('Test create reason')
    //     cy.get(':nth-child(3) > :nth-child(1) > .btn').click()
    //     cy.get('#name').type(input.reason).should('have.value', input.reason)
    //     cy.get('.modal-footer__action').and('be.have.text', 'Add').click()
    // })

    // Cypress.Commands.add('EditReason', (input) => {
    //     cy.log('Test edit reason')
    //     cy.get('#name').clear()
    //         .type(input.reason_edited).should('have.value', input.reason_edited)
    //     cy.get('.modal-footer__action').and('be.have.text', 'EDIT').click()
    // })

    // Cypress.Commands.add('DeleteReason', () => {
    //     cy.log('Test delete reason')
    //     cy.get('.action-button-red').and('be.have.text', 'Yes').click()
    // })


    // Cypress.Commands.add('SelectReasonPartiallyAccepted', () => {
    //     cy.get('.container__select--active').click()
    //     cy.get('[value="Partially Accepted"]').click()
    // })

    // Cypress.Commands.add('SelectReasonProblemsReported', () => {
    //     cy.get('.container__select--active').click()
    //     cy.get('[value="Problems Reported"]').click()
    // })


    reasonFilter() {
        return cy.get('[style="color: rgb(102, 196, 67);"]')
            .should('be.visible')
    }

    editButton() {
        return cy.get(':nth-child(1) > :nth-child(2) > div > #edit_reason')
            .should('be.visible')
            .and('contain', 'Edit')
    }

    deleteButton() {
        return cy.get(':nth-child(1) > :nth-child(2) > div > #delete_reason')
            .should('be.visible')
            .and('contain', 'Delete')
    }

    ////////////////////////////////////////////////Image submitted page
    imageSubmitPage() {
        return cy.get('[href="/dashboard/image-submitted"] > .sidebar-menu-item')
            .and('be.have.text', 'Image Submitted')
    }

    imageSubmitHead() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Image Submitted')
    }

    soldToNameCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'Sold To Name')
    }

    shipToNameCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'Ship To Name')
    }

    drNumCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'DR Number')
    }

    lastUpdateCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(4)')
            .and('be.have.text', 'Last Update')
    }

    imgTypeCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(5)')
            .and('be.have.text', 'Image Type')
    }

    imgFileCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(6)')
            .and('be.have.text', 'Image File')
    }
}

export default adminObjects