let elements = {
  boxA: "#column-a",
  boxB: "#column-b",
};

class DragDrop {
  dragfromAtoB() {
    cy.get(elements.boxA).trigger("drag"); //TBD
  }
}

export default new AddRemove();
