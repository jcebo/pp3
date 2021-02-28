Feature: Login into account
	User should be able to log in to their account using correct credentials

Scenario: Log into account with correct details
	Given User navigates to test website 
	And User enters a valid username
	And User enters a valid password
	When User clicks login button
	Then User should be taken to successful login page
