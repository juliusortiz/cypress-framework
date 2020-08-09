class schedObject {
    ////////////////////////////////////////////////Current deliveries page
    currDelPage() {
        return cy.get('[href="/dashboard/dispatcherDashboard"] > .sidebar-menu-item')
    }

    currDelFilter() {
        return cy.get('.container__select--active')  
    }

    currDelSearch() {
        return cy.get('.float-right')
    }

    ////////////////////////////////////////////////Reasons page
    reasonsPage() {
        return cy.get('[href="/dashboard/manage-reasons-scheduler"] > .sidebar-menu-item')
            .and('be.have.text', 'Reasons')
    }
}

export default schedObject