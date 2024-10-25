import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pom/login/login.page";
import DashboardPage from "../../pom/product/dashboard/dashboard.page";
import SideBar from "../../pom/side_bar/sideBar.page";
import AdminViewSystemPage from "../../pom/product/admin/adminViewSystem.page";
import AdminSaveSystemPage from "../../pom/product/admin/adminSaveSystem.page";
const userInfo = require("../../../fixtures/user/userInfo.json")

beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    LoginPage.verifyPageUrl();
});

Given('I success login', () => {
    LoginPage.inputUsername().type('Admin');
    LoginPage.inputPassword().type('admin123')
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    LoginPage.clickLoginButton();
    cy.wait('@actionSummary').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    })
});

When('I should on the dashboard page', () => {
    DashboardPage.verifyPageUrl();
    DashboardPage.verifyDashboardTitle();
});

When('I click Admin menu', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC').as('users')
    SideBar.clickAdminMenu();
    cy.wait('@users').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    })
});

When('I should on the admin view system users page', () => {
    AdminViewSystemPage.verifyPageUrl();
    AdminViewSystemPage.verifySystemUserTitle();
});

When('I click add button', () => {
    cy.intercept('GET', '**/messages').as('messages')
    AdminViewSystemPage.clickAddButton();
    cy.wait('@messages').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(304);
    })
})

// Add User

When('I should see the admin save system users page', () => {
    AdminSaveSystemPage.verifyPageUrl();
    AdminSaveSystemPage.verifyAddUserTitle();
})

When('I submit user role admin', () => {
    AdminSaveSystemPage.clickUserRole();
    cy.wait(3000)
    AdminSaveSystemPage.selectAdmin()
})

When('I submit status enabled', () => {
    AdminSaveSystemPage.clickStatus();
    cy.wait(3000)
    AdminSaveSystemPage.selectEnabled()
})

When('I submit employee name', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?nameOrId=Ranga+Akunuri').as('employeeName')
    AdminSaveSystemPage.inputEmployeeName().type(userInfo.employee_name).trigger('focus')
    cy.wait(3000);
    AdminSaveSystemPage.selectEmployeeName();
    cy.wait('@employeeName').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    })
})

When('I submit username', () => {
    AdminSaveSystemPage.inputUsername().type(userInfo.username)
    cy.wait(3000)
})

When('I provide password', () => {
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/auth/public/validation/password').as('password')
    cy.wait(3000)
    AdminSaveSystemPage.inputPassword().type('h12345678')
    cy.wait('@password').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    })
})

When('I provide confirm password', () => {
    cy.wait(3000)
    AdminSaveSystemPage.inputConfirmPassword().type('h12345678')
})

When('I click save button', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC').as('users')
    AdminSaveSystemPage.clickSaveButton();
})

Then('I successful add user', () => {
    AdminSaveSystemPage.verifySuccessAddUser();
    cy.wait('@users').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    })
})

Then('I directed to the admin system users page', () => {
    AdminViewSystemPage.verifyPageUrl();
    AdminViewSystemPage.verifySystemUserTitle();
})

// Failed Add User

Then('I should see error message', () => {
    AdminSaveSystemPage.verifyAlreadyExistsMessage();
})