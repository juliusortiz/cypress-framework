class adminObjects {
    ////////////////////////////////////////////////Dashboard page
    delStatusCont() {
        return cy.get('.mainblock-chart__title')
    }

    viewAll() {
        return cy.get('.main-block-menu-label')
    }

    usersCont() {
        return cy.get('.home-sideblock-title')
    }

    viewAllUsers() {
        return cy.get('.menu-label')
    }

    ////////////////////////////////////////////////Manage users page
    manageUsersPage() {
        return cy.get('[href="/dashboard/users"] > .sidebar-menu-item')
    }

    createButton() {
        return cy.get('.create-button')
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
    }

    ////////////////////////////////////////////////Manage reasons page
    manageReasonsPage() {
        return cy.get('[href="/dashboard/manage-reasons"] > .sidebar-menu-item')
    }

    addReason() {
        return cy.get(':nth-child(3) > :nth-child(1) > .btn')
    }

    textArea(input) {
        return cy.get('.manage-reasons-textarea-container')
            .type(input.reason)
            //.should('have.value', input.reason)
    }

    addButton() {
        return cy.get('.modal-footer__action')
    }

    deleteNo() {
        return cy.get('.action-button-orange')
    }

    deleteYes() {
        return cy.get('.action-button-red')
    }

    reasonDropDown() {
        return cy.get('.container__select--active')
    }

    filterPartial() {
        return cy.get('[value="Partially Accepted"]')
    }

    filterProblems() {
        return cy.get('[value="Problems Reported"]')
    }
    ////////////////////////////////////////////////Image submitted page
    imageSubmitPage() {
        return cy.get('[href="/dashboard/image-submitted"] > .sidebar-menu-item')
    }
}

export default adminObjects