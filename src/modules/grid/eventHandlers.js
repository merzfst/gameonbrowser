import getShapeDimensionsFromDOM from "../../tools/dimensions";
import { zoomIn, zoomOut } from "./scaling";

export function addDragEventListeners() {
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
        zoomIn.bind(this)();
      } else {
        zoomOut.bind(this)();
      }
      e.preventDefault();
    },
    { passive: false }
  );
}

export function keydownHandler(e) {
  let newCellY = 0;
  let newCellX = 0;
  let newCellKey = 0;
  if (!this.hasActiveShape) return;
  let step = this.cellSize;
  let { width, height } = getShapeDimensionsFromDOM(this.shape);
  this.width = width;
  this.height = height;
  width = width * this.cellSize;
  height = height * this.cellSize;
  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;

  switch (e.key) {
    case "ArrowUp":
      newCellY = this.shapeCellY + 1;
      newCellKey = `${this.shapeCellX},${newCellY}`;
      if (this.cells[newCellKey]) {
        this.shapeCellY = newCellY;
        this.shape.style.top = `${
          ((this.sectorSize - 0.5) / 2 - newCellY) * this.cellSize + 102
        }px`;
        if (parseInt(this.shape.style.top) < this.gridElement.scrollTop) {
          this.gridElement.scrollTop = this.gridElement.scrollTop - step;
        }
      }
      break;
    case "ArrowDown":
      newCellY = this.shapeCellY - 1;
      newCellKey = `${this.shapeCellX},${newCellY}`;
      if (this.cells[newCellKey]) {
        this.shapeCellY = newCellY;
        this.shape.style.top = `${
          ((this.sectorSize - 0.5) / 2 - newCellY) * this.cellSize + 102
        }px`;
        if (
          parseInt(this.shape.style.top) >
          this.gridElement.scrollTop + viewportHeight / this.scale - height
        ) {
          this.gridElement.scrollTop = this.gridElement.scrollTop + step;
        }
      }
      break;
    case "ArrowLeft":
      newCellX = this.shapeCellX - 1;
      newCellKey = `${newCellX},${this.shapeCellY}`;
      if (this.cells[newCellKey]) {
        this.shapeCellX = newCellX;
        this.shape.style.left = `${
          ((this.sectorSize - 0.5) / 2 + newCellX) * this.cellSize + 102
        }px`;
        if (parseInt(this.shape.style.left) < this.gridElement.scrollLeft) {
          this.gridElement.scrollLeft = this.gridElement.scrollLeft - step;
        }
      }
      break;
    case "ArrowRight":
      newCellX = this.shapeCellX + 1;
      newCellKey = `${newCellX},${this.shapeCellY}`;
      if (this.cells[newCellKey]) {
        this.shapeCellX = newCellX;
        this.shape.style.left = `${
          ((this.sectorSize - 0.5) / 2 + newCellX) * this.cellSize + 102
        }px`;
        if (
          parseInt(this.shape.style.left) >
          this.gridElement.scrollLeft + viewportWidth / this.scale - width
        ) {
          this.gridElement.scrollLeft = this.gridElement.scrollLeft + step;
        }
      }
      break;
    case "Enter":
      this.placeShape.call(this);
      break;
    case "Escape":
      this.removeButtonsAndShape();
      break;
  }
}

export function removeButtonsAndShape() {
  this.hasActiveShape = false;
  this.shapeCellX = 0;
  this.shapeCellY = 0;

  const buttonContainer = document.querySelector(".button-container");
  if (buttonContainer) {
    buttonContainer.remove();
  }

  const shape = this.gridElement.querySelector(".shape");
  if (shape) {
    shape.remove();
  }
  document.removeEventListener("keydown", this.keydownHandler);
}
