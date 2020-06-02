describe('Customer visual regression testing', () => {

    before(() => {
        cy.navigate()
        cy.login({ username: 'jaydispatcher', password: 'P@ssw0rd123'  })
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
     
    })


})