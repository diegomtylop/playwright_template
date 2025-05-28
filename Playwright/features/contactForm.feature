Feature: complete contact form
    As a user I should be able to complete the perficient form

  @smoke @precondition
  Scenario: complete contact form
    Given the user navigate to contact form page
    When the user complete the contact form
    Then the form is completed
