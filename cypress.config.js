const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: ["cypress/e2e/*.feature", "cypress/e2e/*.spec.cy.js"],
    baseUrl: "https://the-internet.herokuapp.com/",
  },
});
