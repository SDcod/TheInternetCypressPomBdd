/// <reference types='cypress'/>

let elements = {
  pageHeading: ".heading",
  pageSubHeading: "#content > h2",
  ABTesting: "A/B Testing",
  addRemoveElements: "Add/Remove Elements",
  basicAuth: "Basic Auth",
  challengingDom: "Challenging DOM",
  checkboxes: "Checkboxes",
  contexMenu: "Context Menu",
  dragAndDrop: "Drag and Drop",
  dropdown: "[href='/dropdown']",
  dynamicLoading: "Dynamic Loading",
  fileDownload: "File Download",
  fileUpload: "File Upload",
  formAuthentication: "Form Authentication",
  frames: "Frames",
  horizontalSlider: "Horizontal Slider",
  hovers: "Hovers",
  inputs: "Inputs",
  JQueryUIMenu: "JQueryUI - Menu",
  JsAlerts: "JavaScript Alerts",
  JsOnloadEventError: "JavaScript onload event error",
  keyPresses: "Key Presses",
  multipleWindows: "Multiple Windows",
  nestedFrames: "Nested Frames",
  notificationMessages: "Notification Messages",
  redirectLink: "Redirect Link",
  shadowDom: "Shadow DOM",
  typo: "Typos",
  sortableDataTables: "Sortable Data Tables",
  WYSIWYG_Editor: "WYSIWYG Editor",
};

class HomePage {
  visitHomePage() {
    cy.visit("/");
    return this;
  }

  validateHeading(value) {
    cy.get(elements.pageHeading).should("have.text", value);
    return this;
  }
  validateSubHeading(value) {
    cy.get(elements.pageSubHeading).should("have.text", value);
    return this;
  }

  clickABTesting() {
    cy.contains(elements.ABTesting).click({ force: true });
    return this;
  }
  clickAddRemove() {
    cy.contains(elements.addRemoveElements).click({ force: true });
    return this;
  }
  clickBasicAuth() {
    cy.contains(elements.basicAuth).click({ force: true });
    return this;
  }
  clickCheckBoxes() {
    cy.contains(elements.checkboxes).click({ force: true });
    return this;
  }
  clickContextMenu() {
    cy.contains(elements.contexMenu).click({ force: true });
    return this;
  }
  clickDragAndDrop() {
    cy.contains(elements.dragAndDrop).click({ force: true });
    return this;
  }
  clickDropdown() {
    cy.get(elements.dropdown).click({ force: true });
    return this;
  }
}

//might be helpful for drag and drop
// Cypress.Commands.add("dragTo", { prevSubject: "element" }, (subject, targetEl) => {
//     const dataTransfer = new DataTransfer();
//     cy.get(subject).trigger('dragstart',{
//        dataTransfer
//       });
//     cy.get(targetEl).trigger('drop',{
//          dataTransfer
//     })
//   }
// );

export default new HomePage();
