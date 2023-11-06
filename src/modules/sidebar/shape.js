import createElement from "../../tools/createElement";

class Shape {
  constructor(grid, name, shape) {
    this.grid = grid;
    this.name = name;
    this.shape = shape;
  }

  createShape(shapeArray) {
    let shape = createElement("div", "shape");

    shapeArray.forEach((row, rowIndex) => {
      let rowDiv = createElement("div", "row");
      row.forEach((cell, cellIndex) => {
        let cellDiv = createElement("div", "sideCell");
        if (cell.type === 1) {
          // cellDiv.classList.add("filled");
          // cellDiv.style.backgroundColor = cell.color;
          cellDiv.classList.add("sprite", cell.imageClass);
        }
        rowDiv.appendChild(cellDiv);
      });
      shape.appendChild(rowDiv);
    });

    return shape;
  }
}

export default Shape;
