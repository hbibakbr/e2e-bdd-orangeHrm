Feature: Add User

    Scenario: As a user, I can add a user
        Given I successful login
        And I should see dashboard page
        When I click menu Admin
        And I should see the admin view system users page
        When I click add button
        And I should see the admin save system users page
        When I provide user role admin
        And I provide status enabled
        And I provide employee name
        And I provide username
        And I provide password
        And I provide confirm password
        When I click save button
        Then I successful add user
        And I directed to the admin system users page