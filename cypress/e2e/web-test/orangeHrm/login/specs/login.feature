Feature: Login Test Feature OrangeHrm

    Scenario: As a user, I can login to the OrangeHrm dashboard
        Given I visit the login page
        And I should see login page title
        When I submit the username "<username>"
        And I submit the password "<password>"
        When I click the login button
        Then I am on the dashboard page

        Examples:
            | username       | password             |
            | Admin          | admin123             |
    
    Scenario: As a user, I failed login with username: <username> and password: <password>
        Given I visit the login page
        And I should see login page title
        When I submit the invalid username "<username>"
        And I submit the invalid password "<password>"
        When I click the button login
        Then I should see an error message "<message>"

        Examples:
            | username       | password             | message             |
            | invalid_Admin  | admin123             | Invalid Credentilas |
            | Admin          | invalid_admin123     | Invalid Credentilas |
            | invalid_Admin  | invalid_admin123     | Invalid Credentilas |
            | admin123       | Admin                | Invalid Credentilas |

    Scenario: As a user, I cannot login with leave the username field empty
        Given I visit the login page
        And I should see login page title
        And I submit the password "<password>"
        When I just click the button login
        Then I should see an error field with message "<message>"

        Examples:
            | message  |
            | Required |

    Scenario: As a user, I cannot login with leave the password field empty
        Given I visit the login page
        And I should see login page title
        When I submit the username "<username>"
        When I just click the button login
        Then I should see an error field with message "<message>"

        Examples:
            | message  |
            | Required |

    Scenario: As a user, I cannot login with leave the username and password field empty
        Given I visit the login page
        And I should see login page title
        When I just click the button login
        Then I should see an error field with message "<message>"

        Examples:
            | message  |
            | Required |