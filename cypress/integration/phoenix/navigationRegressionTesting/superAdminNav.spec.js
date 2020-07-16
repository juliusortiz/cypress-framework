describe('Admin navigation regression testing:', () => {

    before(() => {
        cy.navigate()
        cy.login({ username: 'pp.sa_1', password: 'P@ssw0rd123' })
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

        cy.get('.mainblock-chart__title').and('be.have.text', 'Statuses Details')
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

        //cy.get(':nth-child(1) > :nth-child(6) > div > #edit_user').and('be.have.text', 'Edit')
        //cy.get(':nth-child(1) > :nth-child(6) > div > #delete_user').and('be.have.text', 'Delete')
    })

    it('Customers List', function () {
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
    })

    it('Delivery Status page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/manage-delivery-receipts"] > .sidebar-menu-item').and('be.have.text', 'Delivery Status').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Delivery Status')
        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Sold to Code')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Sold to Name')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Ship to Code')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Ship to Name')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'SO Number')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'SO Date')
        cy.get('.data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'Order Details')
        cy.get('.data-list-table__head > tr > :nth-child(8)').and('be.have.text', 'Issuing Plant')
        cy.get('.data-list-table__head > tr > :nth-child(9)').and('be.have.text', 'Delivery Instructions')
        cy.get('.data-list-table__head > tr > :nth-child(10)').and('be.have.text', 'Status')
        cy.get('.data-list-table__head > tr > :nth-child(11)').and('be.have.text', 'Location')
        cy.get('.data-list-table__head > tr > :nth-child(12)').and('be.have.text', 'Delivery Receipt')
    })

    it('Manage Reasons page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/manage-reasons"] > .sidebar-menu-item').and('be.have.text', 'Manage Reasons').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Manage Reasons')
        cy.get(':nth-child(3) > :nth-child(1) > .btn').should('be.visible').and('contain', 'Add New Reason')
        cy.get('[style="color: rgb(102, 196, 67);"]').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(2) > div > #edit_reason').should('be.visible').and('contain', 'Edit')
        cy.get(':nth-child(1) > :nth-child(2) > div > #delete_reason').should('be.visible').and('contain', 'Delete')
    })

    it('Image Submitted page', function () {
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/image-submitted"] > .sidebar-menu-item').and('be.have.text', 'Image Submitted').click()

        cy.get('.menu-label-breed').and('be.have.text', 'Image Submitted')
        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Sold To Name')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Ship To Name')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'DR Number')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Last Update')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Image Type')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Image File')
    })
})

