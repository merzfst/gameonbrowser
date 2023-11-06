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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_grid_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/grid/grid */ \"./src/modules/grid/grid.js\");\n/* harmony import */ var _modules_grid_scaling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/grid/scaling */ \"./src/modules/grid/scaling.js\");\n/* harmony import */ var _modules_sidebar_sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sidebar/sidebar.js */ \"./src/modules/sidebar/sidebar.js\");\n\n\n\n\nconst grid = new _modules_grid_grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ndocument.body.append(grid.gridElement);\n_modules_grid_scaling__WEBPACK_IMPORTED_MODULE_2__.centerScroll.bind(grid)();\n(0,_modules_sidebar_sidebar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(grid);\n\n//# sourceURL=webpack://gameonbrowser/./src/index.js?");

/***/ }),

/***/ "./src/modules/grid/buttons.js":
/*!*************************************!*\
  !*** ./src/modules/grid/buttons.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tools_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/createElement */ \"./src/tools/createElement.js\");\n/* harmony import */ var _scaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scaling */ \"./src/modules/grid/scaling.js\");\n\n\nclass Button {\n  constructor(buttonClass, innerHTML, clickFunction) {\n    let button = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\", buttonClass, innerHTML);\n    button.addEventListener(\"click\", clickFunction);\n    document.body.appendChild(button);\n    return button;\n  }\n}\nfunction createButtons(grid) {\n  let zoomInButton = new Button(\"zoomButtons\", \"+\", function () {\n    _scaling__WEBPACK_IMPORTED_MODULE_1__.zoomIn.bind(grid)();\n  });\n  let zoomOutButton = new Button(\"zoomButtons\", \"-\", function () {\n    _scaling__WEBPACK_IMPORTED_MODULE_1__.zoomOut.bind(grid)();\n  });\n  zoomOutButton.style.bottom = \"100px\";\n  let centerButton = new Button(\"zoomButtons\", \"/\", function () {\n    _scaling__WEBPACK_IMPORTED_MODULE_1__.centerScroll.bind(grid)();\n  });\n  centerButton.style.bottom = \"50px\";\n  return {\n    zoomInButton,\n    zoomOutButton,\n    centerButton\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createButtons);\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/grid/buttons.js?");

/***/ }),

/***/ "./src/modules/grid/cells.js":
/*!***********************************!*\
  !*** ./src/modules/grid/cells.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tools_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/createElement */ \"./src/tools/createElement.js\");\n\nclass Cell {\n  constructor(x, y) {\n    this.element = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"cell\");\n    this.element.dataset.x = x;\n    this.element.dataset.y = y;\n    this.isOccupied = false;\n    this.color;\n    this.element.dataset.url;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/grid/cells.js?");

/***/ }),

