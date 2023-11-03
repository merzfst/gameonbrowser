import createElement from "../../tools/createElement";
import {
  keydownHandler,
  addDragEventListeners,
  removeButtonsAndShape,
} from "./eventHandlers";
import "./grid.css";
import { loadCells, placeShape } from "./elementManagement";

class Grid {
  constructor() {
    this.cells = {};
    this.gridElement = createElement("div", "grid");
    this.tooltip = createElement("div", "tooltip");
    this.shapeCellX = 0;
    this.shapeCellY = 0;
    this.hasActiveShape = false;
    this.tooltipTimeout = null;
    this.scale = 1;

    let sectorSize = 100;
    this.sectorSize = 100;
    this.cellSize = 50;

    let halfSectorSize = sectorSize / 2;

    let startCoordinateX = -halfSectorSize;
    let startCoordinateY = halfSectorSize;

    this.loadCells = loadCells.bind(this);
    this.loadCells(sectorSize, startCoordinateX, startCoordinateY);
    this.addDragEventListeners = addDragEventListeners.bind(this);
    this.addDragEventListeners();
    this.removeButtonsAndShape = removeButtonsAndShape.bind(this);
    this.placeShape = placeShape.bind(this);
    this.keydownHandler = keydownHandler.bind(this);
  }
}

export default Grid;
