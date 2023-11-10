import createElement from "../../tools/createElement";

class Cell {
  constructor(x, y) {
    this.element = createElement("div", "cell");
    this.element.dataset.x = x;
    this.element.dataset.y = y;
    this.isOccupied = false;
  }
}

export default Cell;
