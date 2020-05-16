describe('Dispatcher visual regression testing', () => {
    it('Login page', function () {
        cy.navigate()
    })

    it('Dashboard page', function () {
        cy.login({ username: 'jaydispatcher', password: 'P@ssw0rd123' })
        cy.headerElements()
        cy.notification()
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/home"] > .sidebar-menu-item').should('be.visible').and('contain', 'Dashboard').click()
        cy.get('.menu-label-breed').should('be.visible').and('contain', 'Dashboard')
        cy.get('.container__select--active').should('be.visible')
        cy.get('.sales-input-container').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(1)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(2)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(3)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(4)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(5)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(6)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(7)').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(7) > #del_instruction').should('be.visible').and('contain', 'View').click()
        cy.get('.modal-title').should('be.visible').and('contain', 'Delivery Instructions')
        cy.get(':nth-child(3) > .font-weight-bold').should('be.visible').and('contain', 'Delivery Date')
        cy.get('.pb-4 > .font-weight-bold').should('be.visible').and('contain', 'Delivery Time')
        cy.get(':nth-child(5) > .d-flex').should('be.visible')
        cy.get('.close > span').should('be.visible').click()
    })

    it('Delivery history page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/deliveries-history"] > .sidebar-menu-item').should('be.visible').and('contain', 'Deliveries History').click()

        cy.get('.menu-label-breed').should('be.visible').and('contain', 'Deliveries History')
        cy.get('.history-search__container').should('be.visible')

        cy.get(':nth-child(1) > .history-card__container > .history-card__header > .icomoon').should('be.visible')
        cy.get(':nth-child(1) > .history-card__container > .history-card__header > .history-card__header-text').should('be.visible')
        cy.get(':nth-child(1) > .history-card__container > .history-card__info > .history-card__info-table > .history-card__info-body > :nth-child(1) > .history-card__info-header').should('be.visible')
        cy.get(':nth-child(1) > .history-card__container > .history-card__info > .history-card__info-table > .history-card__info-body > :nth-child(2) > .history-card__info-header').should('be.visible')
        cy.get(':nth-child(1) > .history-card__container > .history-card__footer > .btn').should('be.visible').click()

        cy.get('.data-list-table__head > tr > :nth-child(1)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(2)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(3)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(4)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(5)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(6)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(7)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(8)').should('be.visible')

        cy.get('.btn > .fas').should('be.visible').click()
    })

    it('Problems Reported page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/problems-reported"] > .sidebar-menu-item').should('be.visible').and('contain', 'Problems Reported').click()

        cy.get('.data-list-table__head > tr > :nth-child(1)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(2)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(3)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(4)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(5)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(6)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(7)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(8)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(9)').should('be.visible')
        cy.get('.data-list-table__head > tr > :nth-child(10)').should('be.visible')
    })

    it('Reasons page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/manage-reasons-dispatcher"] > .sidebar-menu-item').should('be.visible').and('contain', 'Reasons').click()

        cy.get('.menu-label-breed').should('be.visible').and('contain', 'Reasons')
        cy.get('.container__select--active').should('be.visible')
    })

    it('Settings page', function () {
        cy.settings()
    })
    
    it('Logout', function () {
        cy.logout()
    })
})