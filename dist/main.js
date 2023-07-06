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
    margin: 10px;
}

.header, .hero, .sidebar {
    color: rgb(62, 72, 74);
}

/* Header */

.current-section, .login {
    width: 33%;
    text-align: center;
}

.title-change {
    animation-name: slideIn;
    animation-duration: .6s;
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
    animation-duration: .65s;
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

  @keyframes slideDown {
    0%,
    100% {
      transform: translateY(-50%);
      opacity: 0;
    }
     
    60%,
    100% {
      transform: translateY(0);
      opacity: 1;
    
    }
  }

  .hide-container {
    display: none;
}

/* Cards */

.card {
    background-color: azure;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    animation-name: slideUp;
    animation-duration: .3s;
}

.zoom {
    animation: zoom forwards 0.7s ease-out 1;
}

@keyframes zoom { 
    0% {
      transform: scale(1);
      width: 100%;
      min-width: 250px;
      opacity: 1;
      transform-origin: 125px 125px;
    }
    50% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      width: 0;
      min-width: 0;
      transform: scale(0);
      opacity: 0;
      padding: 0;
      margin: 0;
    }
  }

.card-main {
    background-color: aqua;
    display: flex;
    align-items: center;
    height: 3rem;
    padding: 0 2rem;
    border-radius: 1rem 1rem 1rem 1rem;
}

.title-value {   
    margin-left: 3rem;
    margin-right: auto;
}

.due-value {
    margin-right: 3rem;
}

.edit-button {
    margin-right: 1.5rem;
}

.delete-button {

}

.delete-button, .edit-button {
    height: 50%;
}

.details-button {
  position: relative;
  margin-right: 2.5rem;
  padding: .5rem 1rem;
  border: 1px solid #0d1817;
  border-radius: 3px;
  font-size: 1rem;
  color: #181c1b;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s;

  background-position: center;
  transition: background 0.8s;
}

.details-button:hover {
    position: relative;
    background-color: #93c3de;
    color: rgb(25, 23, 23);
    cursor: pointer;
    background: #47a7f5 radial-gradient(circle, transparent 1%, #81aed2 1%) center/15000%;
  }

  .details-button:active {
    background-color: #c6d1d9;
    background-size: 100%;
    transition: background 0s;
  }

.checked:before {
    content: "";
    position: absolute;
    border-color: #009933;
    border-style: solid;
    border-width: 0 0.3em 0.25em 0;
    height: 1em;
    /* top: 1.3em;
    left: 0.6em; */
    margin-top: 0em;
    transform: rotate(45deg);
    width: 0.5em;
}

.card-details {
    background-color: lightblue;
    padding: 1rem 2rem;
    border-radius: 1rem 1rem 1rem 1rem;
    
    animation-name: slideDown;
    animation-duration: .4s;
}

.card-details-hide {
    display: none;
    transform: translateY(-200%);
}

.card:hover {
    transform: scale(1.004);
    transform-origin: 50% 50%;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .2);
    transition: all .2s ease-out;
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

