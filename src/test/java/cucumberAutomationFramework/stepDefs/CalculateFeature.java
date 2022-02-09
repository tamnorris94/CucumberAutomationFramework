package cucumberAutomationFramework.stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import cucumber.api.CucumberOptions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import cucumberAutomationFramework.utilityClasses.WebDriverUtils;

import org.junit.Assert;
import org.junit.runner.RunWith;

public class CalculateFeature {
	
	WebDriver driver = WebDriverUtils.getDriver();
	
	//Enters maths expression to test in search input box
	@Given("^User enters the maths expression (.*)$")
	public void user_enters_the_maths_expression(String expression) throws Throwable {
		Thread.sleep(2000);
		WebElement searchInput = driver.findElement(By.name("q"));
		searchInput.clear();
		searchInput.sendKeys(expression);
	}
	
	//Click google search button or if not present hits ENTER
	@When("^the user clicks the Search button$")
	public void the_user_clicks_the_Search_button() throws Throwable {
		System.out.println("Click search button done");
		Thread.sleep(2000);
		Boolean googleSearchPresent = driver.findElements(By.name("btnK")).size() > 0;
		if(googleSearchPresent) {
			driver.findElement(By.name("btnK")).click();
		}
		else {
			WebElement searchInput = driver.findElement(By.name("q"));
			searchInput.sendKeys(Keys.RETURN);
		}
		
	}
	
	//Validates that the correct result is returned
	@Then("^The result of (.*) is returned$")
	public void result_is_returned(String expectedResult) throws Throwable {
		//Different elements are returned depending on whether input was valid maths expression
		Boolean validResultDisplay = driver.findElements(By.xpath("//*[@id=\"cwos\"]")).size() > 0;
		Boolean invalidResultDisplay = driver.findElements(By.cssSelector("div[class='dDoNo vrBOv vk_bk']")).size() > 0;

		if(validResultDisplay) {
			String resultText = driver.findElement(By.xpath("//*[@id=\"cwos\"]")).getText();
			String msg = "Expected result is :" + expectedResult + " but " + resultText + "returned.";
			Assert.assertEquals(expectedResult, resultText);
			validResultDisplay = false;
		} else if(invalidResultDisplay){
			String resultText = driver.findElement(By.cssSelector("div[class='dDoNo vrBOv vk_bk']")).getText();
			System.out.println("Expected result was  " + expectedResult + ". Actual result was " + resultText);
			Assert.assertEquals(expectedResult, resultText);
			invalidResultDisplay = false;
		} else {
			System.out.println("Element not found");
			Assert.assertFalse(true);
		}
		Thread.sleep(3000);
	}
	
}

