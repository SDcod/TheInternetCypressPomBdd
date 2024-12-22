import { expect } from "chai";

let elements = {
  heading: "h3",
  checkboxForm: "#checkboxes",
};

class Checkboxes {
  validateHeading() {
    cy.get(elements.heading).then((e) => {
      const headingText = e.text();
      expect(headingText).to.equal("Checkboxes");
    });
    // .should("have.text", "Checkboxes");
    return this;
  }

  checkFirstCheckbox() {
    cy.get(elements.checkboxForm).within(($form) => {
      cy.get('input[type="checkbox"]')
        .eq(0)
        .check({ force: true })
        .should("be.checked");
    });
    return this;
  }

  uncheckFirstCheckbox() {
    cy.get(elements.checkboxForm).within(($form) => {
      cy.get('input[type="checkbox"]')
        .eq(0)
        .uncheck({ force: true })
        .should("not.be.checked");
    });
    return this;
  }
  checkSecondCheckbox() {
    cy.get(elements.checkboxForm).within(($form) => {
      cy.get('input[type="checkbox"]')
        .eq(1)
        .check({ force: true })
        .should("be.checked");
    });
    return this;
  }
  uncheckSecondCheckbox() {
    cy.get(elements.checkboxForm).within(($form) => {
      cy.get('input[type="checkbox"]')
        .eq(1)
        .uncheck({ force: true })
        .should("not.be.checked");
    });
    return this;
  }
  validateDefaultCheck() {
    cy.get(elements.checkboxForm).within(($form) => {
      cy.get('input[type="checkbox"]').eq(1).should("be.checked");
    });
    return this;
  }
}

export default new Checkboxes();
