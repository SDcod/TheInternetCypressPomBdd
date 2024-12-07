/// <reference types='cypress'/>

let element = {
  pageHeading: ".heading",
  pageSubHeading: "#content > h2",
  ABTesting: "A/B Testing",
  addRemoveElements: "Add/Remove Elements",
  basicAuth: "Basic Auth",
  challengingDom: "Challenging DOM",
  checkboxes: "Checkboxes",
  contexMenu: "Context Menu",
  dragAndDrop: "Drag and Drop",
  dropdown: "href='/dropdown'",
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
