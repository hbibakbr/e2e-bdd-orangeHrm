require('cypress-xpath');

class SendPasswordResetPage {
    static verifyUrlPage () {
        return cy.url().should('include', '/auth/sendPasswordReset');
    }

    static verifySuccessTitle () {
        return cy.get('h6[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text', 'Reset Password link sent successfully')
    }

    static verifySuccessMessage () {
        return cy.xpath('(//p[@class="oxd-text oxd-text--p"])[1]').should('have.text', 'A reset password link has been sent to you via email.')
    }
}

export default SendPasswordResetPage;