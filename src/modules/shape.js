class Shape {
  constructor(grid, name) {
    this.grid = grid;
    this.name = name;
  }

  createShape(shapeArray) {
    let shape = document.createElement("div");
    shape.classList.add("shape");

    shapeArray.forEach((row, rowIndex) => {
      let rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      row.forEach((cell, cellIndex) => {
        let cellDiv = document.createElement("div");
        cellDiv.classList.add("sideCell");
        if (cell === 1) {
          cellDiv.classList.add("filled");
        }
        rowDiv.appendChild(cellDiv);
      });
      shape.appendChild(rowDiv);
    });

    return shape;
  }
}

export default Shape;
