import Checkboxes from "../pages/Checkboxes";
import HomePage from "../pages/HomePage";

beforeEach(() => {
  HomePage.visitHomePage().clickCheckBoxes();
  Checkboxes.validateHeading();
});

describe("checkbox page", () => {
  it("defaultCheck", () => {
    Checkboxes.validateDefaultCheck();
  });

  it("checkFirst", () => {
    Checkboxes.checkFirstCheckbox();
  });

  it("uncheckFirst", () => {
    Checkboxes.uncheckFirstCheckbox();
  });
  it("uncheckAndCheckSecond", () => {
    Checkboxes.uncheckSecondCheckbox().checkSecondCheckbox();
  });
  it("uncheckSecond", () => {
    Checkboxes.uncheckSecondCheckbox();
  });
});
