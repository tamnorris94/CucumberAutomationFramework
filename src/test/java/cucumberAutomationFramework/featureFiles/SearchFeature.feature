Feature: Calculate Feature
	Use google to execute some maths expressions
	
Scenario: Enter valid maths expression in google search
	Given User navigates to google
	And User enters the valid maths expression "4+4"
	When the user clicks the Search button
	Then The result of "8" is returned
	
Scenario: Enter invalid maths expression in google search
	Given User navigates to google
	And User enters the valid maths expression "4/0"
	When the user clicks the Search button
	Then The result of "undefined" is returned
	 
	 
	 
