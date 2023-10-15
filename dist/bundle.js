/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/grid.js */ \"./src/modules/grid.js\");\n/* harmony import */ var _modules_sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sidebar.js */ \"./src/modules/sidebar.js\");\n\n\n\nconst grid = new _modules_grid_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ndocument.body.append(grid.gridElement);\ngrid.centerScroll();\n(0,_modules_sidebar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(grid);\n\n//# sourceURL=webpack://gameonbrowser/./src/index.js?");

/***/ }),

/***/ "./src/modules/buttons.js":
/*!********************************!*\
  !*** ./src/modules/buttons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Button {\n  constructor(buttonClass, innerHTML, clickFunction) {\n    let button = document.createElement(\"button\");\n    button.classList.add(buttonClass);\n    button.innerHTML = innerHTML;\n    button.addEventListener(\"click\", clickFunction);\n    document.body.appendChild(button);\n    return button;\n  }\n}\nfunction createButtons(grid) {\n  let zoomInButton = new Button(\"zoomInButton\", \"+\", function () {\n    grid.zoomIn();\n  });\n  let zoomOutButton = new Button(\"zoomOutButton\", \"-\", function () {\n    grid.zoomOut();\n  });\n  let centerButton = new Button(\"centerButton\", \"/\", function () {\n    grid.centerScroll();\n  });\n  return {\n    zoomInButton,\n    zoomOutButton,\n    centerButton\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createButtons);\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/buttons.js?");

/***/ }),

/***/ "./src/modules/cells.js":
/*!******************************!*\
  !*** ./src/modules/cells.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Cell {\n  constructor(x, y, parent) {\n    this.x = x;\n    this.y = y;\n    this.element = document.createElement(\"div\");\n    this.element.classList.add(\"cell\");\n    this.element.dataset.x = x;\n    this.element.dataset.y = y;\n    parent.appendChild(this.element);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/cells.js?");

/***/ }),

/***/ "./src/modules/grid.js":
/*!*****************************!*\
  !*** ./src/modules/grid.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cells */ \"./src/modules/cells.js\");\n\nclass Grid {\n  constructor() {\n    this.cells = {};\n    this.gridElement = document.createElement(\"div\");\n    this.gridElement.classList.add(\"grid\");\n    this.tooltip = document.createElement(\"div\");\n    this.tooltip.classList.add(\"tooltip\");\n    this.gridElement.appendChild(this.tooltip);\n    this.tooltipTimeout = null;\n    this.scale = 1;\n    let sectorSize = 100;\n    this.sectorSize = 100;\n    this.cellSize = 50;\n    let halfSectorSize = sectorSize / 2;\n    let startCoordinateX = -halfSectorSize;\n    let startCoordinateY = halfSectorSize;\n    this.loadCells(sectorSize, startCoordinateX, startCoordinateY);\n    this.addDragEventListeners();\n    this.gridElement.addEventListener(\"mouseover\", this.showCoordinates.bind(this));\n    this.gridElement.addEventListener(\"mouseout\", this.hideCoordinates.bind(this));\n  }\n  compScale() {\n    this.scale = parseFloat(getComputedStyle(this.gridElement).zoom);\n  }\n  showCoordinates(e) {\n    const cell = e.target;\n    if (cell.classList.contains(\"cell\")) {\n      this.tooltipTimeout = setTimeout(() => {\n        this.compScale();\n        this.tooltip.style.left = `${e.pageX / this.scale}px`;\n        this.tooltip.style.top = `${e.pageY / this.scale}px`;\n        this.tooltip.style.fontSize = `${14 / this.scale}px`;\n        this.tooltip.style.padding = `${10 / this.scale}px`;\n        this.tooltip.innerHTML = `x:${cell.dataset.x}<br>y:${cell.dataset.y}`;\n        this.tooltip.style.display = \"block\";\n      }, 500);\n    }\n  }\n  hideCoordinates() {\n    clearTimeout(this.tooltipTimeout);\n    this.tooltip.style.display = \"none\";\n  }\n  loadCells(sectorSize, startX, startY) {\n    for (let y = 0; y < sectorSize; y++) {\n      for (let x = 0; x < sectorSize; x++) {\n        const cell = new _cells__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startX + x, startY - y, this.gridElement);\n        this.cells[`${startX + x},${startY - y}`] = cell;\n        this.gridElement.appendChild(cell.element);\n      }\n    }\n    this.cells[\"0,0\"].element.style.backgroundColor = \"red\";\n  }\n  addDragEventListeners() {\n    let isMouseDown = false;\n    let startX, startY, scrollLeft, scrollTop;\n    this.gridElement.addEventListener(\"mousedown\", e => {\n      isMouseDown = true;\n      startX = e.pageX;\n      startY = e.pageY;\n      scrollLeft = this.gridElement.scrollLeft;\n      scrollTop = this.gridElement.scrollTop;\n      this.gridElement.classList.add(\"no-select\");\n    });\n    this.gridElement.addEventListener(\"mouseup\", () => {\n      isMouseDown = false;\n      this.gridElement.classList.remove(\"no-select\");\n    });\n    this.gridElement.addEventListener(\"mousemove\", e => {\n      if (!isMouseDown) return;\n      e.preventDefault();\n      const x = e.pageX;\n      const y = e.pageY;\n      const walkX = (x - startX) * 1;\n      const walkY = (y - startY) * 1;\n      this.gridElement.scrollLeft = scrollLeft - walkX;\n      this.gridElement.scrollTop = scrollTop - walkY;\n    });\n    this.gridElement.addEventListener(\"wheel\", e => {\n      if (e.deltaY < 0) {\n        this.zoomIn();\n      } else {\n        this.zoomOut();\n      }\n      e.preventDefault();\n    }, {\n      passive: false\n    });\n  }\n  centerScroll() {\n    const halfWidth = window.innerWidth / 2;\n    const halfHeight = window.innerHeight / 2;\n    this.compScale();\n    this.gridElement.scrollLeft = this.sectorSize * this.cellSize / 2 - halfWidth / this.scale + this.cellSize / 2 + 100;\n    this.gridElement.scrollTop = this.sectorSize * this.cellSize / 2 - halfHeight / this.scale + this.cellSize / 2 + 100;\n  }\n  zoomOut() {\n    if (this.scale == 1) {\n      this.gridElement.style.zoom = `75%`;\n      this.compScale();\n      this.gridElement.style.height = `${100 / this.scale}vh`;\n    } else if (this.scale == 0.75) {\n      this.gridElement.style.zoom = `50%`;\n      this.compScale();\n      this.gridElement.style.height = `${100 / this.scale}vh`;\n    }\n  }\n  zoomIn() {\n    if (this.scale == 0.5) {\n      this.gridElement.style.zoom = `75%`;\n      this.compScale();\n      this.gridElement.style.height = `${100 / this.scale}vh`;\n    } else if (this.scale == 0.75) {\n      this.gridElement.style.zoom = `100%`;\n      this.compScale();\n      this.gridElement.style.height = `${100 / this.scale}vh`;\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/grid.js?");

