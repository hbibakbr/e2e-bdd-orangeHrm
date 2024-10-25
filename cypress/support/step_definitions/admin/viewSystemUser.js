import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pom/login/login.page";
import DashboardPage from "../../pom/product/dashboard/dashboard.page";
import SideBar from "../../pom/side_bar/sideBar.page";
import AdminViewSystemPage from "../../pom/product/admin/adminViewSystem.page";
const userInfo = require("../../../fixtures/user/userInfo.json")

beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    LoginPage.verifyPageUrl();
});

Given('I successful login', () => {
    LoginPage.inputUsername().type('Admin');
    LoginPage.inputPassword().type('admin123')
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    LoginPage.clickLoginButton();
    cy.wait('@actionSummary').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    })
});

When('I should see dashboard page', () => {
    DashboardPage.verifyPageUrl();
    DashboardPage.verifyDashboardTitle();
});

When('I click menu Admin', () => {
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC').as('users')
    SideBar.clickAdminMenu();
    cy.wait('@users').then((intercept) => {
        expect(intercept.response.statusCode).to.equal(200);
    })
});

When('I should see the admin view system users page', () => {
    AdminViewSystemPage.verifyPageUrl();
    AdminViewSystemPage.verifySystemUserTitle();
});

// Search by Username

When('I provide username', () => {
    AdminViewSystemPage.inputUsername().type(userInfo.username)
});

When('I click search button', () => {
    AdminViewSystemPage.clickSearchButton();
})

Then('I should see an results username', () => {
    AdminViewSystemPage.verifyUsername(userInfo.username);
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
    AdminViewSystemPage.inputEmployeeName().type(userInfo.employee_name).trigger('focus')
    cy.wait(3000)
    AdminViewSystemPage.clickSearchSuggestion();
});

Then('I should see an results employee name', () => {
    AdminViewSystemPage.verifyEmployeeName(userInfo.employee_name);
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

// Delete User

When('I click trash icon', () => {
    AdminViewSystemPage.clickDeleteIcon();
})

When('I should see delete pop up', () => {
    AdminViewSystemPage.verifyDeletePopUpTitle();
})

When('I click delete button', () => {
    AdminViewSystemPage.clickDeleteButton();
})

Then('I should see deleted success message', () => {
    cy.wait(3000)
})

// Delete Selected User

When('I select first user', () => {
    AdminViewSystemPage.selectFirstUser();
})

When('I select secound user', () => {
    AdminViewSystemPage.selectSecoundUser();
})

When('I click delete selected', () => {
    AdminViewSystemPage.clickDeleteSelectedButton();
})