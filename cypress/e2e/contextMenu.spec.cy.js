/// <reference types="cypress" />

import ContextMenu from "../pages/ContextMenu";
import HomePage from "../pages/HomePage";

describe("context menu page", () => {
  beforeEach(() => {
    HomePage.visitHomePage().clickContextMenu();
    ContextMenu.validateHeading();
  });

  it("context menu action", () => {
    ContextMenu.RightClickActionBox().validateAlert();
  });
});
