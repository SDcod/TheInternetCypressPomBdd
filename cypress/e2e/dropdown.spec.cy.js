import Dropdown from "../pages/Dropdown";
import HomePage from "../pages/HomePage";

describe("drag drop page", () => {
  beforeEach(() => {
    HomePage.visitHomePage().clickDropdown();
  });
  it("Selecting option 1", () => {
    Dropdown.selectOption1();
  });
  it("Selecting option 2", () => {
    Dropdown.selectOption2();
  });
});
