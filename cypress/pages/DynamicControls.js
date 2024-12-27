const elements = {
  pageTitle: "h4:nth-child(1)",
  firstCheckBox: "#checkbox-example #checkbox",
  removeButton: "#checkbox-example > button",
  addButton: "#checkbox-example > button",
  checkboxMessage: "#checkbox-example #message",
  checkBoxAfterAdding: "#checkbox-example> div #checkbox",
};

class DynamicControls {
  verifyPageTitle() {
    cy.get(elements.pageTitle).should("have.text", "Dynamic Controls");
    return this;
  }

  //below methos accepts boolean.
  shouldCheckBoxVisible(isVisible) {
    if (isVisible) {
      return cy.get(elements.firstCheckBox).should("exist");
    } else {
      return cy.get(elements.firstCheckBox).should("not.exist");
    }
  }

  clickRemoveBtn() {
    cy.get(elements.removeButton).should("exist").click({ force: true });
    return this;
  }

  validateCheckBoxMessage(text) {
    cy.get(elements.checkboxMessage).should("exist").should("have.text", text);
    return this;
  }

  clickAddBtn() {
    cy.get(elements.addButton).should("exist").click({ force: true });
    return this;
  }
}

export default new DynamicControls();
