let elements = {
  heading: "h3",
  actionBox: "#hot-spot",
  alertText: "You selected a context menu",
};

class ContextMenu {
  validateHeading() {
    cy.get(elements.heading).should("have.text", "Context Menu");
    return this;
  }

  RightClickActionBox() {
    cy.get(elements.actionBox).rightclick({ force: true });
    return this;
  }

  validateAlert() {
    // cy.on("window:alert", (al) => {
    //   expect(al).to.contains("You selected a context menu");
    // });

    cy.on("window:alert", cy.stub().as("contextAlert"));
    cy.get("@contextAlert").should(
      "have.been.calledOnceWith",
      elements.alertText
    );
    return this;
  }
}
export default new ContextMenu();
