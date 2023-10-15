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
  let zoomInButton = new Button("zoomInButton", "+", function () {
    grid.zoomIn();
  });

  let zoomOutButton = new Button("zoomOutButton", "-", function () {
    grid.zoomOut();
  });

  let centerButton = new Button("centerButton", "/", function () {
    grid.centerScroll();
  });

  return { zoomInButton, zoomOutButton, centerButton };
}

export default createButtons;
