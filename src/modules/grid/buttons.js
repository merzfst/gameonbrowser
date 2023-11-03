import createElement from "../../tools/createElement";
import { zoomIn, zoomOut, centerScroll } from "./scaling";

class Button {
  constructor(buttonClass, innerHTML, clickFunction) {
    let button = createElement("button", buttonClass, innerHTML);
    button.addEventListener("click", clickFunction);
    document.body.appendChild(button);
    return button;
  }
}

function createButtons(grid) {
  let zoomInButton = new Button("zoomButtons", "+", function () {
    zoomIn.bind(grid)();
  });

  let zoomOutButton = new Button("zoomButtons", "-", function () {
    zoomOut.bind(grid)();
  });
  zoomOutButton.style.bottom = "100px";

  let centerButton = new Button("zoomButtons", "/", function () {
    centerScroll.bind(grid)();
  });
  centerButton.style.bottom = "50px";

  return { zoomInButton, zoomOutButton, centerButton };
}

export default createButtons;
