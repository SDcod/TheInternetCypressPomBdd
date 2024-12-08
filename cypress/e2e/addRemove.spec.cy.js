/// <reference types="cypress" />

import HomePage from "../pages/HomePage";
import AddRemove from "../pages/AddRemove";

describe("AddRemove Scenario", () => {
  beforeEach(() => {
    //visit homepage
    HomePage.visitHomePage();
  });

  it("AddRemove test case", () => {
    //1.Navigate to remove elements page by clicking link.
    HomePage.clickAddRemove();
    cy.url().should(
      "eq",
      "https://the-internet.herokuapp.com/add_remove_elements/"
    );

    //2.Verify 'Add Element' button exists.
    //3.Click on 'Add Element' button.
    AddRemove.clickAddElement()
      .clickDelete() //4.Verify 'Delete' button is visible and click.
      .verifyDeleteNotVisible(); //5.verify 'Delete' is not visible.
  });
});
