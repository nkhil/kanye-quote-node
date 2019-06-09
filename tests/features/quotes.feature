Feature: I can see a random Kanye West quote

  Scenario Outline: I can see a Kanye West quote
    When I visit the <route>
    Then I will get a <status> response
    Then The response body should be an Object
    And The response body should have length of one

    Examples:
      | route    | status |
      | '/kanye' | 200    |

