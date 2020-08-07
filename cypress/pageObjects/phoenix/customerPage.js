class customerObjects {
    ////////////////////////////////////////////////Dashboard page
    searchField() {
        return cy.get('.customer-search')
            .should('be.visible')
    }

    currDelContainer() {
        return cy.get('.delivery-indicator')
            .should('be.visible')
    }

    currDelButton() {
        return cy.get('.delivery-indicator__action')
    }

    incomingContainer() {
        return cy.get('.home__cus-header')
            .should('be.visible')
    }

    ////////////////////////////////////////////////Profile Dropdown

    customerPopUp() {
        return cy.get('.customer-popup-menu')
            .should('be.visible')
    }

    ////////////////////////////////////////////////Menu Button

    customerLogo() {
        return cy.get('.customer-sidebar__logo-img')
            .should('be.visible')
    }

    customerClose() {
        return cy.get('.customer-sidebar__close')
            .should('be.visible')
    }

    ////////////////////////////////////////////////Delivery Status Page

    delStatusCustomer() {
        return cy.get('[href="/dashboard/delivery-status"] > .customer-sidebar__item')
            .and('be.have.text', 'Delivery Status')
    }

    delStatusHeader() {
        return cy.get('.customer-nav__title')
            .and('be.have.text', 'Delivery Status')
    }

    ////////////////////////////////////////////////History Page

    historyCustomer() {
        return cy.get('[href="/dashboard/history-list"] > .customer-sidebar__item')
            .and('be.have.text', 'History')
    }

    historyHeader() {
        return cy.get('.customer-nav__title')
            .and('be.have.text', 'History')
    }

    historyFilter() {
        return cy.get('.container__select--active')
            .should('be.visible')
    }

    historyfield() {
        return cy.get('.sales-input-container')
            .should('be.visible')
    }

    historyTimeFrame() {
        return cy.get('.container__dateSelect--active')
            .should('be.visible')
    }

    ////////////////////////////////////////////////CDSS Profile page
    cdssProfile() {
        return cy.get('[href="/dashboard/cdss-profile"] > .customer-sidebar__item')
            .and('be.have.text', 'CDSS Profile')
    }

    cdssHeader() {
        return cy.get('.customer-nav__title')
            .and('be.have.text', 'CDSS Profile Page')
    }

    cdssAuthReceiverTab() {
        return cy.get('.header-button-cus--active')
            .and('be.have.text', 'AUTHORIZED RECEIVERS')
    }

    cdssLogo() {
        return cy.get('.cdss_logo')
            .should('be.visible')
    }

    cdssH3() {
        return cy.get('h3')
            .and('be.have.text', 'Phoenix Petroleum Philippines Inc')
    }

    cdssH2Form() {
        return cy.get('h2')
            .and('be.have.text', 'Authorized Receivers')

    }

    custBusinessName() {
        return cy.get('.customer-details-table > :nth-child(1) > :nth-child(1)')
            .and('be.have.text', 'CUSTOMER\'S BUSINESS NAME:')
    }

    custBusinessAddress() {
        return cy.get('.customer-details-table > :nth-child(2) > :nth-child(1)')
            .and('be.have.text', 'BUSINESS ADDRESS: ')
    }

    custSoldtoNum() {
        return cy.get('.customer-details-table > :nth-child(3) > :nth-child(1)')
            .and('be.have.text', 'SOLD TO NUMBER: ')
    }

    cdssH4() {
        return cy.get('h4')
            .and('be.have.text', 'Authorized Receivers:')
    }

    cdssParagraph() {
        return cy.get('.home-mainblock > p')
            .and('be.have.text', 'The following persons whose names and signatures appear below are authorized to receive products.Click here to view the terms and conditions of this form.')
    }

    ////////////////////////////////////////////////CDSS Profile page > Manage CDSS tab
    manageCDSSTAB() {
        return cy.get('.header-buttons > :nth-child(2)')
            .and('be.have.text', 'MANAGE CDSS')
    }

    shipToAddress() {
        return cy.get('[cellpadding="0"] > tr > .cdss_title_td')
            .and('be.have.text', 'SHIP TO ADDRESS:')
    }

    cdssH2Signature() {
        return cy.get('h2')
            .and('be.have.text', 'Customer\'s Delivery & Specimen Signature Form')

    }

    cdssDescription() {
        return cy.get('.CDSSDescription > p')
            .should('be.visible')
    }
}

export default customerObjects



