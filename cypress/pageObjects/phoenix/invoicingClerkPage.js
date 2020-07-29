class invoicingClerkObjects {
    ////////////////////////////////////////////////Dashboard page
    dashHeader() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Dashboard')
    }

    delDateCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'Delivery Date')
    }

    shipmentNoCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'Shipment No.')
    }

    drivercol() {
        return cy.get('.data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'Driver')
    }

    vehicleCodeCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(4)')
            .and('be.have.text', 'Vehicle Code')
    }

    shippingConCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(5)')
            .and('be.have.text', 'Shipping Condition')
    }

    custNameCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(6)')
            .and('be.have.text', 'Customer Name')
    }

    statusCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(7)')
            .and('be.have.text', 'Status')
    }

    actionCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(8)')
            .and('be.have.text', 'Action')
    }

    ////////////////////////////////////////////////Scheduling page
    schedPage() {
        return cy.get('[href="/dashboard/scheduling-system"] > .sidebar-menu-item')
            .and('be.have.text', 'Scheduling')
    }

    schedHeader() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Scheduling')
    }

    bulkShipCodeDrop() {
        return cy.get(':nth-child(1) > .css-bg1rzq-control > .css-1hwfws3')
            .should('be.visible')
    }

    tppDrop() {
        return cy.get('.section-inputs > :nth-child(2) > .css-bg1rzq-control > .css-1hwfws3')
            .should('be.visible')
    }

    driverDrop() {
        return cy.get(':nth-child(3) > .css-bg1rzq-control > .css-1hwfws3')
            .should('be.visible')
    }

    vehicleDrop() {
        return cy.get('.section-inputs > :nth-child(4) > .css-bg1rzq-control > .css-1hwfws3')
            .should('be.visible')
    }

    actionCol0() {
        return cy.get('.header-row--secondary > :nth-child(1)')
            .and('be.have.text', 'Action')
    }

    tripNumCol() {
        return cy.get('.header-row--secondary > :nth-child(2)')
            .and('be.have.text', 'Trip Number')
    }

    outDelNumCol() {
        return cy.get('.header-row--secondary > :nth-child(3)')
            .and('be.have.text', 'Outbound Delivery Number')
    }

    soldToCol() {
        return cy.get('.header-row--secondary > :nth-child(4)')
            .and('be.have.text', 'Sold To')
    }

    shipToCol() {
        return cy.get('.header-row--secondary > :nth-child(5)')
            .and('be.have.text', 'Ship To')
    }

    productCol() {
        return cy.get('.header-row--secondary > :nth-child(6)')
            .and('be.have.text', 'Product')
    }

    plannedQuanCol() {
        return cy.get('.header-row--secondary > :nth-child(7)')
            .and('be.have.text', 'Planned Quantity')
    }

    unscheQuanCol() {
        return cy.get('.header-row--secondary > :nth-child(8)')
            .and('be.have.text', 'Unscheduled Quantity')
    }

    compartGuide() {
        return cy.get('[colspan="0"]')
            .and('be.have.text', 'Compartmentation Guide')
    }

    addOutBound() {
        return cy.get('.btn-small')
            .and('be.have.text', 'Add Outbound Number')
    }

    submitButton() {
        return cy.get('.btn-tertiary-green')
            .should('be.visible').and('be.have.text', 'Submit')
    }
    ////////////////////////////////////////////////History page
    historyPage() {
        return cy.get('[href="/dashboard/invoicing-history"] > .sidebar-menu-item')
        .and('be.have.text', 'History')

    }

    historyHeader() {
        return cy.get('.menu-label-breed')
        .and('be.have.text', 'History')
    }

    delDateCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
        .and('be.have.text', 'Date')
    }
}

export default invoicingClerkObjects
















