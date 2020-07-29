class dispatcherObjects {
    ////////////////////////////////////////////////Dashboard page
    dashHeader() {
        return cy.get('.menu-label-breed').should('be.visible')
            .and('contain', 'Dashboard')
    }

    dashFilter() {
        return cy.get('.container__select--active')
            .should('be.visible')
    }

    dashSearch() {
        return cy.get('.float-right')
            .should('be.visible')
    }

    tripCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'Trip Ticket No.')
    }

    delInstrucCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'Delivery Instructions')
    }

    soNoCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'SO No.')
    }

    orderAppDateCol() {
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

    plateNumCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(7)')
            .and('be.have.text', 'Plate No.')
    }

    driverCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(8)')
            .and('be.have.text', 'Driver')
    }

    statusCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(9)')
            .and('be.have.text', 'Status')
    }

    ////////////////////////////////////////////////Delivery history page

    delHistoryPage() {
        return cy.get('[href="/dashboard/deliveries-history"] > .sidebar-menu-item')
            .and('be.have.text', 'Delivery History')

    }

    delHistoryHeader() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Delivery History')
    }

    delHistorySearch() {
        return cy.get('.col-3')
            .should('be.visible')
    }

    ////////////////////////////////////////////////Problems reported page

    problemsRepPage() {
        return cy.get('[href="/dashboard/problems-reported"] > .sidebar-menu-item')
            .and('be.have.text', 'Problems Reported')
    }

    driverCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'Driver\'s Name')
    }

    vehicleCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'Driver\'s Name')
    }

    plateNumCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'Vehicle Code')
    }

    soldToCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'Plate Number')
    }

    shipToCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(5)')
            .and('be.have.text', 'Ship To')
    }

    locCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(6)')
            .and('be.have.text', 'Location')
    }

    shipmentNoCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(7)')
            .and('be.have.text', 'Shipment No.')
    }

    tripTicketNoCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(8)')
            .and('be.have.text', 'Trip Ticket No.')
    }

    outboundDelCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(9)')
            .and('be.have.text', 'Outbound Delivery No.')
    }

    dateAndTimeCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(10)')
            .and('be.have.text', 'Date and Time')
    }

    reasonCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(11)')
            .and('be.have.text', 'Reason')
    }

    problemDescCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(12)')
            .and('be.have.text', 'Problem Description')
    }

    ////////////////////////////////////////////////Reasons page

    reasonsPage() {
        return cy.get('[href="/dashboard/manage-reasons-dispatcher"] > .sidebar-menu-item')
            .and('be.have.text', 'Reasons')
    }

    reasonsHeader() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Reasons')
    }

    reasonsFilter() {
        return cy.get('.container__select--active')
            .should('be.visible')
    }
}

export default dispatcherObjects
