require('cypress-xpath');

class DashboardPage {

    static verifyPageUrl () {
        cy.url().should('include', '/dashboard/index');
    }

    static verifyDashboardTitle () {
        cy.xpath('//h6[text()="Dashboard"]').should('have.text', 'Dashboard');
    }
}

export default DashboardPage;