/***/ "./src/modules/grid/elementManagement.js":
/*!***********************************************!*\
  !*** ./src/modules/grid/elementManagement.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildShape: () => (/* binding */ buildShape),\n/* harmony export */   createButtons: () => (/* binding */ createButtons),\n/* harmony export */   loadCells: () => (/* binding */ loadCells),\n/* harmony export */   placeShape: () => (/* binding */ placeShape)\n/* harmony export */ });\n/* harmony import */ var _tools_compcale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/compcale */ \"./src/tools/compcale.js\");\n/* harmony import */ var _cells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cells */ \"./src/modules/grid/cells.js\");\n/* harmony import */ var _scaling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scaling */ \"./src/modules/grid/scaling.js\");\n/* harmony import */ var _tools_createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tools/createElement */ \"./src/tools/createElement.js\");\n/* harmony import */ var _sprite_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sprite.css */ \"./src/modules/grid/sprite.css\");\n\n\n\n\n\nfunction loadCells(sectorSize, startX, startY) {\n  const savedCells = localStorage.getItem(\"cells\");\n  if (savedCells) {\n    const cellData = JSON.parse(savedCells);\n    for (let key in cellData) {\n      const [x, y] = key.split(\",\").map(Number);\n      const cell = new _cells__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y);\n      this.cells[key] = cell;\n      this.gridElement.append(cell.element);\n      cell.element.name = cellData[key].element.name;\n      cell.isOccupied = cellData[key].isOccupied;\n      cell.element.imageClass = cellData[key].element.imageClass;\n      cell.element.classList.add(\"sprite\", cell.element.imageClass);\n      cell.element.addEventListener(\"mouseover\", e => {\n        this.tooltipTimeout = setTimeout(() => {\n          clearTimeout(this.tooltipTimeout);\n          cell.element.classList.add(\"pulse\");\n          this.gridElement.append(this.tooltip);\n          const xCoordinate = cell.element.dataset.x;\n          const yCoordinate = cell.element.dataset.y;\n          this.tooltip.innerHTML = `${cell.element.name} </br> Координаты: (${xCoordinate}, ${yCoordinate})`;\n          _tools_compcale__WEBPACK_IMPORTED_MODULE_0__.compScale.bind(this)();\n          const rect = cell.element.getBoundingClientRect();\n          this.tooltip.style.left = `${window.scrollX + rect.left + 40}px`;\n          this.tooltip.style.top = `${window.scrollY + rect.top - 40}px`;\n          this.tooltip.style.fontSize = `${14 / this.scale}px`;\n          this.tooltip.style.padding = `${10 / this.scale}px`;\n          this.tooltip.style.display = \"block\";\n        }, 500);\n      });\n      cell.element.addEventListener(\"mouseout\", () => {\n        clearTimeout(this.tooltipTimeout);\n        cell.element.classList.remove(\"pulse\");\n        this.tooltip.remove();\n      });\n    }\n  } else {\n    const fragment = document.createDocumentFragment();\n    for (let y = 0; y < sectorSize; y++) {\n      for (let x = 0; x < sectorSize; x++) {\n        const cell = new _cells__WEBPACK_IMPORTED_MODULE_1__[\"default\"](startX + x, startY - y);\n        this.cells[`${startX + x},${startY - y}`] = cell;\n        fragment.append(cell.element);\n        cell.element.name = \"Земля\";\n        cell.element.imageClass = \"bg-earth1\";\n        cell.element.classList.add(\"sprite\", cell.element.imageClass);\n        cell.element.addEventListener(\"mouseover\", e => {\n          this.tooltipTimeout = setTimeout(() => {\n            clearTimeout(this.tooltipTimeout);\n            cell.element.classList.add(\"pulse\");\n            this.gridElement.append(this.tooltip);\n            const xCoordinate = cell.element.dataset.x;\n            const yCoordinate = cell.element.dataset.y;\n            this.tooltip.innerHTML = `${cell.element.name} </br> Координаты: (${xCoordinate}, ${yCoordinate})`;\n            _tools_compcale__WEBPACK_IMPORTED_MODULE_0__.compScale.bind(this)();\n            const rect = cell.element.getBoundingClientRect();\n            this.tooltip.style.left = `${window.scrollX + rect.left + 40}px`;\n            this.tooltip.style.top = `${window.scrollY + rect.top - 40}px`;\n            this.tooltip.style.fontSize = `${14 / this.scale}px`;\n            this.tooltip.style.padding = `${10 / this.scale}px`;\n            this.tooltip.style.display = \"block\";\n          }, 500);\n        });\n        cell.element.addEventListener(\"mouseout\", () => {\n          clearTimeout(this.tooltipTimeout);\n          cell.element.classList.remove(\"pulse\");\n          this.tooltip.remove();\n        });\n      }\n    }\n    this.gridElement.appendChild(fragment);\n    localStorage.setItem(\"cells\", JSON.stringify(this.cells));\n  }\n}\nfunction createButtons() {\n  const buttonContainer = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"div\", \"button-container\");\n  const checkButton = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"button\", \"check-button\", \"✓\");\n  const crossButton = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"button\", \"cross-button\", \"✗\");\n  buttonContainer.append(checkButton, crossButton);\n  document.body.appendChild(buttonContainer);\n  buttonContainer.style.position = \"absolute\";\n  crossButton.addEventListener(\"click\", this.removeButtonsAndShape);\n  checkButton.addEventListener(\"click\", this.placeShape);\n}\nfunction placeShape() {\n  const rows = Array.from(this.shape.children);\n  let canPlaceShape = true;\n  for (let y = 0; y < rows.length; y++) {\n    const cells = Array.from(rows[y].children);\n    for (let x = 0; x < cells.length; x++) {\n      const cellX = this.shapeCellX + x;\n      const cellY = this.shapeCellY - y;\n      const cellKey = `${cellX},${cellY}`;\n      if (this.cells[cellKey] && this.cells[cellKey].isOccupied) {\n        canPlaceShape = false;\n        this.shape.classList.add(\"warning\");\n        setTimeout(() => {\n          this.shape.classList.remove(\"warning\");\n        }, 500);\n      }\n    }\n  }\n  if (canPlaceShape) {\n    for (let y = 0; y < rows.length; y++) {\n      const cells = Array.from(rows[y].children);\n      for (let x = 0; x < cells.length; x++) {\n        const cellX = this.shapeCellX + x;\n        const cellY = this.shapeCellY - y;\n        const cellKey = `${cellX},${cellY}`;\n        if (this.cells[cellKey]) {\n          this.cells[cellKey].element.name = this.shape.name;\n          this.cells[cellKey].isOccupied = true;\n          let lastClass = this.cells[cellKey].element.classList.item(this.cells[cellKey].element.classList.length - 1);\n          console.log(cells[x]);\n          this.cells[cellKey].element.classList.remove(lastClass);\n          lastClass = cells[x].classList.item(cells[x].classList.length - 1);\n          console.log(cells[x]);\n          this.cells[cellKey].element.classList.add(lastClass);\n          this.cells[cellKey].element.imageClass = lastClass;\n        }\n      }\n    }\n    localStorage.setItem(\"cells\", JSON.stringify(this.cells));\n  }\n}\nfunction buildShape(shape) {\n  _scaling__WEBPACK_IMPORTED_MODULE_2__.centerScroll.bind(this)();\n  let {\n    top,\n    left,\n    halfHeight,\n    halfWidth\n  } = _scaling__WEBPACK_IMPORTED_MODULE_2__.centerScroll.bind(this)();\n  let cells = shape.querySelectorAll(\".sideCell\");\n  cells.forEach(cell => {\n    cell.style.width = `${this.cellSize}px`;\n    cell.style.height = `${this.cellSize}px`;\n  });\n  this.removeButtonsAndShape();\n  document.addEventListener(\"keydown\", this.keydownHandler);\n  this.shape = shape;\n  this.shape.style.position = \"absolute\";\n  this.shape.style.left = `${left + halfWidth / this.scale - 35}px`;\n  this.shape.style.top = `${top + halfHeight / this.scale - 35}px`;\n  this.hasActiveShape = true;\n  createButtons.bind(this)();\n  this.gridElement.appendChild(this.shape);\n}\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/grid/elementManagement.js?");

