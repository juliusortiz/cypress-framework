class settingsObjects {

    usernameField() {
        return cy.get(':nth-child(1) > .request-box__input-container > .request-box__input')
            .should('be.visible')
    }

    emailField() {
        return cy.get(':nth-child(2) > .request-box__input-container > .request-box__input')
            .should('be.visible')
    }

    passwordField() {
        return cy.get(':nth-child(3) > .request-box__input-container > .request-box__input')
            .should('be.visible')
    }

    contactNumber() {
        return cy.get(':nth-child(4) > .request-box__input-container > .request-box__input')
            .should('be.visible')
    }

    saveButton() {
        return cy.get('.request-box__button-container > .btn')
            .should('be.visible')
            .and('be.have.text', 'Save Changes')
    }

    sendFeedbackTab() {
        return cy.get('[href="/dashboard/settings/send-feedback"]')
            .and('be.have.text', 'Send Feedback')
    }

    textArea() {
        return cy.get('.feedback__textarea')
            .should('be.visible')
    }

    submitButton() {
        return cy.get('.feedback__button-container > .btn')
            .should('be.visible')
            .and('be.have.text', 'Submit')
    }

    AboutthisAppTab() {
        return cy.get('[href="/dashboard/settings/about-this-app"]')
            .and('be.have.text', 'About this app')
    }

    AboutthisAppContainer() {
        return cy.get('.about-app__container')
            .should('be.visible')
    }

}

export default settingsObjects
