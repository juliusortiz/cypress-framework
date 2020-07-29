describe('Sales navigation regression testing:', () => {

    before(() => {
        cy.navigatePDS()
        cy.login({ username: 'pp.sl_1', password: 'P@ssw0rd123' })
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
        cy.get('.menu-label-breed').and('be.have.text', 'Dashboard')
        cy.get('.container__select--active').should('be.visible')
        cy.get('.float-right').should('be.visible')
        cy.get('.container__dateSelect--active').should('be.visible')

        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'SO #')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Sold To Code')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Sold To Name')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Ship To Code')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Ship To Name')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Ship To Address')
        cy.get('.data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'Delivery Date')
        cy.get('.data-list-table__head > tr > :nth-child(8)').and('be.have.text', 'Status')
        cy.get('.data-list-table__head > tr > :nth-child(9)').and('be.have.text', 'Product')
        cy.get('.data-list-table__head > tr > :nth-child(10)').and('be.have.text', 'Action')
    })

    it('Delivery Status page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/delivery-status"] > .sidebar-menu-item').and('be.have.text', 'Delivery Status').click()
    })

    it('History page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/history"] > .sidebar-menu-item').and('be.have.text', 'History').click()

        cy.get('.container__select--active').should('be.visible')
        cy.get('.float-right').should('be.visible')

        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Order #')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Sold to Name')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Ship to Name')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Status')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Delivery Date')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Action')
    })

    it('Customers list page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/customers"] > .sidebar-menu-item').and('be.have.text', 'Customer List').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Customer List')
        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Sold To Code')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Sold To Name')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Sold To Address')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'First Name')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Last Name')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Username')
        cy.get('.data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'E-mail')
        cy.get('.data-list-table__head > tr > :nth-child(8)').and('be.have.text', "Ship To")

        // cy.get(':nth-child(1) > :nth-child(6) > .table-button-rectangle').and('be.have.text', 'View').click()
        // cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', '#')
        // cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Ship To')
        // cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Ship To Name')
        // cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Ship To Address')
        // cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Location')
        // cy.get(':nth-child(1) > :nth-child(5) > .data-list__receipt-location-button').should('be.visible').click()
    })
})