/***/ }),

/***/ "./src/modules/grid/eventHandlers.js":
/*!*******************************************!*\
  !*** ./src/modules/grid/eventHandlers.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDragEventListeners: () => (/* binding */ addDragEventListeners),\n/* harmony export */   keydownHandler: () => (/* binding */ keydownHandler),\n/* harmony export */   removeButtonsAndShape: () => (/* binding */ removeButtonsAndShape)\n/* harmony export */ });\n/* harmony import */ var _tools_dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/dimensions */ \"./src/tools/dimensions.js\");\n/* harmony import */ var _scaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scaling */ \"./src/modules/grid/scaling.js\");\n\n\nfunction addDragEventListeners() {\n  let isMouseDown = false;\n  let startX, startY, scrollLeft, scrollTop;\n  this.gridElement.addEventListener(\"mousedown\", e => {\n    isMouseDown = true;\n    startX = e.pageX;\n    startY = e.pageY;\n    scrollLeft = this.gridElement.scrollLeft;\n    scrollTop = this.gridElement.scrollTop;\n    this.gridElement.classList.add(\"no-select\");\n  });\n  this.gridElement.addEventListener(\"mouseup\", () => {\n    isMouseDown = false;\n    this.gridElement.classList.remove(\"no-select\");\n  });\n  this.gridElement.addEventListener(\"mousemove\", e => {\n    if (!isMouseDown) return;\n    e.preventDefault();\n    const x = e.pageX;\n    const y = e.pageY;\n    const walkX = (x - startX) * 1;\n    const walkY = (y - startY) * 1;\n    this.gridElement.scrollLeft = scrollLeft - walkX;\n    this.gridElement.scrollTop = scrollTop - walkY;\n  });\n  this.gridElement.addEventListener(\"wheel\", e => {\n    if (e.deltaY < 0) {\n      _scaling__WEBPACK_IMPORTED_MODULE_1__.zoomIn.bind(this)();\n    } else {\n      _scaling__WEBPACK_IMPORTED_MODULE_1__.zoomOut.bind(this)();\n    }\n    e.preventDefault();\n  }, {\n    passive: false\n  });\n}\nfunction keydownHandler(e) {\n  let newCellY = 0;\n  let newCellX = 0;\n  let newCellKey = 0;\n  if (!this.hasActiveShape) return;\n  let step = this.cellSize;\n  let {\n    width,\n    height\n  } = (0,_tools_dimensions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.shape);\n  this.width = width;\n  this.height = height;\n  width = width * this.cellSize;\n  height = height * this.cellSize;\n  let viewportWidth = window.innerWidth;\n  let viewportHeight = window.innerHeight;\n  switch (e.key) {\n    case \"ArrowUp\":\n      newCellY = this.shapeCellY + 1;\n      newCellKey = `${this.shapeCellX},${newCellY}`;\n      if (this.cells[newCellKey]) {\n        this.shapeCellY = newCellY;\n        this.shape.style.top = `${((this.sectorSize - 0.5) / 2 - newCellY) * this.cellSize + 102}px`;\n        if (parseInt(this.shape.style.top) < this.gridElement.scrollTop) {\n          this.gridElement.scrollTop = this.gridElement.scrollTop - step;\n        }\n      }\n      break;\n    case \"ArrowDown\":\n      newCellY = this.shapeCellY - 1;\n      newCellKey = `${this.shapeCellX},${newCellY}`;\n      if (this.cells[newCellKey]) {\n        this.shapeCellY = newCellY;\n        this.shape.style.top = `${((this.sectorSize - 0.5) / 2 - newCellY) * this.cellSize + 102}px`;\n        if (parseInt(this.shape.style.top) > this.gridElement.scrollTop + viewportHeight / this.scale - height) {\n          this.gridElement.scrollTop = this.gridElement.scrollTop + step;\n        }\n      }\n      break;\n    case \"ArrowLeft\":\n      newCellX = this.shapeCellX - 1;\n      newCellKey = `${newCellX},${this.shapeCellY}`;\n      if (this.cells[newCellKey]) {\n        this.shapeCellX = newCellX;\n        this.shape.style.left = `${((this.sectorSize - 0.5) / 2 + newCellX) * this.cellSize + 102}px`;\n        if (parseInt(this.shape.style.left) < this.gridElement.scrollLeft) {\n          this.gridElement.scrollLeft = this.gridElement.scrollLeft - step;\n        }\n      }\n      break;\n    case \"ArrowRight\":\n      newCellX = this.shapeCellX + 1;\n      newCellKey = `${newCellX},${this.shapeCellY}`;\n      if (this.cells[newCellKey]) {\n        this.shapeCellX = newCellX;\n        this.shape.style.left = `${((this.sectorSize - 0.5) / 2 + newCellX) * this.cellSize + 102}px`;\n        if (parseInt(this.shape.style.left) > this.gridElement.scrollLeft + viewportWidth / this.scale - width) {\n          this.gridElement.scrollLeft = this.gridElement.scrollLeft + step;\n        }\n      }\n      break;\n    case \"Enter\":\n      this.placeShape.call(this);\n      break;\n    case \"Escape\":\n      this.removeButtonsAndShape();\n      break;\n  }\n}\nfunction removeButtonsAndShape() {\n  this.hasActiveShape = false;\n  this.shapeCellX = 0;\n  this.shapeCellY = 0;\n  const buttonContainer = document.querySelector(\".button-container\");\n  if (buttonContainer) {\n    buttonContainer.remove();\n  }\n  const shape = this.gridElement.querySelector(\".shape\");\n  if (shape) {\n    shape.remove();\n  }\n  document.removeEventListener(\"keydown\", this.keydownHandler);\n}\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/grid/eventHandlers.js?");

