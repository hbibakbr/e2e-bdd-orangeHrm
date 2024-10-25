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
        return cy.get('//button[text()=" Add "]')
    }

    static verifyUsername () {
        return cy.xpath('(//div[@class= "oxd-table-cell oxd-padding-cell"])[2]').should('contain.text', 'dhinakaran')
    }

    static verifyUserRoleAdmin () {
        return cy.xpath('(//div[@class= "oxd-table-cell oxd-padding-cell"])[3]').should('contain.text', 'Admin')
    }

    static verifyEmployeeName () {
        return cy.xpath('(//div[@class= "oxd-table-cell oxd-padding-cell"])[4]').should('contain.text', 'Thanura Meegoda')
    }

    static verifyStatusEnabled () {
        return cy.xpath('(//div[@class= "oxd-table-cell oxd-padding-cell"])[5]').should('contain.text', 'Enabled')
    }
}

export default AdminViewSystemPage;