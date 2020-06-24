for (var i = 1; i <= 2; i++) {
    describe('Invoicing clerk visual regression testing: Execution count: ' + i, () => {

        before(() => {
            cy.navigate()
            cy.login({ username: 'pp.inv_1', password: 'P@ssw0rd123' })
            cy.mockGeolocation();
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
            cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Date')
            cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Shipment No.')
            cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Driver')
            cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Vehicle')
            cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Shipping Condition')
            cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Customer Name')
            cy.get('.data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'Status')
            cy.get('.data-list-table__head > tr > :nth-child(8)').and('be.have.text', 'Action')
        })

        it('Scheduling page', function () {
            cy.get('.navbar__sidebar-toggle-icon').click()
            cy.get('[href="/dashboard/scheduling-system"] > .sidebar-menu-item').and('be.have.text', 'Scheduling').click()
            //cy.get('.menu-label-breed').and('be.have.text', 'Scheduling')
            cy.get('.menu-label-breed').and('be.have.text', 'Dashboard')
            cy.get(':nth-child(1) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
            cy.get('.section-inputs > :nth-child(2) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
            cy.get(':nth-child(3) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
            cy.get('.section-inputs > :nth-child(4) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
            cy.get('.header-row--secondary > :nth-child(1)').and('be.have.text', 'Action')
            cy.get('.header-row--secondary > :nth-child(2)').and('be.have.text', 'Trip Number')
            cy.get('.header-row--secondary > :nth-child(3)').and('be.have.text', 'Outbound Delivery Number')
            cy.get('.header-row--secondary > :nth-child(4)').and('be.have.text', 'Product')
            cy.get('.header-row--secondary > :nth-child(5)').and('be.have.text', 'Planned Quantity')
            cy.get('.header-row--secondary > :nth-child(6)').and('be.have.text', 'Unscheduled Quantity')
            cy.get('[colspan="0"]').and('be.have.text', 'Compartmentation Guide')
            cy.get('.btn-small').and('be.have.text', 'Add Outbound Number')
            cy.get('.btn-small').and('be.have.text', 'Add Outbound Number')
            cy.get('.btn-tertiary-green').should('be.visible').and('be.have.text', 'Submit')
        })

        it('History page', function () {
            cy.get('.navbar__sidebar-toggle-icon').click()
            cy.get('[href="/dashboard/invoicing-history"] > .sidebar-menu-item').and('be.have.text', 'History').click()

            cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Date')
            cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Shipment No.')
            cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Driver')
            cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Vehicle')
            cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Shipping Condition')
            cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Customer Name')
            cy.get('.data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'Status')
            cy.get('.data-list-table__head > tr > :nth-child(8)').and('be.have.text', 'Action')
        })
    })
}