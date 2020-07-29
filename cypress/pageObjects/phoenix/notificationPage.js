class notifObjects {

    notifBell() {
        return cy.get('.navbar__notifications-bell')
            .should('be.visible')
    }

    notifTitle() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Notifications')
    }

    refreshButton() {
        return cy.get('.data-create__btn')
            .and('be.have.text', 'Refresh')
    }
}

export default notifObjects