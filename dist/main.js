/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/page.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/page.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    overflow: hidden;
    background-color: azure;
}

/* Main Containers */

.main-container {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    grid-template-rows: 90px 1fr;
    /* border: 1px blue solid; */
    height: 100vh;
}

.header {
    background-color: aquamarine;
    display: flex;
    /* border: 1px red solid; */
    align-items: center;
    font-size: 2rem;
    grid-column-start: 1;
    grid-column-end: 4;
}

.sidebar {
    background-color: #5efdfd;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    /* border: 1px black solid; */
    font-size: 1.5rem;
    padding-top: 20px;
}

.hero {
    background-color: azure;
    position: relative;
    /* border: 1px green solid; */
    grid-column-start: 2;
    grid-column-end: 4;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 5px;
}

.header, .hero, .sidebar {
    color: rgb(62, 72, 74);
}

/* Header */

.current-section, .login {
    width: 33%;
    text-align: center;
}



.logo-image {
    position: relative;
    left: 40px;
    height: 80%;
}

.logo {
    display: flex;
    align-items: center;
    width: 33%;
    z-index: 5;
    height: 100%;
    text-align: center;
}


/* Hero Container */

.hero {
    animation-name: slideIn;
    animation-duration: .6s;
}

.new-task {
    position: absolute;
    font-size: 3rem;
    width: 60px;
    background-color: lime;
    border-radius: 30px;
    top: 90%;
    left: 90%;
}

.card {
    background-color: aqua;
    border: 1px black solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation-name: slideUp;
    animation-duration: .3s;
}

@keyframes slideUp {
    0%,
    50% {
      transform: translateY(100%);
      opacity: 1;
    }
     
    60%,
    100% {
      transform: translateY(0);
      opacity: 1;
    
    }
  }

  @keyframes slideIn {
    0%,
    100% {
      transform: translateX(100%);
      opacity: 1;
    }
     
    60%,
    100% {
      transform: translateX(0);
      opacity: 1;
    
    }
  }

  /* Sidebar */

  .section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .section:hover {
    background-color: lightgray;
    font-size: 1.8rem;
    transition: .1s font-size;
    }

    .section:active {
        color: white;
    }

    .task-count {
        width: 2rem;
        height: 2rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 2px rgb(134, 206, 203) solid;
        background-color: #8a98ef;
        border-radius: 50%;
        font-size: 1.3rem;
        font-weight: 700;
        color: #f7f7f7;
        font-family: sans-serif;
        &:empty {
            display: none;
          }
    }

/* Overlay */

.overlay {
    display: flex;
    display: none;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    backdrop-filter: blur(3px);
    z-index: 1;
}

.overlay-active {
    display: block;
}

/* Form */
.form-container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 12fr;
    z-index: 2;
    position: absolute;
    background: rgb(127, 191, 191);
    top: 23%;
    right: 18%;
    height: 45%;
    width: 90%
}

textarea {
    resize: none;
    overflow: auto;
    height: 200px;
  }

  textarea:focus, input:focus{
    outline: none;
}

.form {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    gap: 5px;
}

.form-sidebar {
    padding-top: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    background-color: rgb(97, 158, 158);
    color: lightcyan;
    font-size: 1.8rem;
}

.form-sidebar > *:hover {
    text-shadow: 0 0 2px whitesmoke;
}

.form-header {
    display: flex;
    justify-content: space-between;
    background: rgb(78, 209, 209);
    grid-column: 1/3;
    grid-row: 1/2;
    padding: 0 15px;
}

.form-logo {
    width: 15%;
    height: 100%;
}

.close-button {
    color: white;
    font-size: 1.9rem;
    cursor: pointer;
    font-family: lato, sans-serif;
}

.close-button:hover { text-shadow: 0 0 5px whitesmoke; }

.title-input {
    height: 10%;
    font-size: 2rem;
}

.description {
    height: 60%;
    font-size: 1.3rem;
}

.date-div {
    display: flex;
    align-items: center;
    height: 10%;
    gap: 10px;
    color: lightcyan;
    font-weight: bold;
}

.prio-sub-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
}

.prio-sub-div > * {
    height: 80%;
    width: 20%;
}

.due-date-input {
  padding: .5rem 1rem;
  border: 1px solid lightcyan;
  border-radius: 5px;
  color: lightcyan;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: lato, sans-serif;
}

.section:hover::before {
    content: "//";
    
    font-weight: 700;
  }

  .section:hover::after {
    content: "//";
    
    font-weight: 700;
  }

  .selected::before, .selected::after {
    content: "//";
    font-weight: 700;
  }


