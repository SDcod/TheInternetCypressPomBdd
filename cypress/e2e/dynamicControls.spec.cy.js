import DynamicControls from "../pages/DynamicControls";
import HomePage from "../pages/HomePage";

describe("Dynamic Controls", () => {
  beforeEach(() => {
    HomePage.visitHomePage();
    HomePage.clickDynamicControls();
  });
  it("Toggle add and removal of checkbox", () => {
    DynamicControls.verifyPageTitle().shouldCheckBoxVisible(true);
    DynamicControls.clickRemoveBtn();
    DynamicControls.shouldCheckBoxVisible(false);
    DynamicControls.validateCheckBoxMessage("It's gone!");
    DynamicControls.clickAddBtn().validateCheckBoxMessage("It's back!");
    DynamicControls.validateAddedCheckbox();
  });
});
