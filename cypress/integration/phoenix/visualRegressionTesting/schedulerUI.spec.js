describe('Scheduler visual regression testing', () => {

    before(() => {
        cy.navigate()
        cy.login({ username: 'jayscheduler', password: 'P@ssw0rd123'  })
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

        cy.get(':nth-child(1) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get('.section-inputs > :nth-child(2) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get(':nth-child(3) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get('.section-inputs > :nth-child(4) > .css-bg1rzq-control > .css-1hwfws3').should('be.visible')
        cy.get('.header-row--secondary > :nth-child(1)').and('be.have.text', 'Trip Number')
        cy.get('.header-row--secondary > :nth-child(2)').and('be.have.text', 'Outbound Delivery Number')
        cy.get('.header-row--secondary > :nth-child(3)').and('be.have.text', 'Product')
        cy.get('.header-row--secondary > :nth-child(4)').and('be.have.text', 'Planned Quantity')
        cy.get('.header-row--secondary > :nth-child(5)').and('be.have.text', 'Unscheduled Quantity')
        cy.get('[colspan="0"]').and('be.have.text', 'Compartmentation Guide')
        cy.get('.btn-small').and('be.have.text', 'Add Outbound Number')
        cy.get('.btn-small').and('be.have.text', 'Add Outbound Number')
        cy.get('.btn-tertiary-green').should('be.visible').and('be.have.text', 'Submit')
    })

    it('Current Deliveries page', function () {
        cy.get('.navbar__sidebar-toggle-icon').click()
        cy.get('[href="/dashboard/dispatcherDashboard"] > .sidebar-menu-item').and('be.have.text', 'Current Deliveries').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Current Deliveries')
        cy.get('[style="color: rgb(102, 196, 67);"]').should('be.visible')
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

        cy.get(':nth-child(1) > :nth-child(8) > .btn').should('be.visible').click()
        cy.get('.delivery-tracker__status').should('be.visible')
        cy.get('.delivery-tracker__name').should('be.visible')
        cy.get(':nth-child(1) > .delivery-tracker__column--name').should('be.visible')
        cy.get(':nth-child(2) > .delivery-tracker__column--name').should('be.visible')
        cy.get(':nth-child(3) > .delivery-tracker__column--name').should('be.visible')
        cy.get(':nth-child(4) > .delivery-tracker__column--name').should('be.visible')
        cy.get(':nth-child(5) > .delivery-tracker__column--name').should('be.visible')
        cy.get(':nth-child(6) > .delivery-tracker__column--name').should('be.visible')
        cy.get(':nth-child(7) > .delivery-tracker__column--name').should('be.visible')
        cy.get(':nth-child(8) > .delivery-tracker__column--name').should('be.visible')
        cy.get(':nth-child(9) > .delivery-tracker__column--name').should('be.visible')
        cy.get(':nth-child(10) > .delivery-tracker__column--name').should('be.visible')
        cy.get('.delivery-tracker__location-not-available').should('be.visible')
        cy.get('.btn').should('be.visible').click()
    })

    // it('Deliveries History page', function () {
    //     cy.get('.navbar__sidebar-toggle-icon').click()
    //     cy.get('[href="/dashboard/deliveries-history"] > .sidebar-menu-item').should('be.visible').and('contain', 'Deliveries History').click()

    //     cy.get('.menu-label-breed').should('be.visible').and('contain', 'Deliveries History')
    //     cy.get('.history-search__container').should('be.visible')

    //     cy.get(':nth-child(1) > .history-card__container > .history-card__header > .icomoon').should('be.visible')
    //     cy.get(':nth-child(1) > .history-card__container > .history-card__header > .history-card__header-text').should('be.visible')
    //     cy.get(':nth-child(1) > .history-card__container > .history-card__info > .history-card__info-table > .history-card__info-body > :nth-child(1) > .history-card__info-header').should('be.visible')
    //     cy.get(':nth-child(1) > .history-card__container > .history-card__info > .history-card__info-table > .history-card__info-body > :nth-child(2) > .history-card__info-header').should('be.visible')
    //     cy.get(':nth-child(1) > .history-card__container > .history-card__footer > .btn').should('be.visible').click()

    //     cy.get('.data-list-table__head > tr > :nth-child(1)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(2)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(3)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(4)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(5)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(6)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(7)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(8)').should('be.visible')

    //     cy.get('.btn > .fas').should('be.visible').click()
    // })

    // it('Problems Reported page', function () {
    //     cy.get('.navbar__sidebar-toggle-icon').click()
    //     cy.get('[href="/dashboard/problems-reported"] > .sidebar-menu-item').should('be.visible').and('contain', 'Problems Reported').click()

    //     cy.get('.data-list-table__head > tr > :nth-child(1)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(2)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(3)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(4)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(5)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(6)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(7)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(8)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(9)').should('be.visible')
    //     cy.get('.data-list-table__head > tr > :nth-child(10)').should('be.visible')
    // })

    // it('Reasons page', function () {
    //     cy.get('.navbar__sidebar-toggle-icon').click()
    //     cy.get('[href="/dashboard/manage-reasons-scheduler"] > .sidebar-menu-item').should('be.visible').and('contain', 'Reasons').click()

    //     cy.get('.menu-label-breed').should('be.visible').and('contain', 'Reasons')
    //     cy.get('.container__select--active').should('be.visible')
    // })
})