`, "",{"version":3,"sources":["webpack://./src/styles/page.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    overflow: hidden;\n    background-color: azure;\n}\n\n/* Main Containers */\n\n.main-container {\n    display: grid;\n    grid-template-columns: 1fr 2fr 2fr;\n    grid-template-rows: 90px 1fr;\n    /* border: 1px blue solid; */\n    height: 100vh;\n}\n\n.header {\n    background-color: aquamarine;\n    display: flex;\n    /* border: 1px red solid; */\n    align-items: center;\n    font-size: 2rem;\n    grid-column-start: 1;\n    grid-column-end: 4;\n}\n\n.sidebar {\n    background-color: #5efdfd;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    text-align: center;\n    /* border: 1px black solid; */\n    font-size: 1.5rem;\n    padding-top: 20px;\n}\n\n.hero {\n    background-color: azure;\n    position: relative;\n    /* border: 1px green solid; */\n    grid-column-start: 2;\n    grid-column-end: 4;\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin: 5px;\n}\n\n.header, .hero, .sidebar {\n    color: rgb(62, 72, 74);\n}\n\n/* Header */\n\n.current-section, .login {\n    width: 33%;\n    text-align: center;\n}\n\n\n\n.logo-image {\n    position: relative;\n    left: 40px;\n    height: 80%;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    width: 33%;\n    z-index: 5;\n    height: 100%;\n    text-align: center;\n}\n\n\n/* Hero Container */\n\n.hero {\n    animation-name: slideIn;\n    animation-duration: .6s;\n}\n\n.new-task {\n    position: absolute;\n    font-size: 3rem;\n    width: 60px;\n    background-color: lime;\n    border-radius: 30px;\n    top: 90%;\n    left: 90%;\n}\n\n.card {\n    background-color: aqua;\n    border: 1px black solid;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    animation-name: slideUp;\n    animation-duration: .3s;\n}\n\n@keyframes slideUp {\n    0%,\n    50% {\n      transform: translateY(100%);\n      opacity: 1;\n    }\n     \n    60%,\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    \n    }\n  }\n\n  @keyframes slideIn {\n    0%,\n    100% {\n      transform: translateX(100%);\n      opacity: 1;\n    }\n     \n    60%,\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    \n    }\n  }\n\n  /* Sidebar */\n\n  .section {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n  }\n\n  .section:hover {\n    background-color: lightgray;\n    font-size: 1.8rem;\n    transition: .1s font-size;\n    }\n\n    .section:active {\n        color: white;\n    }\n\n    .task-count {\n        width: 2rem;\n        height: 2rem;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        border: 2px rgb(134, 206, 203) solid;\n        background-color: #8a98ef;\n        border-radius: 50%;\n        font-size: 1.3rem;\n        font-weight: 700;\n        color: #f7f7f7;\n        font-family: sans-serif;\n        &:empty {\n            display: none;\n          }\n    }\n\n/* Overlay */\n\n.overlay {\n    display: flex;\n    display: none;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.6);\n    height: 100%;\n    width: 100%;\n    backdrop-filter: blur(3px);\n    z-index: 1;\n}\n\n.overlay-active {\n    display: block;\n}\n\n/* Form */\n.form-container {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 12fr;\n    z-index: 2;\n    position: absolute;\n    background: rgb(127, 191, 191);\n    top: 23%;\n    right: 18%;\n    height: 45%;\n    width: 90%\n}\n\ntextarea {\n    resize: none;\n    overflow: auto;\n    height: 200px;\n  }\n\n  textarea:focus, input:focus{\n    outline: none;\n}\n\n.form {\n    padding: 1rem 1.5rem;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    flex: 1;\n    gap: 5px;\n}\n\n.form-sidebar {\n    padding-top: 15px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 15px;\n    background-color: rgb(97, 158, 158);\n    color: lightcyan;\n    font-size: 1.8rem;\n}\n\n.form-sidebar > *:hover {\n    text-shadow: 0 0 2px whitesmoke;\n}\n\n.form-header {\n    display: flex;\n    justify-content: space-between;\n    background: rgb(78, 209, 209);\n    grid-column: 1/3;\n    grid-row: 1/2;\n    padding: 0 15px;\n}\n\n.form-logo {\n    width: 15%;\n    height: 100%;\n}\n\n.close-button {\n    color: white;\n    font-size: 1.9rem;\n    cursor: pointer;\n    font-family: lato, sans-serif;\n}\n\n.close-button:hover { text-shadow: 0 0 5px whitesmoke; }\n\n.title-input {\n    height: 10%;\n    font-size: 2rem;\n}\n\n.description {\n    height: 60%;\n    font-size: 1.3rem;\n}\n\n.date-div {\n    display: flex;\n    align-items: center;\n    height: 10%;\n    gap: 10px;\n    color: lightcyan;\n    font-weight: bold;\n}\n\n.prio-sub-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 10%;\n}\n\n.prio-sub-div > * {\n    height: 80%;\n    width: 20%;\n}\n\n.due-date-input {\n  padding: .5rem 1rem;\n  border: 1px solid lightcyan;\n  border-radius: 5px;\n  color: lightcyan;\n  background-color: transparent;\n  font-size: 1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: lato, sans-serif;\n}\n\n.section:hover::before {\n    content: \"//\";\n    \n    font-weight: 700;\n  }\n\n  .section:hover::after {\n    content: \"//\";\n    \n    font-weight: 700;\n  }\n\n  .selected::before, .selected::after {\n    content: \"//\";\n    font-weight: 700;\n  }\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/page.css":
/*!*****************************!*\
  !*** ./src/styles/page.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./page.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/create-page.js":
/*!************************************!*\
  !*** ./src/modules/create-page.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/overlay */ "./src/pages/overlay.js");
/* harmony import */ var _assets_logo2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/logo2.png */ "./src/assets/logo2.png");



const createPage = () => {
    const container = document.querySelector('.main-container');

    const createHeader = (() => {
        const header = document.createElement('header');
        header.className = 'header';
        header.innerHTML = `
        <div class="logo">
        <img class='logo-image' src=${_assets_logo2_png__WEBPACK_IMPORTED_MODULE_1__}>
        </div>
        <div class="current-section">Inbox</div>
        <div class="login">Login</div>
        `;
        container.appendChild(header);
    })();

    const createSideBar = (() => {
        const sideBar = document.createElement('div');
        sideBar.className = 'sidebar';
        sideBar.innerHTML = `
        <div class="inbox-main section">
            <span class='inbox-text'>Inbox</span>
            <span class='inbox-count task-count'></span>
        </div>
        <div class="today-main section">
            <span class='today-text'>Today</span>
            <span class='today-count task-count'></span>
        </div>
        <div class="week-main section">
            <span class='week-text'>Week</span>
            <span class='week-count task-count'></span>
        </div>
        `;
        container.appendChild(sideBar);
    })();    

    (0,_pages_overlay__WEBPACK_IMPORTED_MODULE_0__.createOverlay)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateTaskCountDisplay: () => (/* binding */ UpdateTaskCountDisplay),
/* harmony export */   changeHeaderTitle: () => (/* binding */ changeHeaderTitle),
/* harmony export */   clearContainer: () => (/* binding */ clearContainer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   deleteForm: () => (/* binding */ deleteForm),
/* harmony export */   markActiveSection: () => (/* binding */ markActiveSection),
/* harmony export */   openForm: () => (/* binding */ openForm),
/* harmony export */   removeActiveSections: () => (/* binding */ removeActiveSections),
/* harmony export */   resetDom: () => (/* binding */ resetDom)
/* harmony export */ });
/* harmony import */ var _todo_objs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-objs.js */ "./src/modules/todo-objs.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _pages_overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/overlay.js */ "./src/pages/overlay.js");
/* harmony import */ var _renderPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderPage.js */ "./src/modules/renderPage.js");





const addNewTask = (obj, section) => {
    _todo_objs_js__WEBPACK_IMPORTED_MODULE_0__.toDoListCollection.add(obj, section)
};

const clearContainer = () => {
    document.querySelector('.hero').remove();
};

const resetDom = () => {
    let cards = document.querySelectorAll('.card');
    
    cards.forEach(card => card.remove());
};

const openForm = (section) => {
    
    // Activates overlay
    let overlay = document.querySelector('.overlay');
    overlay.classList.toggle('overlay-active');

    createForm(section);
    
};

function createForm(section) {
    const formContainer = document.createElement("div");
    formContainer.className = 'form-container'

    const sideBar = document.createElement('div');
    sideBar.className = 'form-sidebar';
    formContainer.appendChild(sideBar);

    // Dynamically create sidebar divs
    const sideBarSections = ['Inbox', 'Today', 'Week'];
    for (let i = 0; i < sideBarSections.length; i++) {
        const div = document.createElement('div');
        div.className = `${sideBarSections[i].toLowerCase()}-sidebar`;
        div.textContent = sideBarSections[i];
        sideBar.appendChild(div);
    }

    const header = document.createElement('header');
    header.className = 'form-header';
    formContainer.appendChild(header);

    const logo = new Image();
    logo.classList.add('form-logo');
    logo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;
    header.appendChild(logo);

    const closeButton = document.createElement('div');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', () => {
        (0,_pages_overlay_js__WEBPACK_IMPORTED_MODULE_2__.closeOverlay)();
    });
    header.appendChild(closeButton);

    const form = document.createElement("form");
    form.className = 'form'
    formContainer.appendChild(form)

    const title = document.createElement("input");
    title.classList.add('title-input');
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");
    form.appendChild(title);

    const description = document.createElement("textarea");
    description.classList.add('description');
    description.setAttribute("type", "text");
    description.setAttribute("name", "desc");
    description.setAttribute("placeholder", "Details: e.g internet, phone, rent.");
    form.appendChild(description);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.className = 'date-div';
    form.appendChild(dueDateDiv);
    
    const dueDateText = document.createElement('div');
    dueDateText.className = 'date-text';
    dueDateText.innerText = 'Due Date:'
    dueDateDiv.appendChild(dueDateText);

    const due = document.createElement("input");
    due.className = 'due-date-input';
    due.setAttribute("type", "date");
    due.setAttribute("name", "due");
    dueDateDiv.appendChild(due);

    const prioSubDiv = document.createElement('div');
    prioSubDiv.className = 'prio-sub-div';
    form.appendChild(prioSubDiv);

    const priority = document.createElement('select');
    const prioChoices = ['Low', 'Moderate', 'High'];
    priority.setAttribute('name', 'prio');
    for (let i = 0; i < prioChoices.length; i++) {
        const option = document.createElement('option');
        option.textContent = prioChoices[i];
        option.setAttribute('value', `${prioChoices[i].toLocaleLowerCase()}`);
        priority.appendChild(option);
    };
    prioSubDiv.appendChild(priority);

    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    prioSubDiv.appendChild(submit);

    // Data extracted from form here
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        addNewTask(extractFormData([title, description, due, priority]), section);
        (0,_renderPage_js__WEBPACK_IMPORTED_MODULE_3__.renderJustAdded)(_todo_objs_js__WEBPACK_IMPORTED_MODULE_0__.toDoListCollection.getCollection(section), `.${section}-container`);
        UpdateTaskCountDisplay(section);

        (0,_pages_overlay_js__WEBPACK_IMPORTED_MODULE_2__.closeOverlay)();
    });

    const hero = document.querySelector('.hero');
    hero.append(formContainer);
};

function deleteForm() {
    const form = document.querySelector('.form-container');
    form.remove();
}

function extractFormData(formData) {
    const formDataObj = {};
    formData.forEach(input => formDataObj[input.name] = input.value);
    return formDataObj;
};

function changeHeaderTitle(section) {
    const currentSection = document.querySelector('.current-section');

    currentSection.textContent = section;
};

function UpdateTaskCountDisplay(section) {
    let countDisplay = document.querySelector(`.${section}-count`);
    countDisplay.innerHTML = _todo_objs_js__WEBPACK_IMPORTED_MODULE_0__.toDoListCollection.getCollection(section).length;
};

function markActiveSection(section) {
    if (section.tagName === 'SPAN') section.parentElement.classList.add('selected');
    else section.classList.add('selected');
};

function removeActiveSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('selected'))
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewTask);


/***/ }),

/***/ "./src/modules/renderPage.js":
/*!***********************************!*\
  !*** ./src/modules/renderPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   renderJustAdded: () => (/* binding */ renderJustAdded)
/* harmony export */ });
/* harmony import */ var _todo_objs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-objs */ "./src/modules/todo-objs.js");


const renderTask = (task, section) => {
    const heroContainer = document.querySelector(section);
    if (!task) return;
    
    for (let i = 0; i < task.length; i++) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        for (const prop in task[i]) {
            const div = document.createElement('div');
            div.innerHTML = `${prop}: ${task[i][prop]}`;
            cardDiv.appendChild(div);
        }
        
        heroContainer.appendChild(cardDiv);
    };
};

const renderJustAdded = (obj, section) => {
    const heroContainer = document.querySelector(section);
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    
    for (const prop in obj[obj.length - 1]) {
        const div = document.createElement('div');
        div.innerHTML = `${prop}: ${obj[obj.length-1][prop]}`;
        cardDiv.appendChild(div);
    }
    heroContainer.appendChild(cardDiv);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTask);


/***/ }),

/***/ "./src/modules/todo-objs.js":
/*!**********************************!*\
  !*** ./src/modules/todo-objs.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toDoListCollection: () => (/* binding */ toDoListCollection)
/* harmony export */ });
// Module of all to-do items

const toDoListCollection = (() => {

    const collection = {};

    const add = (obj, section) => {
        if (!collection[section]) {
            collection[section] = [];
            collection[section].push(obj);
        } else collection[section].push(obj);
    };

    const getCollection = (section) => {
        return collection[section];
    };

    const getAllCollections = () => {
        return collection;
    };

    return {add, getCollection, getAllCollections};
})();







/***/ }),

/***/ "./src/pages/container-swap.js":
/*!*************************************!*\
  !*** ./src/pages/container-swap.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeroContainer: () => (/* binding */ createHeroContainer),
/* harmony export */   createTodayContainer: () => (/* binding */ createTodayContainer),
/* harmony export */   createWeekContainer: () => (/* binding */ createWeekContainer)
/* harmony export */ });
/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/functions */ "./src/modules/functions.js");
/* harmony import */ var _modules_todo_objs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/todo-objs */ "./src/modules/todo-objs.js");
/* harmony import */ var _modules_renderPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/renderPage */ "./src/modules/renderPage.js");




const createHeroContainer = () => {
    const container = document.querySelector('.main-container');
    

    const heroContainer = document.createElement('div');
    heroContainer.className = 'hero';
    heroContainer.classList.add('inbox-container')
    heroContainer.innerHTML = `
    <button class="new-task inbox-add" id='inbox'>+</button>
    `;
    container.appendChild(heroContainer);

    document.querySelector('.new-task').addEventListener('click', (e) => {
        (0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.openForm)(e.target.id);
    });
};

const createTodayContainer = () => {
    const container = document.querySelector('.main-container');
    

    const todayContainer = document.createElement('div');
    todayContainer.className = 'hero';
    todayContainer.classList.add('today-container')
    todayContainer.innerHTML = `
    <button class="new-task today-add" id='today'>+</button>
    `;
    container.appendChild(todayContainer);

    document.querySelector('.new-task').addEventListener('click', (e) => {
        (0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.openForm)(e.target.id);
    });
};

const createWeekContainer = () => {
    const container = document.querySelector('.main-container');

    const weekContainer = document.createElement('div');
    weekContainer.className = 'hero';
    weekContainer.classList.add('week-container')
    weekContainer.innerHTML = `
    <button class="new-task week-add" id='week'>+</button>
    `;
    container.appendChild(weekContainer);

    document.querySelector('.new-task').addEventListener('click', (e) => {
        (0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.openForm)(e.target.id);      
    });
};



/***/ }),

/***/ "./src/pages/overlay.js":
/*!******************************!*\
  !*** ./src/pages/overlay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeOverlay: () => (/* binding */ closeOverlay),
/* harmony export */   createOverlay: () => (/* binding */ createOverlay)
/* harmony export */ });
/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/functions */ "./src/modules/functions.js");


 function createOverlay() {
    const container = document.querySelector('.main-container');

    const div = document.createElement('div');
    div.className = 'overlay';
    
    container.appendChild(div);

    div.onclick = () => {
        closeOverlay();
    }
};

function closeOverlay() {
    // if (!document.querySelector('.overlay')) return;
    const overlay = document.querySelector('.overlay');
    
    overlay.classList.toggle('overlay-active');
    if (document.querySelector('.form-container')) (0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.deleteForm)();   
    
};





 

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/995c17d9d9789fa748bf.png";

/***/ }),

/***/ "./src/assets/logo2.png":
/*!******************************!*\
  !*** ./src/assets/logo2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/4a73ea7017df5a2f1d39.png";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/create-page */ "./src/modules/create-page.js");
/* harmony import */ var _modules_renderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderPage */ "./src/modules/renderPage.js");
/* harmony import */ var _pages_container_swap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/container-swap */ "./src/pages/container-swap.js");
/* harmony import */ var _modules_todo_objs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todo-objs */ "./src/modules/todo-objs.js");
/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/functions */ "./src/modules/functions.js");
/* harmony import */ var _styles_page_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/page.css */ "./src/styles/page.css");







(0,_modules_create_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_pages_container_swap__WEBPACK_IMPORTED_MODULE_2__.createHeroContainer)();

let inboxSiderbar = document.querySelector('.inbox-main');

inboxSiderbar.addEventListener('click', (e) => {
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.removeActiveSections)();
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.markActiveSection)(e.target);
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.changeHeaderTitle)('Inbox');
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.clearContainer)();
    (0,_pages_container_swap__WEBPACK_IMPORTED_MODULE_2__.createHeroContainer)();
    (0,_modules_renderPage__WEBPACK_IMPORTED_MODULE_1__["default"])(_modules_todo_objs__WEBPACK_IMPORTED_MODULE_3__.toDoListCollection.getCollection('inbox'), '.inbox-container');
})



document.querySelector('.today-main').addEventListener('click', (e) => {
    ;(0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.removeActiveSections)();
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.markActiveSection)(e.target);
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.changeHeaderTitle)('Today');
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.clearContainer)();
    (0,_pages_container_swap__WEBPACK_IMPORTED_MODULE_2__.createTodayContainer)();
    (0,_modules_renderPage__WEBPACK_IMPORTED_MODULE_1__["default"])(_modules_todo_objs__WEBPACK_IMPORTED_MODULE_3__.toDoListCollection.getCollection('today'), '.today-container');
})

document.querySelector('.week-main').addEventListener('click', (e) => {
    ;(0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.removeActiveSections)();
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.markActiveSection)(e.target);
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.changeHeaderTitle)('Week');
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.clearContainer)();
    (0,_pages_container_swap__WEBPACK_IMPORTED_MODULE_2__.createWeekContainer)();
    (0,_modules_renderPage__WEBPACK_IMPORTED_MODULE_1__["default"])(_modules_todo_objs__WEBPACK_IMPORTED_MODULE_3__.toDoListCollection.getCollection('week'), '.week-container');
})









})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPLHNGQUFzRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxTQUFTLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLEtBQUssTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxVQUFVLEtBQUssTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZ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QUksa0VBQWM7QUFDbEIsSUFBSSwwRUFBbUI7QUFDdkIsSUFBSSwrREFBVSxDQUFDLGtFQUFrQjtBQUNqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3BhZ2UuY3NzPzU4NjUiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1vYmpzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcGFnZXMvY29udGFpbmVyLXN3YXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wYWdlcy9vdmVybGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG59XG5cbi8qIE1haW4gQ29udGFpbmVycyAqL1xuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDJmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggMWZyO1xuICAgIC8qIGJvcmRlcjogMXB4IGJsdWUgc29saWQ7ICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVmZGZkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uaGVybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGJvcmRlcjogMXB4IGdyZWVuIHNvbGlkOyAqL1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4uaGVhZGVyLCAuaGVybywgLnNpZGViYXIge1xuICAgIGNvbG9yOiByZ2IoNjIsIDcyLCA3NCk7XG59XG5cbi8qIEhlYWRlciAqL1xuXG4uY3VycmVudC1zZWN0aW9uLCAubG9naW4ge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuLmxvZ28taW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA0MHB4O1xuICAgIGhlaWdodDogODAlO1xufVxuXG4ubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAzMyU7XG4gICAgei1pbmRleDogNTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8qIEhlcm8gQ29udGFpbmVyICovXG5cbi5oZXJvIHtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC42cztcbn1cblxuLm5ldy10YXNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0b3A6IDkwJTtcbiAgICBsZWZ0OiA5MCU7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVVcDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC4zcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgICAwJSxcbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgIFxuICAgIDYwJSxcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgXG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgICBcbiAgICA2MCUsXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIFxuICAgIH1cbiAgfVxuXG4gIC8qIFNpZGViYXIgKi9cblxuICAuc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgfVxuXG4gIC5zZWN0aW9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgdHJhbnNpdGlvbjogLjFzIGZvbnQtc2l6ZTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbjphY3RpdmUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLnRhc2stY291bnQge1xuICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMnB4IHJnYigxMzQsIDIwNiwgMjAzKSBzb2xpZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhhOThlZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAmOmVtcHR5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgIH1cblxuLyogT3ZlcmxheSAqL1xuXG4ub3ZlcmxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5vdmVybGF5LWFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZvcm0gKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTJmcjtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTI3LCAxOTEsIDE5MSk7XG4gICAgdG9wOiAyMyU7XG4gICAgcmlnaHQ6IDE4JTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgICB3aWR0aDogOTAlXG59XG5cbnRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIHRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybSB7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5mb3JtLXNpZGViYXIge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDE1OCwgMTU4KTtcbiAgICBjb2xvcjogbGlnaHRjeWFuO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uZm9ybS1zaWRlYmFyID4gKjpob3ZlciB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggd2hpdGVzbW9rZTtcbn1cblxuLmZvcm0taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzgsIDIwOSwgMjA5KTtcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uZm9ybS1sb2dvIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS45cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogbGF0bywgc2Fucy1zZXJpZjtcbn1cblxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7IHRleHQtc2hhZG93OiAwIDAgNXB4IHdoaXRlc21va2U7IH1cblxuLnRpdGxlLWlucHV0IHtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5kYXRlLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAlO1xuICAgIGdhcDogMTBweDtcbiAgICBjb2xvcjogbGlnaHRjeWFuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJpby1zdWItZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAlO1xufVxuXG4ucHJpby1zdWItZGl2ID4gKiB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDIwJTtcbn1cblxuLmR1ZS1kYXRlLWlucHV0IHtcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjeWFuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiBsaWdodGN5YW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBzYW5zLXNlcmlmO1xufVxuXG4uc2VjdGlvbjpob3Zlcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIi8vXCI7XG4gICAgXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIC5zZWN0aW9uOmhvdmVyOjphZnRlciB7XG4gICAgY29udGVudDogXCIvL1wiO1xuICAgIFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICAuc2VsZWN0ZWQ6OmJlZm9yZSwgLnNlbGVjdGVkOjphZnRlciB7XG4gICAgY29udGVudDogXCIvL1wiO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVC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O0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTs7SUFFYixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhOztJQUViLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4vKiBNYWluIENvbnRhaW5lcnMgKi9cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggMWZyO1xcbiAgICAvKiBib3JkZXI6IDFweCBibHVlIHNvbGlkOyAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZmRmZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5oZXJvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyogYm9yZGVyOiAxcHggZ3JlZW4gc29saWQ7ICovXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLCAuaGVybywgLnNpZGViYXIge1xcbiAgICBjb2xvcjogcmdiKDYyLCA3MiwgNzQpO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG4uY3VycmVudC1zZWN0aW9uLCAubG9naW4ge1xcbiAgICB3aWR0aDogMzMlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcbi5sb2dvLWltYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA0MHB4O1xcbiAgICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMzMlO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogSGVybyBDb250YWluZXIgKi9cXG5cXG4uaGVybyB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC42cztcXG59XFxuXFxuLm5ldy10YXNrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB0b3A6IDkwJTtcXG4gICAgbGVmdDogOTAlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlVXA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xcbiAgICAwJSxcXG4gICAgNTAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAgXFxuICAgIDYwJSxcXG4gICAgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIFxcbiAgICB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgICAwJSxcXG4gICAgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgIFxcbiAgICA2MCUsXFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG4gICAgfVxcbiAgfVxcblxcbiAgLyogU2lkZWJhciAqL1xcblxcbiAgLnNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gIH1cXG5cXG4gIC5zZWN0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjFzIGZvbnQtc2l6ZTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbjphY3RpdmUge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWNvdW50IHtcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6IDJweCByZ2IoMTM0LCAyMDYsIDIwMykgc29saWQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE5OGVmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgY29sb3I6ICNmN2Y3Zjc7XFxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgICAgICY6ZW1wdHkge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgIH1cXG4gICAgfVxcblxcbi8qIE92ZXJsYXkgKi9cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLm92ZXJsYXktYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEZvcm0gKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEyZnI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDEyNywgMTkxLCAxOTEpO1xcbiAgICB0b3A6IDIzJTtcXG4gICAgcmlnaHQ6IDE4JTtcXG4gICAgaGVpZ2h0OiA0NSU7XFxuICAgIHdpZHRoOiA5MCVcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgfVxcblxcbiAgdGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMTtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5mb3JtLXNpZGViYXIge1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDE1OCwgMTU4KTtcXG4gICAgY29sb3I6IGxpZ2h0Y3lhbjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5mb3JtLXNpZGViYXIgPiAqOmhvdmVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggd2hpdGVzbW9rZTtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzgsIDIwOSwgMjA5KTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG5cXG4uZm9ybS1sb2dvIHtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuOXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogbGF0bywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7IHRleHQtc2hhZG93OiAwIDAgNXB4IHdoaXRlc21va2U7IH1cXG5cXG4udGl0bGUtaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5kYXRlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGNvbG9yOiBsaWdodGN5YW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpby1zdWItZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG59XFxuXFxuLnByaW8tc3ViLWRpdiA+ICoge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLmR1ZS1kYXRlLWlucHV0IHtcXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogbGlnaHRjeWFuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2VjdGlvbjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIi8vXFxcIjtcXG4gICAgXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxuXFxuICAuc2VjdGlvbjpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiLy9cXFwiO1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG5cXG4gIC5zZWxlY3RlZDo6YmVmb3JlLCAuc2VsZWN0ZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIi8vXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZU92ZXJsYXkgfSBmcm9tIFwiLi4vcGFnZXMvb3ZlcmxheVwiO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi8uLi9hc3NldHMvbG9nbzIucG5nJztcblxuY29uc3QgY3JlYXRlUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9J2xvZ28taW1hZ2UnIHNyYz0ke2xvZ299PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtc2VjdGlvblwiPkluYm94PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpblwiPkxvZ2luPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVTaWRlQmFyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlQmFyLmNsYXNzTmFtZSA9ICdzaWRlYmFyJztcbiAgICAgICAgc2lkZUJhci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmJveC1tYWluIHNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpbmJveC10ZXh0Jz5JbmJveDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpbmJveC1jb3VudCB0YXNrLWNvdW50Jz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kYXktbWFpbiBzZWN0aW9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0ndG9kYXktdGV4dCc+VG9kYXk8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0ndG9kYXktY291bnQgdGFzay1jb3VudCc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstbWFpbiBzZWN0aW9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nd2Vlay10ZXh0Jz5XZWVrPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3dlZWstY291bnQgdGFzay1jb3VudCc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuICAgIH0pKCk7ICAgIFxuXG4gICAgY3JlYXRlT3ZlcmxheSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTsiLCJpbXBvcnQge3RvRG9MaXN0Q29sbGVjdGlvbn0gZnJvbSAnLi90b2RvLW9ianMuanMnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuLy4uL2Fzc2V0cy9sb2dvLnBuZyc7XG5pbXBvcnQgeyBjbG9zZU92ZXJsYXkgfSBmcm9tICcuLi9wYWdlcy9vdmVybGF5LmpzJztcbmltcG9ydCB7IHJlbmRlckp1c3RBZGRlZCB9IGZyb20gJy4vcmVuZGVyUGFnZS5qcyc7XG5cbmNvbnN0IGFkZE5ld1Rhc2sgPSAob2JqLCBzZWN0aW9uKSA9PiB7XG4gICAgdG9Eb0xpc3RDb2xsZWN0aW9uLmFkZChvYmosIHNlY3Rpb24pXG59O1xuXG5jb25zdCBjbGVhckNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpLnJlbW92ZSgpO1xufTtcblxuY29uc3QgcmVzZXREb20gPSAoKSA9PiB7XG4gICAgbGV0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICBcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4gY2FyZC5yZW1vdmUoKSk7XG59O1xuXG5jb25zdCBvcGVuRm9ybSA9IChzZWN0aW9uKSA9PiB7XG4gICAgXG4gICAgLy8gQWN0aXZhdGVzIG92ZXJsYXlcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5LWFjdGl2ZScpO1xuXG4gICAgY3JlYXRlRm9ybShzZWN0aW9uKTtcbiAgICBcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oc2VjdGlvbikge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gJ2Zvcm0tY29udGFpbmVyJ1xuXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVCYXIuY2xhc3NOYW1lID0gJ2Zvcm0tc2lkZWJhcic7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQmFyKTtcblxuICAgIC8vIER5bmFtaWNhbGx5IGNyZWF0ZSBzaWRlYmFyIGRpdnNcbiAgICBjb25zdCBzaWRlQmFyU2VjdGlvbnMgPSBbJ0luYm94JywgJ1RvZGF5JywgJ1dlZWsnXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGVCYXJTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGAke3NpZGVCYXJTZWN0aW9uc1tpXS50b0xvd2VyQ2FzZSgpfS1zaWRlYmFyYDtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gc2lkZUJhclNlY3Rpb25zW2ldO1xuICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdmb3JtLWhlYWRlcic7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnZm9ybS1sb2dvJyk7XG4gICAgbG9nby5zcmMgPSBsb2dvSW1hZ2U7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICd4JztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VPdmVybGF5KCk7XG4gICAgfSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdmb3JtJ1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjXCIpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGV0YWlsczogZS5nIGludGVybmV0LCBwaG9uZSwgcmVudC5cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZURpdi5jbGFzc05hbWUgPSAnZGF0ZS1kaXYnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gICAgXG4gICAgY29uc3QgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlVGV4dC5jbGFzc05hbWUgPSAnZGF0ZS10ZXh0JztcbiAgICBkdWVEYXRlVGV4dC5pbm5lclRleHQgPSAnRHVlIERhdGU6J1xuICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xuXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZS5jbGFzc05hbWUgPSAnZHVlLWRhdGUtaW5wdXQnO1xuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkdWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZVwiKTtcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZSk7XG5cbiAgICBjb25zdCBwcmlvU3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb1N1YkRpdi5jbGFzc05hbWUgPSAncHJpby1zdWItZGl2JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9TdWJEaXYpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCBwcmlvQ2hvaWNlcyA9IFsnTG93JywgJ01vZGVyYXRlJywgJ0hpZ2gnXTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpbycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb0Nob2ljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9DaG9pY2VzW2ldO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3ByaW9DaG9pY2VzW2ldLnRvTG9jYWxlTG93ZXJDYXNlKCl9YCk7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfTtcbiAgICBwcmlvU3ViRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIHZhciBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICAgIHByaW9TdWJEaXYuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgIC8vIERhdGEgZXh0cmFjdGVkIGZyb20gZm9ybSBoZXJlXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgICAgIGFkZE5ld1Rhc2soZXh0cmFjdEZvcm1EYXRhKFt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHldKSwgc2VjdGlvbik7XG4gICAgICAgIHJlbmRlckp1c3RBZGRlZCh0b0RvTGlzdENvbGxlY3Rpb24uZ2V0Q29sbGVjdGlvbihzZWN0aW9uKSwgYC4ke3NlY3Rpb259LWNvbnRhaW5lcmApO1xuICAgICAgICBVcGRhdGVUYXNrQ291bnREaXNwbGF5KHNlY3Rpb24pO1xuXG4gICAgICAgIGNsb3NlT3ZlcmxheSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XG4gICAgaGVyby5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG59O1xuXG5mdW5jdGlvbiBkZWxldGVGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgICBmb3JtLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Rm9ybURhdGEoZm9ybURhdGEpIHtcbiAgICBjb25zdCBmb3JtRGF0YU9iaiA9IHt9O1xuICAgIGZvcm1EYXRhLmZvckVhY2goaW5wdXQgPT4gZm9ybURhdGFPYmpbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZSk7XG4gICAgcmV0dXJuIGZvcm1EYXRhT2JqO1xufTtcblxuZnVuY3Rpb24gY2hhbmdlSGVhZGVyVGl0bGUoc2VjdGlvbikge1xuICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2VjdGlvbicpO1xuXG4gICAgY3VycmVudFNlY3Rpb24udGV4dENvbnRlbnQgPSBzZWN0aW9uO1xufTtcblxuZnVuY3Rpb24gVXBkYXRlVGFza0NvdW50RGlzcGxheShzZWN0aW9uKSB7XG4gICAgbGV0IGNvdW50RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NlY3Rpb259LWNvdW50YCk7XG4gICAgY291bnREaXNwbGF5LmlubmVySFRNTCA9IHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKHNlY3Rpb24pLmxlbmd0aDtcbn07XG5cbmZ1bmN0aW9uIG1hcmtBY3RpdmVTZWN0aW9uKHNlY3Rpb24pIHtcbiAgICBpZiAoc2VjdGlvbi50YWdOYW1lID09PSAnU1BBTicpIHNlY3Rpb24ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGVsc2Ugc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlU2VjdGlvbnMoKSB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpO1xuICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGROZXdUYXNrO1xuZXhwb3J0IHtjbGVhckNvbnRhaW5lciwgcmVzZXREb20sIG9wZW5Gb3JtLCBkZWxldGVGb3JtLCBjaGFuZ2VIZWFkZXJUaXRsZSwgVXBkYXRlVGFza0NvdW50RGlzcGxheSwgbWFya0FjdGl2ZVNlY3Rpb24sIHJlbW92ZUFjdGl2ZVNlY3Rpb25zfTsiLCJpbXBvcnQgeyB0b0RvTGlzdENvbGxlY3Rpb24gfSBmcm9tIFwiLi90b2RvLW9ianNcIjtcblxuY29uc3QgcmVuZGVyVGFzayA9ICh0YXNrLCBzZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgaGVyb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VjdGlvbik7XG4gICAgaWYgKCF0YXNrKSByZXR1cm47XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZERpdi5jbGFzc05hbWUgPSAnY2FyZCc7XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHRhc2tbaV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke3Byb3B9OiAke3Rhc2tbaV1bcHJvcF19YDtcbiAgICAgICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICB9O1xufTtcblxuY29uc3QgcmVuZGVySnVzdEFkZGVkID0gKG9iaiwgc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IGhlcm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb24pO1xuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2LmNsYXNzTmFtZSA9ICdjYXJkJztcbiAgICBcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gb2JqW29iai5sZW5ndGggLSAxXSkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke3Byb3B9OiAke29ialtvYmoubGVuZ3RoLTFdW3Byb3BdfWA7XG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gICAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhc2s7XG5leHBvcnQge3JlbmRlckp1c3RBZGRlZH07IiwiLy8gTW9kdWxlIG9mIGFsbCB0by1kbyBpdGVtc1xuXG5jb25zdCB0b0RvTGlzdENvbGxlY3Rpb24gPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IHt9O1xuXG4gICAgY29uc3QgYWRkID0gKG9iaiwgc2VjdGlvbikgPT4ge1xuICAgICAgICBpZiAoIWNvbGxlY3Rpb25bc2VjdGlvbl0pIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25bc2VjdGlvbl0gPSBbXTtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25bc2VjdGlvbl0ucHVzaChvYmopO1xuICAgICAgICB9IGVsc2UgY29sbGVjdGlvbltzZWN0aW9uXS5wdXNoKG9iaik7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENvbGxlY3Rpb24gPSAoc2VjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbltzZWN0aW9uXTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QWxsQ29sbGVjdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH07XG5cbiAgICByZXR1cm4ge2FkZCwgZ2V0Q29sbGVjdGlvbiwgZ2V0QWxsQ29sbGVjdGlvbnN9O1xufSkoKTtcblxuXG5cbmV4cG9ydCB7dG9Eb0xpc3RDb2xsZWN0aW9ufTtcblxuIiwiaW1wb3J0IGFkZE5ld1Rhc2ssIHtvcGVuRm9ybX0gZnJvbSBcIi4uL21vZHVsZXMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB0b0RvTGlzdENvbGxlY3Rpb24gfSBmcm9tIFwiLi4vbW9kdWxlcy90b2RvLW9ianNcIjtcbmltcG9ydCB7IHJlbmRlckp1c3RBZGRlZCB9IGZyb20gXCIuLi9tb2R1bGVzL3JlbmRlclBhZ2VcIjtcblxuY29uc3QgY3JlYXRlSGVyb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcbiAgICBcblxuICAgIGNvbnN0IGhlcm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdoZXJvJztcbiAgICBoZXJvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luYm94LWNvbnRhaW5lcicpXG4gICAgaGVyb0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm5ldy10YXNrIGluYm94LWFkZFwiIGlkPSdpbmJveCc+KzwvYnV0dG9uPlxuICAgIGA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9Db250YWluZXIpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBvcGVuRm9ybShlLnRhcmdldC5pZCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RheUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcbiAgICBcblxuICAgIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlDb250YWluZXIuY2xhc3NOYW1lID0gJ2hlcm8nO1xuICAgIHRvZGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWNvbnRhaW5lcicpXG4gICAgdG9kYXlDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gY2xhc3M9XCJuZXctdGFzayB0b2RheS1hZGRcIiBpZD0ndG9kYXknPis8L2J1dHRvbj5cbiAgICBgO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUNvbnRhaW5lcik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIG9wZW5Gb3JtKGUudGFyZ2V0LmlkKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVdlZWtDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCB3ZWVrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vla0NvbnRhaW5lci5jbGFzc05hbWUgPSAnaGVybyc7XG4gICAgd2Vla0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWVrLWNvbnRhaW5lcicpXG4gICAgd2Vla0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm5ldy10YXNrIHdlZWstYWRkXCIgaWQ9J3dlZWsnPis8L2J1dHRvbj5cbiAgICBgO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrQ29udGFpbmVyKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgb3BlbkZvcm0oZS50YXJnZXQuaWQpOyAgICAgIFxuICAgIH0pO1xufTtcblxuZXhwb3J0IHtjcmVhdGVIZXJvQ29udGFpbmVyLCBjcmVhdGVUb2RheUNvbnRhaW5lciwgY3JlYXRlV2Vla0NvbnRhaW5lcn07IiwiaW1wb3J0IHsgZGVsZXRlRm9ybSB9IGZyb20gXCIuLi9tb2R1bGVzL2Z1bmN0aW9uc1wiO1xuXG4gZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBkaXYub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY2xvc2VPdmVybGF5KCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuICAgIC8vIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSkgcmV0dXJuO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgIFxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1hY3RpdmUnKTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJykpIGRlbGV0ZUZvcm0oKTsgICBcbiAgICBcbn07XG5cbmV4cG9ydCB7Y3JlYXRlT3ZlcmxheSwgY2xvc2VPdmVybGF5fTtcblxuXG5cbiAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vbW9kdWxlcy9jcmVhdGUtcGFnZSc7XG5pbXBvcnQgcmVuZGVyVGFzayBmcm9tICcuL21vZHVsZXMvcmVuZGVyUGFnZSc7XG5pbXBvcnQge2NyZWF0ZUhlcm9Db250YWluZXIsIGNyZWF0ZVRvZGF5Q29udGFpbmVyLCBjcmVhdGVXZWVrQ29udGFpbmVyfSBmcm9tICcuL3BhZ2VzL2NvbnRhaW5lci1zd2FwJztcbmltcG9ydCB7dG9Eb0xpc3RDb2xsZWN0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL3RvZG8tb2Jqcyc7XG5pbXBvcnQgeyBjbGVhckNvbnRhaW5lciwgY2hhbmdlSGVhZGVyVGl0bGUsIG1hcmtBY3RpdmVTZWN0aW9uLCByZW1vdmVBY3RpdmVTZWN0aW9ucyB9IGZyb20gJy4vbW9kdWxlcy9mdW5jdGlvbnMnO1xuaW1wb3J0ICcuL3N0eWxlcy9wYWdlLmNzcyc7XG5cbmNyZWF0ZVBhZ2UoKTtcbmNyZWF0ZUhlcm9Db250YWluZXIoKTtcblxubGV0IGluYm94U2lkZXJiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtbWFpbicpO1xuXG5pbmJveFNpZGVyYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZW1vdmVBY3RpdmVTZWN0aW9ucygpO1xuICAgIG1hcmtBY3RpdmVTZWN0aW9uKGUudGFyZ2V0KTtcbiAgICBjaGFuZ2VIZWFkZXJUaXRsZSgnSW5ib3gnKTtcbiAgICBjbGVhckNvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUhlcm9Db250YWluZXIoKTtcbiAgICByZW5kZXJUYXNrKHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKCdpbmJveCcpLCAnLmluYm94LWNvbnRhaW5lcicpO1xufSlcblxuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1tYWluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHJlbW92ZUFjdGl2ZVNlY3Rpb25zKCk7XG4gICAgbWFya0FjdGl2ZVNlY3Rpb24oZS50YXJnZXQpO1xuICAgIGNoYW5nZUhlYWRlclRpdGxlKCdUb2RheScpO1xuICAgIGNsZWFyQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlVG9kYXlDb250YWluZXIoKTtcbiAgICByZW5kZXJUYXNrKHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKCd0b2RheScpLCAnLnRvZGF5LWNvbnRhaW5lcicpO1xufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWstbWFpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZW1vdmVBY3RpdmVTZWN0aW9ucygpO1xuICAgIG1hcmtBY3RpdmVTZWN0aW9uKGUudGFyZ2V0KTtcbiAgICBjaGFuZ2VIZWFkZXJUaXRsZSgnV2VlaycpO1xuICAgIGNsZWFyQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlV2Vla0NvbnRhaW5lcigpO1xuICAgIHJlbmRlclRhc2sodG9Eb0xpc3RDb2xsZWN0aW9uLmdldENvbGxlY3Rpb24oJ3dlZWsnKSwgJy53ZWVrLWNvbnRhaW5lcicpO1xufSlcblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=