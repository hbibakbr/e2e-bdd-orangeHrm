import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pom/login/login.page";
import RequestPasswordResetPage from "../../pom/forgot_password/requestPasswordReset.page";
import SendPasswordResetPage from "../../pom/forgot_password/sendPasswordReset.page";

beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.url().should('include', '/auth/login');
});

Given('I visit request reset password page', () => {
    cy.intercept('GET', '**/messages').as('messages')
    LoginPage.clickForgotPassword();
    cy.wait('@messages').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(304);
    })
})

When('I should see the request reset password page', () => {
    RequestPasswordResetPage.verifyUrlPage();
    RequestPasswordResetPage.verifyResetPasswordTitle()
})

When('I provide the username', () => {
    RequestPasswordResetPage.inputUsername().type('Admin');
})

When('I click reset password button', () => {
    cy.intercept('GET', '**/messages').as('messages')
    RequestPasswordResetPage.clickResetPasswordButton();
    cy.wait('@messages').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(304);
    })
})

Then('I should see a message', () => {
    SendPasswordResetPage.verifySuccessTitle();
    SendPasswordResetPage.verifySuccessMessage();
})

// Cancel Reset An Password

When('I click cancel button', () => {
    cy.intercept('GET', '**/messages').as('messages')
    RequestPasswordResetPage.clickCancelButton();
    cy.wait('@messages').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(304);
    })
})

Then('I should directed to login page', () => {
    LoginPage.verifyPageUrl();
    LoginPage.verifyLoginPageTitle();
})

// Failed Reset Password

When('I just click reset password button', () => {
    RequestPasswordResetPage.clickResetPasswordButton();
})

Then('I should see an error field message', () => {
    RequestPasswordResetPage.verifyErrorField();
    RequestPasswordResetPage.verifyErrorFieldMessage();
})
