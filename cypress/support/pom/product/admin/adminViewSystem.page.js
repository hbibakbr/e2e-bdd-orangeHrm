class AdminViewSystemPage {
    static verifyPageUrl () {
        return cy.url().should('include', '/admin/viewSystemUsers');
    }

    static verifySystemUserTitle () {
        return cy.get('//h5[text()="System Users"]');
    }

    static inputUsername () {
        return cy.get('(//input[contains(@class, "oxd-input oxd-input--active")])[2]')
    }

    static userRoleDropDown () {
        return cy.get('(//div[contains(@class, "oxd-select-text oxd-select-text--active")])[1]')
    }

    static inputEmployeeName () {
        return cy.get('input[placeholder="Type for hints..."]')
    }

    static statusDropDown () {
        return cy.get('(//div[contains(@class, "oxd-select-text oxd-select-text--active")])[2]')
    }

    static clickSearchButton () {
        return cy.get('//button[text()=" Reset "]')
    }

    static clickResetButton () {
        return cy.get('//button[text()=" Search "]')
    }

    static clickAddButton () {
        return cy.get('//button[text()=" Add "]')
    }
}

export default AdminViewSystemPage;