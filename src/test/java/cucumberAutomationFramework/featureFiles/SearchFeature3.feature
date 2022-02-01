Feature: Calculator
  As a user
  I want to use google to evaluate mathematical expressions
  So that I don't need to add myself
  
#Background: Open browser and navigate to google
#	Given User navigates to google 

Scenario Outline: Enter a maths expression
	Given User enters the maths expression <expression>
	When the user clicks the Search button
	Then The result of <expectedResult> is returned  
Examples: 
    | expression | expectedResult |
    | 4+4 | 8 | 
    | 5^3 | 125 |   
