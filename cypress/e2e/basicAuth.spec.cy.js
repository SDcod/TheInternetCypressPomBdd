/// <reference types="cypress" />

import HomePage from "../pages/HomePage";

describe("basicAuth Scenario", () => {
  beforeEach(() => {
    //visit homepage
    HomePage.visitHomePage();
  });

  it("Basic Auth with Js prompt", () => {
    //In this type of scenario Use URL-based credentials or cy.request() whenever possible.
    // Cypress cannot directly interact with browser-native dialog boxes like Basic Authentication prompts, alert boxes, or confirm dialogs, because these prompts are controlled by the browser and exist outside the DOM. As a result, Cypress cannot type into the Basic Auth credentials prompt or manipulate it directly.

    // This is a deliberate design decision by Cypress to focus on testing the behavior of web applications themselves, rather than browser UI components.

    //by typing directly in url
    // cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    // cy.contains(
    //   "Congratulations! You must have the proper credentials."
    // ).should("be.visible");

    //by cy.request
    cy.request({
      method: "GET",
      url: "https://the-internet.herokuapp.com/basic_auth",
      auth: {
        username: "admin",
        password: "admin",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      HomePage.clickBasicAuth();
    });
  });
});
