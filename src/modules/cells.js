class Cell {
  constructor(x, y) {
    this.element = document.createElement("div");
    this.element.classList.add("cell");
    this.element.dataset.x = x;
    this.element.dataset.y = y;
  }
}

export default Cell;
