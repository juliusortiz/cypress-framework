class notifObjects {

    notifBell() {
        return cy.get('.navbar__notifications-bell')
        .should('be.visible')
    }

    refreshButton() {
        return cy.get('.data-create__btn') 
        .and('be.have.text', 'Refresh')
    }
}

export default notifObjects