/***/ }),

/***/ "./src/modules/grid/grid.js":
/*!**********************************!*\
  !*** ./src/modules/grid/grid.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tools_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/createElement */ \"./src/tools/createElement.js\");\n/* harmony import */ var _eventHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventHandlers */ \"./src/modules/grid/eventHandlers.js\");\n/* harmony import */ var _grid_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.css */ \"./src/modules/grid/grid.css\");\n/* harmony import */ var _elementManagement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elementManagement */ \"./src/modules/grid/elementManagement.js\");\n\n\n\n\nclass Grid {\n  constructor() {\n    this.cells = {};\n    this.gridElement = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"grid\");\n    this.tooltip = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"tooltip\");\n    this.shapeCellX = 0;\n    this.shapeCellY = 0;\n    this.hasActiveShape = false;\n    this.tooltipTimeout = null;\n    this.scale = 1;\n    let sectorSize = 100;\n    this.sectorSize = 100;\n    this.cellSize = 50;\n    let halfSectorSize = sectorSize / 2;\n    let startCoordinateX = -halfSectorSize;\n    let startCoordinateY = halfSectorSize;\n    this.loadCells = _elementManagement__WEBPACK_IMPORTED_MODULE_3__.loadCells.bind(this);\n    this.loadCells(sectorSize, startCoordinateX, startCoordinateY);\n    this.addDragEventListeners = _eventHandlers__WEBPACK_IMPORTED_MODULE_1__.addDragEventListeners.bind(this);\n    this.addDragEventListeners();\n    this.removeButtonsAndShape = _eventHandlers__WEBPACK_IMPORTED_MODULE_1__.removeButtonsAndShape.bind(this);\n    this.placeShape = _elementManagement__WEBPACK_IMPORTED_MODULE_3__.placeShape.bind(this);\n    this.keydownHandler = _eventHandlers__WEBPACK_IMPORTED_MODULE_1__.keydownHandler.bind(this);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/grid/grid.js?");

