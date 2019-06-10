Feature: I can see the square of any number

  Scenario Outline: I can see the square of a number
    When I visit <route>
    Then I will get a <status> response
    Then The response body should be an Object
    And The response body should have length of one
    And the response should be 4

    Examples:
      | route       | status |
      | '/square?2' | 200    |

