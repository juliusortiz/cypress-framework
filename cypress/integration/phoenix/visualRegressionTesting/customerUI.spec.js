describe('Customer visual regression testing:', () => {

    before(() => {
        cy.navigate()
        cy.login({ username: '0001002009', password: 'OLLP@ssw0rd11' })
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
        cy.wait(1000)
        cy.get('.customer-search').should('be.visible')
        cy.get('.delivery-indicator').should('be.visible')
        cy.get('.delivery-indicator__action').then(($statusButton) => {
            if ($statusButton.text().includes('View Details')) {
                cy.get('.delivery-indicator__action').and('be.have.text', 'View Details ')
            } else {
                cy.get('.delivery-indicator__action').and('be.have.text', 'Refresh ')
            }
        })
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

        cy.get('.cdss_logo').should('be.visible')
        cy.get('h3').and('be.have.text', 'Phoenix Petroleum Philippines Inc')
        cy.get('h2').and * ('be.have.text', 'Authorized Receivers')
        cy.get('.customer-details-table > :nth-child(1) > :nth-child(1)').and('be.have.text', 'CUSTOMER\'S BUSINESS NAME:')
        cy.get('.customer-details-table > :nth-child(2) > :nth-child(1)').and('be.have.text', 'BUSINESS ADDRESS: ')
        cy.get('.customer-details-table > :nth-child(3) > :nth-child(1)').and('be.have.text', 'SOLD TO NUMBER: ')
        cy.get('h4').and('be.have.text', 'Authorized Receivers:')
        cy.get('.home-mainblock > p').and('be.have.text', 'The following persons whose names and signatures appear below are authorized to receive products.Click here to view the terms and conditions of this form.')
        cy.get('.table-responsive > .data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'First Name')
        cy.get('.table-responsive > .data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Last Name')
        cy.get('.table-responsive > .data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Ship To')
        cy.get('.table-responsive > .data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Phone Number')
        cy.get('.table-responsive > .data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Signature')

        cy.get('.header-buttons > :nth-child(2)').and('be.have.text', 'MANAGE CDSS').click({ force: true })
        cy.get('.cdss_logo').should('be.visible')
        cy.get('h3').and('be.have.text', 'Phoenix Petroleum Philippines Inc')
        cy.get('h2').and * ('be.have.text', 'Customer\'s Delivery & Specimen Signature Form')
        cy.get('.customer-details-table > :nth-child(1) > :nth-child(1)').and('be.have.text', 'CUSTOMER\'S BUSINESS NAME:')
        cy.get('.customer-details-table > :nth-child(2) > :nth-child(1)').and('be.have.text', 'BUSINESS ADDRESS: ')
        cy.get('.customer-details-table > :nth-child(3) > :nth-child(1)').and('be.have.text', 'SOLD TO NUMBER: ')
        cy.get('[cellpadding="0"] > tr > .cdss_title_td').and('be.have.text', 'SHIP TO ADDRESS:')
        cy.get('.ar-heading').and('be.have.text', 'Authorized Receivers:')
        //cy.get('.CDSSDescription > p').and('be.have.text', 'The following persons whose names and signature appear below are authorized to receive products. Click here to view the terms and conditions of this form')
        cy.get(':nth-child(6) > .data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'First Name')
        cy.get(':nth-child(6) > .data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Last name')
        cy.get(':nth-child(6) > .data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Phone Number')
        cy.get(':nth-child(6) > .data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Signature')
        //cy.get(':nth-child(7) > .btn-secondary').and('be.have.text', 'ADD A NEW RECORD')

        // cy.get('.home-mainblock > :nth-child(8)').and('be.have.text', 'Authorized By')
        // cy.get(':nth-child(9) > .data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'First Name')
        // cy.get(':nth-child(9) > .data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Last Name')
        // cy.get(':nth-child(9) > .data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Phone Number')
        // cy.get(':nth-child(9) > .data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Signature')
        // cy.get(':nth-child(10) > .btn-secondary').and('be.have.text', 'SUBMIT REQUEST')

        // cy.get('.header-buttons > :nth-child(3)').and('be.have.text', 'TERMS & CONDITIONS').click({ force: true })
        // cy.get('.cdss_logo').should('be.visible')
        // cy.get('h3').and('be.have.text', 'Phoenix Petroleum Philippines Inc') 
        // cy.get('h2').and*('be.have.text', 'Terms and Conditions')
        // cy.get('.customer-details-table > :nth-child(1) > :nth-child(1)').and('be.have.text', 'CUSTOMER\'S BUSINESS NAME:')
        // cy.get('.customer-details-table > :nth-child(2) > :nth-child(1)').and('be.have.text', 'BUSINESS ADDRESS: ')
        // cy.get('.customer-details-table > :nth-child(3) > :nth-child(1)').and('be.have.text', 'SOLD TO NUMBER: ')
        // cy.get('.menu-label-breed').and('be.have.text', 'Terms and Conditions')
        // cy.get('div.home-mainblock > .home--cus-home > .home-container > .home-mainblock > :nth-child(1)').and('be.have.text', 'This Customer’s Delivery & Specimen Signature form is being initiated for our mutual protection and benefit subject to the terms and conditions below in addition to existing sales and other related agreements, if any as herein modified.')
        // cy.get('ol > :nth-child(1)').and('be.have.text', 'Products will be loaded at logistics and unloaded at customer’s premises only if customer provided the names of the authorized receivers together with their contact numbers and electronic signatures as appeared in this form.')
        // cy.get('ol > :nth-child(2)').and('be.have.text', 'Phoenix shall be free from any liability for refund or deliveries due to customer’s failure to observe aforementioned requirement. Customer will be responsible for the payment, according to the terms of delivery, of all purchases made as evidenced by the signatures of any of his authorized signatories in the invoices.')
        // cy.get('ol > :nth-child(3)').and('be.have.text', 'Returned load delivery charges shall be for the account of the customer if the latter fails to produced the Customer’s Delivery & Specimen Signature and/or if none of the authorized signatories are present and the Sundry Invoices issued for such charges shall be due and payable immediately.')
        // cy.get('ol > :nth-child(3)').and('be.have.text', 'Phoenix Petroleum Philippines Inc. will be notified if there are revisions in this form. Any revisions will be reviewed and updated by Phoenix Petroleum Philippines Inc.')
    })
})

