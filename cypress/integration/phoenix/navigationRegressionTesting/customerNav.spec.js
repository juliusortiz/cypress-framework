import GlobalObjects from '../../../pageObjects/phoenix/globalAttrib'
import CustomerPage from '../../../pageObjects/phoenix/customerPage'
import NotifObjects from '../../../pageObjects/phoenix/notificationPage'
import SettingsObjects from '../../../pageObjects/phoenix/settingsPage'


describe('Customer navigation regression testing:', () => {

    const globalObjects = new GlobalObjects()
    const customerObjects = new CustomerPage()
    const notifObjects = new NotifObjects()
    const settingsObjects = new SettingsObjects()

    beforeEach(() => {
        cy.log('Start test case execution . . .')
    })

    afterEach(() => {
        cy.log('End of test case execution . . . ')
    })

    it('Login customer', function () {
        cy.navigatePDS()
        globalObjects.businesstype().select('Phoenix Petroleum')
            .should('have.value', 'PP')
        globalObjects.username().type('0001002022')
            .should('have.value', '0001002022')
        globalObjects.password().type('P@ssw0rd123')
            .should('have.value', 'P@ssw0rd123')
        globalObjects.login().click()
    })

    it('Dashboard page', function () {
        cy.wait(1000)
        customerObjects.navTitle()
            .and('be.have.text', 'Dashboard')

        customerObjects.searchField()
            .should('be.visible')
        customerObjects.currDelContainer()
            .should('be.visible')

        customerObjects.currDelButton().then(($statusButton) => {
            if ($statusButton.text().includes('View Details')) {
                customerObjects.currDelButton()
                    .and('be.have.text', 'View Details ')
            } else {
                customerObjects.currDelButton()
                    .and('be.have.text', 'Refresh ')
            }
        })
        customerObjects.incomingContainer()
            .should('be.visible')
    })


    it('Delivery Status page', function () {
        globalObjects.menuButton().click()
        customerObjects.customerLogo()
            .should('be.visible')
        customerObjects.customerClose()
            .should('be.visible')

        customerObjects.delStatusCustomer()
            .and('be.have.text', 'Delivery Status').click()
        customerObjects.navTitle()
            .and('be.have.text', 'Delivery Status')
    })

    it('History page', function () {
        globalObjects.menuButton().click()

        customerObjects.historyCustomer()
            .and('be.have.text', 'History').click()
        customerObjects.navTitle()
            .and('be.have.text', 'History')

        customerObjects.historyFilter()
            .should('be.visible')
        customerObjects.historyfield()
            .should('be.visible')
        customerObjects.historyTimeFrame()
            .should('be.visible')

        cy.get('thead>tr').find('th').eq(0).contains('DR No.')
        cy.get('thead>tr').find('th').eq(1).contains('Delivery Date')
        cy.get('thead>tr').find('th').eq(2).contains('Driver\'s Name')
        cy.get('thead>tr').find('th').eq(3).contains('Vehicle Code')
        cy.get('thead>tr').find('th').eq(4).contains('Plate Number')
        cy.get('thead>tr').find('th').eq(5).contains('Issuing Plant')
        cy.get('thead>tr').find('th').eq(6).contains('Action')
    })

    it('CDSS Profile page', function () {
        globalObjects.menuButton().click()

        customerObjects.cdssProfile()
            .and('be.have.text', 'CDSS Profile').click()
        customerObjects.navTitle()
            .and('be.have.text', 'CDSS Profile Page')
        customerObjects.cdssAuthReceiverTab()
            .and('be.have.text', 'AUTHORIZED RECEIVERS')

        customerObjects.cdssLogo()
            .should('be.visible')
        customerObjects.cdssH3()
            .and('be.have.text', 'Phoenix Petroleum Philippines Inc')
        customerObjects.cdssH2Form()
            .and('be.have.text', 'Authorized Receivers')
        customerObjects.custBusinessName()
            .and('be.have.text', 'CUSTOMER\'S BUSINESS NAME:')
        customerObjects.custBusinessAddress()
            .and('be.have.text', 'BUSINESS ADDRESS: ')
        customerObjects.custSoldtoNum()
            .and('be.have.text', 'SOLD TO NUMBER: ')
        customerObjects.cdssH4()
            .and('be.have.text', 'Authorized Receivers:')
        customerObjects.cdssParagraph()
            .and('be.have.text', 'The following persons whose names and signatures appear below are authorized to receive products.Click here to view the terms and conditions of this form.')

        cy.get('thead>tr').find('th').eq(0).contains('First Name')
        cy.get('thead>tr').find('th').eq(1).contains('Last Name')
        cy.get('thead>tr').find('th').eq(2).contains('Ship To')
        cy.get('thead>tr').find('th').eq(3).contains('Phone Number')
        cy.get('thead>tr').find('th').eq(4).contains('Signature')

        customerObjects.manageCDSSTAB()
            .and('be.have.text', 'MANAGE CDSS').click({ force: true })
        customerObjects.cdssLogo()
            .should('be.visible')
        customerObjects.cdssH3()
            .and('be.have.text', 'Phoenix Petroleum Philippines Inc')
        customerObjects.cdssH2Signature()
            .and('be.have.text', 'Customer\'s Delivery & Specimen Signature Form')
        customerObjects.custBusinessName()
            .and('be.have.text', 'CUSTOMER\'S BUSINESS NAME:')
        customerObjects.custBusinessAddress()
            .and('be.have.text', 'BUSINESS ADDRESS: ')
        customerObjects.custSoldtoNum()
            .and('be.have.text', 'SOLD TO NUMBER: ')

        customerObjects.shipToAddress()
            .and('be.have.text', 'SHIP TO ADDRESS:')
        customerObjects.cdssH4()
            .and('be.have.text', 'Authorized Receivers:')
        customerObjects.cdssDescription()
            .should('be.visible')
        //cy.get('.CDSSDescription > p').and('be.have.text', 'The following persons whose names and signature appear below are authorized to receive products. Click here to view the terms and conditions of this form')
        cy.get('thead>tr').find('th').eq(0).contains('First Name')
        cy.get('thead>tr').find('th').eq(1).contains('Last name')
        cy.get('thead>tr').find('th').eq(2).contains('Phone Number')
        cy.get('thead>tr').find('th').eq(3).contains('Signature')
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

    it('Notification page', function () {
        notifObjects.notifBell().click()
        customerObjects.navTitle()
            .and('be.have.text', 'Notification')
        notifObjects.refreshButton()
    })

    it('Settings page', function () {
        globalObjects.profileDropdown().click()
        globalObjects.settingsButton().click()

        settingsObjects.usernameField().type('jdelacruz')
            .should('have.value', 'jdelacruz')
        settingsObjects.emailField().type('juandelacruz2020@mailinator.com')
            .should('have.value', 'juandelacruz2020@mailinator.com')
        settingsObjects.passwordField().type('P@ssw0rd123')
            .should('have.value', 'P@ssw0rd123')
        settingsObjects.contactNumber().type('09356285322')
            .should('have.value', '09356285322')
        settingsObjects.saveButton()

        settingsObjects.sendFeedbackTab().click()
        settingsObjects.textArea().type('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
            .should('have.value', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
        settingsObjects.submitButton()

        settingsObjects.AboutthisAppTab().click()
        settingsObjects.AboutthisAppContainer()
    })

    it('Logout', function () {
        globalObjects.profileDropdown().click()
        customerObjects.customerPopUp()
            .should('be.visible')
        globalObjects.logoutButton().click()
    })
})