/***/ }),

/***/ "./src/modules/grid/scaling.js":
/*!*************************************!*\
  !*** ./src/modules/grid/scaling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   centerScroll: () => (/* binding */ centerScroll),\n/* harmony export */   zoomIn: () => (/* binding */ zoomIn),\n/* harmony export */   zoomOut: () => (/* binding */ zoomOut)\n/* harmony export */ });\n/* harmony import */ var _tools_compcale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/compcale */ \"./src/tools/compcale.js\");\n\nfunction zoomIn() {\n  if (this.scale == 0.5) {\n    this.gridElement.style.zoom = `75%`;\n    _tools_compcale__WEBPACK_IMPORTED_MODULE_0__.compScale.bind(this)();\n    this.gridElement.style.height = `${100 / this.scale}vh`;\n  } else if (this.scale == 0.75) {\n    this.gridElement.style.zoom = `100%`;\n    _tools_compcale__WEBPACK_IMPORTED_MODULE_0__.compScale.bind(this)();\n    this.gridElement.style.height = `${100 / this.scale}vh`;\n  }\n}\nfunction zoomOut() {\n  if (this.scale == 1) {\n    this.gridElement.style.zoom = `75%`;\n    _tools_compcale__WEBPACK_IMPORTED_MODULE_0__.compScale.bind(this)();\n    this.gridElement.style.height = `${100 / this.scale}vh`;\n  } else if (this.scale == 0.75) {\n    this.gridElement.style.zoom = `50%`;\n    _tools_compcale__WEBPACK_IMPORTED_MODULE_0__.compScale.bind(this)();\n    this.gridElement.style.height = `${100 / this.scale}vh`;\n  }\n}\nfunction centerScroll() {\n  const halfWidth = window.innerWidth / 2;\n  const halfHeight = window.innerHeight / 2;\n  _tools_compcale__WEBPACK_IMPORTED_MODULE_0__.compScale.bind(this)();\n  let left = this.sectorSize * this.cellSize / 2 - halfWidth / this.scale + this.cellSize / 2 + 100;\n  let top = this.sectorSize * this.cellSize / 2 - halfHeight / this.scale + this.cellSize / 2 + 100;\n  this.gridElement.scrollLeft = left;\n  this.gridElement.scrollTop = top;\n  return {\n    top,\n    left,\n    halfHeight,\n    halfWidth\n  };\n}\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/grid/scaling.js?");

/***/ }),

/***/ "./src/modules/sidebar/shape.js":
/*!**************************************!*\
  !*** ./src/modules/sidebar/shape.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tools_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/createElement */ \"./src/tools/createElement.js\");\n\nclass Shape {\n  constructor(grid, name, shape) {\n    this.grid = grid;\n    this.name = name;\n    this.shape = shape;\n  }\n  createShape(shapeArray) {\n    let shape = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"shape\");\n    shapeArray.forEach((row, rowIndex) => {\n      let rowDiv = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"row\");\n      row.forEach((cell, cellIndex) => {\n        let cellDiv = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"sideCell\");\n        if (cell.type === 1) {\n          // cellDiv.classList.add(\"filled\");\n          // cellDiv.style.backgroundColor = cell.color;\n          cellDiv.classList.add(\"sprite\", cell.imageClass);\n        }\n        rowDiv.appendChild(cellDiv);\n      });\n      shape.appendChild(rowDiv);\n    });\n    return shape;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shape);\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/sidebar/shape.js?");

