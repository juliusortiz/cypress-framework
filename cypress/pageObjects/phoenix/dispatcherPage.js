class dispatcherObjects {
    ////////////////////////////////////////////////Dashboard page
    dashFilter() {
        return cy.get('.container__select--active')     
    }

    dashSearch() {
        return cy.get('.float-right')  
    }

    ////////////////////////////////////////////////Delivery history page
    delHistoryPage() {
        return cy.get('[href="/dashboard/deliveries-history"] > .sidebar-menu-item') 
    }

    delHistorySearch() {
        return cy.get('.col-3')
    }

    ////////////////////////////////////////////////Problems reported page
    problemsRepPage() {
        return cy.get('[href="/dashboard/problems-reported"] > .sidebar-menu-item')
    }

    ////////////////////////////////////////////////Reasons page
    reasonsPage() {
        return cy.get('[href="/dashboard/manage-reasons-dispatcher"] > .sidebar-menu-item') 
    }

    reasonsFilter() {
        return cy.get('.container__select--active')
    }
}

export default dispatcherObjects
