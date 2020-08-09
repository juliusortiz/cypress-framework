class salesObects {
    ////////////////////////////////////////////////Dashboard page
    dashFilter() {
        return cy.get('.container__select--active')
    }

    dashSearchField() {
        return cy.get('.float-right')
    }

    dashTimeDrop() {
        return cy.get('.container__dateSelect--active')   
    }

    ////////////////////////////////////////////////Delivery status page
    delStatusPage() {
        return cy.get('[href="/dashboard/delivery-status"] > .sidebar-menu-item')
            .and('be.have.text', 'Delivery Status')
    }

    ////////////////////////////////////////////////History page
    historyPage() {
        return cy.get('[href="/dashboard/history"] > .sidebar-menu-item')
    }

    historyHeader() {
        return cy.get('.menu-label-breed')
            
    }

    historyFilter() {
        return cy.get('.container__select--active')
    }

    historySearchField() {
        return cy.get('.float-right')
    }

    ////////////////////////////////////////////////Customer list page
    custListPage() {
        return cy.get('[href="/dashboard/customers"] > .sidebar-menu-item')
    }
}

export default salesObects














