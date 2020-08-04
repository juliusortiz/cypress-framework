class schedObject {
    ////////////////////////////////////////////////Dashboard page
    schedHeader() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Dashboard')
    }

    ////////////////////////////////////////////////Current deliveries page
    currDelPage() {
        return cy.get('[href="/dashboard/dispatcherDashboard"] > .sidebar-menu-item')
            .and('be.have.text', 'Current Deliveries')
    }

    currDelHeader() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Current Deliveries')
    }

    currDelFilter() {
        return cy.get('.container__select--active')
            .and('be.have.text', 'Current Deliveries')
    }

    currDelSearch() {
        return cy.get('.float-right')
            .should('be.visible')
    }

    tripCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'Trip Ticket No.')
    }

    delInstCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'Delivery Instructions')
    }

    soCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'SO No.')
    }

    orderAppCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(4)')
            .and('be.have.text', 'Order Approval Date')
    }

    obNoCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(5)')
            .and('be.have.text', 'OB No.')
    }

    haulerCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(6)')
            .and('be.have.text', 'Hauler Name')
    }

    plateNoCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(7)')
            .and('be.have.text', 'Plate No.')
    }

    driverCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(8)')
            .and('be.have.text', 'Driver')
    }

    schedCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(9)')
            .and('be.have.text', 'Scheduler')
    }

    statusCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(10)')
            .and('be.have.text', 'Status')
    }

    ////////////////////////////////////////////////Reasons page
    reasonsPage() {
        return cy.get('[href="/dashboard/manage-reasons-scheduler"] > .sidebar-menu-item')
            .and('be.have.text', 'Reasons')
    }
}



export default schedObject