class Shape {
  constructor(grid) {
    this.grid = grid;
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

  displayShapeInSidebar(shape) {
    let sidebar = document.querySelector(".sidebar");
    sidebar.appendChild(shape);
  }
}

export default Shape;