/***/ }),

/***/ "./src/modules/sidebar/sidebar.js":
/*!****************************************!*\
  !*** ./src/modules/sidebar/sidebar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shape_sidebar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape&sidebar.css */ \"./src/modules/sidebar/shape&sidebar.css\");\n/* harmony import */ var _grid_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grid/buttons */ \"./src/modules/grid/buttons.js\");\n/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shape */ \"./src/modules/sidebar/shape.js\");\n/* harmony import */ var _grid_elementManagement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grid/elementManagement */ \"./src/modules/grid/elementManagement.js\");\n/* harmony import */ var _tools_createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/createElement */ \"./src/tools/createElement.js\");\n/* harmony import */ var _buildings_buildings_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../buildings/buildings.json */ \"./src/buildings/buildings.json\");\n\n\n\n\n\n\nfunction createSidebar(grid) {\n  let sidebar = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\", \"sidebar\");\n  let buttons = (0,_grid_buttons__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(grid);\n  sidebar.innerHTML = \"<h1>Меню построек</h1><p>Ваш баланс: ...</p>\";\n  document.body.appendChild(sidebar);\n  function setButtonStyle(right) {\n    Object.values(buttons).forEach(button => {\n      button.style.right = right;\n    });\n  }\n  function openSidebar() {\n    setButtonStyle(\"375px\");\n    sidebar.style.right = \"0px\";\n  }\n  function closeSidebar() {\n    setButtonStyle(\"75px\");\n    sidebar.style.right = \"-350px\";\n  }\n  function addShapeToSidebar(shape, shapeElement) {\n    let shapeContainer = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"div\", \"shapeContainer\");\n    shapeContainer.appendChild(shapeElement);\n    let shapeButton = (0,_tools_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"button\", \"shapeButton\", \"Построить: \" + shape.name);\n    shapeButton.setAttribute(\"tabindex\", \"-1\");\n    shapeContainer.appendChild(shapeButton);\n    shapeButton.addEventListener(\"click\", () => {\n      let clonedShapeForGrid = shapeElement.cloneNode(true);\n      clonedShapeForGrid.classList.add(\"pulse\");\n      clonedShapeForGrid.name = shape.name;\n      _grid_elementManagement__WEBPACK_IMPORTED_MODULE_3__.buildShape.bind(grid)(clonedShapeForGrid);\n      shapeButton.blur();\n    }, false);\n    sidebar.appendChild(shapeContainer);\n  }\n  document.body.addEventListener(\"mousemove\", function (event) {\n    if (window.innerWidth - event.clientX < 25) {\n      openSidebar();\n    } else {\n      if (!sidebar.contains(event.target)) {\n        closeSidebar();\n      }\n    }\n  });\n  sidebar.addEventListener(\"mouseover\", openSidebar);\n  sidebar.addEventListener(\"mouseout\", closeSidebar);\n  _buildings_buildings_json__WEBPACK_IMPORTED_MODULE_5__.forEach(building => {\n    let shape = new _shape__WEBPACK_IMPORTED_MODULE_2__[\"default\"](grid, building.name, building.shape);\n    let shapeElement = shape.createShape(building.shape);\n    addShapeToSidebar(shape, shapeElement);\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSidebar);\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/sidebar/sidebar.js?");

/***/ }),

/***/ "./src/tools/compcale.js":
/*!*******************************!*\
  !*** ./src/tools/compcale.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compScale: () => (/* binding */ compScale)\n/* harmony export */ });\nfunction compScale() {\n  this.scale = parseFloat(getComputedStyle(this.gridElement).zoom);\n}\n\n//# sourceURL=webpack://gameonbrowser/./src/tools/compcale.js?");

/***/ }),

/***/ "./src/tools/createElement.js":
/*!************************************!*\
  !*** ./src/tools/createElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(tag, className, text) {\n  const element = document.createElement(tag);\n  element.classList.add(className);\n  text ? element.innerHTML = text : null;\n  return element;\n}\n\n//# sourceURL=webpack://gameonbrowser/./src/tools/createElement.js?");

/***/ }),

