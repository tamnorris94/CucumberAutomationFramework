# Cucumber Selenium Webdriver Test Automation Project
A simple demo project showing how a Cucumber BDD / Selenium Webdriver / Java framework can be used to automate the testing of a website.

The website used for this project is google.com and the test suite executes a number of mathmatical expressions e.g. 5^3 and validates the correct result is returned.

The test suite consists of one scenario outline with 5 scenarios specified in a table of examples, as shown below. A seperate step definition file is used to initiate the driver and open
close chrome browser. The driver is initiated and stored as a global variable in the utility class 'WebDriverUtils.java' so that the same instance can be used to run all the test scenarios 
rather than having the browser open and close for each one.

#### Scenario Outline: Enter a maths expression

	Given : User enters the maths expression <expression>
  
	When :  the user clicks the Search button
  
	Then :  The result of <expectedResult> is returned  
  
#### Examples:

    | expression | expectedResult |
    
    | 4+4        | 8              | 
    
    | 5/0        | undefined      |
    
    ....
    
#### How to download project from Github in to Eclipse

1. Open Eclipse and select desired workspace.
2. Select File > Import, select Projects from GIT (with smart import)
3. On Select Repository Source screen select 'Clone URI' and Next.
4. 


    
#### How to run

1. With the Project open in Eclipse, right click on the feature file 'Calculate.feature' under src/test/java/cucumberAutomationFramework\featureFiles and select Run As > Run Configurations.

2. Click the browse button against feature path and browse to the feature file.

3. Click Run.
