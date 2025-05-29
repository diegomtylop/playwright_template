Feature: complete contact form
    As a user I should be able to complete the perficient form

  @smoke @precondition
  Scenario: complete contact form
    Given the user navigate to contact form page
    When the user complete the contact form
    Then the form is completed


  @smoke @precondition
  Scenario: validate empty fields in contact form
    Given the user navigate to contact form page
    When the user tries to submit the form without filling any fields
    Then the error messages are displayed for each required field


  @smoke @precondition
  Scenario: find office location
    Given the user navigate to contact form page
    When the user search for a office location
    Then the office location Bogota is displayed
