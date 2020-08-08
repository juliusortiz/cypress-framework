class customerObjects {
    ////////////////////////////////////////////////Dashboard page
    navTitle() {
        return cy.get('.customer-nav__title')
    }

    searchField() {
        return cy.get('.customer-search')    
    }

    currDelContainer() {
        return cy.get('.delivery-indicator')
    }

    currDelButton() {
        return cy.get('.delivery-indicator__action')
    }

    incomingContainer() {
        return cy.get('.home__cus-header')
    }

    ////////////////////////////////////////////////Profile Dropdown

    customerPopUp() {
        return cy.get('.customer-popup-menu')
    }

    ////////////////////////////////////////////////Menu Button

    customerLogo() {
        return cy.get('.customer-sidebar__logo-img')
    }

    customerClose() {
        return cy.get('.customer-sidebar__close')  
    }

    ////////////////////////////////////////////////Delivery Status Page
    delStatusCustomer() {
        return cy.get('[href="/dashboard/delivery-status"] > .customer-sidebar__item')   
    }

    ////////////////////////////////////////////////History Page
    historyCustomer() {
        return cy.get('[href="/dashboard/history-list"] > .customer-sidebar__item') 
    }

    historyFilter() {
        return cy.get('.container__select--active')    
    }

    historyfield() {
        return cy.get('.sales-input-container')     
    }

    historyTimeFrame() {
        return cy.get('.container__dateSelect--active')  
    }

    ////////////////////////////////////////////////CDSS Profile page
    cdssProfile() {
        return cy.get('[href="/dashboard/cdss-profile"] > .customer-sidebar__item')     
    }

    cdssAuthReceiverTab() {
        return cy.get('.header-button-cus--active') 
    }

    cdssLogo() {
        return cy.get('.cdss_logo') 
    }

    cdssH3() {
        return cy.get('h3')   
    }

    cdssH2Form() {
        return cy.get('h2')
    }

    custBusinessName() {
        return cy.get('.customer-details-table > :nth-child(1) > :nth-child(1)') 
    }

    custBusinessAddress() {
        return cy.get('.customer-details-table > :nth-child(2) > :nth-child(1)')  
    }

    custSoldtoNum() {
        return cy.get('.customer-details-table > :nth-child(3) > :nth-child(1)')     
    }

    cdssH4() {
        return cy.get('h4')
    }

    cdssParagraph() {
        return cy.get('.home-mainblock > p')
    }

    ////////////////////////////////////////////////CDSS Profile page > Manage CDSS tab
    manageCDSSTAB() {
        return cy.get('.header-buttons > :nth-child(2)') 
    }

    shipToAddress() {
        return cy.get('[cellpadding="0"] > tr > .cdss_title_td')
    }

    cdssH2Signature() {
        return cy.get('h2')
    }

    cdssDescription() {
        return cy.get('.CDSSDescription > p')
    }
}

export default customerObjects



