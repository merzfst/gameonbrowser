class Cell {
  constructor(x, y) {
    this.element = document.createElement("div");
    this.element.classList.add("cell");
    this.element.dataset.x = x;
    this.element.dataset.y = y;
    //parent.appendChild(this.element);
  }
}

export default Cell;