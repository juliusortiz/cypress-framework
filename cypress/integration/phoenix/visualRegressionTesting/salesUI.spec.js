describe('Sales visual regression testing', () => {

    before(() => {
        cy.navigate()
        cy.login({ username: 'jaysales', password: 'P@ssw0rd123'  })
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
        cy.get('.sales-input-container').should('be.visible')
        cy.get('.container__dateSelect--active').should('be.visble')

        cy.get('.data-list-table__head > tr > :nth-child(1)').and('be.have.text', 'SO#')
        cy.get('.data-list-table__head > tr > :nth-child(2)').and('be.have.text', 'Status')
        cy.get('.data-list-table__head > tr > :nth-child(3)').and('be.have.text', 'Delivery Date')
        cy.get('.data-list-table__head > tr > :nth-child(4)').and('be.have.text', 'Delivery Time')
        cy.get('.data-list-table__head > tr > :nth-child(5)').and('be.have.text', 'Product')
        cy.get('.data-list-table__head > tr > :nth-child(6)').and('be.have.text', 'Action')
    })
    
})