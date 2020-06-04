describe('Admin visual regression testing', () => {

    before(() => {
        cy.navigate()
        cy.login({ username: 'pp.sa_1', password: 'P@ssw0rd123'  })
        cy.headerElements()
    })

    after(() => {
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

        cy.get('.mainblock-chart__title').and('be.have.text', 'Delivery Status')
        cy.get('.mainblock__chart > .data-list-table > .data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Hauler Name')
        cy.get('.mainblock__chart > .data-list-table > .data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Vehicle Code')
        cy.get('.mainblock__chart > .data-list-table > .data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Plate Number')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Driver Name')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Order Date')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Issuing Plant')
        cy.get('.main-block-menu-label').and('be.have.text', 'View All')

        cy.get('.home-sideblock-title').and('be.have.text', 'Users')
        cy.get('.menu-label').and('be.have.text', 'View All')
        cy.get('.home-sideblock > .data-list-table > .data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Name')
        cy.get('.home-sideblock > .data-list-table > .data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'E-mail')
        cy.get('.home-sideblock > .data-list-table > .data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Role')
    })

    it('Manage Users page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/users"] > .sidebar-menu-item').and('be.have.text', 'Manage Users').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Manage Users')
        cy.get('.create-button').and('be.have.text', 'Create User')

        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'First Name')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Last Name')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Username')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'E-mail')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Role')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Actions')

        cy.get(':nth-child(1) > :nth-child(6) > div > #edit_user').and('be.have.text', 'Edit')
        cy.get(':nth-child(1) > :nth-child(6) > div > #delete_user').and('be.have.text', 'Delete')
    })

    it('Statuses page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/statuses"] > .sidebar-menu-item').and('be.have.text', 'Statuses').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Statuses')
        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Status')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Code')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Order')
    })

    it('My Accounts page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/customers"] > .sidebar-menu-item').and('be.have.text', 'My Accounts').click()

        cy.get('.menu-label-breed').and('be.have.text', 'My Accounts')
        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'E-mail')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'First Name')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Last Name')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Sold To')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Sold To Address')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', "Ship To's")

        // cy.get(':nth-child(1) > :nth-child(6) > .table-button-rectangle').and('be.have.text', 'View').click()
        // cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', '#')
        // cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Ship To')
        // cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Ship To Name')
        // cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Ship To Address')
        // cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Location')
        // cy.get(':nth-child(1) > :nth-child(5) > .data-list__receipt-location-button').should('be.visible').click()
    })

    it('Delivery Status page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/manage-delivery-receipts"] > .sidebar-menu-item').and('be.have.text', 'Delivery Status').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Delivery Status')
        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Hauler')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Vehicle Code')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Plate Number')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Driver Name')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Order Date')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Issuing Plant')
        cy.get('.data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'Delivery Instructions')
        cy.get('.data-list-table__head > tr > :nth-child(8)').and('be.have.text', 'Products')
        cy.get('.data-list-table__head > tr > :nth-child(9)').and('be.have.text', 'Current Status')
        cy.get('.data-list-table__head > tr > :nth-child(10)').and('be.have.text', 'Distance')
        cy.get('.data-list-table__head > tr > :nth-child(11)').and('be.have.text', 'Location')
        cy.get('.data-list-table__head > tr > :nth-child(12)').and('be.have.text', 'Delivery Receipt')

        // cy.get(':nth-child(1) > :nth-child(7) > .table-button-rectangle').and('be.have.text', 'View').click()
        // cy.get('.modal-title').and('be.have.text', 'Delivery Instructions')
        // cy.get(':nth-child(3) > .font-weight-bold').and('be.have.text', 'Delivery Date: ')
        // cy.get('.pb-4 > .font-weight-bold').and('be.have.text', 'Delivery Time: ')
        // cy.get('.table-modal__container > :nth-child(5) > .d-flex').should('be.visible')
        // cy.get('.close > span').should('be.visible').click();

        // cy.get(':nth-child(1) > :nth-child(8) > .table-button-rectangle').and('be.have.text', 'View').click()
        // cy.get('.modal-title').and('be.have.text', 'Products')
        // cy.get('.w-50rem > .data-list-table > .data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Material')
        // cy.get('.w-50rem > .data-list-table > .data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Quantity')
        // cy.get('.w-50rem > .data-list-table > .data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Unit')
        // cy.get('.w-50rem > .data-list-table > .data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Description')
        // cy.get('.modal-footer__action').and('be.have.text', 'Close').click()


        // cy.get(':nth-child(1) > :nth-child(9) > .table-button-rectangle').should('be.visible').click()
        // cy.get('.receipt-status__title').and('be.have.text', 'Status')
        // cy.get('.close > span').should('be.visible').click()
        // //cy.get('.modal-footer__action').should('be.visible').and('contain', 'CLOSE').click()

        // //cy.get(':nth-child(1) > :nth-child(11) > .data-list__receipt-location-button').should('be.visible').click()

        // cy.get(':nth-child(1) > :nth-child(12) > a > .table-button-round').and('be.have.text', 'View').click()
        // cy.get('.single-dr__titlle').and('be.have.text', 'Delivery Receipt')
        // cy.get('.single-dr__body > :nth-child(1) > :nth-child(1)').and('be.have.text', 'Delivery Receipt')
        // cy.get(':nth-child(1) > :nth-child(3) > tbody > :nth-child(1) > .single-dr-receipt__accessor').and('be.have.text', 'SOLD TO:')
        // cy.get(':nth-child(1) > :nth-child(3) > tbody > :nth-child(2) > .single-dr-receipt__accessor').and('be.have.text', 'DELIVERED TO:')
        // cy.get(':nth-child(1) > :nth-child(3) > tbody > :nth-child(3) > .single-dr-receipt__accessor').and('be.have.text', 'DR No.:')
        // cy.get(':nth-child(1) > :nth-child(3) > tbody > :nth-child(4) > .single-dr-receipt__accessor').and('be.have.text', 'Document Date:')
        // cy.get(':nth-child(1) > :nth-child(3) > tbody > :nth-child(5) > .single-dr-receipt__accessor').and('be.have.text', 'Customer No.:')
        // cy.get(':nth-child(6) > .single-dr-receipt__accessor').and('be.have.text', 'Ref. PO No.:')
        // cy.get(':nth-child(7) > .single-dr-receipt__accessor').and('be.have.text', 'Ref. SO No.:')
        // cy.get(':nth-child(8) > .single-dr-receipt__accessor').and('be.have.text', 'Issuing Plant:')

        // cy.get(':nth-child(1) > .single-dr-receipt__shipping-title').and('be.have.text', 'Shipping Details')
        // cy.get(':nth-child(7) > tbody > :nth-child(1) > .single-dr-receipt__accessor').and('be.have.text', 'Hauler:')
        // cy.get(':nth-child(7) > tbody > :nth-child(2) > .single-dr-receipt__accessor').and('be.have.text', 'Driver:')
        // cy.get(':nth-child(7) > tbody > :nth-child(3) > .single-dr-receipt__accessor').and('be.have.text', 'Plate No.:')
        // cy.get(':nth-child(7) > tbody > :nth-child(4) > .single-dr-receipt__accessor').and('be.have.text', 'Seal Details:')

        // cy.get('[styles="[object Object]"] > .single-dr-receipt__title').and('be.have.text', 'Product Details')
        // cy.get('[styles="[object Object]"] > .single-dr-receipt__table > tbody > :nth-child(1) > .single-dr-receipt__accessor').and('be.have.text', 'Material:')
        // cy.get('[styles="[object Object]"] > .single-dr-receipt__table > tbody > :nth-child(2) > .single-dr-receipt__accessor').and('be.have.text', 'Quantity:')
        // cy.get('[styles="[object Object]"] > .single-dr-receipt__table > tbody > :nth-child(3) > .single-dr-receipt__accessor').and('be.have.text', 'Description:')
        // cy.get('[styles="[object Object]"] > .single-dr-receipt__table > tbody > :nth-child(4) > .single-dr-receipt__accessor').and('be.have.text', 'Item:')
        // cy.get('[styles="[object Object]"] > .single-dr-receipt__table > tbody > :nth-child(5) > .single-dr-receipt__accessor').and('be.have.text', 'Unit:')
        // cy.get('.delivery-receipt-header__backbutton').should('be.visible').click()

    })

    it('Manage Reasons page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/manage-reasons"] > .sidebar-menu-item').and('be.have.text', 'Manage Reasons').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Manage Reasons').click()
        cy.get(':nth-child(3) > :nth-child(1) > .btn').should('be.visible').and('contain', 'Add New Reason')
        cy.get('[style="color: rgb(102, 196, 67);"]').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > div > #edit_reason').should('be.visible').and('contain', 'Edit')
        cy.get(':nth-child(1) > :nth-child(2) > div > #delete_reason').should('be.visible').and('contain', 'Delete')
    })
    
})
