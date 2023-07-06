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

.sidebar-section {
    
}

.sidebar-selected::before {
    content: '// ';
}

.sidebar-selected::after {
    content: ' //';
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




`, "",{"version":3,"sources":["webpack://./src/styles/page.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    overflow: hidden;\n    background-color: azure;\n}\n\n/* Main Containers */\n\n.main-container {\n    display: grid;\n    grid-template-columns: 1fr 2fr 2fr;\n    grid-template-rows: 90px 1fr;\n    /* border: 1px blue solid; */\n    height: 100vh;\n}\n\n.header {\n    background-color: aquamarine;\n    display: flex;\n    /* border: 1px red solid; */\n    align-items: center;\n    font-size: 2rem;\n    grid-column-start: 1;\n    grid-column-end: 4;\n}\n\n.sidebar {\n    background-color: #5efdfd;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    text-align: center;\n    /* border: 1px black solid; */\n    font-size: 1.5rem;\n    padding-top: 20px;\n}\n\n.hero {\n    background-color: azure;\n    position: relative;\n    /* border: 1px green solid; */\n    grid-column-start: 2;\n    grid-column-end: 4;\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin: 10px;\n}\n\n.header, .hero, .sidebar {\n    color: rgb(62, 72, 74);\n}\n\n/* Header */\n\n.current-section, .login {\n    width: 33%;\n    text-align: center;\n}\n\n.title-change {\n    animation-name: slideIn;\n    animation-duration: .6s;\n}\n\n\n.logo-image {\n    position: relative;\n    left: 40px;\n    height: 80%;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    width: 33%;\n    z-index: 5;\n    height: 100%;\n    text-align: center;\n}\n\n\n/* Hero Container */\n\n.hero {\n    animation-name: slideIn;\n    animation-duration: .65s;\n}\n\n.new-task {\n    position: absolute;\n    font-size: 3rem;\n    width: 60px;\n    background-color: lime;\n    border-radius: 30px;\n    top: 90%;\n    left: 90%;\n}\n\n@keyframes slideUp {\n    0%,\n    50% {\n      transform: translateY(100%);\n      opacity: 1;\n    }\n     \n    60%,\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    \n    }\n  }\n\n  @keyframes slideIn {\n    0%,\n    100% {\n      transform: translateX(100%);\n      opacity: 1;\n    }\n     \n    60%,\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    \n    }\n  }\n\n  @keyframes slideDown {\n    0%,\n    100% {\n      transform: translateY(-50%);\n      opacity: 0;\n    }\n     \n    60%,\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    \n    }\n  }\n\n  .hide-container {\n    display: none;\n}\n\n/* Cards */\n\n.card {\n    background-color: azure;\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: column;\n    animation-name: slideUp;\n    animation-duration: .3s;\n}\n\n.zoom {\n    animation: zoom forwards 0.7s ease-out 1;\n}\n\n@keyframes zoom { \n    0% {\n      transform: scale(1);\n      width: 100%;\n      min-width: 250px;\n      opacity: 1;\n      transform-origin: 125px 125px;\n    }\n    50% {\n      transform: scale(0);\n      opacity: 0;\n    }\n    100% {\n      width: 0;\n      min-width: 0;\n      transform: scale(0);\n      opacity: 0;\n      padding: 0;\n      margin: 0;\n    }\n  }\n\n.card-main {\n    background-color: aqua;\n    display: flex;\n    align-items: center;\n    height: 3rem;\n    padding: 0 2rem;\n    border-radius: 1rem 1rem 1rem 1rem;\n}\n\n.title-value {   \n    margin-left: 3rem;\n    margin-right: auto;\n}\n\n.due-value {\n    margin-right: 3rem;\n}\n\n.edit-button {\n    margin-right: 1.5rem;\n}\n\n.delete-button {\n\n}\n\n.delete-button, .edit-button {\n    height: 50%;\n}\n\n.details-button {\n  position: relative;\n  margin-right: 2.5rem;\n  padding: .5rem 1rem;\n  border: 1px solid #0d1817;\n  border-radius: 3px;\n  font-size: 1rem;\n  color: #181c1b;\n  text-transform: uppercase;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all .3s;\n\n  background-position: center;\n  transition: background 0.8s;\n}\n\n.details-button:hover {\n    position: relative;\n    background-color: #93c3de;\n    color: rgb(25, 23, 23);\n    cursor: pointer;\n    background: #47a7f5 radial-gradient(circle, transparent 1%, #81aed2 1%) center/15000%;\n  }\n\n  .details-button:active {\n    background-color: #c6d1d9;\n    background-size: 100%;\n    transition: background 0s;\n  }\n\n.checked:before {\n    content: \"\";\n    position: absolute;\n    border-color: #009933;\n    border-style: solid;\n    border-width: 0 0.3em 0.25em 0;\n    height: 1em;\n    /* top: 1.3em;\n    left: 0.6em; */\n    margin-top: 0em;\n    transform: rotate(45deg);\n    width: 0.5em;\n}\n\n.card-details {\n    background-color: lightblue;\n    padding: 1rem 2rem;\n    border-radius: 1rem 1rem 1rem 1rem;\n    \n    animation-name: slideDown;\n    animation-duration: .4s;\n}\n\n.card-details-hide {\n    display: none;\n    transform: translateY(-200%);\n}\n\n.card:hover {\n    transform: scale(1.004);\n    transform-origin: 50% 50%;\n    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .2);\n    transition: all .2s ease-out;\n}\n\n\n\n  /* Sidebar */\n\n  .section {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n  }\n\n  .section:hover {\n    background-color: lightgray;\n    font-size: 1.8rem;\n    transition: .1s font-size;\n    }\n\n    .section:active {\n        color: white;\n    }\n\n    .section:hover::before {\n        content: \"//\";\n        \n        font-weight: 700;\n      }\n    \n      .section:hover::after {\n        content: \"//\";\n        \n        font-weight: 700;\n      }\n    \n      .selected::before, .selected::after {\n        content: \"//\";\n        font-weight: 700;\n      }\n\n    .task-count {\n        width: 2rem;\n        height: 2rem;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        border: 2px rgb(134, 206, 203) solid;\n        background-color: #8a98ef;\n        border-radius: 50%;\n        font-size: 1.3rem;\n        font-weight: 700;\n        color: #f7f7f7;\n        font-family: sans-serif;\n        &:empty {\n            display: none;\n          }\n    }\n\n/* Overlay */\n\n.overlay {\n    display: flex;\n    display: none;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.6);\n    height: 100%;\n    width: 100%;\n    backdrop-filter: blur(3px);\n    z-index: 1;\n}\n\n.overlay-active {\n    display: block;\n}\n\n/* Form */\n.form-container {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 12fr;\n    z-index: 2;\n    position: absolute;\n    background: rgb(127, 191, 191);\n    top: 23%;\n    right: 18%;\n    height: 45%;\n    width: 90%\n}\n\n.description {\n    resize: none;\n    overflow: auto;\n    height: 200px;\n  }\n\n  textarea:focus, input:focus{\n    outline: none;\n}\n\n.form {\n    padding: 1rem 1.5rem;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    flex: 1;\n    gap: 5px;\n}\n\n.form-sidebar {\n    padding-top: 15px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 15px;\n    background-color: rgb(97, 158, 158);\n    color: lightcyan;\n    font-size: 1.8rem;\n}\n\n.sidebar-section {\n    \n}\n\n.sidebar-selected::before {\n    content: '// ';\n}\n\n.sidebar-selected::after {\n    content: ' //';\n}\n\n.form-sidebar > *:hover {\n    text-shadow: 0 0 2px whitesmoke;\n}\n\n.form-header {\n    display: flex;\n    justify-content: space-between;\n    background: rgb(78, 209, 209);\n    grid-column: 1/3;\n    grid-row: 1/2;\n    padding: 0 15px;\n}\n\n.form-logo {\n    width: 15%;\n    height: 100%;\n}\n\n.close-button {\n    color: white;\n    font-size: 1.9rem;\n    cursor: pointer;\n    font-family: lato, sans-serif;\n}\n\n.close-button:hover { text-shadow: 0 0 5px whitesmoke; }\n\n.title-input {\n    height: 10%;\n    font-size: 2rem;\n}\n\n.description {\n    height: 60%;\n    font-size: 1.3rem;\n}\n\n.date-div {\n    display: flex;\n    align-items: center;\n    height: 10%;\n    gap: 10px;\n    color: lightcyan;\n    font-weight: bold;\n}\n\n.prio-sub-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 10%;\n}\n\n.prio-sub-div > * {\n    height: 80%;\n    width: 20%;\n}\n\n.due-date-input {\n  padding: .5rem 1rem;\n  border: 1px solid lightcyan;\n  border-radius: 5px;\n  color: lightcyan;\n  background-color: transparent;\n  font-size: 1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: lato, sans-serif;\n}\n\n\n\n\n"],"sourceRoot":""}]);
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
        div.classList.add('sidebar-section');
        div.textContent = sideBarSections[i];
        div.addEventListener('click', function () {
            
            (() => {
                const sidebarSections = document.querySelectorAll('.sidebar-section');
                sidebarSections.forEach((section) => {
                    if (section.classList.contains('sidebar-selected')) section.classList.remove('sidebar-selected');
                })
            })();
            this.classList.add('sidebar-selected');
        })
        
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

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    prioSubDiv.appendChild(submit);

    // Data extracted from form here
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let sectionSelected = document.querySelector('.sidebar-selected');
        if (sectionSelected) {
            sectionSelected = document.querySelector('.sidebar-selected').innerHTML.toLowerCase();

            const objData = addNewTask(extractFormData([title, description, due, priority]), sectionSelected);
            
            UpdateTaskCountDisplay(sectionSelected, checkmarkCounterDisplay(sectionSelected));

            (0,_pages_overlay_js__WEBPACK_IMPORTED_MODULE_4__.closeOverlay)();
            return;
        }
        
        
        console.log('hi')
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
        _todo_objs_js__WEBPACK_IMPORTED_MODULE_0__.toDoListCollection.getCollection(section).forEach((element, index) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsT0FBTyxzRkFBc0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsU0FBUyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxX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Ozs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStDO0FBQ2M7QUFDeUM7QUFDOUM7QUFDeUQ7QUFDdEY7O0FBRTNCLGdFQUFVO0FBQ1YsMEVBQW1COztBQUVuQjs7QUFFQTtBQUNBLElBQUksd0VBQW9CO0FBQ3hCLElBQUkscUVBQWlCO0FBQ3JCLElBQUkscUVBQWlCO0FBQ3JCLElBQUksa0VBQWM7QUFDbEIsSUFBSSwwRUFBbUI7QUFDdkIsSUFBSSxnRUFBVyxDQUFDLGtFQUFrQjtBQUNsQyxDQUFDOzs7QUFHRDtBQUNBLElBQUkseUVBQW9CO0FBQ3hCLElBQUkscUVBQWlCO0FBQ3JCLElBQUkscUVBQWlCO0FBQ3JCLElBQUksa0VBQWM7QUFDbEIsSUFBSSwyRUFBb0I7QUFDeEIsSUFBSSxnRUFBVyxDQUFDLGtFQUFrQjtBQUNsQyxDQUFDOztBQUVEO0FBQ0EsSUFBSSx5RUFBb0I7QUFDeEIsSUFBSSxxRUFBaUI7QUFDckIsSUFBSSxxRUFBaUI7QUFDckIsSUFBSSxrRUFBYztBQUNsQixJQUFJLDBFQUFtQjtBQUN2QixJQUFJLGdFQUFXLENBQUMsa0VBQWtCO0FBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9wYWdlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvcGFnZS5jc3M/NTg2NSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGUtcGFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXJQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLW9ianMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wYWdlcy9jb250YWluZXItc3dhcC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BhZ2VzL292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cblxuLyogTWFpbiBDb250YWluZXJzICovXG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCAxZnI7XG4gICAgLyogYm9yZGVyOiAxcHggYmx1ZSBzb2xpZDsgKi9cbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbn1cblxuLnNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZWZkZmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogYm9yZGVyOiAxcHggZ3JlZW4gc29saWQ7ICovXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaGVhZGVyLCAuaGVybywgLnNpZGViYXIge1xuICAgIGNvbG9yOiByZ2IoNjIsIDcyLCA3NCk7XG59XG5cbi8qIEhlYWRlciAqL1xuXG4uY3VycmVudC1zZWN0aW9uLCAubG9naW4ge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUtY2hhbmdlIHtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC42cztcbn1cblxuXG4ubG9nby1pbWFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDQwcHg7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG5cbi5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMzJTtcbiAgICB6LWluZGV4OiA1O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLyogSGVybyBDb250YWluZXIgKi9cblxuLmhlcm8ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjY1cztcbn1cblxuLm5ldy10YXNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB0b3A6IDkwJTtcbiAgICBsZWZ0OiA5MCU7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gICAgMCUsXG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgICBcbiAgICA2MCUsXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIFxuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAgXG4gICAgNjAlLFxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICBcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAgXG4gICAgNjAlLFxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICBcbiAgICB9XG4gIH1cblxuICAuaGlkZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIENhcmRzICovXG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVVcDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC4zcztcbn1cblxuLnpvb20ge1xuICAgIGFuaW1hdGlvbjogem9vbSBmb3J3YXJkcyAwLjdzIGVhc2Utb3V0IDE7XG59XG5cbkBrZXlmcmFtZXMgem9vbSB7IFxuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTI1cHggMTI1cHg7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuLmNhcmQtbWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xufVxuXG4udGl0bGUtdmFsdWUgeyAgIFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmR1ZS12YWx1ZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xufVxuXG4uZWRpdC1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG5cbn1cblxuLmRlbGV0ZS1idXR0b24sIC5lZGl0LWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi5kZXRhaWxzLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDE4MTc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzE4MWMxYjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjhzO1xufVxuXG4uZGV0YWlscy1idXR0b246aG92ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNjM2RlO1xuICAgIGNvbG9yOiByZ2IoMjUsIDIzLCAyMyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICM0N2E3ZjUgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICM4MWFlZDIgMSUpIGNlbnRlci8xNTAwMCU7XG4gIH1cblxuICAuZGV0YWlscy1idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZkMWQ5O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzO1xuICB9XG5cbi5jaGVja2VkOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA5OTMzO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAuM2VtIDAuMjVlbSAwO1xuICAgIGhlaWdodDogMWVtO1xuICAgIC8qIHRvcDogMS4zZW07XG4gICAgbGVmdDogMC42ZW07ICovXG4gICAgbWFyZ2luLXRvcDogMGVtO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB3aWR0aDogMC41ZW07XG59XG5cbi5jYXJkLWRldGFpbHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDFyZW0gMXJlbTtcbiAgICBcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVEb3duO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjRzO1xufVxuXG4uY2FyZC1kZXRhaWxzLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDQpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG59XG5cblxuXG4gIC8qIFNpZGViYXIgKi9cblxuICAuc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgfVxuXG4gIC5zZWN0aW9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgdHJhbnNpdGlvbjogLjFzIGZvbnQtc2l6ZTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbjphY3RpdmUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLnNlY3Rpb246aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiLy9cIjtcbiAgICAgICAgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgXG4gICAgICAuc2VjdGlvbjpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIi8vXCI7XG4gICAgICAgIFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuICAgIFxuICAgICAgLnNlbGVjdGVkOjpiZWZvcmUsIC5zZWxlY3RlZDo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIi8vXCI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG5cbiAgICAudGFzay1jb3VudCB7XG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAycHggcmdiKDEzNCwgMjA2LCAyMDMpIHNvbGlkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE5OGVmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogI2Y3ZjdmNztcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICY6ZW1wdHkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgfVxuXG4vKiBPdmVybGF5ICovXG5cbi5vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gICAgei1pbmRleDogMTtcbn1cblxuLm92ZXJsYXktYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogRm9ybSAqL1xuLmZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMmZyO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYigxMjcsIDE5MSwgMTkxKTtcbiAgICB0b3A6IDIzJTtcbiAgICByaWdodDogMTglO1xuICAgIGhlaWdodDogNDUlO1xuICAgIHdpZHRoOiA5MCVcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIHRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybSB7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5mb3JtLXNpZGViYXIge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDE1OCwgMTU4KTtcbiAgICBjb2xvcjogbGlnaHRjeWFuO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uc2lkZWJhci1zZWN0aW9uIHtcbiAgICBcbn1cblxuLnNpZGViYXItc2VsZWN0ZWQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogJy8vICc7XG59XG5cbi5zaWRlYmFyLXNlbGVjdGVkOjphZnRlciB7XG4gICAgY29udGVudDogJyAvLyc7XG59XG5cbi5mb3JtLXNpZGViYXIgPiAqOmhvdmVyIHtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCB3aGl0ZXNtb2tlO1xufVxuXG4uZm9ybS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQ6IHJnYig3OCwgMjA5LCAyMDkpO1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5mb3JtLWxvZ28ge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjlyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtZmFtaWx5OiBsYXRvLCBzYW5zLXNlcmlmO1xufVxuXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHsgdGV4dC1zaGFkb3c6IDAgMCA1cHggd2hpdGVzbW9rZTsgfVxuXG4udGl0bGUtaW5wdXQge1xuICAgIGhlaWdodDogMTAlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmRhdGUtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGNvbG9yOiBsaWdodGN5YW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcmlvLXN1Yi1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMCU7XG59XG5cbi5wcmlvLXN1Yi1kaXYgPiAqIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogMjAlO1xufVxuXG4uZHVlLWRhdGUtaW5wdXQge1xuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IGxpZ2h0Y3lhbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IGxhdG8sIHNhbnMtc2VyaWY7XG59XG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9wYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSxXQUFXOztBQUVY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O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQSxzQkFBc0IsK0JBQStCLEVBQUU7O0FBRXZEO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsU0FBUztJQUNULGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4vKiBNYWluIENvbnRhaW5lcnMgKi9cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggMWZyO1xcbiAgICAvKiBib3JkZXI6IDFweCBibHVlIHNvbGlkOyAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZmRmZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5oZXJvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyogYm9yZGVyOiAxcHggZ3JlZW4gc29saWQ7ICovXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmhlYWRlciwgLmhlcm8sIC5zaWRlYmFyIHtcXG4gICAgY29sb3I6IHJnYig2MiwgNzIsIDc0KTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmN1cnJlbnQtc2VjdGlvbiwgLmxvZ2luIHtcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUtY2hhbmdlIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjZzO1xcbn1cXG5cXG5cXG4ubG9nby1pbWFnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNDBweDtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgei1pbmRleDogNTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi8qIEhlcm8gQ29udGFpbmVyICovXFxuXFxuLmhlcm8ge1xcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNjVzO1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHRvcDogOTAlO1xcbiAgICBsZWZ0OiA5MCU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XFxuICAgIDAlLFxcbiAgICA1MCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgICBcXG4gICAgNjAlLFxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgXFxuICAgIH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgc2xpZGVJbiB7XFxuICAgIDAlLFxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAgXFxuICAgIDYwJSxcXG4gICAgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIFxcbiAgICB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHNsaWRlRG93biB7XFxuICAgIDAlLFxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAgXFxuICAgIDYwJSxcXG4gICAgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIFxcbiAgICB9XFxuICB9XFxuXFxuICAuaGlkZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBDYXJkcyAqL1xcblxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZVVwO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC4zcztcXG59XFxuXFxuLnpvb20ge1xcbiAgICBhbmltYXRpb246IHpvb20gZm9yd2FyZHMgMC43cyBlYXNlLW91dCAxO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb20geyBcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEyNXB4IDEyNXB4O1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIG1pbi13aWR0aDogMDtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG4gIH1cXG5cXG4uY2FyZC1tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAxcmVtIDFyZW07XFxufVxcblxcbi50aXRsZS12YWx1ZSB7ICAgXFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5kdWUtdmFsdWUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxufVxcblxcbi5lZGl0LWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuXFxufVxcblxcbi5kZWxldGUtYnV0dG9uLCAuZWRpdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1yaWdodDogMi41cmVtO1xcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDE4MTc7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzE4MWMxYjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG5cXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uOmhvdmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNjM2RlO1xcbiAgICBjb2xvcjogcmdiKDI1LCAyMywgMjMpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICM0N2E3ZjUgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICM4MWFlZDIgMSUpIGNlbnRlci8xNTAwMCU7XFxuICB9XFxuXFxuICAuZGV0YWlscy1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M2ZDFkOTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzO1xcbiAgfVxcblxcbi5jaGVja2VkOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwOTkzMztcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAuM2VtIDAuMjVlbSAwO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgLyogdG9wOiAxLjNlbTtcXG4gICAgbGVmdDogMC42ZW07ICovXFxuICAgIG1hcmdpbi10b3A6IDBlbTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB3aWR0aDogMC41ZW07XFxufVxcblxcbi5jYXJkLWRldGFpbHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDFyZW0gMXJlbTtcXG4gICAgXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZURvd247XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjRzO1xcbn1cXG5cXG4uY2FyZC1kZXRhaWxzLWhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDQpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAuMik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxufVxcblxcblxcblxcbiAgLyogU2lkZWJhciAqL1xcblxcbiAgLnNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gIH1cXG5cXG4gIC5zZWN0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgdHJhbnNpdGlvbjogLjFzIGZvbnQtc2l6ZTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbjphY3RpdmUge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5zZWN0aW9uOmhvdmVyOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIi8vXFxcIjtcXG4gICAgICAgIFxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICB9XFxuICAgIFxcbiAgICAgIC5zZWN0aW9uOmhvdmVyOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiLy9cXFwiO1xcbiAgICAgICAgXFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIH1cXG4gICAgXFxuICAgICAgLnNlbGVjdGVkOjpiZWZvcmUsIC5zZWxlY3RlZDo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIi8vXFxcIjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgfVxcblxcbiAgICAudGFzay1jb3VudCB7XFxuICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyOiAycHggcmdiKDEzNCwgMjA2LCAyMDMpIHNvbGlkO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhhOThlZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIGNvbG9yOiAjZjdmN2Y3O1xcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgICAgICAmOmVtcHR5IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICB9XFxuICAgIH1cXG5cXG4vKiBPdmVybGF5ICovXFxuXFxuLm92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5vdmVybGF5LWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBGb3JtICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMmZyO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMjcsIDE5MSwgMTkxKTtcXG4gICAgdG9wOiAyMyU7XFxuICAgIHJpZ2h0OiAxOCU7XFxuICAgIGhlaWdodDogNDUlO1xcbiAgICB3aWR0aDogOTAlXFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICB0ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmZvcm0tc2lkZWJhciB7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMTU4LCAxNTgpO1xcbiAgICBjb2xvcjogbGlnaHRjeWFuO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnNpZGViYXItc2VjdGlvbiB7XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhci1zZWxlY3RlZDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJy8vICc7XFxufVxcblxcbi5zaWRlYmFyLXNlbGVjdGVkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgLy8nO1xcbn1cXG5cXG4uZm9ybS1zaWRlYmFyID4gKjpob3ZlciB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4IHdoaXRlc21va2U7XFxufVxcblxcbi5mb3JtLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc4LCAyMDksIDIwOSk7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG59XFxuXFxuLmZvcm0tbG9nbyB7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG8sIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIgeyB0ZXh0LXNoYWRvdzogMCAwIDVweCB3aGl0ZXNtb2tlOyB9XFxuXFxuLnRpdGxlLWlucHV0IHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uZGF0ZS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjb2xvcjogbGlnaHRjeWFuO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByaW8tc3ViLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMCU7XFxufVxcblxcbi5wcmlvLXN1Yi1kaXYgPiAqIHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbi5kdWUtZGF0ZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjeWFuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IGxpZ2h0Y3lhbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogbGF0bywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVPdmVybGF5IH0gZnJvbSBcIi4uL3BhZ2VzL292ZXJsYXlcIjtcbmltcG9ydCBsb2dvIGZyb20gJy4vLi4vYXNzZXRzL2xvZ28yLnBuZyc7XG5pbXBvcnQgeyB0b0RvTGlzdENvbGxlY3Rpb24gfSBmcm9tIFwiLi90b2RvLW9ianNcIjtcblxuY29uc3QgY3JlYXRlUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICA8aW1nIGNsYXNzPSdsb2dvLWltYWdlJyBzcmM9JHtsb2dvfT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXNlY3Rpb25cIj5JbmJveDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5cIj5Mb2dpbjwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9Eb0xpc3RDb2xsZWN0aW9uLmdldENvbGxlY3Rpb24oJ2luYm94JylbMF0uY2hlY2tlZCk7XG4gICAgICAgIH0pXG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNyZWF0ZVNpZGVCYXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGVCYXIuY2xhc3NOYW1lID0gJ3NpZGViYXInO1xuICAgICAgICBzaWRlQmFyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImluYm94LW1haW4gc2VjdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2luYm94LXRleHQnPkluYm94PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2luYm94LWNvdW50IHRhc2stY291bnQnPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RheS1tYWluIHNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSd0b2RheS10ZXh0Jz5Ub2RheTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSd0b2RheS1jb3VudCB0YXNrLWNvdW50Jz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2Vlay1tYWluIHNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSd3ZWVrLXRleHQnPldlZWs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0nd2Vlay1jb3VudCB0YXNrLWNvdW50Jz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG4gICAgfSkoKTsgICAgXG5cbiAgICBjcmVhdGVPdmVybGF5KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlOyIsImltcG9ydCB7dG9Eb0xpc3RDb2xsZWN0aW9ufSBmcm9tICcuL3RvZG8tb2Jqcy5qcyc7XG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4vLi4vYXNzZXRzL2xvZ28ucG5nJztcbmltcG9ydCBkZWxldGVJbWFnZSBmcm9tICcuLy4uL2Fzc2V0cy9kZWxldGUuc3ZnJztcbmltcG9ydCBlZGl0SW1hZ2UgZnJvbSAnLi8uLi9hc3NldHMvZWRpdC5zdmcnO1xuaW1wb3J0IHsgY2xvc2VPdmVybGF5IH0gZnJvbSAnLi4vcGFnZXMvb3ZlcmxheS5qcyc7XG5pbXBvcnQgeyByZW5kZXJKdXN0QWRkZWQgfSBmcm9tICcuL3JlbmRlclBhZ2UuanMnO1xuXG5jb25zdCBhZGROZXdUYXNrID0gKG9iaiwgc2VjdGlvbikgPT4ge1xuICAgIHRvRG9MaXN0Q29sbGVjdGlvbi5hZGQob2JqLCBzZWN0aW9uKTtcbiAgICByZXR1cm4gb2JqXG59O1xuXG5jb25zdCBjbGVhckNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpLnJlbW92ZSgpO1xufTtcblxuY29uc3QgcmVzZXREb20gPSAoKSA9PiB7XG4gICAgbGV0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICBcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4gY2FyZC5yZW1vdmUoKSk7XG59O1xuXG5jb25zdCBvcGVuRm9ybSA9IChzZWN0aW9uKSA9PiB7XG4gICAgLy8gQWN0aXZhdGVzIG92ZXJsYXlcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5LWFjdGl2ZScpO1xuXG4gICAgY3JlYXRlRm9ybShzZWN0aW9uKTtcbiAgICBcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oc2VjdGlvbikge1xuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSAnZm9ybS1jb250YWluZXInXG5cbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUJhci5jbGFzc05hbWUgPSAnZm9ybS1zaWRlYmFyJztcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuXG4gICAgLy8gRHluYW1pY2FsbHkgY3JlYXRlIHNpZGViYXIgZGl2c1xuICAgIGNvbnN0IHNpZGVCYXJTZWN0aW9ucyA9IFsnSW5ib3gnLCAnVG9kYXknLCAnV2VlayddO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lkZUJhclNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NOYW1lID0gYCR7c2lkZUJhclNlY3Rpb25zW2ldLnRvTG93ZXJDYXNlKCl9LXNpZGViYXJgO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1zZWN0aW9uJyk7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHNpZGVCYXJTZWN0aW9uc1tpXTtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpZGViYXJTZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyU2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2VsZWN0ZWQnKSkgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItc2VsZWN0ZWQnKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2Zvcm0taGVhZGVyJztcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdmb3JtLWxvZ28nKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29JbWFnZTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZU92ZXJsYXkoKTtcbiAgICB9KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJ2Zvcm0nXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsIDMpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjXCIpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGV0YWlsczogZS5nIGludGVybmV0LCBwaG9uZSwgcmVudC5cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZURpdi5jbGFzc05hbWUgPSAnZGF0ZS1kaXYnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gICAgXG4gICAgY29uc3QgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlVGV4dC5jbGFzc05hbWUgPSAnZGF0ZS10ZXh0JztcbiAgICBkdWVEYXRlVGV4dC5pbm5lclRleHQgPSAnRHVlIERhdGU6J1xuICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xuXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZS5jbGFzc05hbWUgPSAnZHVlLWRhdGUtaW5wdXQnO1xuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkdWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZVwiKTtcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZSk7XG5cbiAgICBjb25zdCBwcmlvU3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb1N1YkRpdi5jbGFzc05hbWUgPSAncHJpby1zdWItZGl2JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9TdWJEaXYpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCBwcmlvQ2hvaWNlcyA9IFsnTG93JywgJ01vZGVyYXRlJywgJ0hpZ2gnXTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpbycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb0Nob2ljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9DaG9pY2VzW2ldO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3ByaW9DaG9pY2VzW2ldLnRvTG9jYWxlTG93ZXJDYXNlKCl9YCk7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfTtcbiAgICBwcmlvU3ViRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gICAgcHJpb1N1YkRpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgLy8gRGF0YSBleHRyYWN0ZWQgZnJvbSBmb3JtIGhlcmVcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgc2VjdGlvblNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItc2VsZWN0ZWQnKTtcbiAgICAgICAgaWYgKHNlY3Rpb25TZWxlY3RlZCkge1xuICAgICAgICAgICAgc2VjdGlvblNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItc2VsZWN0ZWQnKS5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgY29uc3Qgb2JqRGF0YSA9IGFkZE5ld1Rhc2soZXh0cmFjdEZvcm1EYXRhKFt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHldKSwgc2VjdGlvblNlbGVjdGVkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVXBkYXRlVGFza0NvdW50RGlzcGxheShzZWN0aW9uU2VsZWN0ZWQsIGNoZWNrbWFya0NvdW50ZXJEaXNwbGF5KHNlY3Rpb25TZWxlY3RlZCkpO1xuXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdoaScpXG4gICAgICAgIGNvbnN0IG9iakRhdGEgPSBhZGROZXdUYXNrKGV4dHJhY3RGb3JtRGF0YShbdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5XSksIHNlY3Rpb24pO1xuICAgICAgICBjcmVhdGVDYXJkKG9iakRhdGEsIHNlY3Rpb24pO1xuICAgICAgICBVcGRhdGVUYXNrQ291bnREaXNwbGF5KHNlY3Rpb24sIGNoZWNrbWFya0NvdW50ZXJEaXNwbGF5KHNlY3Rpb24pKTtcblxuICAgICAgICBjbG9zZU92ZXJsYXkoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpO1xuICAgIGhlcm8uYXBwZW5kKGZvcm1Db250YWluZXIpO1xufTtcblxuZnVuY3Rpb24gZGVsZXRlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgZm9ybS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEZvcm1EYXRhKGZvcm1EYXRhKSB7XG4gICAgXG4gICAgY29uc3QgZm9ybURhdGFPYmogPSB7fTtcbiAgICBmb3JtRGF0YS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaWYgKGlucHV0IClcbiAgICAgICAgZm9ybURhdGFPYmpbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZVxuICAgIH0pO1xuICAgIFxuICAgIGZvcm1EYXRhT2JqLmNoZWNrZWQgPSBmYWxzZTtcbiAgICBcbiAgICByZXR1cm4gZm9ybURhdGFPYmo7XG59O1xuXG5mdW5jdGlvbiBjaGFuZ2VIZWFkZXJUaXRsZShzZWN0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zZWN0aW9uJyk7XG5cbiAgICBjdXJyZW50U2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCd0aXRsZS1jaGFuZ2UnKTtcbiAgICBcbiAgICBcblxuICAgIGN1cnJlbnRTZWN0aW9uLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbn07XG5cbmZ1bmN0aW9uIFVwZGF0ZVRhc2tDb3VudERpc3BsYXkoc2VjdGlvbiwgY2hlY2ttYXJrQW1vdW50KSB7XG4gICAgbGV0IGNvdW50RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NlY3Rpb259LWNvdW50YCk7XG4gICAgY29uc3QgdGFza0Ftb3VudCA9IHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKHNlY3Rpb24pLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoY2hlY2ttYXJrQW1vdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCh0YXNrQW1vdW50IC0gY2hlY2ttYXJrQW1vdW50KSA8IDEpIGNvdW50RGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgICBlbHNlIGNvdW50RGlzcGxheS5pbm5lckhUTUwgPSB0YXNrQW1vdW50IC0gY2hlY2ttYXJrQW1vdW50O1xuICAgIHJldHVybjsgIFxuICAgIH1cblxuICAgIGlmICh0YXNrQW1vdW50IDwgMSkgY291bnREaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICAgIGVsc2UgY291bnREaXNwbGF5LmlubmVySFRNTCA9IHRhc2tBbW91bnQ7ICBcbn07XG5cbmZ1bmN0aW9uIG1hcmtBY3RpdmVTZWN0aW9uKHNlY3Rpb24pIHtcbiAgICBpZiAoc2VjdGlvbi50YWdOYW1lID09PSAnU1BBTicpIHNlY3Rpb24ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGVsc2Ugc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlU2VjdGlvbnMoKSB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpO1xuICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpXG59O1xuXG5mdW5jdGlvbiBzaG93Q2FyZERldGFpbCgpIHtcbiAgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhT2JqLCBzZWN0aW9uKSB7XG4gICAgY29uc3QgaGVyb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NlY3Rpb259LWNvbnRhaW5lcmApO1xuXG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuY2xhc3NOYW1lID0gJ2NhcmQnO1xuICAgIFxuICAgIFxuICAgIGNhcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtbWFpbicpKSByZXR1cm47XG4gICAgICAgIC8vIGFkZHMvcmVtb3ZlcyBjaGVja21hcmsgb24gY2xpY2tcbiAgICAgICAgY29uc3QgbWFpbkNhcmRDaGVja2VkID0gdGhpcy5jaGlsZHJlblswXS5jbGFzc0xpc3Q7XG4gICAgICAgIGNvbnN0IGNoZWNrTWFya0NoZWNrZXIgPSBkYXRhT2JqLmNoZWNrZWQ7XG4gICAgICAgIGlmIChjaGVja01hcmtDaGVja2VyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWFpbkNhcmRDaGVja2VkLnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgZGF0YU9iai5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1haW5DYXJkQ2hlY2tlZC50b2dnbGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGRhdGFPYmouY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgVXBkYXRlVGFza0NvdW50RGlzcGxheShzZWN0aW9uLCBjaGVja21hcmtDb3VudGVyRGlzcGxheShzZWN0aW9uKSlcbiAgICAgICAgXG4gICAgfSlcblxuICAgIGNvbnN0IGNhcmRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZE1haW4uY2xhc3NMaXN0LmFkZCgnY2FyZC1tYWluJyk7XG5cbiAgICBjb25zdCBjYXJkRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGV0YWlscycpO1xuICAgIGNhcmREZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGV0YWlscy1oaWRlJyk7XG5cbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gZGF0YU9iaikge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ3RpdGxlJyB8fCBwcm9wID09PSAnZHVlJykge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHtwcm9wfS12YWx1ZWApO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGRhdGFPYmpbcHJvcF07XG4gICAgICAgICAgICBjYXJkTWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdkZXNjJykge1xuICAgICAgICAgICAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLXZhbHVlJyk7XG4gICAgICAgICAgICBkZXRhaWxzRGl2LmlubmVySFRNTCA9IGRhdGFPYmpbcHJvcF07XG4gICAgICAgICAgICBjYXJkRGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdwcmlvJykge1xuICAgICAgICAgICAgY2FyZE1haW4uY2xhc3NMaXN0LmFkZChgJHtkYXRhT2JqW3Byb3BdfWApO1xuICAgICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgaWYgKGRhdGFPYmouY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjYXJkTWFpbi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzQnV0dG9uLmNsYXNzTmFtZSA9ICdkZXRhaWxzLWJ1dHRvbic7XG4gICAgZGV0YWlsc0J1dHRvbi50ZXh0Q29udGVudCA9ICdERVRBSUxTJztcblxuICAgIGRldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1kZXRhaWxzJykuY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZC1kZXRhaWxzLWhpZGUnKTtcbiAgICB9KVxuXG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkTWFpbik7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkRGV0YWlscyk7XG5cbiAgICBcbiAgICBpZiAoY2FyZE1haW4uY2hpbGRyZW5bMV0pIGNhcmRNYWluLmluc2VydEJlZm9yZShkZXRhaWxzQnV0dG9uLCBjYXJkTWFpbi5jaGlsZHJlblsxXSk7IGVsc2UgY2FyZE1haW4uYXBwZW5kQ2hpbGQoZGV0YWlsc0J1dHRvbik7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gbmV3IEltYWdlKClcbiAgICBlZGl0QnV0dG9uLnNyYyA9IGVkaXRJbWFnZTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0LWJ1dHRvbidcbiAgICBjYXJkTWFpbi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKVxuICAgIFxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5ldyBJbWFnZSgpXG4gICAgZGVsZXRlQnV0dG9uLnNyYyA9IGRlbGV0ZUltYWdlO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlLWJ1dHRvbic7XG4gICAgXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IG9iamVjdEluZGV4O1xuICAgICAgICB0b0RvTGlzdENvbGxlY3Rpb24uZ2V0Q29sbGVjdGlvbihzZWN0aW9uKS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLXZhbHVlJykudGV4dENvbnRlbnQgPT09IGVsZW1lbnRbJ3RpdGxlJ10gJiYgKHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLXZhbHVlJykudGV4dENvbnRlbnQgPT09IGVsZW1lbnRbJ2R1ZSddKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnem9vbScpO1xuICAgICAgICB0b0RvTGlzdENvbGxlY3Rpb24ucmVtb3ZlKHNlY3Rpb24sIG9iamVjdEluZGV4KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgXG5cbiAgICAgICAgVXBkYXRlVGFza0NvdW50RGlzcGxheShzZWN0aW9uLCBjaGVja21hcmtDb3VudGVyRGlzcGxheShzZWN0aW9uKSk7XG4gICAgfSlcbiAgICBjYXJkTWFpbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXG4gICAgXG4gICAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbn1cblxuY29uc3QgY2hlY2ttYXJrQ291bnRlckRpc3BsYXkgPSBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgY29uc3QgY29sbGVjdGlvbkFyciA9IHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKHNlY3Rpb24pO1xuICAgIGxldCBmaW5pc2hlZFRhc2tzQW1vdW50O1xuICAgIGNvbGxlY3Rpb25BcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICBpZiAob2JqLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChmaW5pc2hlZFRhc2tzQW1vdW50ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBmaW5pc2hlZFRhc2tzQW1vdW50ID0gMTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmluaXNoZWRUYXNrc0Ftb3VudCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBmaW5pc2hlZFRhc2tzQW1vdW50O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBhZGROZXdUYXNrO1xuZXhwb3J0IHtjbGVhckNvbnRhaW5lciwgcmVzZXREb20sIG9wZW5Gb3JtLCBkZWxldGVGb3JtLCBjaGFuZ2VIZWFkZXJUaXRsZSwgVXBkYXRlVGFza0NvdW50RGlzcGxheSwgbWFya0FjdGl2ZVNlY3Rpb24sIHJlbW92ZUFjdGl2ZVNlY3Rpb25zLCBjcmVhdGVDYXJkfTsiLCJpbXBvcnQgeyB0b0RvTGlzdENvbGxlY3Rpb24gfSBmcm9tIFwiLi90b2RvLW9ianNcIjtcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuY29uc3QgcmVuZGVyVGFzayA9ICh0YXNrLCBzZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgaGVyb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VjdGlvbik7XG4gICAgaWYgKCF0YXNrKSByZXR1cm47XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZERpdi5jbGFzc05hbWUgPSAnY2FyZCc7XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHRhc2tbaV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke3Byb3B9OiAke3Rhc2tbaV1bcHJvcF19YDtcbiAgICAgICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICB9O1xufTtcblxuY29uc3QgcmVuZGVySnVzdEFkZGVkID0gKG9iaiwgc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IGhlcm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb24pO1xuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2LmNsYXNzTmFtZSA9ICdjYXJkJztcblxuICAgIGNhcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGVzdC5pbm5lckhUTUwgPSAndGVzdCc7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGVzdCk7XG4gICAgfSlcbiAgICBcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gb2JqW29iai5sZW5ndGggLSAxXSkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke3Byb3B9OiAke29ialtvYmoubGVuZ3RoLTFdW3Byb3BdfWA7XG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gICAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbn07XG5cbmNvbnN0IHJlbmRlclRhc2tzID0gKGRhdGFPYmosIHNlY3Rpb24pID0+e1xuICAgIGlmICghZGF0YU9iaikgcmV0dXJuO1xuICAgIGRhdGFPYmouZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY3JlYXRlQ2FyZCh0YXNrLCBzZWN0aW9uKVxuICAgIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUYXNrO1xuZXhwb3J0IHtyZW5kZXJKdXN0QWRkZWQsIHJlbmRlclRhc2tzfTsiLCIvLyBNb2R1bGUgb2YgYWxsIHRvLWRvIGl0ZW1zXG5cbmNvbnN0IHRvRG9MaXN0Q29sbGVjdGlvbiA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBjb2xsZWN0aW9uID0ge307XG5cbiAgICBjb25zdCBhZGQgPSAob2JqLCBzZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICghY29sbGVjdGlvbltzZWN0aW9uXSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbltzZWN0aW9uXSA9IFtdO1xuICAgICAgICAgICAgY29sbGVjdGlvbltzZWN0aW9uXS5wdXNoKG9iaik7XG4gICAgICAgIH0gZWxzZSBjb2xsZWN0aW9uW3NlY3Rpb25dLnB1c2gob2JqKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbGxlY3Rpb25bc2VjdGlvbl0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q29sbGVjdGlvbiA9IChzZWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uW3NlY3Rpb25dO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRBbGxDb2xsZWN0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHJldHVybiB7YWRkLCBnZXRDb2xsZWN0aW9uLCBnZXRBbGxDb2xsZWN0aW9ucywgcmVtb3ZlfTtcbn0pKCk7XG5cblxuXG5leHBvcnQge3RvRG9MaXN0Q29sbGVjdGlvbn07XG5cbiIsImltcG9ydCBhZGROZXdUYXNrLCB7b3BlbkZvcm19IGZyb20gXCIuLi9tb2R1bGVzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdG9Eb0xpc3RDb2xsZWN0aW9uIH0gZnJvbSBcIi4uL21vZHVsZXMvdG9kby1vYmpzXCI7XG5pbXBvcnQgeyByZW5kZXJKdXN0QWRkZWQgfSBmcm9tIFwiLi4vbW9kdWxlcy9yZW5kZXJQYWdlXCI7XG5cbmNvbnN0IGNyZWF0ZUhlcm9Db250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG4gICAgXG5cbiAgICBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyb0NvbnRhaW5lci5jbGFzc05hbWUgPSAnaGVybyc7XG4gICAgaGVyb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmJveC1jb250YWluZXInKVxuICAgIGhlcm9Db250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gY2xhc3M9XCJuZXctdGFzayBpbmJveC1hZGRcIiBpZD0naW5ib3gnPis8L2J1dHRvbj5cbiAgICBgO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvQ29udGFpbmVyKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgb3BlbkZvcm0oZS50YXJnZXQuaWQpO1xuICAgIH0pO1xufTtcblxuY29uc3QgY3JlYXRlVG9kYXlDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG4gICAgXG5cbiAgICBjb25zdCB0b2RheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdoZXJvJztcbiAgICB0b2RheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RheS1jb250YWluZXInKVxuICAgIHRvZGF5Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwibmV3LXRhc2sgdG9kYXktYWRkXCIgaWQ9J3RvZGF5Jz4rPC9idXR0b24+XG4gICAgYDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlDb250YWluZXIpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBvcGVuRm9ybShlLnRhcmdldC5pZCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVXZWVrQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3Qgd2Vla0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWtDb250YWluZXIuY2xhc3NOYW1lID0gJ2hlcm8nO1xuICAgIHdlZWtDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2Vlay1jb250YWluZXInKVxuICAgIHdlZWtDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gY2xhc3M9XCJuZXctdGFzayB3ZWVrLWFkZFwiIGlkPSd3ZWVrJz4rPC9idXR0b24+XG4gICAgYDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2Vla0NvbnRhaW5lcik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIG9wZW5Gb3JtKGUudGFyZ2V0LmlkKTsgICAgICBcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlSGVyb0NvbnRhaW5lciwgY3JlYXRlVG9kYXlDb250YWluZXIsIGNyZWF0ZVdlZWtDb250YWluZXJ9OyIsImltcG9ydCB7IGRlbGV0ZUZvcm0gfSBmcm9tIFwiLi4vbW9kdWxlcy9mdW5jdGlvbnNcIjtcblxuIGZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ292ZXJsYXknO1xuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgZGl2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNsb3NlT3ZlcmxheSgpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGNsb3NlT3ZlcmxheSgpIHtcbiAgICAvLyBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykpIHJldHVybjtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICBcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXktYWN0aXZlJyk7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpKSBkZWxldGVGb3JtKCk7ICAgXG4gICAgXG59O1xuXG5leHBvcnQge2NyZWF0ZU92ZXJsYXksIGNsb3NlT3ZlcmxheX07XG5cblxuXG4gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlUGFnZSBmcm9tICcuL21vZHVsZXMvY3JlYXRlLXBhZ2UnO1xuaW1wb3J0IHJlbmRlclRhc2ssIHtyZW5kZXJUYXNrc30gZnJvbSAnLi9tb2R1bGVzL3JlbmRlclBhZ2UnO1xuaW1wb3J0IHtjcmVhdGVIZXJvQ29udGFpbmVyLCBjcmVhdGVUb2RheUNvbnRhaW5lciwgY3JlYXRlV2Vla0NvbnRhaW5lcn0gZnJvbSAnLi9wYWdlcy9jb250YWluZXItc3dhcCc7XG5pbXBvcnQge3RvRG9MaXN0Q29sbGVjdGlvbiB9IGZyb20gJy4vbW9kdWxlcy90b2RvLW9ianMnO1xuaW1wb3J0IHsgY2xlYXJDb250YWluZXIsIGNoYW5nZUhlYWRlclRpdGxlLCBtYXJrQWN0aXZlU2VjdGlvbiwgcmVtb3ZlQWN0aXZlU2VjdGlvbnMgfSBmcm9tICcuL21vZHVsZXMvZnVuY3Rpb25zJztcbmltcG9ydCAnLi9zdHlsZXMvcGFnZS5jc3MnO1xuXG5jcmVhdGVQYWdlKCk7XG5jcmVhdGVIZXJvQ29udGFpbmVyKCk7XG5cbmxldCBpbmJveFNpZGVyYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LW1haW4nKTtcblxuaW5ib3hTaWRlcmJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcmVtb3ZlQWN0aXZlU2VjdGlvbnMoKTtcbiAgICBtYXJrQWN0aXZlU2VjdGlvbihlLnRhcmdldCk7XG4gICAgY2hhbmdlSGVhZGVyVGl0bGUoJ0luYm94Jyk7XG4gICAgY2xlYXJDb250YWluZXIoKTtcbiAgICBjcmVhdGVIZXJvQ29udGFpbmVyKCk7XG4gICAgcmVuZGVyVGFza3ModG9Eb0xpc3RDb2xsZWN0aW9uLmdldENvbGxlY3Rpb24oJ2luYm94JyksICdpbmJveCcpO1xufSlcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktbWFpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZW1vdmVBY3RpdmVTZWN0aW9ucygpO1xuICAgIG1hcmtBY3RpdmVTZWN0aW9uKGUudGFyZ2V0KTtcbiAgICBjaGFuZ2VIZWFkZXJUaXRsZSgnVG9kYXknKTtcbiAgICBjbGVhckNvbnRhaW5lcigpO1xuICAgIGNyZWF0ZVRvZGF5Q29udGFpbmVyKCk7XG4gICAgcmVuZGVyVGFza3ModG9Eb0xpc3RDb2xsZWN0aW9uLmdldENvbGxlY3Rpb24oJ3RvZGF5JyksICd0b2RheScpO1xufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWstbWFpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZW1vdmVBY3RpdmVTZWN0aW9ucygpO1xuICAgIG1hcmtBY3RpdmVTZWN0aW9uKGUudGFyZ2V0KTtcbiAgICBjaGFuZ2VIZWFkZXJUaXRsZSgnV2VlaycpO1xuICAgIGNsZWFyQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlV2Vla0NvbnRhaW5lcigpO1xuICAgIHJlbmRlclRhc2tzKHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKCd3ZWVrJyksICd3ZWVrJyk7XG59KVxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==