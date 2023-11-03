import "./shape&sidebar.css";
import createButtons from "../grid/buttons";
import Shape from "./shape";
import { buildShape } from "../grid/elementManagement";
import createElement from "../../tools/createElement";
import buildings from "../../buildings/buildings.json";

function createSidebar(grid) {
  let sidebar = createElement("div", "sidebar");
  let buttons = createButtons(grid);

  sidebar.innerHTML = "<h1>Меню построек</h1><p>Ваш баланс: ...</p>";

  document.body.appendChild(sidebar);

  function setButtonStyle(right) {
    Object.values(buttons).forEach((button) => {
      button.style.right = right;
    });
  }

  function openSidebar() {
    setButtonStyle("375px");
    sidebar.style.right = "0px";
  }

  function closeSidebar() {
    setButtonStyle("75px");
    sidebar.style.right = "-350px";
  }

  function addShapeToSidebar(shape, shapeElement) {
    let shapeContainer = createElement("div", "shapeContainer");
    shapeContainer.appendChild(shapeElement);

    let shapeButton = createElement(
      "button",
      "shapeButton",
      "Построить: " + shape.name
    );
    shapeButton.setAttribute("tabindex", "-1");
    shapeContainer.appendChild(shapeButton);

    shapeButton.addEventListener(
      "click",
      () => {
        let clonedShapeForGrid = shapeElement.cloneNode(true);
        clonedShapeForGrid.classList.add("pulse");
        clonedShapeForGrid.name = shape.name;
        buildShape.bind(grid)(clonedShapeForGrid);
        shapeButton.blur();
      },
      false
    );

    sidebar.appendChild(shapeContainer);
  }

  document.body.addEventListener("mousemove", function (event) {
    if (window.innerWidth - event.clientX < 25) {
      openSidebar();
    } else {
      if (!sidebar.contains(event.target)) {
        closeSidebar();
      }
    }
  });
  sidebar.addEventListener("mouseover", openSidebar);
  sidebar.addEventListener("mouseout", closeSidebar);

  buildings.forEach((building) => {
    let shape = new Shape(grid, building.name);
    let shapeElement = shape.createShape(building.shape);
    addShapeToSidebar(shape, shapeElement);
  });
}

export default createSidebar;
