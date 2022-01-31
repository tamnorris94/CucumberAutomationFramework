package cucumberAutomationFramework.stepDefs;


import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SearchFeature {
	
	WebDriver driver;
	
	
	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver","C:\\Projects\\CucumberProjects\\CucumberAutomationFramework\\src\\test\\java\\cucumberAutomationFramework\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		this.driver.manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);
	}
	
	@After
	public void tearDown() {
		this.driver.manage().deleteAllCookies();
		this.driver.quit();
		this.driver =null;
	}
	
	@Given("^User navigates to google$")
	public void user_navigates_to_google() throws Throwable {
		driver.get("https://google.com");
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"L2AGLb\"]/div")).click();
	}
	
	@And("^User enters the valid maths expression \"(.*)\"$")
	public void user_enters_the_valid_maths_expression(String expression) throws Throwable {
		Thread.sleep(2000);
		WebElement searchInput = driver.findElement(By.name("q"));
		searchInput.sendKeys(expression);
	}
	
	@When("^the user clicks the Search button$")
	public void the_user_clicks_the_Search_button() throws Throwable {
		System.out.println("Click search button done");
		Thread.sleep(2000);
		driver.findElement(By.name("btnK")).click();
	}
	
	@Then("^The result of \"(.*)\" is returned$")
	public void result_is_returned(String result) throws Throwable {
		//Different elements returned for valid vs invalid expresssions i.e. 4/0 and sqrt(-9)
		//Need to have if else to find which one is present	
		Boolean validResultDisplay = driver.findElements(By.xpath("//*[@id=\"cwos\"]")).size() > 0;
		Boolean invalidResultDisplay = driver.findElements(By.cssSelector("div[class='dDoNo vrBOv vk_bk']")).size() > 0;

		if(validResultDisplay) {
			System.out.println("validResultDisplay is present");
			String resultText = driver.findElement(By.xpath("//*[@id=\"cwos\"]")).getText();
			System.out.println("result is " + resultText);
			assertTrue(resultText.contains(result));
			validResultDisplay = false;
		} else if(invalidResultDisplay){
			System.out.println("invalidResultDisplay is present");
			String resultText = driver.findElement(By.cssSelector("div[class='dDoNo vrBOv vk_bk']")).getText();
			assertTrue(resultText.contains(result));
			System.out.println("result is " + resultText);
			invalidResultDisplay = false;
		} else {
			Assert.assertFalse(true);
		}
		Thread.sleep(3000);
		
	}

}
