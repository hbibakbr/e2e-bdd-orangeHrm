import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pom/login/login.page";
import DashboardPage from "../../pom/product/dashboard/dashboard.page";
import SideBar from "../../pom/side_bar/sideBar.page";
import AdminViewSystemPage from "../../pom/product/admin/adminViewSystem.page";

beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    LoginPage.verifyPageUrl();
});

Given('I successful login', () => {
    LoginPage.inputUsername().type('Admin');
    LoginPage.inputPassword().type('admin123')
    LoginPage.clickLoginButton();
});

When('I should see dashboard page', () => {
    DashboardPage.verifyPageUrl();
    DashboardPage.verifyDashboardTitle();
});

When('I click menu Admin', () => {
    SideBar.clickAdminMenu();
});

When('I should see the admin view system users page', () => {
    AdminViewSystemPage.verifyPageUrl();
    AdminViewSystemPage.verifySystemUserTitle();
});

// Search by Username

When('I provide username', () => {
    AdminViewSystemPage.inputUsername().type('dhinakaran')
});

When('I click search button', () => {
    AdminViewSystemPage.clickSearchButton();
})

Then('I should see an results username', () => {
    AdminViewSystemPage.verifyUsername();
})

// Search by User Role Admin

When('I provide user role admin', () => {
    AdminViewSystemPage.userRoleDropDown()
    cy.wait(3000)
    AdminViewSystemPage.selectAdmin()
})

Then('I should see an results user role Admin', () => {
    AdminViewSystemPage.verifyUserRoleAdmin();
})

// Search by Employee Name

When('I provide employee name', () => {
    AdminViewSystemPage.inputEmployeeName().type('Thanura Dilan Meegoda').trigger('focus')
    cy.wait(3000)
    AdminViewSystemPage.clickSearchSuggestion();
});

Then('I should see an results employee name', () => {
    AdminViewSystemPage.verifyEmployeeName();
})

// Search by Status

When('I provide status Enabled', () => {
    AdminViewSystemPage.statusDropDown()
    cy.wait(3000)
    AdminViewSystemPage.selectEnabled()
})

Then('I should see an results status Enabled', () => {
    AdminViewSystemPage.verifyStatusEnabled();
})
