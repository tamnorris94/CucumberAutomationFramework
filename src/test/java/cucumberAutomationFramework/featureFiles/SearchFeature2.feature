Feature: Calculate Feature using data table
	Use google to execute some maths expressions 
	
Scenario: Enter maths expressions in google search and validate result
  Given User navigates to google
  And User enters this maths expression
    | expression | 
    | 4+6        | 
    | 4/0        | 
    | 4!         | 
  When the user clicks the Search button
  Then The expected result is returned
    |expected result |
  	|10				|
  	|undefined		|
  	|24|