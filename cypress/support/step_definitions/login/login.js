import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pom/login/login.page";

Given('I visit the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    LoginPage.verifyPageUrl();
})

When('I should see login page title', () => {
    LoginPage.verifyLoginPageTitle();
})

When('I submit the username {string}', (username) => {
    LoginPage.inputUsername().type(username)
})

When('I submit the password {string}', (password) => {
    LoginPage.inputPassword().type(password)
})

When('I click the login button', () => {
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    LoginPage.clickLoginButton();
    cy.wait('@actionSummary').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    })
})

Then('I am on the dashboard page', () => {
    cy.url().should('include', 'dashboard/index');
})

// Failed Login Invalid Credentials

When('I submit the invalid username {string}', (username) => {
    LoginPage.inputUsername().type(username)
})

When('I submit the invalid password {string}', (password) => {
    LoginPage.inputPassword().type(password)
})

When('I click the button login', () => {
    cy.intercept('GET', '**/messages').as('messages')
    LoginPage.clickLoginButton();
    cy.wait('@messages').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(304);
    })
})


Then('I should see an error message {string}', () => {
    LoginPage.verifyExistMsgFailedLogin();
    LoginPage.verifyTextMsgFailedLogin('Invalid credentials');
})

// Failed login empty field

When('I just click the button login', () => {
    LoginPage.clickLoginButton();
})

Then('I should see an error field with message {string}', () => {
   LoginPage.verifyExistMsgRequiredField();
   LoginPage.verifyTextMsgRequiredField('Required')
})