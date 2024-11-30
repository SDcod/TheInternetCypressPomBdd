/// <reference types='cypress'/>

let element = {
  pageHeading: ".heading",
  pageSubHeading: "#content > h2",
  ABTesting: "A/B Testing",
};

class HomePage {
  visitHomePage() {
    cy.visit("/");
  }

  validateHeading(value) {
    cy.get(element.pageHeading).should("have.text", value);
  }
  validateSubHeading(value) {
    cy.get(element.pageSubHeading).should("have.text", value);
  }

  clickABTesting() {
    cy.contains(element.ABTesting).click({ force: true });
  }
}

export default new HomePage();
