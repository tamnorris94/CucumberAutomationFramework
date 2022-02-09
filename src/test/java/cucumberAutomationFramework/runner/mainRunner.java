package cucumberAutomationFramework.runner;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumberAutomationFramework.utilityClasses.WebDriverUtils;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-report.html",
				"json:target/cucumber.json",
				"com.cucumber.listener.ExtentCucumberFormatter:target/report.html"
				},
        features= {"src/test/java/cucumberAutomationFramework/featureFiles"},
        glue= {"cucumberAutomationFramework/stepDefs","cucumberAutomationFramework/utilityClasses"},
        tags= "@StartBrowser,@MyTest1,@CloseBrowser",
        monochrome=true
        )

public class mainRunner {
	WebDriver driver = WebDriverUtils.getDriver();
}
