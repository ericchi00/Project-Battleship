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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen,\\n    Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n}\\n\\nbody {\\n  position: relative;\\n  height: 100vh;\\n  width: 100vw;\\n  background-color: #ced2cc;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nheader {\\n  position: fixed;\\n  top: 0;\\n  text-align: center;\\n  padding: 1rem;\\n  font-size: 2rem;\\n}\\n\\n.instructions {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 50vw;\\n  padding: 1rem;\\n  background-color: rgba(0, 0, 0, 0.123);\\n  gap: 1rem;\\n}\\n\\n#axis {\\n  width: 10rem;\\n  font-size: 1rem;\\n}\\n\\n.instructions p {\\n  font-size: larger;\\n}\\n\\n.boardWrapper {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 3rem;\\n}\\n\\n.playerContainer,\\n.computerContainer {\\n  text-align: center;\\n}\\n\\n#playerTitle,\\n#computerTitle {\\n  display: block;\\n  padding: 1rem;\\n}\\n\\n.playerBoard,\\n.computerBoard {\\n  border: 2px solid black;\\n  height: 400px;\\n  width: 400px;\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n}\\n\\n.box {\\n  border: 1px solid black;\\n}\\n\\n.playerBoard .box[ship] {\\n  background-color: rgb(54, 206, 40);\\n}\\n\\n.playerBoard .box:hover {\\n  cursor: pointer;\\n}\\n\\n/* .setup means playerboard is completely set up  */\\n.box.setup:hover {\\n  cursor: not-allowed;\\n}\\n\\n.box[ship]:hover {\\n  cursor: not-allowed;\\n}\\n\\n.computerBoard .box.setup:hover {\\n  cursor: pointer;\\n}\\n\\n.computerBoard .box.setup.hit {\\n  cursor: not-allowed;\\n}\\n\\n.computerBoard .box.hit[ship] {\\n  background-color: rgb(54, 206, 40);\\n}\\n\\n.computerBoard .box.hit {\\n  background-color: red;\\n}\\n\\n.playerBoard .box.hit[ship] {\\n  transition-delay: 150ms;\\n  background-color: grey;\\n}\\n\\n.playerBoard .hit {\\n  transition-delay: 150ms;\\n  background-color: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/computerboard.js":
/*!******************************!*\
  !*** ./src/computerboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomInt\": () => (/* binding */ getRandomInt),\n/* harmony export */   \"placeShipsRandomly\": () => (/* binding */ placeShipsRandomly)\n/* harmony export */ });\nfunction getRandomInt() {\n  return Math.floor(Math.random() * 10);\n}\n\nfunction getRandomAxis() {\n  return Math.floor(Math.random() * 2) === 0 ? \"x\" : \"y\";\n}\n\nfunction placeShipsRandomly(computer) {\n  computer.board.ships.forEach((ship) => {\n    while (\n      computer.board.placeShips(\n        getRandomInt(),\n        getRandomInt(),\n        ship,\n        getRandomAxis()\n      ) === false\n    ) {\n      if (\n        computer.board.placeShips(\n          getRandomInt(),\n          getRandomInt(),\n          ship,\n          getRandomAxis()\n        ) === true\n      ) {\n        return;\n      }\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://project-battleship/./src/computerboard.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCoordsToGrid\": () => (/* binding */ addCoordsToGrid),\n/* harmony export */   \"createComputerBoard\": () => (/* binding */ createComputerBoard),\n/* harmony export */   \"createPlayerBoard\": () => (/* binding */ createPlayerBoard)\n/* harmony export */ });\nfunction createPlayerBoard() {\n  const container = document.querySelector(\".playerBoard\");\n  for (let i = 0; i < 100; i += 1) {\n    const box = document.createElement(\"div\");\n    box.classList.add(\"box\");\n    container.appendChild(box);\n  }\n}\n\nfunction createComputerBoard() {\n  const container = document.querySelector(\".computerBoard\");\n  for (let i = 0; i < 100; i += 1) {\n    const box = document.createElement(\"div\");\n    box.classList.add(\"box\");\n    container.appendChild(box);\n  }\n}\n\nfunction addCoordsToGrid() {\n  const boxes = document.querySelectorAll(\".box\");\n  const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n  let num = 0;\n  let index = 0;\n  for (let i = 0; i < boxes.length; i += 1) {\n    boxes[i].setAttribute(\"row\", row[index]);\n    boxes[i].setAttribute(\"col\", num);\n    num += 1;\n    if (num === 10) {\n      num = 0;\n      index += 1;\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://project-battleship/./src/dom.js?");