/***/ "./src/tools/dimensions.js":
/*!*********************************!*\
  !*** ./src/tools/dimensions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getShapeDimensionsFromDOM)\n/* harmony export */ });\nfunction getShapeDimensionsFromDOM(shapeElement) {\n  let rows = shapeElement.getElementsByClassName(\"row\");\n  let height = rows.length;\n  let cellsInFirstRow = rows[0].getElementsByClassName(\"sideCell\");\n  let width = cellsInFirstRow.length;\n  return {\n    width,\n    height\n  };\n}\n\n//# sourceURL=webpack://gameonbrowser/./src/tools/dimensions.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    transform: scale(0.9);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.pulse {\r\n  animation: pulse 2s infinite;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, sans-serif;\r\n  overflow: hidden;\r\n  font-size: 10px;\r\n}\r\n\r\n.cell {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gameonbrowser/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/grid/grid.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/grid/grid.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.grid {\r\n  display: grid;\r\n  position: relative;\r\n  grid-template-columns: repeat(100, 50px);\r\n  background-color: #272121;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  padding: 100px;\r\n  /* transform: perspective(1000px) rotateX(35deg); */\r\n}\r\n\r\n.no-select {\r\n  user-select: none;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n\r\n.tooltip {\r\n  position: fixed;\r\n  background-color: #333;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 10px;\r\n  opacity: 0.9;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\r\n  font-size: 14px;\r\n  display: none;\r\n  transition: all 0.3s ease;\r\n  animation: none !important;\r\n  pointer-events: none;\r\n}\r\n\r\n.zoomButtons {\r\n  position: absolute;\r\n  bottom: 150px;\r\n  right: 75px;\r\n  height: 50px;\r\n  width: 50px;\r\n  justify-content: center;\r\n  background-color: #333;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.5);\r\n  opacity: 0.5;\r\n  transition: 0.5s ease-out;\r\n  font-size: 40px;\r\n}\r\n\r\n.zoomButtons:hover {\r\n  background-color: #333;\r\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);\r\n  border-radius: 6px;\r\n  transform: perspective(400px) rotateX(10deg);\r\n  opacity: 1;\r\n}\r\n.button-container {\r\n  position: absolute;\r\n  top: 60%;\r\n  left: 50%;\r\n  transform: translate(-50%, 50%);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100px;\r\n  padding: 20px;\r\n  text-align: center;\r\n  transition: 0.5s ease-out;\r\n}\r\n\r\n.check-button,\r\n.cross-button {\r\n  background-color: #333;\r\n  color: #fff;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 20px;\r\n  margin: 10px;\r\n  font-size: 20px;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.5);\r\n  opacity: 0.8;\r\n  transition: 0.5s ease-out;\r\n}\r\n\r\n.check-button:hover,\r\n.cross-button:hover {\r\n  color: #007bff;\r\n  background-color: #333;\r\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);\r\n  border-radius: 6px;\r\n  transform: perspective(400px) rotateX(10deg);\r\n  opacity: 1;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/grid/grid.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/grid/sprite.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/grid/sprite.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/css_sprites.png */ \"./src/images/css_sprites.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.bg-townhall1 {\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) -10px -10px;\r\n}\r\n\r\n.bg-townhall2 {\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) -80px -10px;\r\n}\r\n\r\n.bg-townhall3 {\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) -150px -10px;\r\n}\r\n\r\n.bg-townhall4 {\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) -220px -10px;\r\n}\r\n\r\n.bg-townhall5 {\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) -290px -10px;\r\n}\r\n\r\n.bg-townhall6 {\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) -360px -10px;\r\n}\r\n\r\n.bg-townhall7 {\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) -430px -10px;\r\n}\r\n\r\n.bg-townhall8 {\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) -500px -10px;\r\n}\r\n\r\n.bg-townhall9 {\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) -570px -10px;\r\n}\r\n\r\n.bg-earth1 {\r\n  width: 50px;\r\n  height: 50px;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) -640px -10px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/grid/sprite.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/sidebar/shape&sidebar.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/sidebar/shape&sidebar.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.shape.warning {\r\n  animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both,\r\n    flash 1s linear infinite;\r\n}\r\n@keyframes flash {\r\n  0% {\r\n    background-color: red;\r\n  }\r\n  50% {\r\n    background-color: transparent;\r\n  }\r\n  100% {\r\n    background-color: red;\r\n  }\r\n}\r\n@keyframes shake {\r\n  0% {\r\n    transform: translate(1px, 1px) rotate(0deg);\r\n  }\r\n  10% {\r\n    transform: translate(-1px, -2px) rotate(-1deg);\r\n  }\r\n  20% {\r\n    transform: translate(-3px, 0px) rotate(1deg);\r\n  }\r\n  30% {\r\n    transform: translate(3px, 2px) rotate(0deg);\r\n  }\r\n  40% {\r\n    transform: translate(1px, -1px) rotate(1deg);\r\n  }\r\n  50% {\r\n    transform: translate(-1px, 2px) rotate(-1deg);\r\n  }\r\n  60% {\r\n    transform: translate(-3px, 1px) rotate(0deg);\r\n  }\r\n  70% {\r\n    transform: translate(3px, 1px) rotate(-1deg);\r\n  }\r\n  80% {\r\n    transform: translate(-1px, -1px) rotate(1deg);\r\n  }\r\n  90% {\r\n    transform: translate(1px, 2px) rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: translate(1px, -2px) rotate(-1deg);\r\n  }\r\n}\r\n\r\n.sidebar {\r\n  width: 350px;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  right: -350px;\r\n  background: #333;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n.shape {\r\n  display: flex;\r\n  margin: 10px;\r\n  flex-direction: column;\r\n  margin: 10px;\r\n  position: flex;\r\n  transition: transform 0.23s;\r\n  pointer-events: none;\r\n}\r\n\r\n.shape .row {\r\n  display: flex;\r\n}\r\n\r\n.sideCell {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.filled {\r\n  border: 1px solid #fff;\r\n  background-color: #000;\r\n}\r\n\r\n.shapeButton {\r\n  position: flex;\r\n  height: 65px;\r\n  width: 150px;\r\n  justify-content: space-between;\r\n  margin: 10px;\r\n  background-color: #ffffff;\r\n  color: #000000;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.5);\r\n  opacity: 0.5;\r\n  transition: 0.5s;\r\n  font-size: 28px;\r\n}\r\n\r\n.shapeButton:hover {\r\n  background-color: #ffffff;\r\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);\r\n  border-radius: 6px;\r\n  transform: perspective(400px) rotateX(10deg);\r\n  opacity: 1;\r\n}\r\n\r\n.shapeContainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/sidebar/shape&sidebar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://gameonbrowser/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://gameonbrowser/./node_modules/css-loader/dist/runtime/getUrl.js?");

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

/***/ "./src/modules/grid/grid.css":
/*!***********************************!*\
  !*** ./src/modules/grid/grid.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./grid.css */ \"./node_modules/css-loader/dist/cjs.js!./src/modules/grid/grid.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/grid/grid.css?");

