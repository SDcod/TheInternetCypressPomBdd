let elements = {
  boxA: "#column-a",
  boxB: "#column-b",
  boxA_Header: "#column-a>header",
  boxB_Header: "#column-b>header",
};

class DragDrop {
  dragfromAtoB() {
    // cy.get(elements.boxA).drag(elements.boxB); did not work in this case
    cy.get("#column-a").dragTo("#column-b");
    return this;
  }

  validateDragAtoB() {
    cy.get(elements.boxA_Header).should("have.text", "B");
    cy.get(elements.boxB_Header).should("have.text", "A");
    return this;
  }
}

export default new DragDrop();
