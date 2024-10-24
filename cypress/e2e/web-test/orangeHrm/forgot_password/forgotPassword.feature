Feature: Forgot Password Feature

    Scenario: As a user, I successfull reset an password
        Given I visit request reset password page
        And I should see the request reset password page
        When I provide the username
        And I click reset password button
        Then I should see a message

    Scenario: As a user, I can cancel reset an password
        Given I visit request reset password page
        And I should see the request reset password page
        When I click cancel button
        Then I should directed to login page

    Scenario: As a user, I failed reset an password with empty username
        Given I visit request reset password page
        And I should see the request reset password page
        When I just click reset password button
        Then I should see an error field message