/***/ }),

/***/ "./src/modules/grid/sprite.css":
/*!*************************************!*\
  !*** ./src/modules/grid/sprite.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sprite_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./sprite.css */ \"./node_modules/css-loader/dist/cjs.js!./src/modules/grid/sprite.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sprite_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sprite_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_sprite_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_sprite_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/grid/sprite.css?");

/***/ }),

/***/ "./src/modules/sidebar/shape&sidebar.css":
/*!***********************************************!*\
  !*** ./src/modules/sidebar/shape&sidebar.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shape_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./shape&sidebar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/modules/sidebar/shape&sidebar.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shape_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shape_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_shape_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_shape_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gameonbrowser/./src/modules/sidebar/shape&sidebar.css?");

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

/***/ }),

/***/ "./src/images/css_sprites.png":
/*!************************************!*\
  !*** ./src/images/css_sprites.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"css_sprites.png\";\n\n//# sourceURL=webpack://gameonbrowser/./src/images/css_sprites.png?");

/***/ }),

/***/ "./src/buildings/buildings.json":
/*!**************************************!*\
  !*** ./src/buildings/buildings.json ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"name\":\"Ратуша\",\"shape\":[[{\"type\":1,\"imageClass\":\"bg-townhall1\"},{\"type\":1,\"imageClass\":\"bg-townhall2\"},{\"type\":1,\"imageClass\":\"bg-townhall3\"}],[{\"type\":1,\"imageClass\":\"bg-townhall4\"},{\"type\":1,\"imageClass\":\"bg-townhall5\"},{\"type\":1,\"imageClass\":\"bg-townhall6\"}],[{\"type\":1,\"imageClass\":\"bg-townhall7\"},{\"type\":1,\"imageClass\":\"bg-townhall8\"},{\"type\":1,\"imageClass\":\"bg-townhall9\"}]]}]');\n\n//# sourceURL=webpack://gameonbrowser/./src/buildings/buildings.json?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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