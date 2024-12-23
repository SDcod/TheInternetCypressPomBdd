let elements = {
  pageHeading: "h3",
  dropdownSelect: "#dropdown",
  option1: "Option 1",
  option2: "Option 2",
};

class Dropdown {
  validatePageHeading() {
    cy.get(elements.pageHeading).should("have.text", "Dropdown List");
    return this;
  }

  selectOption1() {
    cy.get(elements.dropdownSelect)
      .select(elements.option1)
      .should("have.value", "1");
    return this;
  }
  selectOption2() {
    cy.get(elements.dropdownSelect)
      .select(elements.option2)
      .should("have.value", "2");
    return this;
  }
}

export default new Dropdown();
