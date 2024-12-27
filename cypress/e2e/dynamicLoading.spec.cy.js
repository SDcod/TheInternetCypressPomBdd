import DynamicLoading from "../pages/DynamicLoading";
import HomePage from "../pages/HomePage";

describe("Dynamic Loading", () => {
  beforeEach(() => {
    HomePage.visitHomePage();
    HomePage.clidkDynamicLoading();
  });
  it("Example One Scenario", () => {
    //navigate to example one
    DynamicLoading.verifyPageTitle().clickExample(0);

    //verify element exist but not visible
    DynamicLoading.verifyElementExistButNotVisible()
      .clickStart() //click start button
      .verifyElementExistAndVisible(); //verify element exist and is also visible
  });

  it("Example Two Scenario", () => {
    //navigate to example two
    DynamicLoading.verifyPageTitle().clickExample(1);

    //verify element does not exists
    DynamicLoading.verifyElementNotExist()
      .clickStart() //click start button
      .verifyElementExistAndVisible(); //verify element exist and is also visible
  });
});
