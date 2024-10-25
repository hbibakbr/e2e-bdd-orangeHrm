Feature: Admin Search users

    Scenario: As a user, I can search user by username
        Given I successful login
        And I should see dashboard page
        When I click menu Admin
        And I should see the admin view system users page
        When I provide username
        And I click search button
        Then I should see an results username

    Scenario: As a user, I can search user by user role Admin
        Given I successful login
        And I should see dashboard page
        When I click menu Admin
        And I should see the admin view system users page
        When I provide user role admin
        And I click search button
        Then I should see an results user role Admin

    Scenario: As a user, I can search user by employee name
        Given I successful login
        And I should see dashboard page
        When I click menu Admin
        And I should see the admin view system users page
        When I provide employee name
        And I click search button
        Then I should see an results employee name

    Scenario: As a user, I can search user by Status
        Given I successful login
        And I should see dashboard page
        When I click menu Admin
        And I should see the admin view system users page
        When I provide status Enabled
        And I click search button
        Then I should see an results status Enabled