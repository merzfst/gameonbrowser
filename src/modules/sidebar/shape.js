import createElement from "../../tools/createElement";

class Shape {
  constructor(grid, name) {
    this.grid = grid;
    this.name = name;
  }

  createShape(shapeArray) {
    let shape = createElement("div", "shape");

    shapeArray.forEach((row, rowIndex) => {
      let rowDiv = createElement("div", "row");
      row.forEach((cell, cellIndex) => {
        let cellDiv = createElement("div", "sideCell");
        if (cell.type === 1) {
          cellDiv.classList.add("filled");
          cellDiv.style.backgroundColor = cell.color;
        }
        rowDiv.appendChild(cellDiv);
      });
      shape.appendChild(rowDiv);
    });

    return shape;
  }
}

export default Shape;
