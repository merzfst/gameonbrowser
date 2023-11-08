import "./shape&sidebar.css";
import createButtons from "../grid/buttons";
import Shape from "./shape";
import { buildShape } from "../grid/elementManagement";
import createElement from "../../tools/createElement";
import buildings from "../../buildings/buildings.json";
import allBuildingsType from "../../buildings/allBuildingsType.json";

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

  function createBuildingTypeButtons(buildingTypes) {
    let buttons = {};
    buildingTypes[0].types.forEach((type) => {
      let button = createElement("button", "buildingTypeButton", type);
      button.addEventListener("click", () => openBuildingTypeWindow(type));
      buttons[type] = button;
      sidebar.appendChild(button);
    });
    return buttons;
  }

  function openBuildingTypeWindow(type) {
    let existingWindow = document.querySelector(".buildingTypeWindow");
    if (existingWindow) {
      document.body.removeChild(existingWindow);
    }
    let window = createElement("div", "buildingTypeWindow");
    let buildingsOfType = buildings.filter(
      (building) => building.type === type
    );
    buildingsOfType.forEach((building) => {
      let shape = new Shape(grid, building.name, building.shape);
      let shapeElement = shape.createShape(building.shape);
      let shapeButton = createElement(
        "button",
        "shapeButton",
        "Построить: " + shape.name
      );
      shapeButton.addEventListener(
        "click",
        () => {
          let clonedShapeForGrid = shapeElement.cloneNode(true);
          clonedShapeForGrid.classList.add("pulse");
          clonedShapeForGrid.name = shape.name;
          buildShape.bind(grid)(clonedShapeForGrid);
          shapeButton.blur();
          document.body.removeChild(window);
        },
        false
      );
      window.appendChild(shapeElement);
      window.appendChild(shapeButton);
    });
    let closeButton = createElement("button", "closeButton", "X");
    closeButton.addEventListener("click", () =>
      document.body.removeChild(window)
    );
    window.appendChild(closeButton);
    document.body.appendChild(window);
    setTimeout(() => (window.style.opacity = "1"), 0);
  }

  let buildingTypes = [...new Set(buildings.map((building) => building.type))];
  let buildingTypeButtons = createBuildingTypeButtons(allBuildingsType);

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
}

export default createSidebar;
