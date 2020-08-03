class salesObects {
    ////////////////////////////////////////////////Dashboard page
    dashHeader() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Dashboard')
    }

    dashFilter() {
        return cy.get('.container__select--active')
            .should('be.visible')
    }

    dashSearchField() {
        return cy.get('.float-right')
            .should('be.visible')
    }

    dashTimeDrop() {
        return cy.get('.container__dateSelect--active')
            .should('be.visible')
    }

    soCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'SO #')
    }

    soldToCodeCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'Sold To Code')
    }

    soldToNameCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'Sold To Name')
    }

    shipToCodeCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(4)')
            .and('be.have.text', 'Ship To Code')
    }

    shipToNameCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(5)')
            .and('be.have.text', 'Ship To Name')
    }

    shipToAddCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(6)')
           
    }

    delDateCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(7)')
            .and('be.have.text', 'Delivery Date')
    }

    statusCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(8)')
            .and('be.have.text', 'Status')
    }

    productCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(9)')
            .and('be.have.text', 'Product')
    }

    actionCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(10)')
            .and('be.have.text', 'Action')
    }

    ////////////////////////////////////////////////Delivery status page
    delStatusPage() {
        return cy.get('[href="/dashboard/delivery-status"] > .sidebar-menu-item')
            .and('be.have.text', 'Delivery Status')
    }

    ////////////////////////////////////////////////History page
    historyPage() {
        return cy.get('[href="/dashboard/history"] > .sidebar-menu-item')
            .and('be.have.text', 'History')
    }

    historyHeader() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'History')
    }

    historyFilter() {
        return cy.get('.container__select--active')
            .should('be.visible')
    }

    historySearchField() {
        return cy.get('.float-right')
            .should('be.visible')
    }

    orderNumCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'Order #')
    }

    soldToNameCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'Sold to Name')

    }

    shipToNameCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'Ship to Name')

    }

    statusCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(4)')
            .and('be.have.text', 'Status')

    }

    delDateCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(5)')
            .and('be.have.text', 'Delivery Date')

    }

    actionCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(6)')
           
    }

    ////////////////////////////////////////////////Customer list page
    custListPage() {
        return cy.get('[href="/dashboard/customers"] > .sidebar-menu-item')
            .and('be.have.text', 'Customer List')
    }

    custListHeader() {
        return cy.get('.menu-label-breed')
            .and('be.have.text', 'Customer List')
    }

    soldToCodeCol0() {
        return cy.get('.data-list-table__head > tr > :nth-child(1)')
            .and('be.have.text', 'Sold To Code')
    }

    soldToNameCol1() {
        return cy.get('.data-list-table__head > tr > :nth-child(2)')
            .and('be.have.text', 'Sold To Name')
    }

    soldToAddCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(3)')
            .and('be.have.text', 'Sold To Address')
    }

    fnameCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(4)')
            .and('be.have.text', 'First Name')
    }

    lnameCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(5)')
            .and('be.have.text', 'Last Name')
    }

    usernameCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(6)')

    }

    emailCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(7)')
            .and('be.have.text', 'E-mail')
    }

    shipToCol() {
        return cy.get('.data-list-table__head > tr > :nth-child(8)')
            .and('be.have.text', "Ship To")
    }
}

export default salesObects














