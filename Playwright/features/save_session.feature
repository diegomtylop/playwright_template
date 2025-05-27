Feature: Manual Escenario to Save session
    As a user I should be able to manual set captcha to save a session

@smoke @precondition
  Scenario: Save session
    Given I am on the home page
    Then I save session