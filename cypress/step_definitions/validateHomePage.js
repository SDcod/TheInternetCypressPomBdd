/// <reference types="cypress" />

import HomePage from "../../pages/HomePage";
import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("User visits the homepage", function () {
  HomePage.visitHomePage();
});

Then("heading text is {string}", function () {
  HomePage.validateHeading("Welcome to the-internet");
});

And("sub-heading text is {string}", function () {
  HomePage.validateSubHeading("Available Examples");
});

And("Page contains AB testing link and is accessible", function () {
  HomePage.clickABTesting();
});

Then("User is navigated to ABtesting Page", () => {
  cy.url().should("eq", "https://the-internet.herokuapp.com/abtest");
});
