import { compScale } from "../../tools/compcale";
import Cell from "./cells";
import { centerScroll } from "./scaling";
import createElement from "../../tools/createElement";
import buildings from "../../buildings/buildings.json";
import "./sprite.css";
import alertModal from "../../tools/alertModal";

export function loadCells(sectorSize, startX, startY) {
  const fragment = document.createDocumentFragment();
  for (let y = 0; y < sectorSize; y++) {
    for (let x = 0; x < sectorSize; x++) {
      const cell = new Cell(startX + x, startY - y);
      this.cells[`${startX + x},${startY - y}`] = cell;
      fragment.append(cell.element);
      cell.element.name = "Земля";
      cell.element.imageClass = "bg-earth1";
      cell.element.idCell = "0";
      cell.element.classList.add("sprite", cell.element.imageClass);

      cell.element.addEventListener("mouseover", (e) => {
        this.tooltipTimeout = setTimeout(() => {
          clearTimeout(this.tooltipTimeout);
          cell.element.classList.add("pulse");
          this.gridElement.append(this.tooltip);
          const xCoordinate = cell.element.dataset.x;
          const yCoordinate = cell.element.dataset.y;
          this.tooltip.innerHTML = `${cell.element.name} </br> Координаты: (${xCoordinate}, ${yCoordinate})`;
          compScale.bind(this)();
          const rect = cell.element.getBoundingClientRect();
          this.tooltip.style.left = `${window.scrollX + rect.left + 40}px`;
          this.tooltip.style.top = `${window.scrollY + rect.top - 40}px`;
          this.tooltip.style.fontSize = `${14 / this.scale}px`;
          this.tooltip.style.padding = `${10 / this.scale}px`;
          this.tooltip.style.display = "block";
        }, 500);
      });

      cell.element.addEventListener("mouseout", () => {
        clearTimeout(this.tooltipTimeout);
        cell.element.classList.remove("pulse");
        this.tooltip.remove();
      });
    }
  }
  this.gridElement.appendChild(fragment);

  const savedCells = localStorage.getItem("cells");

  if (savedCells) {
    const cellData = JSON.parse(savedCells);
    for (let key in cellData) {
      if (this.cells[key]) {
        const cell = this.cells[key];
        cell.isOccupied = cellData[key].isOccupied;
        cell.element.name = cellData[key].element.name;
        cell.element.imageClass = cellData[key].element.imageClass;
        cell.element.idCell = cellData[key].element.idCell;
        let lastClass = cell.element.classList.item(
          cell.element.classList.length - 1
        );
        cell.element.classList.remove(lastClass);
        cell.element.classList.add("sprite", cell.element.imageClass);
      }
    }
  }
}

export function createButtons() {
  const buttonContainer = createElement("div", "button-container");

  const checkButton = createElement("button", "check-button", "✓");

  const crossButton = createElement("button", "cross-button", "✗");

  buttonContainer.append(checkButton, crossButton);

  document.body.appendChild(buttonContainer);

  buttonContainer.style.position = "absolute";

  crossButton.addEventListener("click", this.removeButtonsAndShape);

  checkButton.addEventListener("click", this.placeShape);
}

export function placeShape() {
  const rows = Array.from(this.shape.children);
  let canPlaceShape = true;

  for (let y = 0; y < rows.length; y++) {
    const cells = Array.from(rows[y].children);
    for (let x = 0; x < cells.length; x++) {
      const cellX = this.shapeCellX + x;
      const cellY = this.shapeCellY - y;

      const cellKey = `${cellX},${cellY}`;

      if (this.cells[cellKey] && this.cells[cellKey].isOccupied) {
        canPlaceShape = false;
        this.shape.classList.add("warning");
        setTimeout(() => {
          this.shape.classList.remove("warning");
        }, 500);
      }
    }
  }

  if (canPlaceShape) {
    let currentCount = Object.values(this.cells).filter(
      (cell) => cell.element.idCell === this.shape.shape[0][0].id
    ).length;
    let buildingLimit = buildings.find(
      (building) => building.shape[0][0].id === this.shape.shape[0][0].id
    ).limit;
    if (currentCount >= buildingLimit) {
      alertModal("Превышен лимит постройки для этого типа зданий");
      return;
    }

    for (let y = 0; y < rows.length; y++) {
      const cells = Array.from(rows[y].children);
      for (let x = 0; x < cells.length; x++) {
        const cellX = this.shapeCellX + x;
        const cellY = this.shapeCellY - y;

        const cellKey = `${cellX},${cellY}`;

        if (this.cells[cellKey]) {
          this.cells[cellKey].element.name = this.shape.name;
          this.cells[cellKey].element.idCell = "0";
          if (this.shape.shape[y][x].id) {
            this.cells[cellKey].element.idCell = this.shape.shape[y][x].id;
          }
          this.cells[cellKey].isOccupied = true;
          let lastClass = this.cells[cellKey].element.classList.item(
            this.cells[cellKey].element.classList.length - 1
          );
          this.cells[cellKey].element.classList.remove(lastClass);
          lastClass = cells[x].classList.item(cells[x].classList.length - 1);
          this.cells[cellKey].element.classList.add(lastClass);
          this.cells[cellKey].element.imageClass = lastClass;
        }
      }
    }

    let occupiedCells = {};
    for (let key in this.cells) {
      if (this.cells[key].isOccupied) {
        occupiedCells[key] = this.cells[key];
      }
    }
    localStorage.setItem("cells", JSON.stringify(occupiedCells));
  }
}

export function buildShape(shape) {
  centerScroll.bind(this)();
  let { top, left, halfHeight, halfWidth } = centerScroll.bind(this)();
  let cells = shape.querySelectorAll(".sideCell");
  cells.forEach((cell) => {
    cell.style.width = `${this.cellSize}px`;
    cell.style.height = `${this.cellSize}px`;
  });

  let infoElement = createElement(
    "div",
    "infoElement",
    "Размещается: " + shape.name + ", стоимость: " + shape.value + " DT"
  );

  shape.append(infoElement);

  this.removeButtonsAndShape();
  document.addEventListener("keydown", this.keydownHandler);

  this.shape = shape;
  this.shape.style.position = "absolute";
  this.shape.style.left = `${left + halfWidth / this.scale - 35}px`;
  this.shape.style.top = `${top + halfHeight / this.scale - 35}px`;

  this.hasActiveShape = true;
  createButtons.bind(this)();

  this.gridElement.appendChild(this.shape);
}
