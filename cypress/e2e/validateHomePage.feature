Feature: homepage loads successfully

  Scenario: visit homepage and validate heading
    Given User visits the homepage
    Then heading text is "Welcome to the-internet"
    And sub-heading text is "Available Examples"
    And Page contains AB testing link and is accessible
    Then User is navigated to ABtesting Page
