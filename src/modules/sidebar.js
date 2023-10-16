import createButtons from "./buttons";
import Shape from "./shape";

function createSidebar(grid) {
  let sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  let { zoomInButton, zoomOutButton, centerButton } = createButtons(grid);

  sidebar.innerHTML = "<h1>Меню построек</h1><p>Ваш баланс: ...</p>";

  document.body.appendChild(sidebar);

  function openSidebar() {
    zoomInButton.style.right = "375px";
    zoomOutButton.style.right = "375px";
    centerButton.style.right = "375px";
    sidebar.style.right = "0px";
  }

  function closeSidebar() {
    zoomInButton.style.right = "75px";
    zoomOutButton.style.right = "75px";
    centerButton.style.right = "75px";
    sidebar.style.right = "-350px";
  }

  function addShapeToSidebar(shape, shapeElement) {
    let shapeContainer = document.createElement("div");
    shapeContainer.classList.add("shapeContainer");

    let clonedShape = shapeElement.cloneNode(true);
    shapeContainer.appendChild(clonedShape);

    let shapeButton = document.createElement("button");
    shapeButton.classList.add("shapeButton");
    shapeButton.innerHTML = "Построить: " + shape.name;
    shapeContainer.appendChild(shapeButton);

    shapeButton.addEventListener(
      "click",
      () => {
        let clonedShapeForGrid = clonedShape.cloneNode(true);
        clonedShapeForGrid.classList.add("pulse");
        grid.buildShape(clonedShapeForGrid);
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
  sidebar.addEventListener("mouseover", function () {
    openSidebar();
  });

  sidebar.addEventListener("mouseout", function () {
    closeSidebar();
  });

  function createBuild(shape, array) {
    let createdShape = shape.createShape(array);
    addShapeToSidebar(shape, createdShape);
  }

  let build1Array = [
    [1, 1, 1],
    [0, 1, 0],
    [1, 1, 1],
  ];
  let build1 = new Shape(grid, "Ратуша");

  let build2Array = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  let build2 = new Shape(grid, "Кринж");

  let build3Array = [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
  ];
  let build3 = new Shape(grid, "Кринж");

  createBuild(build3, build3Array);
  createBuild(build2, build2Array);
  createBuild(build1, build1Array);
}

export default createSidebar;
