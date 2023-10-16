export default function getShapeDimensionsFromDOM(shapeElement) {
  let rows = shapeElement.getElementsByClassName("row");
  let height = rows.length;

  let cellsInFirstRow = rows[0].getElementsByClassName("sideCell");
  let width = cellsInFirstRow.length;

  return { width, height };
}
