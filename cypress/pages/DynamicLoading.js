const elements = {
  pageTitle: ".example h3",
  exampleArray: ".example > a",
  exampleOnePageTitle: "Example 1: Element on page that is hidden",
  exampleTwoPageTitle: "Example 2: Element rendered after the fact",
  elementToVerify: ".example>#finish",
  startBtn: "#start>button",
};

class DynamicControls {
  verifyPageTitle() {
    cy.get(elements.pageTitle).should(
      "have.text",
      "Dynamically Loaded Page Elements"
    );
    return this;
  }

  clickExample(index) {
    cy.get(elements.exampleArray).eq(index).click({ force: true });
    return this;
  }

  verifyElementExistButNotVisible() {
    cy.get(elements.elementToVerify).should("not.be.visible");
    return this;
  }
  verifyElementNotExist() {
    cy.get(elements.elementToVerify).should("not.exist");
    return this;
  }

  clickStart() {
    cy.get(elements.startBtn).click();
    return this;
  }

  verifyElementExistAndVisible() {
    cy.get(elements.elementToVerify, { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Hello World!");
    return this;
  }
}

export default new DynamicControls();
