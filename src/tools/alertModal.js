import "./modal.css";
import createElement from "./createElement";

export default function alertModal(message) {
  const modal = createElement("div", "modal");
  const backdrop = createElement("div", "modal-backdrop");

  const text = createElement("p");
  text.textContent = message;
  modal.appendChild(text);

  const closeButton = createElement("button", "close-button", "Закрыть");
  closeButton.addEventListener("click", () => {
    document.body.removeChild(modal);
    document.body.removeChild(backdrop);
  });
  modal.appendChild(closeButton);

  document.body.appendChild(backdrop);
  document.body.appendChild(modal);
}
