class invoicingClerkObjects {
    ////////////////////////////////////////////////Scheduling page
    schedPage() {
        return cy.get('[href="/dashboard/scheduling-system"] > .sidebar-menu-item') 
    }

    bulkShipCodeDrop() {
        return cy.get(':nth-child(1) > .css-bg1rzq-control > .css-1hwfws3')
            
    }

    tppDrop() {
        return cy.get('.section-inputs > :nth-child(2) > .css-bg1rzq-control > .css-1hwfws3') 
    }

    driverDrop() {
        return cy.get(':nth-child(3) > .css-bg1rzq-control > .css-1hwfws3')
    }

    vehicleDrop() {
        return cy.get('.section-inputs > :nth-child(4) > .css-bg1rzq-control > .css-1hwfws3')
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
    }

    ////////////////////////////////////////////////History page
    historyPage() {
        return cy.get('[href="/dashboard/invoicing-history"] > .sidebar-menu-item')
    }
}

export default invoicingClerkObjects
















