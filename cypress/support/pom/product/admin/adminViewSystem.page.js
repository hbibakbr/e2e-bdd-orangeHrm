class AdminViewSystemPage {
    static verifyPageUrl () {
        return cy.url().should('include', '/admin/viewSystemUsers');
    }

    static verifySystemUserTitle () {
        return cy.xpath('//h5[text()="System Users"]');
    }

    static inputUsername () {
        return cy.xpath('(//input[contains(@class, "oxd-input oxd-input--active")])[2]').click();
    }

    static userRoleDropDown () {
        return cy.xpath('(//div[contains(@class, "oxd-select-text oxd-select-text--active")])[1]').click()
    }
    
    static selectAdmin () {
        return cy.xpath('//div[contains(@class, "oxd-select-dropdown")]/div[2]').should('be.visible').click()
    }
    
    static selectEss () {
        return cy.xpath('//div[contains(@class, "oxd-select-dropdown")]/div[3]').should('be.visible').click()
    }

    static inputEmployeeName () {
        return cy.get('input[placeholder="Type for hints..."]')
    }
    
    static clickSearchSuggestion () {
        return cy.xpath('//div[contains(@class, "oxd-autocomplete-option")]').should('be.visible').first().click()
    }

    static statusDropDown () {
        return cy.xpath('(//div[contains(@class, "oxd-select-text oxd-select-text--active")])[2]').click()
    }

    static selectEnabled () {
        return cy.xpath('(//div[contains(@class, "oxd-select-option")])[2]').should('be.visible').click()
    }

    static clickSearchButton () {
        return cy.xpath('//button[text()=" Search "]').scrollIntoView().click()
    }

    static clickResetButton () {
        return cy.get('//button[text()=" Reset "]')
    }

    static clickAddButton () {
        return cy.xpath('//button[text()=" Add "]').click()
    }

    static verifyUsername (username) {
        return cy.xpath('(//div[@class= "oxd-table-cell oxd-padding-cell"])[2]').should('contain.text', username)
    }

    static verifyUserRoleAdmin () {
        return cy.xpath('(//div[@class= "oxd-table-cell oxd-padding-cell"])[3]').should('contain.text', 'Admin')
    }

    static verifyEmployeeName (employeeName) {
        return cy.xpath('(//div[@class= "oxd-table-cell oxd-padding-cell"])[4]').should('contain.text', employeeName)
    }

    static verifyStatusEnabled () {
        return cy.xpath('(//div[@class= "oxd-table-cell oxd-padding-cell"])[5]').should('contain.text', 'Enabled')
    }

    static clickDeleteIcon () {
        return cy.xpath('(//button[contains(@class, "oxd-icon-button oxd-table-cell-action-space")]//i[contains(@class, "bi-trash")])[2]').click()
    }

    static verifyDeletePopUpTitle () {
        return cy.get('p[class="oxd-text oxd-text--p oxd-text--card-title"]').should('be.visible');
    }

    static clickDeleteButton () {
        return cy.get('button[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click()
    }

    static verifySuccessDeleteUser () {
        return cy.xpath('//p[text()="Successfully Deleted"]').should('be.visible');
    }

    static selectFirstUser () {
        return cy.xpath('(//div[@class= "oxd-table-cell oxd-padding-cell"])[7]').click();
    }

    static selectSecoundUser () {
        return cy.xpath('(//div[@class= "oxd-table-cell oxd-padding-cell"])[13]').click();
    }

    static clickDeleteSelectedButton () {
        return cy.xpath('//button[text()=" Delete Selected "]').click();
    }

}

export default AdminViewSystemPage;