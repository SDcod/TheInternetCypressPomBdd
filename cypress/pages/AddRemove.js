let elements = {
  pageTitle: "h3", //Add/Remove Elements
  addElementBtn: "Add Element",
  deleteElementBtn: "Delete",
};

class AddRemove {
  getPageTitle() {
    cy.get(elements.pageTitle).should("have.text", "Add/Remove Elements");
    return this;
  }

  clickAddElement() {
    cy.contains("button", elements.addElementBtn).should("exist").click();
    return this;
  }
  clickDelete() {
    cy.contains("button", elements.deleteElementBtn).should("exist").click();
    return this;
  }

  verifyDeleteNotVisible() {
    cy.contains("button", elements.deleteElementBtn).should("not.exist");
  }
}

export default new AddRemove();
