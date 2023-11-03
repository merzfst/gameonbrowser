import { compScale } from "../../tools/compcale";

export function zoomIn() {
  if (this.scale == 0.5) {
    this.gridElement.style.zoom = `75%`;
    compScale.bind(this)();
    this.gridElement.style.height = `${100 / this.scale}vh`;
  } else if (this.scale == 0.75) {
    this.gridElement.style.zoom = `100%`;
    compScale.bind(this)();
    this.gridElement.style.height = `${100 / this.scale}vh`;
  }
}

export function zoomOut() {
  if (this.scale == 1) {
    this.gridElement.style.zoom = `75%`;
    compScale.bind(this)();
    this.gridElement.style.height = `${100 / this.scale}vh`;
  } else if (this.scale == 0.75) {
    this.gridElement.style.zoom = `50%`;
    compScale.bind(this)();
    this.gridElement.style.height = `${100 / this.scale}vh`;
  }
}

export function centerScroll() {
  const halfWidth = window.innerWidth / 2;
  const halfHeight = window.innerHeight / 2;
  compScale.bind(this)();
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
