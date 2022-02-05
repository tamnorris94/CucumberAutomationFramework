package cucumberAutomationFramework.utilityClasses;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BrowserInitTearDownStepDefinitions {
    //Initialises Chrome browser
	@When("^I initialize driver$")
    public void initializeDriver() {
    	System.out.println("initializeDriver runs");
        System.setProperty("webdriver.chrome.driver","C:\\Projects\\CucumberProjects\\CucumberAutomationFramework\\src\\test\\java\\cucumberAutomationFramework\\resources\\chromedriver.exe");
        WebDriverUtils.setDriver(new ChromeDriver());
        
    }
	//Opens Chrome browser and clicks in search input box
    @Then("^open browser$")
    public void openBrowser() {
    	System.out.println("Open Browser runs");
        WebDriver driver = WebDriverUtils.getDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
        driver.manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);
        driver.get("https://google.com");
        driver.findElement(By.xpath("//*[@id=\"L2AGLb\"]/div")).click();
        
    }
    //Closes browser after all scenarios run and deletes cookies
    @Then("^close browser$")
    public void closeBrowser() {
    	System.out.println("Close Browser runs");
        WebDriver driver = WebDriverUtils.getDriver();
        driver.manage().deleteAllCookies();
		driver.quit();
		driver =null;
    }
}