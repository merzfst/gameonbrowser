export default function createElement(tag, className, text) {
  const element = document.createElement(tag);
  element.classList.add(className);
  text ? (element.innerHTML = text) : null;
  return element;
}