.description {
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




`, "",{"version":3,"sources":["webpack://./src/styles/page.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    overflow: hidden;\n    background-color: azure;\n}\n\n/* Main Containers */\n\n.main-container {\n    display: grid;\n    grid-template-columns: 1fr 2fr 2fr;\n    grid-template-rows: 90px 1fr;\n    /* border: 1px blue solid; */\n    height: 100vh;\n}\n\n.header {\n    background-color: aquamarine;\n    display: flex;\n    /* border: 1px red solid; */\n    align-items: center;\n    font-size: 2rem;\n    grid-column-start: 1;\n    grid-column-end: 4;\n}\n\n.sidebar {\n    background-color: #5efdfd;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    text-align: center;\n    /* border: 1px black solid; */\n    font-size: 1.5rem;\n    padding-top: 20px;\n}\n\n.hero {\n    background-color: azure;\n    position: relative;\n    /* border: 1px green solid; */\n    grid-column-start: 2;\n    grid-column-end: 4;\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin: 10px;\n}\n\n.header, .hero, .sidebar {\n    color: rgb(62, 72, 74);\n}\n\n/* Header */\n\n.current-section, .login {\n    width: 33%;\n    text-align: center;\n}\n\n.title-change {\n    animation-name: slideIn;\n    animation-duration: .6s;\n}\n\n\n.logo-image {\n    position: relative;\n    left: 40px;\n    height: 80%;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    width: 33%;\n    z-index: 5;\n    height: 100%;\n    text-align: center;\n}\n\n\n/* Hero Container */\n\n.hero {\n    animation-name: slideIn;\n    animation-duration: .65s;\n}\n\n.new-task {\n    position: absolute;\n    font-size: 3rem;\n    width: 60px;\n    background-color: lime;\n    border-radius: 30px;\n    top: 90%;\n    left: 90%;\n}\n\n@keyframes slideUp {\n    0%,\n    50% {\n      transform: translateY(100%);\n      opacity: 1;\n    }\n     \n    60%,\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    \n    }\n  }\n\n  @keyframes slideIn {\n    0%,\n    100% {\n      transform: translateX(100%);\n      opacity: 1;\n    }\n     \n    60%,\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    \n    }\n  }\n\n  @keyframes slideDown {\n    0%,\n    100% {\n      transform: translateY(-50%);\n      opacity: 0;\n    }\n     \n    60%,\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    \n    }\n  }\n\n  .hide-container {\n    display: none;\n}\n\n/* Cards */\n\n.card {\n    background-color: azure;\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: column;\n    animation-name: slideUp;\n    animation-duration: .3s;\n}\n\n.zoom {\n    animation: zoom forwards 0.7s ease-out 1;\n}\n\n@keyframes zoom { \n    0% {\n      transform: scale(1);\n      width: 100%;\n      min-width: 250px;\n      opacity: 1;\n      transform-origin: 125px 125px;\n    }\n    50% {\n      transform: scale(0);\n      opacity: 0;\n    }\n    100% {\n      width: 0;\n      min-width: 0;\n      transform: scale(0);\n      opacity: 0;\n      padding: 0;\n      margin: 0;\n    }\n  }\n\n.card-main {\n    background-color: aqua;\n    display: flex;\n    align-items: center;\n    height: 3rem;\n    padding: 0 2rem;\n    border-radius: 1rem 1rem 1rem 1rem;\n}\n\n.title-value {   \n    margin-left: 3rem;\n    margin-right: auto;\n}\n\n.due-value {\n    margin-right: 3rem;\n}\n\n.edit-button {\n    margin-right: 1.5rem;\n}\n\n.delete-button {\n\n}\n\n.delete-button, .edit-button {\n    height: 50%;\n}\n\n.details-button {\n  position: relative;\n  margin-right: 2.5rem;\n  padding: .5rem 1rem;\n  border: 1px solid #0d1817;\n  border-radius: 3px;\n  font-size: 1rem;\n  color: #181c1b;\n  text-transform: uppercase;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all .3s;\n\n  background-position: center;\n  transition: background 0.8s;\n}\n\n.details-button:hover {\n    position: relative;\n    background-color: #93c3de;\n    color: rgb(25, 23, 23);\n    cursor: pointer;\n    background: #47a7f5 radial-gradient(circle, transparent 1%, #81aed2 1%) center/15000%;\n  }\n\n  .details-button:active {\n    background-color: #c6d1d9;\n    background-size: 100%;\n    transition: background 0s;\n  }\n\n.checked:before {\n    content: \"\";\n    position: absolute;\n    border-color: #009933;\n    border-style: solid;\n    border-width: 0 0.3em 0.25em 0;\n    height: 1em;\n    /* top: 1.3em;\n    left: 0.6em; */\n    margin-top: 0em;\n    transform: rotate(45deg);\n    width: 0.5em;\n}\n\n.card-details {\n    background-color: lightblue;\n    padding: 1rem 2rem;\n    border-radius: 1rem 1rem 1rem 1rem;\n    \n    animation-name: slideDown;\n    animation-duration: .4s;\n}\n\n.card-details-hide {\n    display: none;\n    transform: translateY(-200%);\n}\n\n.card:hover {\n    transform: scale(1.004);\n    transform-origin: 50% 50%;\n    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .2);\n    transition: all .2s ease-out;\n}\n\n\n\n  /* Sidebar */\n\n  .section {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n  }\n\n  .section:hover {\n    background-color: lightgray;\n    font-size: 1.8rem;\n    transition: .1s font-size;\n    }\n\n    .section:active {\n        color: white;\n    }\n\n    .section:hover::before {\n        content: \"//\";\n        \n        font-weight: 700;\n      }\n    \n      .section:hover::after {\n        content: \"//\";\n        \n        font-weight: 700;\n      }\n    \n      .selected::before, .selected::after {\n        content: \"//\";\n        font-weight: 700;\n      }\n\n    .task-count {\n        width: 2rem;\n        height: 2rem;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        border: 2px rgb(134, 206, 203) solid;\n        background-color: #8a98ef;\n        border-radius: 50%;\n        font-size: 1.3rem;\n        font-weight: 700;\n        color: #f7f7f7;\n        font-family: sans-serif;\n        &:empty {\n            display: none;\n          }\n    }\n\n/* Overlay */\n\n.overlay {\n    display: flex;\n    display: none;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.6);\n    height: 100%;\n    width: 100%;\n    backdrop-filter: blur(3px);\n    z-index: 1;\n}\n\n.overlay-active {\n    display: block;\n}\n\n/* Form */\n.form-container {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 12fr;\n    z-index: 2;\n    position: absolute;\n    background: rgb(127, 191, 191);\n    top: 23%;\n    right: 18%;\n    height: 45%;\n    width: 90%\n}\n\n.description {\n    resize: none;\n    overflow: auto;\n    height: 200px;\n  }\n\n  textarea:focus, input:focus{\n    outline: none;\n}\n\n.form {\n    padding: 1rem 1.5rem;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    flex: 1;\n    gap: 5px;\n}\n\n.form-sidebar {\n    padding-top: 15px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 15px;\n    background-color: rgb(97, 158, 158);\n    color: lightcyan;\n    font-size: 1.8rem;\n}\n\n.form-sidebar > *:hover {\n    text-shadow: 0 0 2px whitesmoke;\n}\n\n.form-header {\n    display: flex;\n    justify-content: space-between;\n    background: rgb(78, 209, 209);\n    grid-column: 1/3;\n    grid-row: 1/2;\n    padding: 0 15px;\n}\n\n.form-logo {\n    width: 15%;\n    height: 100%;\n}\n\n.close-button {\n    color: white;\n    font-size: 1.9rem;\n    cursor: pointer;\n    font-family: lato, sans-serif;\n}\n\n.close-button:hover { text-shadow: 0 0 5px whitesmoke; }\n\n.title-input {\n    height: 10%;\n    font-size: 2rem;\n}\n\n.description {\n    height: 60%;\n    font-size: 1.3rem;\n}\n\n.date-div {\n    display: flex;\n    align-items: center;\n    height: 10%;\n    gap: 10px;\n    color: lightcyan;\n    font-weight: bold;\n}\n\n.prio-sub-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 10%;\n}\n\n.prio-sub-div > * {\n    height: 80%;\n    width: 20%;\n}\n\n.due-date-input {\n  padding: .5rem 1rem;\n  border: 1px solid lightcyan;\n  border-radius: 5px;\n  color: lightcyan;\n  background-color: transparent;\n  font-size: 1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: lato, sans-serif;\n}\n\n\n\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _todo_objs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-objs */ "./src/modules/todo-objs.js");




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
        document.querySelector('.login').addEventListener('click', ()=>{
            console.log(_todo_objs__WEBPACK_IMPORTED_MODULE_2__.toDoListCollection.getCollection('inbox')[0].checked);
        })
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
/* harmony export */   createCard: () => (/* binding */ createCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   deleteForm: () => (/* binding */ deleteForm),
/* harmony export */   markActiveSection: () => (/* binding */ markActiveSection),
/* harmony export */   openForm: () => (/* binding */ openForm),
/* harmony export */   removeActiveSections: () => (/* binding */ removeActiveSections),
/* harmony export */   resetDom: () => (/* binding */ resetDom)
/* harmony export */ });
/* harmony import */ var _todo_objs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-objs.js */ "./src/modules/todo-objs.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _pages_overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/overlay.js */ "./src/pages/overlay.js");
/* harmony import */ var _renderPage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderPage.js */ "./src/modules/renderPage.js");







const addNewTask = (obj, section) => {
    _todo_objs_js__WEBPACK_IMPORTED_MODULE_0__.toDoListCollection.add(obj, section);
    return obj
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
        (0,_pages_overlay_js__WEBPACK_IMPORTED_MODULE_4__.closeOverlay)();
    });
    header.appendChild(closeButton);

    const form = document.createElement("form");
    form.className = 'form'
    formContainer.appendChild(form)

    const title = document.createElement("input");
    title.classList.add('title-input');
    title.setAttribute('minlength', 3);
    title.setAttribute('required', '');
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
    due.setAttribute('required', '');
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
    
        const objData = addNewTask(extractFormData([title, description, due, priority]), section);
        createCard(objData, section);
        UpdateTaskCountDisplay(section, checkmarkCounterDisplay(section));

        (0,_pages_overlay_js__WEBPACK_IMPORTED_MODULE_4__.closeOverlay)();
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
    formData.forEach(input => {
        if (input )
        formDataObj[input.name] = input.value
    });
    
    formDataObj.checked = false;
    
    return formDataObj;
};

function changeHeaderTitle(section) {
    const currentSection = document.querySelector('.current-section');

    currentSection.classList.toggle('title-change');
    
    

    currentSection.textContent = section;
};

function UpdateTaskCountDisplay(section, checkmarkAmount) {
    let countDisplay = document.querySelector(`.${section}-count`);
    const taskAmount = _todo_objs_js__WEBPACK_IMPORTED_MODULE_0__.toDoListCollection.getCollection(section).length;
    
    if (checkmarkAmount !== undefined) {
        if ((taskAmount - checkmarkAmount) < 1) countDisplay.innerHTML = '';
    else countDisplay.innerHTML = taskAmount - checkmarkAmount;
    return;  
    }

    if (taskAmount < 1) countDisplay.innerHTML = '';
    else countDisplay.innerHTML = taskAmount;  
};

function markActiveSection(section) {
    if (section.tagName === 'SPAN') section.parentElement.classList.add('selected');
    else section.classList.add('selected');
};

function removeActiveSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('selected'))
};

function showCardDetail() {
    
}

function createCard(dataObj, section) {
    const heroContainer = document.querySelector(`.${section}-container`);

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    
    
    cardDiv.addEventListener('click', function (e) {
        
        if (!e.target.classList.contains('card-main')) return;
        // adds/removes checkmark on click
        const mainCardChecked = this.children[0].classList;
        const checkMarkChecker = dataObj.checked;
        if (checkMarkChecker === false) {
            mainCardChecked.toggle('checked');
            dataObj.checked = true;
        } else {
            mainCardChecked.toggle('checked');
            dataObj.checked = false;
        }

        UpdateTaskCountDisplay(section, checkmarkCounterDisplay(section))
        
    })

    const cardMain = document.createElement('div');
    cardMain.classList.add('card-main');

    const cardDetails = document.createElement('div');
    cardDetails.classList.add('card-details');
    cardDetails.classList.add('card-details-hide');

    for (const prop in dataObj) {
        if (prop === 'title' || prop === 'due') {
            const div = document.createElement('div');
            div.classList.add(`${prop}-value`);
            div.innerHTML = dataObj[prop];
            cardMain.appendChild(div);
        } else if (prop === 'desc') {
            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('details-value');
            detailsDiv.innerHTML = dataObj[prop];
            cardDetails.appendChild(detailsDiv)
        }
        else if (prop === 'prio') {
            cardMain.classList.add(`${dataObj[prop]}`);
        }      
    }

    if (dataObj.checked === true) {
        cardMain.classList.add('checked');
    };

    const detailsButton = document.createElement('div');
    detailsButton.className = 'details-button';
    detailsButton.textContent = 'DETAILS';

    detailsButton.addEventListener('click', function () {
        
        this.parentElement.parentElement.querySelector('.card-details').classList.toggle('card-details-hide');
    })

    cardDiv.appendChild(cardMain);
    cardDiv.appendChild(cardDetails);

    
    if (cardMain.children[1]) cardMain.insertBefore(detailsButton, cardMain.children[1]); else cardMain.appendChild(detailsButton);

    const editButton = new Image()
    editButton.src = _assets_edit_svg__WEBPACK_IMPORTED_MODULE_3__;
    editButton.className = 'edit-button'
    cardMain.appendChild(editButton)
    
    const deleteButton = new Image()
    deleteButton.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
    deleteButton.className = 'delete-button';
    
    deleteButton.addEventListener('click', function() {

        let objectIndex;
        _todo_objs_js__WEBPACK_IMPORTED_MODULE_0__.toDoListCollection.getCollection('inbox').forEach((element, index) => {
                if (this.parentElement.querySelector('.title-value').textContent === element['title'] && (this.parentElement.querySelector('.due-value').textContent === element['due'])) {
                    objectIndex = index;
                }
            });
        
        this.parentElement.parentElement.classList.add('zoom');
        _todo_objs_js__WEBPACK_IMPORTED_MODULE_0__.toDoListCollection.remove(section, objectIndex);
        setTimeout(() => {
            this.parentElement.parentElement.remove();
        }, 700);
        

        UpdateTaskCountDisplay(section, checkmarkCounterDisplay(section));
    })
    cardMain.appendChild(deleteButton)
    
    heroContainer.appendChild(cardDiv);
}

const checkmarkCounterDisplay = function(section) {
    const collectionArr = _todo_objs_js__WEBPACK_IMPORTED_MODULE_0__.toDoListCollection.getCollection(section);
    let finishedTasksAmount;
    collectionArr.forEach(obj => {
        if (obj.checked === true) {
            if (finishedTasksAmount === undefined)
            finishedTasksAmount = 1; else {
                finishedTasksAmount += 1;
            }
        }
    })

    return finishedTasksAmount;
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
/* harmony export */   renderJustAdded: () => (/* binding */ renderJustAdded),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _todo_objs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-objs */ "./src/modules/todo-objs.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/modules/functions.js");



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

    cardDiv.addEventListener('click', function() {
        const test = document.createElement('span');
        test.innerHTML = 'test';
        this.appendChild(test);
    })
    
    for (const prop in obj[obj.length - 1]) {
        const div = document.createElement('div');
        div.innerHTML = `${prop}: ${obj[obj.length-1][prop]}`;
        cardDiv.appendChild(div);
    }
    heroContainer.appendChild(cardDiv);
};

const renderTasks = (dataObj, section) =>{
    if (!dataObj) return;
    dataObj.forEach(task => {
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.createCard)(task, section)
    })
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

    const remove = (section, index) => {
        collection[section].splice(index, 1);
    };

    const getCollection = (section) => {
        return collection[section];
    };

    const getAllCollections = () => {
        return collection;
    };

    return {add, getCollection, getAllCollections, remove};
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

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c05908dd2db2a4dd1f59.svg";

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/73edd7fdfb5da0ef40d1.svg";

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
    (0,_modules_renderPage__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_modules_todo_objs__WEBPACK_IMPORTED_MODULE_3__.toDoListCollection.getCollection('inbox'), 'inbox');
})


document.querySelector('.today-main').addEventListener('click', (e) => {
    ;(0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.removeActiveSections)();
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.markActiveSection)(e.target);
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.changeHeaderTitle)('Today');
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.clearContainer)();
    (0,_pages_container_swap__WEBPACK_IMPORTED_MODULE_2__.createTodayContainer)();
    (0,_modules_renderPage__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_modules_todo_objs__WEBPACK_IMPORTED_MODULE_3__.toDoListCollection.getCollection('today'), 'today');
})

document.querySelector('.week-main').addEventListener('click', (e) => {
    ;(0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.removeActiveSections)();
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.markActiveSection)(e.target);
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.changeHeaderTitle)('Week');
    (0,_modules_functions__WEBPACK_IMPORTED_MODULE_4__.clearContainer)();
    (0,_pages_container_swap__WEBPACK_IMPORTED_MODULE_2__.createWeekContainer)();
    (0,_modules_renderPage__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(_modules_todo_objs__WEBPACK_IMPORTED_MODULE_3__.toDoListCollection.getCollection('week'), 'week');
})









})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsT0FBTyxzRkFBc0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsU0FBUyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFV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QUFvQjtBQUN4QixJQUFJLHFFQUFpQjtBQUNyQixJQUFJLHFFQUFpQjtBQUNyQixJQUFJLGtFQUFjO0FBQ2xCLElBQUksMEVBQW1CO0FBQ3ZCLElBQUksZ0VBQVcsQ0FBQyxrRUFBa0I7QUFDbEMsQ0FBQzs7O0FBR0Q7QUFDQSxJQUFJLHlFQUFvQjtBQUN4QixJQUFJLHFFQUFpQjtBQUNyQixJQUFJLHFFQUFpQjtBQUNyQixJQUFJLGtFQUFjO0FBQ2xCLElBQUksMkVBQW9CO0FBQ3hCLElBQUksZ0VBQVcsQ0FBQyxrRUFBa0I7QUFDbEMsQ0FBQzs7QUFFRDtBQUNBLElBQUkseUVBQW9CO0FBQ3hCLElBQUkscUVBQWlCO0FBQ3JCLElBQUkscUVBQWlCO0FBQ3JCLElBQUksa0VBQWM7QUFDbEIsSUFBSSwwRUFBbUI7QUFDdkIsSUFBSSxnRUFBVyxDQUFDLGtFQUFrQjtBQUNsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3BhZ2UuY3NzPzU4NjUiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1vYmpzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcGFnZXMvY29udGFpbmVyLXN3YXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wYWdlcy9vdmVybGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG59XG5cbi8qIE1haW4gQ29udGFpbmVycyAqL1xuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDJmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggMWZyO1xuICAgIC8qIGJvcmRlcjogMXB4IGJsdWUgc29saWQ7ICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVmZGZkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uaGVybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGJvcmRlcjogMXB4IGdyZWVuIHNvbGlkOyAqL1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmhlYWRlciwgLmhlcm8sIC5zaWRlYmFyIHtcbiAgICBjb2xvcjogcmdiKDYyLCA3MiwgNzQpO1xufVxuXG4vKiBIZWFkZXIgKi9cblxuLmN1cnJlbnQtc2VjdGlvbiwgLmxvZ2luIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlLWNoYW5nZSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNnM7XG59XG5cblxuLmxvZ28taW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA0MHB4O1xuICAgIGhlaWdodDogODAlO1xufVxuXG4ubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAzMyU7XG4gICAgei1pbmRleDogNTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8qIEhlcm8gQ29udGFpbmVyICovXG5cbi5oZXJvIHtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC42NXM7XG59XG5cbi5uZXctdGFzayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgdG9wOiA5MCU7XG4gICAgbGVmdDogOTAlO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICAgIDAlLFxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAgXG4gICAgNjAlLFxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICBcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICAgIDAlLFxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgIFxuICAgIDYwJSxcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgXG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICAgIDAlLFxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgIFxuICAgIDYwJSxcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgXG4gICAgfVxuICB9XG5cbiAgLmhpZGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBDYXJkcyAqL1xuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlVXA7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XG59XG5cbi56b29tIHtcbiAgICBhbmltYXRpb246IHpvb20gZm9yd2FyZHMgMC43cyBlYXNlLW91dCAxO1xufVxuXG5Aa2V5ZnJhbWVzIHpvb20geyBcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEyNXB4IDEyNXB4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbi5jYXJkLW1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDFyZW0gMXJlbTtcbn1cblxuLnRpdGxlLXZhbHVlIHsgICBcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5kdWUtdmFsdWUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbn1cblxuLmVkaXQtYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cblxuLmRlbGV0ZS1idXR0b24ge1xuXG59XG5cbi5kZWxldGUtYnV0dG9uLCAuZWRpdC1idXR0b24ge1xuICAgIGhlaWdodDogNTAlO1xufVxuXG4uZGV0YWlscy1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMi41cmVtO1xuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGQxODE3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMxODFjMWI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcblxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbn1cblxuLmRldGFpbHMtYnV0dG9uOmhvdmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzYzNkZTtcbiAgICBjb2xvcjogcmdiKDI1LCAyMywgMjMpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjNDdhN2Y1IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHRyYW5zcGFyZW50IDElLCAjODFhZWQyIDElKSBjZW50ZXIvMTUwMDAlO1xuICB9XG5cbiAgLmRldGFpbHMtYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M2ZDFkOTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcbiAgfVxuXG4uY2hlY2tlZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1jb2xvcjogIzAwOTkzMztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMCAwLjNlbSAwLjI1ZW0gMDtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICAvKiB0b3A6IDEuM2VtO1xuICAgIGxlZnQ6IDAuNmVtOyAqL1xuICAgIG1hcmdpbi10b3A6IDBlbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgd2lkdGg6IDAuNWVtO1xufVxuXG4uY2FyZC1kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAxcmVtIDFyZW07XG4gICAgXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlRG93bjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC40cztcbn1cblxuLmNhcmQtZGV0YWlscy1oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA0KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xufVxuXG5cblxuICAvKiBTaWRlYmFyICovXG5cbiAgLnNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG4gIH1cblxuICAuc2VjdGlvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIHRyYW5zaXRpb246IC4xcyBmb250LXNpemU7XG4gICAgfVxuXG4gICAgLnNlY3Rpb246YWN0aXZlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5zZWN0aW9uOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIi8vXCI7XG4gICAgICAgIFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuICAgIFxuICAgICAgLnNlY3Rpb246aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIvL1wiO1xuICAgICAgICBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5zZWxlY3RlZDo6YmVmb3JlLCAuc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIvL1wiO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuXG4gICAgLnRhc2stY291bnQge1xuICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMnB4IHJnYigxMzQsIDIwNiwgMjAzKSBzb2xpZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhhOThlZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAmOmVtcHR5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgIH1cblxuLyogT3ZlcmxheSAqL1xuXG4ub3ZlcmxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5vdmVybGF5LWFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZvcm0gKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTJmcjtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTI3LCAxOTEsIDE5MSk7XG4gICAgdG9wOiAyMyU7XG4gICAgcmlnaHQ6IDE4JTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgICB3aWR0aDogOTAlXG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICB0ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZvcm0ge1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIGdhcDogNXB4O1xufVxuXG4uZm9ybS1zaWRlYmFyIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCAxNTgsIDE1OCk7XG4gICAgY29sb3I6IGxpZ2h0Y3lhbjtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmZvcm0tc2lkZWJhciA+ICo6aG92ZXIge1xuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4IHdoaXRlc21va2U7XG59XG5cbi5mb3JtLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZDogcmdiKDc4LCAyMDksIDIwOSk7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLmZvcm0tbG9nbyB7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuOXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGxhdG8sIHNhbnMtc2VyaWY7XG59XG5cbi5jbG9zZS1idXR0b246aG92ZXIgeyB0ZXh0LXNoYWRvdzogMCAwIDVweCB3aGl0ZXNtb2tlOyB9XG5cbi50aXRsZS1pbnB1dCB7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGhlaWdodDogNjAlO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uZGF0ZS1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBnYXA6IDEwcHg7XG4gICAgY29sb3I6IGxpZ2h0Y3lhbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByaW8tc3ViLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwJTtcbn1cblxuLnByaW8tc3ViLWRpdiA+ICoge1xuICAgIGhlaWdodDogODAlO1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5kdWUtZGF0ZS1pbnB1dCB7XG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y3lhbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogbGlnaHRjeWFuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogbGF0bywgc2Fucy1zZXJpZjtcbn1cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3BhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJB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QjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4vKiBNYWluIENvbnRhaW5lcnMgKi9cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggMWZyO1xcbiAgICAvKiBib3JkZXI6IDFweCBibHVlIHNvbGlkOyAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZmRmZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5oZXJvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyogYm9yZGVyOiAxcHggZ3JlZW4gc29saWQ7ICovXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmhlYWRlciwgLmhlcm8sIC5zaWRlYmFyIHtcXG4gICAgY29sb3I6IHJnYig2MiwgNzIsIDc0KTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmN1cnJlbnQtc2VjdGlvbiwgLmxvZ2luIHtcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUtY2hhbmdlIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjZzO1xcbn1cXG5cXG5cXG4ubG9nby1pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNDBweDtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgei1pbmRleDogNTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi8qIEhlcm8gQ29udGFpbmVyICovXFxuXFxuLmhlcm8ge1xcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNjVzO1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHRvcDogOTAlO1xcbiAgICBsZWZ0OiA5MCU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XFxuICAgIDAlLFxcbiAgICA1MCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgICBcXG4gICAgNjAlLFxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgXFxuICAgIH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgc2xpZGVJbiB7XFxuICAgIDAlLFxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAgXFxuICAgIDYwJSxcXG4gICAgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIFxcbiAgICB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHNsaWRlRG93biB7XFxuICAgIDAlLFxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAgXFxuICAgIDYwJSxcXG4gICAgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIFxcbiAgICB9XFxuICB9XFxuXFxuICAuaGlkZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBDYXJkcyAqL1xcblxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZVVwO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC4zcztcXG59XFxuXFxuLnpvb20ge1xcbiAgICBhbmltYXRpb246IHpvb20gZm9yd2FyZHMgMC43cyBlYXNlLW91dCAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb20geyBcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEyNXB4IDEyNXB4O1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIG1pbi13aWR0aDogMDtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gIH1cXG5cXG4uY2FyZC1tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAxcmVtIDFyZW07XFxufVxcblxcbi50aXRsZS12YWx1ZSB7ICAgXFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5kdWUtdmFsdWUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxufVxcblxcbi5lZGl0LWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuXFxufVxcblxcbi5kZWxldGUtYnV0dG9uLCAuZWRpdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1yaWdodDogMi41cmVtO1xcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDE4MTc7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzE4MWMxYjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG5cXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uOmhvdmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNjM2RlO1xcbiAgICBjb2xvcjogcmdiKDI1LCAyMywgMjMpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICM0N2E3ZjUgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICM4MWFlZDIgMSUpIGNlbnRlci8xNTAwMCU7XFxuICB9XFxuXFxuICAuZGV0YWlscy1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M2ZDFkOTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzO1xcbiAgfVxcblxcbi5jaGVja2VkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwOTkzMztcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAuM2VtIDAuMjVlbSAwO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgLyogdG9wOiAxLjNlbTtcXG4gICAgbGVmdDogMC42ZW07ICovXFxuICAgIG1hcmdpbi10b3A6IDBlbTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB3aWR0aDogMC41ZW07XFxufVxcblxcbi5jYXJkLWRldGFpbHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDFyZW0gMXJlbTtcXG4gICAgXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZURvd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjRzO1xcbn1cXG5cXG4uY2FyZC1kZXRhaWxzLWhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDQpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAuMik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcblxcblxcbiAgLyogU2lkZWJhciAqL1xcblxcbiAgLnNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gIH1cXG5cXG4gIC5zZWN0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjFzIGZvbnQtc2l6ZTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbjphY3RpdmUge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5zZWN0aW9uOmhvdmVyOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIi8vXFxcIjtcXG4gICAgICAgIFxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICB9XFxuICAgIFxcbiAgICAgIC5zZWN0aW9uOmhvdmVyOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiLy9cXFwiO1xcbiAgICAgICAgXFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIH1cXG4gICAgXFxuICAgICAgLnNlbGVjdGVkOjpiZWZvcmUsIC5zZWxlY3RlZDo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIi8vXFxcIjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgfVxcblxcbiAgICAudGFzay1jb3VudCB7XFxuICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyOiAycHggcmdiKDEzNCwgMjA2LCAyMDMpIHNvbGlkO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhhOThlZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIGNvbG9yOiAjZjdmN2Y3O1xcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgICAgICAmOmVtcHR5IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICB9XFxuICAgIH1cXG5cXG4vKiBPdmVybGF5ICovXFxuXFxuLm92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5vdmVybGF5LWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBGb3JtICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMmZyO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMjcsIDE5MSwgMTkxKTtcXG4gICAgdG9wOiAyMyU7XFxuICAgIHJpZ2h0OiAxOCU7XFxuICAgIGhlaWdodDogNDUlO1xcbiAgICB3aWR0aDogOTAlXFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICB0ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmZvcm0tc2lkZWJhciB7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMTU4LCAxNTgpO1xcbiAgICBjb2xvcjogbGlnaHRjeWFuO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmZvcm0tc2lkZWJhciA+ICo6aG92ZXIge1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQ6IHJnYig3OCwgMjA5LCAyMDkpO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcblxcbi5mb3JtLWxvZ28ge1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHsgdGV4dC1zaGFkb3c6IDAgMCA1cHggd2hpdGVzbW9rZTsgfVxcblxcbi50aXRsZS1pbnB1dCB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmRhdGUtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY29sb3I6IGxpZ2h0Y3lhbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmlvLXN1Yi1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAlO1xcbn1cXG5cXG4ucHJpby1zdWItZGl2ID4gKiB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4uZHVlLWRhdGUtaW5wdXQge1xcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y3lhbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiBsaWdodGN5YW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IGxhdG8sIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlT3ZlcmxheSB9IGZyb20gXCIuLi9wYWdlcy9vdmVybGF5XCI7XG5pbXBvcnQgbG9nbyBmcm9tICcuLy4uL2Fzc2V0cy9sb2dvMi5wbmcnO1xuaW1wb3J0IHsgdG9Eb0xpc3RDb2xsZWN0aW9uIH0gZnJvbSBcIi4vdG9kby1vYmpzXCI7XG5cbmNvbnN0IGNyZWF0ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuICAgICAgICBcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgICAgPGltZyBjbGFzcz0nbG9nby1pbWFnZScgc3JjPSR7bG9nb30+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1zZWN0aW9uXCI+SW5ib3g8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luXCI+TG9naW48L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKCdpbmJveCcpWzBdLmNoZWNrZWQpO1xuICAgICAgICB9KVxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVTaWRlQmFyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlQmFyLmNsYXNzTmFtZSA9ICdzaWRlYmFyJztcbiAgICAgICAgc2lkZUJhci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmJveC1tYWluIHNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpbmJveC10ZXh0Jz5JbmJveDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpbmJveC1jb3VudCB0YXNrLWNvdW50Jz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kYXktbWFpbiBzZWN0aW9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0ndG9kYXktdGV4dCc+VG9kYXk8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0ndG9kYXktY291bnQgdGFzay1jb3VudCc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstbWFpbiBzZWN0aW9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nd2Vlay10ZXh0Jz5XZWVrPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3dlZWstY291bnQgdGFzay1jb3VudCc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuICAgIH0pKCk7ICAgIFxuXG4gICAgY3JlYXRlT3ZlcmxheSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTsiLCJpbXBvcnQge3RvRG9MaXN0Q29sbGVjdGlvbn0gZnJvbSAnLi90b2RvLW9ianMuanMnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuLy4uL2Fzc2V0cy9sb2dvLnBuZyc7XG5pbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSAnLi8uLi9hc3NldHMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgZWRpdEltYWdlIGZyb20gJy4vLi4vYXNzZXRzL2VkaXQuc3ZnJztcbmltcG9ydCB7IGNsb3NlT3ZlcmxheSB9IGZyb20gJy4uL3BhZ2VzL292ZXJsYXkuanMnO1xuaW1wb3J0IHsgcmVuZGVySnVzdEFkZGVkIH0gZnJvbSAnLi9yZW5kZXJQYWdlLmpzJztcblxuY29uc3QgYWRkTmV3VGFzayA9IChvYmosIHNlY3Rpb24pID0+IHtcbiAgICB0b0RvTGlzdENvbGxlY3Rpb24uYWRkKG9iaiwgc2VjdGlvbik7XG4gICAgcmV0dXJuIG9ialxufTtcblxuY29uc3QgY2xlYXJDb250YWluZXIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKS5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IHJlc2V0RG9tID0gKCkgPT4ge1xuICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgXG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IGNhcmQucmVtb3ZlKCkpO1xufTtcblxuY29uc3Qgb3BlbkZvcm0gPSAoc2VjdGlvbikgPT4ge1xuICAgIFxuICAgIC8vIEFjdGl2YXRlcyBvdmVybGF5XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1hY3RpdmUnKTtcblxuICAgIGNyZWF0ZUZvcm0oc2VjdGlvbik7XG4gICAgXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKHNlY3Rpb24pIHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRhaW5lcidcblxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlQmFyLmNsYXNzTmFtZSA9ICdmb3JtLXNpZGViYXInO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG5cbiAgICAvLyBEeW5hbWljYWxseSBjcmVhdGUgc2lkZWJhciBkaXZzXG4gICAgY29uc3Qgc2lkZUJhclNlY3Rpb25zID0gWydJbmJveCcsICdUb2RheScsICdXZWVrJ107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWRlQmFyU2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBgJHtzaWRlQmFyU2VjdGlvbnNbaV0udG9Mb3dlckNhc2UoKX0tc2lkZWJhcmA7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHNpZGVCYXJTZWN0aW9uc1tpXTtcbiAgICAgICAgc2lkZUJhci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnZm9ybS1oZWFkZXInO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbG9nbycpO1xuICAgIGxvZ28uc3JjID0gbG9nb0ltYWdlO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlT3ZlcmxheSgpO1xuICAgIH0pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnZm9ybSdcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgMyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NcIik7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXRhaWxzOiBlLmcgaW50ZXJuZXQsIHBob25lLCByZW50LlwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlRGl2LmNsYXNzTmFtZSA9ICdkYXRlLWRpdic7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcbiAgICBcbiAgICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVUZXh0LmNsYXNzTmFtZSA9ICdkYXRlLXRleHQnO1xuICAgIGR1ZURhdGVUZXh0LmlubmVyVGV4dCA9ICdEdWUgRGF0ZTonXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlVGV4dCk7XG5cbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlLmNsYXNzTmFtZSA9ICdkdWUtZGF0ZS1pbnB1dCc7XG4gICAgZHVlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgZHVlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlXCIpO1xuICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlKTtcblxuICAgIGNvbnN0IHByaW9TdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvU3ViRGl2LmNsYXNzTmFtZSA9ICdwcmlvLXN1Yi1kaXYnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb1N1YkRpdik7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IHByaW9DaG9pY2VzID0gWydMb3cnLCAnTW9kZXJhdGUnLCAnSGlnaCddO1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvQ2hvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb0Nob2ljZXNbaV07XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7cHJpb0Nob2ljZXNbaV0udG9Mb2NhbGVMb3dlckNhc2UoKX1gKTtcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9O1xuICAgIHByaW9TdWJEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgdmFyIHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gICAgcHJpb1N1YkRpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgLy8gRGF0YSBleHRyYWN0ZWQgZnJvbSBmb3JtIGhlcmVcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAgICAgY29uc3Qgb2JqRGF0YSA9IGFkZE5ld1Rhc2soZXh0cmFjdEZvcm1EYXRhKFt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHldKSwgc2VjdGlvbik7XG4gICAgICAgIGNyZWF0ZUNhcmQob2JqRGF0YSwgc2VjdGlvbik7XG4gICAgICAgIFVwZGF0ZVRhc2tDb3VudERpc3BsYXkoc2VjdGlvbiwgY2hlY2ttYXJrQ291bnRlckRpc3BsYXkoc2VjdGlvbikpO1xuXG4gICAgICAgIGNsb3NlT3ZlcmxheSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XG4gICAgaGVyby5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG59O1xuXG5mdW5jdGlvbiBkZWxldGVGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgICBmb3JtLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Rm9ybURhdGEoZm9ybURhdGEpIHtcbiAgICBcbiAgICBjb25zdCBmb3JtRGF0YU9iaiA9IHt9O1xuICAgIGZvcm1EYXRhLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpZiAoaW5wdXQgKVxuICAgICAgICBmb3JtRGF0YU9ialtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlXG4gICAgfSk7XG4gICAgXG4gICAgZm9ybURhdGFPYmouY2hlY2tlZCA9IGZhbHNlO1xuICAgIFxuICAgIHJldHVybiBmb3JtRGF0YU9iajtcbn07XG5cbmZ1bmN0aW9uIGNoYW5nZUhlYWRlclRpdGxlKHNlY3Rpb24pIHtcbiAgICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXNlY3Rpb24nKTtcblxuICAgIGN1cnJlbnRTZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3RpdGxlLWNoYW5nZScpO1xuICAgIFxuICAgIFxuXG4gICAgY3VycmVudFNlY3Rpb24udGV4dENvbnRlbnQgPSBzZWN0aW9uO1xufTtcblxuZnVuY3Rpb24gVXBkYXRlVGFza0NvdW50RGlzcGxheShzZWN0aW9uLCBjaGVja21hcmtBbW91bnQpIHtcbiAgICBsZXQgY291bnREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VjdGlvbn0tY291bnRgKTtcbiAgICBjb25zdCB0YXNrQW1vdW50ID0gdG9Eb0xpc3RDb2xsZWN0aW9uLmdldENvbGxlY3Rpb24oc2VjdGlvbikubGVuZ3RoO1xuICAgIFxuICAgIGlmIChjaGVja21hcmtBbW91bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoKHRhc2tBbW91bnQgLSBjaGVja21hcmtBbW91bnQpIDwgMSkgY291bnREaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICAgIGVsc2UgY291bnREaXNwbGF5LmlubmVySFRNTCA9IHRhc2tBbW91bnQgLSBjaGVja21hcmtBbW91bnQ7XG4gICAgcmV0dXJuOyAgXG4gICAgfVxuXG4gICAgaWYgKHRhc2tBbW91bnQgPCAxKSBjb3VudERpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG4gICAgZWxzZSBjb3VudERpc3BsYXkuaW5uZXJIVE1MID0gdGFza0Ftb3VudDsgIFxufTtcblxuZnVuY3Rpb24gbWFya0FjdGl2ZVNlY3Rpb24oc2VjdGlvbikge1xuICAgIGlmIChzZWN0aW9uLnRhZ05hbWUgPT09ICdTUEFOJykgc2VjdGlvbi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgZWxzZSBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59O1xuXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVTZWN0aW9ucygpIHtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJyk7XG4gICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSlcbn07XG5cbmZ1bmN0aW9uIHNob3dDYXJkRGV0YWlsKCkge1xuICAgIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGFPYmosIHNlY3Rpb24pIHtcbiAgICBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VjdGlvbn0tY29udGFpbmVyYCk7XG5cbiAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERpdi5jbGFzc05hbWUgPSAnY2FyZCc7XG4gICAgXG4gICAgXG4gICAgY2FyZERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1tYWluJykpIHJldHVybjtcbiAgICAgICAgLy8gYWRkcy9yZW1vdmVzIGNoZWNrbWFyayBvbiBjbGlja1xuICAgICAgICBjb25zdCBtYWluQ2FyZENoZWNrZWQgPSB0aGlzLmNoaWxkcmVuWzBdLmNsYXNzTGlzdDtcbiAgICAgICAgY29uc3QgY2hlY2tNYXJrQ2hlY2tlciA9IGRhdGFPYmouY2hlY2tlZDtcbiAgICAgICAgaWYgKGNoZWNrTWFya0NoZWNrZXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtYWluQ2FyZENoZWNrZWQudG9nZ2xlKCdjaGVja2VkJyk7XG4gICAgICAgICAgICBkYXRhT2JqLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFpbkNhcmRDaGVja2VkLnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgZGF0YU9iai5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBVcGRhdGVUYXNrQ291bnREaXNwbGF5KHNlY3Rpb24sIGNoZWNrbWFya0NvdW50ZXJEaXNwbGF5KHNlY3Rpb24pKVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgY29uc3QgY2FyZE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkTWFpbi5jbGFzc0xpc3QuYWRkKCdjYXJkLW1haW4nKTtcblxuICAgIGNvbnN0IGNhcmREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERldGFpbHMuY2xhc3NMaXN0LmFkZCgnY2FyZC1kZXRhaWxzJyk7XG4gICAgY2FyZERldGFpbHMuY2xhc3NMaXN0LmFkZCgnY2FyZC1kZXRhaWxzLWhpZGUnKTtcblxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBkYXRhT2JqKSB7XG4gICAgICAgIGlmIChwcm9wID09PSAndGl0bGUnIHx8IHByb3AgPT09ICdkdWUnKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke3Byb3B9LXZhbHVlYCk7XG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gZGF0YU9ialtwcm9wXTtcbiAgICAgICAgICAgIGNhcmRNYWluLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtdmFsdWUnKTtcbiAgICAgICAgICAgIGRldGFpbHNEaXYuaW5uZXJIVE1MID0gZGF0YU9ialtwcm9wXTtcbiAgICAgICAgICAgIGNhcmREZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHNEaXYpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ3ByaW8nKSB7XG4gICAgICAgICAgICBjYXJkTWFpbi5jbGFzc0xpc3QuYWRkKGAke2RhdGFPYmpbcHJvcF19YCk7XG4gICAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICBpZiAoZGF0YU9iai5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIGNhcmRNYWluLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNCdXR0b24uY2xhc3NOYW1lID0gJ2RldGFpbHMtYnV0dG9uJztcbiAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gJ0RFVEFJTFMnO1xuXG4gICAgZGV0YWlsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWRldGFpbHMnKS5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkLWRldGFpbHMtaGlkZScpO1xuICAgIH0pXG5cbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRNYWluKTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmREZXRhaWxzKTtcblxuICAgIFxuICAgIGlmIChjYXJkTWFpbi5jaGlsZHJlblsxXSkgY2FyZE1haW4uaW5zZXJ0QmVmb3JlKGRldGFpbHNCdXR0b24sIGNhcmRNYWluLmNoaWxkcmVuWzFdKTsgZWxzZSBjYXJkTWFpbi5hcHBlbmRDaGlsZChkZXRhaWxzQnV0dG9uKTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBuZXcgSW1hZ2UoKVxuICAgIGVkaXRCdXR0b24uc3JjID0gZWRpdEltYWdlO1xuICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gJ2VkaXQtYnV0dG9uJ1xuICAgIGNhcmRNYWluLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pXG4gICAgXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gbmV3IEltYWdlKClcbiAgICBkZWxldGVCdXR0b24uc3JjID0gZGVsZXRlSW1hZ2U7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGUtYnV0dG9uJztcbiAgICBcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBsZXQgb2JqZWN0SW5kZXg7XG4gICAgICAgIHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKCdpbmJveCcpLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtdmFsdWUnKS50ZXh0Q29udGVudCA9PT0gZWxlbWVudFsndGl0bGUnXSAmJiAodGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtdmFsdWUnKS50ZXh0Q29udGVudCA9PT0gZWxlbWVudFsnZHVlJ10pKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd6b29tJyk7XG4gICAgICAgIHRvRG9MaXN0Q29sbGVjdGlvbi5yZW1vdmUoc2VjdGlvbiwgb2JqZWN0SW5kZXgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9LCA3MDApO1xuICAgICAgICBcblxuICAgICAgICBVcGRhdGVUYXNrQ291bnREaXNwbGF5KHNlY3Rpb24sIGNoZWNrbWFya0NvdW50ZXJEaXNwbGF5KHNlY3Rpb24pKTtcbiAgICB9KVxuICAgIGNhcmRNYWluLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbilcbiAgICBcbiAgICBoZXJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREaXYpO1xufVxuXG5jb25zdCBjaGVja21hcmtDb3VudGVyRGlzcGxheSA9IGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICBjb25zdCBjb2xsZWN0aW9uQXJyID0gdG9Eb0xpc3RDb2xsZWN0aW9uLmdldENvbGxlY3Rpb24oc2VjdGlvbik7XG4gICAgbGV0IGZpbmlzaGVkVGFza3NBbW91bnQ7XG4gICAgY29sbGVjdGlvbkFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgIGlmIChvYmouY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGZpbmlzaGVkVGFza3NBbW91bnQgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGZpbmlzaGVkVGFza3NBbW91bnQgPSAxOyBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hlZFRhc2tzQW1vdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGZpbmlzaGVkVGFza3NBbW91bnQ7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFkZE5ld1Rhc2s7XG5leHBvcnQge2NsZWFyQ29udGFpbmVyLCByZXNldERvbSwgb3BlbkZvcm0sIGRlbGV0ZUZvcm0sIGNoYW5nZUhlYWRlclRpdGxlLCBVcGRhdGVUYXNrQ291bnREaXNwbGF5LCBtYXJrQWN0aXZlU2VjdGlvbiwgcmVtb3ZlQWN0aXZlU2VjdGlvbnMsIGNyZWF0ZUNhcmR9OyIsImltcG9ydCB7IHRvRG9MaXN0Q29sbGVjdGlvbiB9IGZyb20gXCIuL3RvZG8tb2Jqc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuXG5jb25zdCByZW5kZXJUYXNrID0gKHRhc2ssIHNlY3Rpb24pID0+IHtcbiAgICBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWN0aW9uKTtcbiAgICBpZiAoIXRhc2spIHJldHVybjtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkRGl2LmNsYXNzTmFtZSA9ICdjYXJkJztcblxuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGFza1tpXSkge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7cHJvcH06ICR7dGFza1tpXVtwcm9wXX1gO1xuICAgICAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoZXJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREaXYpO1xuICAgIH07XG59O1xuXG5jb25zdCByZW5kZXJKdXN0QWRkZWQgPSAob2JqLCBzZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgaGVyb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VjdGlvbik7XG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuY2xhc3NOYW1lID0gJ2NhcmQnO1xuXG4gICAgY2FyZERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0ZXN0LmlubmVySFRNTCA9ICd0ZXN0JztcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0ZXN0KTtcbiAgICB9KVxuICAgIFxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBvYmpbb2JqLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7cHJvcH06ICR7b2JqW29iai5sZW5ndGgtMV1bcHJvcF19YDtcbiAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgICBoZXJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREaXYpO1xufTtcblxuY29uc3QgcmVuZGVyVGFza3MgPSAoZGF0YU9iaiwgc2VjdGlvbikgPT57XG4gICAgaWYgKCFkYXRhT2JqKSByZXR1cm47XG4gICAgZGF0YU9iai5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjcmVhdGVDYXJkKHRhc2ssIHNlY3Rpb24pXG4gICAgfSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRhc2s7XG5leHBvcnQge3JlbmRlckp1c3RBZGRlZCwgcmVuZGVyVGFza3N9OyIsIi8vIE1vZHVsZSBvZiBhbGwgdG8tZG8gaXRlbXNcblxuY29uc3QgdG9Eb0xpc3RDb2xsZWN0aW9uID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB7fTtcblxuICAgIGNvbnN0IGFkZCA9IChvYmosIHNlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKCFjb2xsZWN0aW9uW3NlY3Rpb25dKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uW3NlY3Rpb25dID0gW107XG4gICAgICAgICAgICBjb2xsZWN0aW9uW3NlY3Rpb25dLnB1c2gob2JqKTtcbiAgICAgICAgfSBlbHNlIGNvbGxlY3Rpb25bc2VjdGlvbl0ucHVzaChvYmopO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmUgPSAoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29sbGVjdGlvbltzZWN0aW9uXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDb2xsZWN0aW9uID0gKHNlY3Rpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bc2VjdGlvbl07XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFsbENvbGxlY3Rpb25zID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHthZGQsIGdldENvbGxlY3Rpb24sIGdldEFsbENvbGxlY3Rpb25zLCByZW1vdmV9O1xufSkoKTtcblxuXG5cbmV4cG9ydCB7dG9Eb0xpc3RDb2xsZWN0aW9ufTtcblxuIiwiaW1wb3J0IGFkZE5ld1Rhc2ssIHtvcGVuRm9ybX0gZnJvbSBcIi4uL21vZHVsZXMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyB0b0RvTGlzdENvbGxlY3Rpb24gfSBmcm9tIFwiLi4vbW9kdWxlcy90b2RvLW9ianNcIjtcbmltcG9ydCB7IHJlbmRlckp1c3RBZGRlZCB9IGZyb20gXCIuLi9tb2R1bGVzL3JlbmRlclBhZ2VcIjtcblxuY29uc3QgY3JlYXRlSGVyb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcbiAgICBcblxuICAgIGNvbnN0IGhlcm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdoZXJvJztcbiAgICBoZXJvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luYm94LWNvbnRhaW5lcicpXG4gICAgaGVyb0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm5ldy10YXNrIGluYm94LWFkZFwiIGlkPSdpbmJveCc+KzwvYnV0dG9uPlxuICAgIGA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9Db250YWluZXIpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBvcGVuRm9ybShlLnRhcmdldC5pZCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RheUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcbiAgICBcblxuICAgIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kYXlDb250YWluZXIuY2xhc3NOYW1lID0gJ2hlcm8nO1xuICAgIHRvZGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZGF5LWNvbnRhaW5lcicpXG4gICAgdG9kYXlDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gY2xhc3M9XCJuZXctdGFzayB0b2RheS1hZGRcIiBpZD0ndG9kYXknPis8L2J1dHRvbj5cbiAgICBgO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUNvbnRhaW5lcik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIG9wZW5Gb3JtKGUudGFyZ2V0LmlkKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVdlZWtDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCB3ZWVrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2Vla0NvbnRhaW5lci5jbGFzc05hbWUgPSAnaGVybyc7XG4gICAgd2Vla0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWVrLWNvbnRhaW5lcicpXG4gICAgd2Vla0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm5ldy10YXNrIHdlZWstYWRkXCIgaWQ9J3dlZWsnPis8L2J1dHRvbj5cbiAgICBgO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrQ29udGFpbmVyKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgb3BlbkZvcm0oZS50YXJnZXQuaWQpOyAgICAgIFxuICAgIH0pO1xufTtcblxuZXhwb3J0IHtjcmVhdGVIZXJvQ29udGFpbmVyLCBjcmVhdGVUb2RheUNvbnRhaW5lciwgY3JlYXRlV2Vla0NvbnRhaW5lcn07IiwiaW1wb3J0IHsgZGVsZXRlRm9ybSB9IGZyb20gXCIuLi9tb2R1bGVzL2Z1bmN0aW9uc1wiO1xuXG4gZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSAnb3ZlcmxheSc7XG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBkaXYub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgY2xvc2VPdmVybGF5KCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuICAgIC8vIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSkgcmV0dXJuO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgIFxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1hY3RpdmUnKTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJykpIGRlbGV0ZUZvcm0oKTsgICBcbiAgICBcbn07XG5cbmV4cG9ydCB7Y3JlYXRlT3ZlcmxheSwgY2xvc2VPdmVybGF5fTtcblxuXG5cbiAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vbW9kdWxlcy9jcmVhdGUtcGFnZSc7XG5pbXBvcnQgcmVuZGVyVGFzaywge3JlbmRlclRhc2tzfSBmcm9tICcuL21vZHVsZXMvcmVuZGVyUGFnZSc7XG5pbXBvcnQge2NyZWF0ZUhlcm9Db250YWluZXIsIGNyZWF0ZVRvZGF5Q29udGFpbmVyLCBjcmVhdGVXZWVrQ29udGFpbmVyfSBmcm9tICcuL3BhZ2VzL2NvbnRhaW5lci1zd2FwJztcbmltcG9ydCB7dG9Eb0xpc3RDb2xsZWN0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL3RvZG8tb2Jqcyc7XG5pbXBvcnQgeyBjbGVhckNvbnRhaW5lciwgY2hhbmdlSGVhZGVyVGl0bGUsIG1hcmtBY3RpdmVTZWN0aW9uLCByZW1vdmVBY3RpdmVTZWN0aW9ucyB9IGZyb20gJy4vbW9kdWxlcy9mdW5jdGlvbnMnO1xuaW1wb3J0ICcuL3N0eWxlcy9wYWdlLmNzcyc7XG5cbmNyZWF0ZVBhZ2UoKTtcbmNyZWF0ZUhlcm9Db250YWluZXIoKTtcblxubGV0IGluYm94U2lkZXJiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtbWFpbicpO1xuXG5pbmJveFNpZGVyYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZW1vdmVBY3RpdmVTZWN0aW9ucygpO1xuICAgIG1hcmtBY3RpdmVTZWN0aW9uKGUudGFyZ2V0KTtcbiAgICBjaGFuZ2VIZWFkZXJUaXRsZSgnSW5ib3gnKTtcbiAgICBjbGVhckNvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUhlcm9Db250YWluZXIoKTtcbiAgICByZW5kZXJUYXNrcyh0b0RvTGlzdENvbGxlY3Rpb24uZ2V0Q29sbGVjdGlvbignaW5ib3gnKSwgJ2luYm94Jyk7XG59KVxuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1tYWluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHJlbW92ZUFjdGl2ZVNlY3Rpb25zKCk7XG4gICAgbWFya0FjdGl2ZVNlY3Rpb24oZS50YXJnZXQpO1xuICAgIGNoYW5nZUhlYWRlclRpdGxlKCdUb2RheScpO1xuICAgIGNsZWFyQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlVG9kYXlDb250YWluZXIoKTtcbiAgICByZW5kZXJUYXNrcyh0b0RvTGlzdENvbGxlY3Rpb24uZ2V0Q29sbGVjdGlvbigndG9kYXknKSwgJ3RvZGF5Jyk7XG59KVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vlay1tYWluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHJlbW92ZUFjdGl2ZVNlY3Rpb25zKCk7XG4gICAgbWFya0FjdGl2ZVNlY3Rpb24oZS50YXJnZXQpO1xuICAgIGNoYW5nZUhlYWRlclRpdGxlKCdXZWVrJyk7XG4gICAgY2xlYXJDb250YWluZXIoKTtcbiAgICBjcmVhdGVXZWVrQ29udGFpbmVyKCk7XG4gICAgcmVuZGVyVGFza3ModG9Eb0xpc3RDb2xsZWN0aW9uLmdldENvbGxlY3Rpb24oJ3dlZWsnKSwgJ3dlZWsnKTtcbn0pXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9