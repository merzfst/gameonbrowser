export function compScale() {
  this.scale = parseFloat(getComputedStyle(this.gridElement).zoom);
}
