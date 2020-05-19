describe('IRT visual regression testing', () => {
    it('Login page', function () {
        cy.navigate()
    })

    it('Dashboard page', function () {
        cy.login({ username: 'jayirt', password: 'P@ssw0rd123' })
        cy.headerElements()
        cy.notification()
        cy.get('.navbar__sidebar-toggle-icon').should('be.visible').click()
        cy.get('[href="/dashboard/home"] > .sidebar-menu-item').should('be.visible').and('contain', 'Dashboard').click()
        cy.get(':nth-child(1) > .menu-label-breed').should('be.visible').and('contain', 'In-Transit Orders')
        cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(4').and('be.have.text', 'Vehicle Code')
        cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(3').and('be.have.text', 'Ship To')
        cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(5').and('be.have.text', 'Plate Number')
        cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(6').and('be.have.text', 'DR No.')
        cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(7').and('be.have.text', 'Address')
        cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(2').and('be.have.text', 'Sold To')
        cy.get('.pb-5 > .data-list-table > .data-list-table__head > tr > :nth-child(1').and('be.have.text', 'Account Name')
    })

    it('Settings page', function () {
        cy.settings()
    })
    
    it('Logout', function () {
        cy.logout()
    })
    
})