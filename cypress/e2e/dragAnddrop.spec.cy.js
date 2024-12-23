import DragDrop from "../pages/DragDrop";
import HomePage from "../pages/HomePage";

describe("drag drop page", () => {
  beforeEach(() => {
    HomePage.visitHomePage().clickDragAndDrop();
  });

  //using the custom command with dataTransfer
  it.only("drag from A to B", () => {
    DragDrop.dragfromAtoB().validateDragAtoB();
  });
});
