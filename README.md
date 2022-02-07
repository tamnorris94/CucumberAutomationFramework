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

The following steps are applicable for Eclipse version 2021-12 (4.22.0), Build id: 20211202-1639. 

The Java version used is 1.8 (jdk1.8.0_321) will need to be installed.

1. Open Eclipse and select desired workspace.
2. Select File > Import, select Projects from GIT (with smart import)
3. On Select Repository Source screen select 'Clone URI' and Next.
4. Navigate to the Github page for this project and select the Code button and with HTTPS option selected click button to copy URI.
5. Go back to Eclipse and paste URI into URI input box and click 'Next'.
6. With Master branch selected on Branch Selection page click Next.
7. Browser to folder location where you want project stored locally and click Next.
8. Click Finish on Import Projects from File System or Archive
9. Wait for project to finish building.
10. If you get errors 'Build path specifies execution environment Java SE xxx.
There are no JREs installed in the workspace that are strictly compatible with this environment' check that the build path is pointing to the correct Java jdk by following below steps.

1. Right click on project and select Build Path > Configure Build Path.
2. Select the JRE System Library and select Edit.
3. Select Alternate JRE and click installed JREs'.
4. Click the Add button
5. With Standard VM selected on JRE Type screen, select 'Next''.
6. Browse to the folder where the JDK is installed and click Select Folder.
7. The JRE name input box should be populated with the name of the JDK i.e. jdk1.8.0_321
8. Click finish.
9. Check the newly added installed JRE and click Apply and Close and the build errors should disappear.
    
#### How to run

1. With the Project open in Eclipse, right click on the feature file 'Calculate.feature' under src/test/java/cucumberAutomationFramework\featureFiles and select Run As > Run Configurations.

2. Click the browse button against feature path and browse to the feature file in the directory where the project was installed locally. Will be under sub folder \CucumberAutomationFramework\src\test\java\cucumberAutomationFramework\featureFiles'

3. Click Run and verify that the Chrome browser opens and the cucumber scenarios execute. 
