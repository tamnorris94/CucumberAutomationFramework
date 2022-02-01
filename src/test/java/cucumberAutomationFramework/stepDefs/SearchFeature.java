package cucumberAutomationFramework.stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;

import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import java.util.List;
import java.util.concurrent.TimeUnit;

import cucumber.api.DataTable;
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
	public void setup() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Projects\\CucumberProjects\\CucumberAutomationFramework\\src\\test\\java\\cucumberAutomationFramework\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		this.driver.manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);
		driver.get("https://google.com");
		Thread.sleep(2000);
		//agrees to the terms and conditions
		driver.findElement(By.xpath("//*[@id=\"L2AGLb\"]/div")).click();
	}
	
	@After
	public void tearDown() {
		this.driver.manage().deleteAllCookies();
		this.driver.quit();
		this.driver =null;
	}
	
	//Commenting this out as performing these steps in Before
//	@Given("^User navigates to google$")
//	public void user_navigates_to_google() throws Throwable {
//		driver.get("https://google.com");
//		Thread.sleep(2000);
//		driver.findElement(By.xpath("//*[@id=\"L2AGLb\"]/div")).click();
//	}
	
	//Used this when passing argument in as String rather than through examples 
	//@And("^User enters the maths expression \"(.*)\"$")
	@Given("^User enters the maths expression (.*)$")
	public void user_enters_the_maths_expression(String expression) throws Throwable {
		Thread.sleep(2000);
		WebElement searchInput = driver.findElement(By.name("q"));
		searchInput.sendKeys(expression);
	}
	
	//Create new step def method to handle expression passed in from table
	@And("^User enters this maths expression$")
	public void user_enters_this_maths_expression(DataTable table) throws Throwable {
		Thread.sleep(2000);
		List<List<String>> data = table.raw();
		System.out.println(data.get(1).get(0));
		String expression = data.get(1).get(0);
		WebElement searchInput = driver.findElement(By.name("q"));
		searchInput.sendKeys(expression);
	}
	
	@When("^the user clicks the Search button$")
	public void the_user_clicks_the_Search_button() throws Throwable {
		System.out.println("Click search button done");
		Thread.sleep(2000);
		driver.findElement(By.name("btnK")).click();
	}
	
	//@Then("^The result of \"(.*)\" is returned$")
	@Then("^The result of (.*) is returned$")
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
	
	//Create new validate step def method to handle expected result from table
	@Then("^The expected result is returned$")
	public void expected_result_is_returned(DataTable table) throws Throwable {
		//Different elements returned for valid vs invalid expresssions i.e. 4/0 and sqrt(-9)
		//Need to have if else to find which one is present	
		Boolean validResultDisplay = driver.findElements(By.xpath("//*[@id=\"cwos\"]")).size() > 0;
		Boolean invalidResultDisplay = driver.findElements(By.cssSelector("div[class='dDoNo vrBOv vk_bk']")).size() > 0;
		
		List<List<String>> data = table.raw();
		System.out.println(data.get(1).get(0));
		String expectedResult = data.get(1).get(0);
		
		if(validResultDisplay) {
			System.out.println("validResultDisplay is present");
			String resultText = driver.findElement(By.xpath("//*[@id=\"cwos\"]")).getText();
			System.out.println("result is " + resultText);
			assertTrue(resultText.contains(expectedResult));
			validResultDisplay = false;
		} else if(invalidResultDisplay){
			System.out.println("invalidResultDisplay is present");
			String resultText = driver.findElement(By.cssSelector("div[class='dDoNo vrBOv vk_bk']")).getText();
			assertTrue(resultText.contains(expectedResult));
			System.out.println("result is " + resultText);
			invalidResultDisplay = false;
		} else {
			Assert.assertFalse(true);
		}
		Thread.sleep(3000);
		
	}
}
