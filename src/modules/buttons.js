class Button {
  constructor(buttonClass, innerHTML, clickFunction) {
    let button = document.createElement("button");
    button.classList.add(buttonClass);
    button.innerHTML = innerHTML;
    button.addEventListener("click", clickFunction);
    document.body.appendChild(button);
    return button;
  }
}

function createButtons(grid) {
  let zoomInButton = new Button("zoomButtons", "+", function () {
    grid.zoomIn();
  });

  let zoomOutButton = new Button("zoomButtons", "-", function () {
    grid.zoomOut();
  });
  zoomOutButton.style.bottom = "100px";

  let centerButton = new Button("zoomButtons", "/", function () {
    grid.centerScroll();
  });
  centerButton.style.bottom = "50px";

  return { zoomInButton, zoomOutButton, centerButton };
}

export default createButtons;
