import Cell from "./cells";
import getShapeDimensionsFromDOM from "../tools/dimensions";

class Grid {
  constructor() {
    this.cells = {};
    this.gridElement = document.createElement("div");
    this.gridElement.classList.add("grid");
    this.tooltip = document.createElement("div");
    this.tooltip.classList.add("tooltip");
    this.gridElement.appendChild(this.tooltip);
    this.tooltipTimeout = null;
    this.scale = 1;

    let sectorSize = 100;
    this.sectorSize = 100;
    this.cellSize = 50;

    let halfSectorSize = sectorSize / 2;

    let startCoordinateX = -halfSectorSize;
    let startCoordinateY = halfSectorSize;

    this.loadCells(sectorSize, startCoordinateX, startCoordinateY);
    this.addDragEventListeners();
  }

  compScale() {
    this.scale = parseFloat(getComputedStyle(this.gridElement).zoom);
  }

  loadCells(sectorSize, startX, startY) {
    const fragment = document.createDocumentFragment();
    for (let y = 0; y < sectorSize; y++) {
      for (let x = 0; x < sectorSize; x++) {
        const cell = new Cell(startX + x, startY - y);
        this.cells[`${startX + x},${startY - y}`] = cell;
        fragment.appendChild(cell.element);

        cell.element.addEventListener("mouseover", (e) => {
          this.tooltipTimeout = setTimeout(() => {
            clearTimeout(this.tooltipTimeout);
            const xCoordinate = cell.element.dataset.x;
            const yCoordinate = cell.element.dataset.y;
            this.tooltip.innerText = `Координаты: (${xCoordinate}, ${yCoordinate})`;
            this.compScale();
            this.tooltip.style.left = `${e.clientX / this.scale + 20}px`;
            this.tooltip.style.top = `${e.clientY / this.scale - 30}px`;
            this.tooltip.style.fontSize = `${14 / this.scale}px`;
            this.tooltip.style.padding = `${10 / this.scale}px`;
            this.tooltip.style.display = "block";
          }, 500);
        });

        cell.element.addEventListener("mouseout", () => {
          clearTimeout(this.tooltipTimeout);
          this.tooltip.style.display = "none";
        });
      }
    }
    this.gridElement.appendChild(fragment);
    this.cells["0,0"].element.style.backgroundColor = "red";
  }

  addDragEventListeners() {
    let isMouseDown = false;
    let startX, startY, scrollLeft, scrollTop;

    this.gridElement.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      startX = e.pageX;
      startY = e.pageY;
      scrollLeft = this.gridElement.scrollLeft;
      scrollTop = this.gridElement.scrollTop;
      this.gridElement.classList.add("no-select");
    });

    this.gridElement.addEventListener("mouseup", () => {
      isMouseDown = false;
      this.gridElement.classList.remove("no-select");
    });

    this.gridElement.addEventListener("mousemove", (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX;
      const y = e.pageY;
      const walkX = (x - startX) * 1;
      const walkY = (y - startY) * 1;
      this.gridElement.scrollLeft = scrollLeft - walkX;
      this.gridElement.scrollTop = scrollTop - walkY;
    });

    this.gridElement.addEventListener(
      "wheel",
      (e) => {
        if (e.deltaY < 0) {
          this.zoomIn();
        } else {
          this.zoomOut();
        }
        e.preventDefault();
      },
      { passive: false }
    );
  }

  centerScroll() {
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;
    this.compScale();
    let left =
      (this.sectorSize * this.cellSize) / 2 -
      halfWidth / this.scale +
      this.cellSize / 2 +
      100;
    let top =
      (this.sectorSize * this.cellSize) / 2 -
      halfHeight / this.scale +
      this.cellSize / 2 +
      100;
    this.gridElement.scrollLeft = left;
    this.gridElement.scrollTop = top;
    return { top, left, halfHeight, halfWidth };
  }

  zoomOut() {
    if (this.scale == 1) {
      this.gridElement.style.zoom = `75%`;
      this.compScale();
      this.gridElement.style.height = `${100 / this.scale}vh`;
    } else if (this.scale == 0.75) {
      this.gridElement.style.zoom = `50%`;
      this.compScale();
      this.gridElement.style.height = `${100 / this.scale}vh`;
    }
  }

  zoomIn() {
    if (this.scale == 0.5) {
      this.gridElement.style.zoom = `75%`;
      this.compScale();
      this.gridElement.style.height = `${100 / this.scale}vh`;
    } else if (this.scale == 0.75) {
      this.gridElement.style.zoom = `100%`;
      this.compScale();
      this.gridElement.style.height = `${100 / this.scale}vh`;
    }
  }

  buildShape(shape) {
    let { top, left, halfHeight, halfWidth } = this.centerScroll();
    let cells = shape.querySelectorAll(".sideCell");
    cells.forEach((cell) => {
      cell.style.width = `${this.cellSize}px`;
      cell.style.height = `${this.cellSize}px`;
    });
    shape.style.position = "absolute";
    shape.style.left = `${left + halfWidth / this.scale - 35}px`;
    shape.style.top = `${top + halfHeight / this.scale - 35}px`;
    this.gridElement.appendChild(shape);

    window.addEventListener("keydown", (e) => {
      let step = this.cellSize;
      let gridWidth = this.sectorSize * this.cellSize;
      let gridHeight = this.sectorSize * this.cellSize;
      let { width, height } = getShapeDimensionsFromDOM(shape);
      width = width * this.cellSize;
      height = height * this.cellSize;

      let shapeTop = parseInt(shape.style.top);
      let shapeLeft = parseInt(shape.style.left);

      switch (e.key) {
        case "ArrowUp":
          if (shapeTop - step >= step) {
            shape.style.top = `${shapeTop - step}px`;
          }
          break;
        case "ArrowDown":
          if (shapeTop + height + step <= gridHeight + step * 2) {
            shape.style.top = `${shapeTop + step}px`;
          }
          break;
        case "ArrowLeft":
          if (shapeLeft - step >= step) {
            shape.style.left = `${shapeLeft - step}px`;
          }
          break;
        case "ArrowRight":
          if (shapeLeft + width + step <= gridWidth + step * 2) {
            shape.style.left = `${shapeLeft + step}px`;
          }
          break;
      }
    });
  }
}

export default Grid;
