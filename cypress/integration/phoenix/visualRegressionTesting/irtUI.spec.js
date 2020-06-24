var i = 0;
for (i = 1; i <= 2; i++) {
    describe('IRT visual regression testing: Execution count: ' + i, () => {

        before(() => {
            cy.navigate()
            cy.login({ username: 'pp.irt_1', password: 'P@ssw0rd123' })
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
            cy.get(':nth-child(1) > .menu-label-breed').and('be.have.text', 'In-Transit Orders')
            cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(1').and('be.have.text', 'Account Name')
            cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(2').and('be.have.text', 'Sold To')
            cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(3').and('be.have.text', 'Ship To')
            cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(4').and('be.have.text', 'Vehicle Code')
            cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(5').and('be.have.text', 'Plate Number')
            cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(6').and('be.have.text', 'DR No.')
            cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(7').and('be.have.text', 'Address')

            cy.get(':nth-child(3) > .menu-label-breed').and('be.have.text', 'Accepted Orders')
            cy.get(':nth-child(4) > .data-list-table > .data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Account Name')
            cy.get(':nth-child(4) > .data-list-table > .data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Sold To')
            cy.get(':nth-child(4) > .data-list-table > .data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Ship To')
            cy.get(':nth-child(4) > .data-list-table > .data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Vehicle Code')
            cy.get(':nth-child(4) > .data-list-table > .data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Plate Number')
            cy.get(':nth-child(4) > .data-list-table > .data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'DR No.')
            cy.get(':nth-child(4) > .data-list-table > .data-list-table__head > tr > :nth-child(7)').and('be.have.text', 'Address')
        })

        it('In-Transit Orders page', function () {
            cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
            cy.get('[href="/dashboard/in-transit-orders"] > .sidebar-menu-item').and('be.have.text', 'In-Transit Orders').click()

            cy.get('.menu-label-breed').and('be.have.text', 'In-Transit Orders')
            cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Sold To')
            cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Ship To')
            cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Vehicle Code')
            cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Plate Number')
            cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'DR No.')
            cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Address')
        })


        it('Accepted Orders page', function () {
            cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
            cy.get('[href="/dashboard/accepted-orders"] > .sidebar-menu-item').and('be.have.text', 'Accepted Orders').click()

            cy.get('.menu-label-breed').and('be.have.text', 'Accepted Orders')
            cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'Sold To')
            cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Ship To')
            cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Vehicle Code')
            cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Plate Number')
            cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'DR No.')
            cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Address')
        })
    })
}