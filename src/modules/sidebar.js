import createButtons from "./buttons";
import Shape from "./shape";

function createSidebar(grid) {
  let sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  let { zoomInButton, zoomOutButton, centerButton } = createButtons(grid);

  sidebar.innerHTML = "<h1>My Sidebar</h1><p>Some content...</p>";

  document.body.appendChild(sidebar);

  function openSidebar() {
    zoomInButton.style.right = "275px";
    zoomOutButton.style.right = "275px";
    centerButton.style.right = "275px";
    sidebar.style.right = "0px";
  }

  function closeSidebar() {
    zoomInButton.style.right = "75px";
    zoomOutButton.style.right = "75px";
    centerButton.style.right = "75px";
    sidebar.style.right = "-250px";
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
  let shape = new Shape(grid);
  let shapeArray = [
    [1, 1, 1],
    [0, 1, 0],
    [1, 1, 1],
  ];
  let createdShape = shape.createShape(shapeArray);
  shape.displayShapeInSidebar(createdShape);

  let shapeButton = document.createElement("button");
  shapeButton.classList.add("shapeButton");
  shapeButton.innerHTML = "Добавить строение";
  sidebar.appendChild(shapeButton);

  shapeButton.addEventListener(
    "click",
    () => {
      let shapeElement = document.querySelector(".shape");
      let clonedShape = shapeElement.cloneNode(true);
      grid.buildShape(clonedShape);
    },
    false
  );
}

export default createSidebar;
