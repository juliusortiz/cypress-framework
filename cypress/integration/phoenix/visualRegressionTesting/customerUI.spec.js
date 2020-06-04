
describe('Customer visual regression testing', () => {

    before(() => {
        cy.navigate()
        cy.login({ username: '0001002506', password: 'P@ssw0rd123' })
        cy.headerElementsCustomer()
    })

    after(() => {
        cy.notification()
        cy.settings()
        cy.logoutCustomer()
    })

    beforeEach(() => {
        cy.log('Start testing of page elements . . .')
    })

    afterEach(() => {
        cy.log('End of testing of page elements . . . ')
    })

    it('Dashboard page', function () {
        cy.get('.customer-search').should('be.visible')
        cy.get('.delivery-indicator').should('be.visible')
        cy.get('.delivery-indicator__action').and('be.have.text', 'Refresh ')

        cy.get('.home__cus-header').should('be.visible')
    })

    it('Delivery Status page', function () {
       cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
       cy.get('.customer-sidebar__logo-img').should('be.visible')
       cy.get('.customer-sidebar__close').should('be.visible')

       cy.get('[href="/dashboard/delivery-status"] > .customer-sidebar__item').and('be.have.text', 'Delivery Status').click()
       cy.get('.customer-nav__title').and('be.have.text', 'Delivery Status')
    })

    it('History page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('.customer-sidebar__logo-img').should('be.visible')
        cy.get('.customer-sidebar__close').should('be.visible')
 
        cy.get('[href="/dashboard/history-list"] > .customer-sidebar__item').and('be.have.text', 'History').click()
        cy.get('.customer-nav__title').and('be.have.text', 'History')

        cy.get('.container__select--active').should('be.visible')
        cy.get('.sales-input-container').should('be.visible')
        cy.get('.container__dateSelect--active').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'DR No.')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Delivery Date')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Driver\'s Name')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Vehicle Code')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Plate Number')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Issuing Plant')
        cy.get('.data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'Action')
     })

     it('CDSS Profile page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('.customer-sidebar__logo-img').should('be.visible')
        cy.get('.customer-sidebar__close').should('be.visible')
 
        cy.get('[href="/dashboard/cdss-profile"] > .customer-sidebar__item').and('be.have.text', 'CDSS Profile').click()
        cy.get('.customer-nav__title').and('be.have.text', 'CDSS Profile Page')
        cy.get('.header-button-cus--active').and('be.have.text', 'AUTHORIZED RECEIVERS')
        cy.get('.header-buttons > :nth-child(2)').and('be.have.text', 'MANAGE CDSS')
        cy.get('.header-buttons > :nth-child(3)').and('be.have.text', 'TERMS & CONDITIONS')
        
     })
})
