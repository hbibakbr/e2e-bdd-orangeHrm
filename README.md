# Web Automation OrangeHrm using Cypress and Cucumber Framework
Repository for Project Task Sanbercode Quality Assurance Engineer Bootcamp. This is a web testing automation project built using the **Cypress** dan cucumber framework. **Created by: Habib Akbar**

<p align="center">
    <img src="cypress-logo.svg" alt="cypress" width="400" style="margin-left: 10px;" >
</p>

## Overview
The project includes login, forget password, and user management on the admin page. The website used as the study case is [OrangeHrm](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login). The goal of this project is to provide automated test cases for common user interactions on the OrangeHRM website, ensuring robust and reliable functionality. All scripts are built using the Cucumber framework and implement Page Object Model (POM) for better structure and maintenance.

## Demo Testing


## Feature
### Login Test
**Scenario**
   - As a user, I can login to the OrangeHrm dashboard
   - As a user, I failed login with invalid username
   - As a user, I failed login with invalid password
   - As a user, I failed login with invalid username and invalid password
   - As a user, I failed login with username and password swapped
   - As a user, I cannot login with leave the username field empty
   - As a user, I cannot login with leave the password field empty
   - As a user, I cannot login with leave the username and password field empty

### Forget Password
**Scenario**
   - As a user, I successfull reset an password
   - As a user, I can cancel reset an password
   - As a user, I failed reset an password with empty username

### Admin - Add System User
**Scenario**
   - As a user, I can add a user
   - As a user, I failed add user with same username

### Admin - View System User
**Scenario**
   - As a user, I can search user by username
   - As a user, I can search user by user role Admin
   - As a user, I can search user by employee name
   - As a user, I can search user by Status
   - As a user, I success delete a user
   - As a user, I success delete mutliple user


## Test Cases Documentation
All test cases have been created and documented in google spreadsheet. These test cases cover:
- Login test cases
- note: I will updated next
You can view and download the test case here: [OrangeHrm - Test Cases](https://docs.google.com/spreadsheets/d/1-apLQT9hx6ntu1AciogDkxjZ8Fm5Dt1jWuR_kOkinRo/edit?usp=sharing).

## Installation and Setup
To set up and run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/hbibakbr/cypress-automation-orangehrm.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd cypress-automation-orangehrm
    ```

3. **Install dependencies:**
    ```bash
    npm install cypress --save-dev
    ```

4. **Run the tests:**
    ```bash
    npx cypress open
    ```
    This will open the Cypress Test Runner, where you can run the test cases interactively.


## Acknowledgements
A huge thanks to the amazing Cypress community and the OrangeHRM for providing a great platform for testing.
Happy Testing! 🚀