class AdminSaveSystemPage {
    static verifyPageUrl () {
        return cy.url().should('include', '/admin/saveSystemUser');
    }

    static verifyAddUserTitle () {
        return cy.get('h6[class="oxd-text oxd-text--h6 orangehrm-main-title"]').should('have.text', 'Add User')
    }

    static clickUserRole () {
        return cy.xpath('(//div[contains(@class, "oxd-select-text oxd-select-text--active")])[1]').click()
    }

    static selectAdmin () {
        return cy.xpath('//div[contains(@class, "oxd-select-dropdown")]/div[2]').should('be.visible').click()
    }

    static clickStatus () {
        return cy.xpath('(//div[contains(@class, "oxd-select-text oxd-select-text--active")])[2]').click()
    }

    static selectEnabled () {
        return cy.xpath('(//div[contains(@class, "oxd-select-option")])[2]').should('be.visible').click()
    }

    static inputEmployeeName () {
        return cy.get('input[placeholder="Type for hints..."]')
    }

    static selectEmployeeName () {
        return cy.xpath('//div[contains(@class, "oxd-autocomplete-option")]').should('be.visible').first().click()
    }

    static inputUsername () {
        return cy.xpath('(//input[contains(@class, "oxd-input oxd-input--active")])[2]');
    }

    static inputPassword () {
        return cy.xpath('(//div[contains(@class, "oxd-input-group oxd-input-field-bottom-space")])[5]');
    }

    static inputConfirmPassword () {
        return cy.xpath('(//div[contains(@class, "oxd-input-group oxd-input-field-bottom-space")])[6]');
    }

    static clickSaveButton () {
        return cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()
    }

    static clickCancelButton () {
        return cy.get('button[class="oxd-button oxd-button--medium oxd-button--ghost"]').click();
    }

    static verifySuccessAddUser () {
        return cy.get('div[class="oxd-toast oxd-toast--success oxd-toast-container--toast"]').should('be.visible');
    }

    static verifyAlreadyExistsMessage () {
        return cy.xpath('//span[text()="Already exists"]').should('exist')
    }
}

export default AdminSaveSystemPage;