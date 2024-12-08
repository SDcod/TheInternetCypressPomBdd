let elements = {
  alertText: "Sign in",
};

class AddRemove {
  getPageTitle() {
    cy.get(elements.pageTitle).should("have.text", "Add/Remove Elements");
    return this;
  }
}

export default new AddRemove();
