Feature: Add User

    Scenario: As a user, I can add a user
        Given I success login
        And I should on the dashboard page
        When I click Admin menu
        And I should on the admin view system users page
        When I click add button
        And I should see the admin save system users page
        When I submit user role admin
        And I submit status enabled
        And I submit employee name
        And I submit username
        And I provide password
        And I provide confirm password
        When I click save button
        Then I successful add user
        And I directed to the admin system users page

    Scenario: As a user, I failed add user with same username
        Given I success login
        And I should on the dashboard page
        When I click Admin menu
        And I should on the admin view system users page
        When I click add button
        And I should see the admin save system users page
        When I submit user role admin
        And I submit status enabled
        And I submit employee name
        When I submit username
        Then I should see error message