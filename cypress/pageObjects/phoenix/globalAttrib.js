class globalObjects {

    businesstype() {
        return cy.get('.validate-inpu > .input100')
    }

    username() {
        return cy.get('[data-validate="Enter username"] > .input100')
    }

    password() {
        return cy.get('.m-b-50 > .input100')
    }

    login() {
        return cy.get('.login100-form-btn')
    }

    menuButton() {
        return cy.get('.navbar__sidebar-toggle-icon')
            .should('be.visible')
    }

    profileDropdown() {
        return cy.get('.navbar__dropdown-toggle-icon')
            .should('be.visible')
    }

    userPopUp() {
        return cy.get('.popup-menu')
            .should('be.visible')
    }

    settingsButton() {
        return cy.get('.popup-menu__settings > .popup-menu__label')
            .should('be.visible')
            .and('be.have.text', 'Settings')
    }

    logoutButton() {
        return cy.get('.popup-menu__logout > .popup-menu__label')
            .should('be.visible')
            .and('be.have.text', 'Logout')
    }
}

export default globalObjects
