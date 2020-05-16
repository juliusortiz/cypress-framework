describe('Invoicing clerk visual regression testing', () => {
    it('Login page', function () {
        cy.navigate()
    })

    it('Dashboard page', function () {
        cy.login({ username: 'jayinvoicing', password: 'P@ssw0rd123' })
        cy.headerElements()
        cy.notification()
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/home"] > .sidebar-menu-item').should('be.visible').and('contain', 'Dashboard').click()
        cy.get('.data-list-table__head > tr > :nth-child(1)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(2)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(3)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(4)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(5)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(6)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(7)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(8)').should('be.visible')

        cy.get(':nth-child(1) > :nth-child(8) > .action-button').should('be.visible').and('contain', 'View Details').click()
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(1)').should('be.visible')
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(2)').should('be.visible')
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(3)').should('be.visible')
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(4)').should('be.visible')
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(5)').should('be.visible')
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(6)').should('be.visible')

        cy.get('.modal-header > .close > span').should('be.visible').click()
    })

    it('Scheduling page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/scheduling-system"] > .sidebar-menu-item').should('be.visible').and('contain', 'Scheduling').click()

        //cy.get('.menu-label-breed').should('be.visible').and('contain', 'Scheduling')
        cy.get(':nth-child(1) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get('.section-inputs > :nth-child(2) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get(':nth-child(3) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get('.section-inputs > :nth-child(4) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get('.header-row--secondary > :nth-child(1)').should('be.visible')
        cy.get('.header-row--secondary > :nth-child(2)').should('be.visible')
        cy.get('.header-row--secondary > :nth-child(3)').should('be.visible')
        cy.get('.header-row--secondary > :nth-child(4)').should('be.visible')
        cy.get('.header-row--secondary > :nth-child(5)').should('be.visible')
        cy.get('[colspan="0"]').should('be.visible')
        cy.get('.btn-small').should('be.visible').and('contain', 'Add Outbound Number')
        cy.get('.btn-small').should('be.visible').and('contain', 'Add Outbound Number')
        cy.get('.btn-tertiary-green').should('be.visible').and('contain', 'Submit')
    })

    it('History page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/invoicing-history"] > .sidebar-menu-item').should('be.visible').and('contain', 'History').click()

        cy.get('.data-list-table__head > tr > :nth-child(1)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(2)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(3)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(4)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(5)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(6)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(7)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(8)').should('be.visible')

        cy.get(':nth-child(1) > :nth-child(8) > #view_details').should('be.visible').and('contain', 'View Details').click()
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(1)').should('be.visible')
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(2)').should('be.visible')
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(3)').should('be.visible')
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(4)').should('be.visible')
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(5)').should('be.visible')
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(6)').should('be.visible')
        cy.get('.overflow-auto > .data-list-table > .data-list-table__head > tr > :nth-child(7)').should('be.visible')
        //cy.get('.modal-footer__action').should('be.visible').and('contain', 'CLOSE')

        cy.get('.close > span').should('be.visible').click()
    })

    it('Settings page', function () {
        cy.settings()
    })

    it('Logout', function () {
        cy.logout()
    })
})