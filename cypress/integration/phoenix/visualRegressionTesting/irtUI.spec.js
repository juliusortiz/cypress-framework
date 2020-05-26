describe('IRT visual regression testing', () => {

    before(() => {
        cy.navigate()
        cy.login({ username: 'jayirt', password: 'P@ssw0rd123'  })
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

    // it('In-Transit Orders page', function () {
       
    //     cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(4').and('be.have.text', 'Vehicle Code')
    //     cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(3').and('be.have.text', 'Ship To')
    //     cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(5').and('be.have.text', 'Plate Number')
    //     cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(6').and('be.have.text', 'DR No.')
    //     cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(7').and('be.have.text', 'Address')
    //     cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(2').and('be.have.text', 'Sold To')
    //     cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(1').and('be.have.text', 'Account Name')
    // })



})