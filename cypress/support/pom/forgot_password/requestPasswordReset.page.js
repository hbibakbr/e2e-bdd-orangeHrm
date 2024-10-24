class RequestPasswordResetPage {

    static verifyUrlPage () {
        return cy.url().should('include', '/auth/requestPasswordResetCode');
    }
 
    static verifyResetPasswordTitle () {
        return cy.get('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text', 'Reset Password')
    }

    static inputUsername () {
        return cy.get('input[name="username"]')
    }

    static clickResetPasswordButton () {
        return cy.get('button[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]').click()
    }

    static clickCancelButton () {
        return cy.get('button[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click()
    }
}

export default RequestPasswordResetPage;