/***/ }),

/***/ "./src/eventhandler.js":
/*!*****************************!*\
  !*** ./src/eventhandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBoats\": () => (/* binding */ addBoats),\n/* harmony export */   \"rotateAxis\": () => (/* binding */ rotateAxis)\n/* harmony export */ });\nfunction containsShip(ship) {\n  const boxes = document.querySelector(\".playerBoard\").querySelectorAll(\".box\");\n  for (let i = 0; i < boxes.length; i += 1) {\n    if (boxes[i].getAttribute(\"ship\") === ship.name) return true;\n  }\n  return false;\n}\n\n// once noTouch is added, cursor changes to normal on player.board\nfunction changeCursor() {\n  const boxes = Array.from(document.querySelectorAll(\".box\"));\n  for (let i = 0; i < boxes.length; i += 1) {\n    boxes[i].classList.add(\"setup\");\n  }\n}\n\nlet axis = \"x\";\nfunction rotateAxis() {\n  const button = document.querySelector(\"#axis\");\n  const current = document.querySelector(\".currentAxis\");\n  button.addEventListener(\"click\", () => {\n    if (axis === \"x\") {\n      button.textContent = \"Change to X\";\n      axis = \"y\";\n      current.textContent = \"Current Axis: Y\";\n    } else if (axis === \"y\") {\n      button.textContent = \"Change to Y\";\n      axis = \"x\";\n      current.textContent = \"Current Axis: X\";\n    }\n  });\n}\n\n// lets player attack on Computer Board\nfunction takeTurns(player, computer) {\n  const computerBoard = document.querySelector(\".computerBoard\");\n  const instructions = document.querySelector(\".instructions\");\n  const win = document.createElement(\"p\");\n  computerBoard.addEventListener(\"click\", function listener(e) {\n    const row = Number(e.target.getAttribute(\"row\"));\n    const col = Number(e.target.getAttribute(\"col\"));\n    // check if player's ships are all sunk for computer win\n    if (player.board.allSunk()) {\n      while (instructions.firstChild) {\n        instructions.removeChild(instructions.lastChild);\n      }\n      win.textContent = \"Computer wins!\";\n      instructions.appendChild(win);\n      computerBoard.removeEventListener(\"click\", listener);\n      return;\n    }\n    // if receiveAttack returns false, it's already been hit\n    if (!computer.board.receiveAttack(row, col)) return;\n    // check if computer is attacking the same coords again\n    let computerAttack = computer.randomAttack();\n    while (!player.board.receiveAttack(computerAttack[0], computerAttack[1])) {\n      // keeps rerolling computerAttack until it hits (true), then checks for win, if not it cancels the loop\n      computerAttack = computer.randomAttack();\n      // checks if computer wins\n      if (computer.board.allSunk()) {\n        while (instructions.firstChild) {\n          instructions.removeChild(instructions.lastChild);\n        }\n        win.textContent = \"You win!\";\n        instructions.appendChild(win);\n        computerBoard.removeEventListener(\"click\", listener);\n        return;\n      }\n      if (player.board.receiveAttack(computerAttack[0], computerAttack[1])) {\n        return;\n      }\n    }\n  });\n}\n\nfunction addBoats(player, computer) {\n  const board = document.querySelector(\".playerBoard\");\n  board.addEventListener(\"click\", function listener(e) {\n    const row = Number(e.target.getAttribute(\"row\"));\n    const col = Number(e.target.getAttribute(\"col\"));\n    if (containsShip(player.board.carrier)) {\n      if (containsShip(player.board.battleship)) {\n        if (containsShip(player.board.destroyer)) {\n          if (containsShip(player.board.submarine)) {\n            if (\n              player.board.placeShips(row, col, player.board.patrolboat, axis)\n            ) {\n              // removes ability to add more boats, changes cursor, and lets you click on computer board\n              board.removeEventListener(\"click\", listener);\n              changeCursor();\n              takeTurns(player, computer);\n            }\n          }\n          player.board.placeShips(row, col, player.board.submarine, axis);\n        }\n        player.board.placeShips(row, col, player.board.destroyer, axis);\n      }\n      player.board.placeShips(row, col, player.board.battleship, axis);\n    }\n    player.board.placeShips(row, col, player.board.carrier, axis);\n  });\n}\n\n\n\n\n//# sourceURL=webpack://project-battleship/./src/eventhandler.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _computerboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerboard */ \"./src/computerboard.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _eventhandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventhandler */ \"./src/eventhandler.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\n\nfunction startGame() {\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createComputerBoard)();\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createPlayerBoard)();\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addCoordsToGrid)();\n  (0,_eventhandler__WEBPACK_IMPORTED_MODULE_2__.rotateAxis)();\n  const player = new _player__WEBPACK_IMPORTED_MODULE_3__.Player(\"player\");\n  const computer = new _player__WEBPACK_IMPORTED_MODULE_3__.Computer(\"computer\");\n  (0,_computerboard__WEBPACK_IMPORTED_MODULE_0__.placeShipsRandomly)(computer);\n  (0,_eventhandler__WEBPACK_IMPORTED_MODULE_2__.addBoats)(player, computer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);\n\n\n//# sourceURL=webpack://project-battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass Gameboard {\n  constructor(user) {\n    this.user = user;\n    this.missed = [];\n    this.carrier = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"carrier\", 5);\n    this.battleship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"battleship\", 4);\n    this.destroyer = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"destroyer\", 3);\n    this.submarine = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"submarine\", 3);\n    this.patrolboat = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"patrolboat\", 2);\n    this.ships = [\n      this.carrier,\n      this.battleship,\n      this.destroyer,\n      this.submarine,\n      this.patrolboat,\n    ];\n  }\n\n  // place ships in specified coordinates, have to use -1 from ship length as grid starts counting from 0\n  // returns false if you can't place it there, returns true if you can\n  placeShips(row, col, ship, axis) {\n    const board = document.querySelector(`.${this.user}Board`);\n    if (\n      board.querySelector(`[row=\"${row}\"][col=\"${col}\"]`).hasAttribute(\"ship\")\n    )\n      return false;\n    if (axis === \"x\") {\n      // checks if ship will be outside of grid\n      if (\n        board.querySelector(\n          `[row=\"${row}\"][col=\"${col + ship.length - 1}\"]`\n        ) === null\n      )\n        return false;\n      // checks if ship will be placed on top of another ship\n      if (\n        board\n          .querySelector(`[row=\"${row}\"][col=\"${col + ship.length - 1}\"]`)\n          .hasAttribute(\"ship\")\n      )\n        return false;\n      // checks ship length on top of a boat that is placed on y axis\n      for (let i = 0; i < ship.length; i += 1) {\n        if (board.querySelector(`[row=\"${row}\"][col=\"${col + i}\"]`) !== null) {\n          if (\n            board\n              .querySelector(`[row=\"${row}\"][col=\"${col + i}\"]`)\n              .hasAttribute(\"ship\")\n          )\n            return false;\n        }\n      }\n      // sets the ship onto div and returns true\n      for (let i = 0; i < ship.length; i += 1) {\n        board\n          .querySelector(`[row=\"${row}\"][col=\"${col + i}\"]`)\n          .setAttribute(\"ship\", ship.name);\n        board\n          .querySelector(`[row=\"${row}\"][col=\"${col + i}\"]`)\n          .setAttribute(\"hitbox\", i);\n      }\n      return true;\n    }\n    if (axis === \"y\") {\n      // checks if ship will be outside of grid\n      if (board.querySelector(`[row=\"${row + ship.length - 1}\"]`) === null)\n        return false;\n      // checks if ship will be placed on top of another ship\n      if (\n        board\n          .querySelector(`[row=\"${row + ship.length - 1}\"][col=\"${col}\"]`)\n          .hasAttribute(\"ship\")\n      )\n        return false;\n      // checks ship length on top of a boat that is placed on the x axis\n      for (let i = 0; i < ship.length; i += 1) {\n        if (board.querySelector(`[row=\"${row + i}\"][col=\"${col}\"]`) !== null) {\n          if (\n            board\n              .querySelector(`[row=\"${row + i}\"][col=\"${col}\"]`)\n              .hasAttribute(\"ship\")\n          )\n            return false;\n        }\n      }\n      // sets the ship onto the div and returns true\n      for (let i = 0; i < ship.length; i += 1) {\n        board\n          .querySelector(`[row=\"${row + i}\"][col=\"${col}\"]`)\n          .setAttribute(\"ship\", ship.name);\n        board\n          .querySelector(`[row=\"${row + i}\"][col=\"${col}\"]`)\n          .setAttribute(\"hitbox\", i);\n      }\n      return true;\n    }\n    return false;\n  }\n\n  // returns false if not hit yet, returns true if hit already\n  receiveAttack(row, col) {\n    const board = document.querySelector(`.${this.user}Board`);\n    const box = board.querySelector(`[row=\"${row}\"][col=\"${col}\"]`);\n    // check if box has already been hit\n    if (box.classList.contains(\"hit\")) return false;\n    if (box.hasAttribute(\"ship\")) {\n      const shipName = box.getAttribute(\"ship\");\n      const shipHitBox = box.getAttribute(\"hitbox\");\n      this.ships.forEach((ship) => {\n        if (shipName === ship.name) {\n          ship.hit(shipHitBox);\n          box.classList.add(\"hit\");\n          return true;\n        }\n      });\n    }\n    this.missed.push([row, col]);\n    box.classList.add(\"hit\");\n    return true;\n  }\n\n  allSunk() {\n    let sunk = 0;\n    this.ships.forEach((ship) => {\n      if (ship.sunk === true) sunk += 1;\n    });\n    if (sunk === 5) return true;\n    return false;\n  }\n\n  displayMissed() {\n    const board = document.querySelector(`.${this.user}Board`);\n    this.missed.forEach((index) => {\n      // add missed class to DOM\n      board\n        .querySelector(`[row=\"${index[0]}\"][col=\"${index[1]}\"]`)\n        .classList.add(\"missed\");\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://project-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n(0,_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://project-battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Computer\": () => (/* binding */ Computer),\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _computerboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerboard */ \"./src/computerboard.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* eslint-disable max-classes-per-file */\n\n\n\n\nclass Player {\n  // creates new board when a new player is created\n  constructor(name) {\n    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n  }\n}\n\nfunction returnTwoRandomNumbers() {\n  return [(0,_computerboard__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(), (0,_computerboard__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)()];\n}\n\nclass Computer extends Player {\n  // eslint-disable-next-line class-methods-use-this\n  randomAttack() {\n    return returnTwoRandomNumbers();\n  }\n}\n\n\n\n\n//# sourceURL=webpack://project-battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ship constructor\nclass Ship {\n  constructor(name, length) {\n    this.name = name;\n    this.length = length;\n    this.sunk = false;\n    this.size = Array.from({ length }, (value, num) => num);\n  }\n\n  // marks ship array to null to indicate it is hit\n  hit(number) {\n    this.size[number] = null;\n    this.isSunk();\n  }\n\n  // checks if the entire ship array is null, then it is sunk\n  isSunk() {\n    let numOfHit = 0;\n    for (let i = 0; i <= this.length; i += 1) {\n      if (this.size[i] === null) {\n        numOfHit += 1;\n      }\n    }\n    if (numOfHit === this.length) this.sunk = true;\n    else this.sunk = false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://project-battleship/./src/ship.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;