/***/ }),

/***/ "./src/modules/shape.js":
/*!******************************!*\
  !*** ./src/modules/shape.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Shape {\n  constructor(grid) {\n    this.grid = grid;\n  }\n  createShape(shapeArray) {\n    let shape = document.createElement(\"div\");\n    shape.classList.add(\"shape\");\n    shapeArray.forEach((row, rowIndex) => {\n      let rowDiv = document.createElement(\"div\");\n      rowDiv.classList.add(\"row\");\n      row.forEach((cell, cellIndex) => {\n        let cellDiv = document.createElement(\"div\");\n        cellDiv.classList.add(\"sideCell\");\n        if (cell === 1) {\n          cellDiv.classList.add(\"filled\");\n        }\n        rowDiv.appendChild(cellDiv);\n      });\n      shape.appendChild(rowDiv);\n    });\n    return shape;\n  }\n  displayShapeInSidebar(shape) {\n    let sidebar = document.querySelector(\".sidebar\");\n    sidebar.appendChild(shape);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shape);\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/shape.js?");

/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/modules/buttons.js\");\n/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape */ \"./src/modules/shape.js\");\n\n\nfunction createSidebar(grid) {\n  let sidebar = document.createElement(\"div\");\n  sidebar.classList.add(\"sidebar\");\n  let {\n    zoomInButton,\n    zoomOutButton,\n    centerButton\n  } = (0,_buttons__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(grid);\n  sidebar.innerHTML = \"<h1>My Sidebar</h1><p>Some content...</p>\";\n  document.body.appendChild(sidebar);\n  function openSidebar() {\n    zoomInButton.style.right = \"275px\";\n    zoomOutButton.style.right = \"275px\";\n    centerButton.style.right = \"275px\";\n    sidebar.style.right = \"0px\";\n  }\n  function closeSidebar() {\n    zoomInButton.style.right = \"75px\";\n    zoomOutButton.style.right = \"75px\";\n    centerButton.style.right = \"75px\";\n    sidebar.style.right = \"-250px\";\n  }\n  document.body.addEventListener(\"mousemove\", function (event) {\n    if (window.innerWidth - event.clientX < 50) {\n      openSidebar();\n    } else {\n      if (!sidebar.contains(event.target)) {\n        closeSidebar();\n      }\n    }\n  });\n  sidebar.addEventListener(\"mouseover\", function () {\n    openSidebar();\n  });\n  sidebar.addEventListener(\"mouseout\", function () {\n    closeSidebar();\n  });\n  let shape = new _shape__WEBPACK_IMPORTED_MODULE_1__[\"default\"](grid);\n  let shapeArray = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];\n  let createdShape = shape.createShape(shapeArray);\n  shape.displayShapeInSidebar(createdShape);\n  let shapeButton = document.createElement(\"button\");\n  shapeButton.classList.add(\"shapeButton\");\n  shapeButton.innerHTML = \"Добавить строение\";\n  sidebar.appendChild(shapeButton);\n  shapeButton.addEventListener('click', e => {\n    document.querySelector(\".shape\").style.transform = 'translateX(' + e.pageX + 'px) translateY(' + e.pageY + 'px)';\n  }, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSidebar);\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/sidebar.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  background-color: #272121;\r\n  font-family: Arial, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  font-size: 10px;\r\n}\r\n\r\n.cell {\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 1px solid #000;\r\n  background-color: #769769;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  /* border: 3px solid #f7ea3b; */\r\n  grid-template-columns: repeat(100, 50px);\r\n  height: 100vh;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n  padding: 100px;\r\n}\r\n\r\n.no-select {\r\n  user-select: none;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n\r\n#container {\r\n  overflow: hidden;\r\n}\r\n\r\n.tooltip {\r\n  position: absolute;\r\n  background-color: #333;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 10px;\r\n  opacity: 0.9;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\r\n  font-size: 14px;\r\n  display: none;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.zoomInButton {\r\n  position: absolute;\r\n  bottom: 150px;\r\n  right: 75px;\r\n  height: 50px;\r\n  width: 50px;\r\n  justify-content: center;\r\n  background-color: #333;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.5);\r\n  opacity: 0.5;\r\n  transition: 0.5s;\r\n  font-size: 40px;\r\n}\r\n\r\n.zoomInButton:hover {\r\n  background-color: #333;\r\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);\r\n  border-radius: 6px;\r\n  transform: perspective(400px) rotateX(10deg);\r\n  opacity: 1;\r\n}\r\n\r\n.zoomOutButton {\r\n  position: absolute;\r\n  bottom: 50px;\r\n  right: 75px;\r\n  height: 50px;\r\n  width: 50px;\r\n  justify-content: center;\r\n  background-color: #333;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.5);\r\n  opacity: 0.5;\r\n  transition: 0.5s;\r\n  font-size: 40px;\r\n  transform: perspective(400px) rotateX(0deg);\r\n}\r\n\r\n.zoomOutButton:hover {\r\n  background-color: #333;\r\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);\r\n  border-radius: 6px;\r\n  transform: perspective(400px) rotateX(10deg);\r\n  opacity: 1;\r\n}\r\n\r\n.centerButton {\r\n  position: absolute;\r\n  bottom: 100px;\r\n  right: 75px;\r\n  height: 50px;\r\n  width: 50px;\r\n  justify-content: center;\r\n  background-color: #333;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.5);\r\n  opacity: 0.5;\r\n  transition: 0.5s;\r\n  font-size: 40px;\r\n  transform: perspective(400px) rotateX(0deg);\r\n}\r\n\r\n.centerButton:hover {\r\n  background-color: #333;\r\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);\r\n  border-radius: 6px;\r\n  transform: perspective(400px) rotateX(10deg);\r\n  opacity: 1;\r\n}\r\n\r\n.sidebar {\r\n  width: 250px;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  right: -250px;\r\n  background: #333;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n.shape {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 10px;\r\n  position: fixed;\r\n  transition: transform 0.23s;\r\n  pointer-events: none;\r\n}\r\n\r\n.shape .row {\r\n  display: flex;\r\n\r\n}\r\n\r\n.sideCell {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #769769;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.filled {\r\n  border: 1px solid #fff;\r\n  background-color: #000;\r\n}\r\n\r\n.shapeButton {\r\n  position: absolute;\r\n  top: 150px;\r\n  right: 100px;\r\n  justify-content: center;\r\n  background-color: #333;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.5);\r\n  opacity: 0.5;\r\n  transition: 0.5s;\r\n  font-size: 28px;\r\n}\r\n\r\nbutton {cursor: pointer}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gameonbrowser/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://gameonbrowser/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gameonbrowser/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gameonbrowser/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gameonbrowser/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://gameonbrowser/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://gameonbrowser/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://gameonbrowser/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://gameonbrowser/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://gameonbrowser/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;