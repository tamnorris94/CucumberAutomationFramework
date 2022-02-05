Feature: Calculator
  As a user
  I want to use google to evaluate mathematical expressions
  So that I don't need to add myself
  
@StartBrowser
Scenario: Start browser session
  When I initialize driver
  Then open browser
  ##Then close browser

@MyTest1
Scenario Outline: Enter a maths expression
	Given User enters the maths expression <expression>
	When the user clicks the Search button
	Then The result of <expectedResult> is returned  
Examples: 
    | expression | expectedResult |
    | 4+4        | 8              | 
    | 5/0        | undefined      |
    | 5^3        | 126            | 
    | 4!         | 24	          | 
    | sqrt(-9)   | 3 i	          | 
    
@CloseBrowser
Scenario: Close the browser
    Then close browser
 
