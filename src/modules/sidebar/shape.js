import createElement from "../../tools/createElement";

class Shape {
  constructor(grid, name, shape, value, limit) {
    this.grid = grid;
    this.name = name;
    this.shape = shape;
    this.value = value;
    this.limit = limit;
  }

  createShape(shapeArray) {
    let shape = createElement("div", "shape");

    shapeArray.forEach((row, rowIndex) => {
      let rowDiv = createElement("div", "row");
      row.forEach((cell, cellIndex) => {
        let cellDiv = createElement("div", "sideCell");
        cellDiv.classList.add("sprite", cell.imageClass);
        rowDiv.appendChild(cellDiv);
      });
      shape.appendChild(rowDiv);
    });

    return shape;
  }
}

export default Shape;
