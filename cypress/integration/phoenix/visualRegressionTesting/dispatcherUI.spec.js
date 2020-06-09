describe('Dispatcher visual regression testing', () => {

    before(() => {
        cy.navigate()
        cy.login({ username: 'pp.dp_1', password: 'P@ssw0rd123'  })
        cy.headerElements()
    })

    after(() => {
         cy.notification()
         cy.settings()
         cy.logout()
    })

    beforeEach(() => {
        cy.log('Start testing of page elements . . .')
    })

    afterEach(() => {
        cy.log('End of testing of page elements . . . ')
    })

    it('Dashboard page', function () {
        cy.get('.menu-label-breed').should('be.visible').and('contain', 'Dashboard')
        cy.get('.container__select--active').should('be.visible')
        cy.get('.sales-input-container').should('be.visible')

        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Trip Ticket No.')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Sold To')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'SO No.')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Order Approval Date')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'OB No.')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Driver')
        cy.get('.data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'Plate No.')
        cy.get('.data-list-table__head > tr > :nth-child(8)').and('be.have.text', 'Status')
        cy.get('.data-list-table__head > tr > :nth-child(9)').and('be.have.text', 'Delivery Instructions')
    })

    it('Delivery history page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/deliveries-history"] > .sidebar-menu-item').and('be.have.text', 'Deliveries History').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Deliveries History')
        cy.get('.history-search__container').should('be.visible')

    })

    it('Problems Reported page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/problems-reported"] > .sidebar-menu-item').and('be.have.text', 'Problems Reported').click()

        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Driver\'s Name')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Vehicle Code')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Plate Number')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Location')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Shipment No.')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Trip Ticket No.')
        cy.get('.data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'Outbound Delivery No.')
        cy.get('.data-list-table__head > tr > :nth-child(8)').and('be.have.text', 'Date and Time')
        cy.get('.data-list-table__head > tr > :nth-child(9)').and('be.have.text', 'Reason')
        cy.get('.data-list-table__head > tr > :nth-child(10)').and('be.have.text', 'Problem Description')
    })

    it('Reasons page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/manage-reasons-dispatcher"] > .sidebar-menu-item').and('be.have.text', 'Reasons').click()
        
        cy.get('.menu-label-breed').and('be.have.text', 'Reasons')
        cy.get('.container__select--active').should('be.visible')
    })

})
