Feature: Manual Escenario to Save session
    As a user I should be able to manual set captcha to save a session

@smoke @precondition
  Scenario: Save session
    Given I am on the home page "https://www.amazon.com/-/es/"
    Then I save session