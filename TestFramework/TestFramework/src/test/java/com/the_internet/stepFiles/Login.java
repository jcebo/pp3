package com.the_internet.stepFiles;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class Login {
	WebDriver driver;
	
	@Before 
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Qbeczek\\Desktop\\TestFramework\\TestFramework\\src\\test\\java\\com\\the_internet\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		this.driver.manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);
	}
	
	@After
	public void close() throws InterruptedException {
		Thread.sleep(1000);
		// this.driver.manage().deleteAllCookies();
		this.driver.quit();
		this.driver = null;
	}
	
	@Given("^User navigates to test website$")
	public void user_navigates_to_test_website() throws Throwable {
	   driver.get("http://the-internet.herokuapp.com/login");
	}

	@And("^User enters a valid username$")
	public void user_enters_a_valid_username() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"username\"]")).sendKeys("tomsmith");
	}

	@And("^User enters a valid password$")
	public void user_enters_a_valid_password() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("SuperSecretPassword!");
		

	}

	@When("^User clicks login button$")
	public void user_clicks_login_button() throws Throwable {
		Thread.sleep(2000);
	    driver.findElement(By.xpath("//i")).click();
	}

	@Then("^User should be taken to successful login page$")
	public void user_should_be_taken_to_successful_login_page() throws Throwable {
	    Thread.sleep(3000);
	    WebElement askQuestionButton = driver.findElement(By.xpath("//i[contains(text(), 'Logout')]"));
	    Assert.assertEquals(true, askQuestionButton.isDisplayed());
	    
		
	}
}
