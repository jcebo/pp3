$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "User should be able to log in to their account using correct credentials",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5112670700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Log into account with correct details",
  "description": "",
  "id": "login-into-account;log-into-account-with-correct-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to test website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters a valid username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters a valid password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should be taken to successful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_navigates_to_test_website()"
});
formatter.result({
  "duration": 2320237900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_a_valid_username()"
});
formatter.result({
  "duration": 2136846300,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_a_valid_password()"
});
formatter.result({
  "duration": 95115500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_login_button()"
});
formatter.result({
  "duration": 2578635400,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_be_taken_to_successful_login_page()"
});
formatter.result({
  "duration": 3099209400,
  "status": "passed"
});
formatter.after({
  "duration": 2640766800,
  "status": "passed"
});
});