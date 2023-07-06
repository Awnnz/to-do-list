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




`, "",{"version":3,"sources":["webpack://./src/styles/page.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA,oBAAoB;;AAEpB;IACI,aAAa;IACb,kCAAkC;IAClC,4BAA4B;IAC5B,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;IACf,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;IAClB,6BAA6B;IAC7B,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,6BAA6B;IAC7B,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA,WAAW;;AAEX;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;AAC3B;;;AAGA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;;AAGA,mBAAmB;;AAEnB;IACI,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,SAAS;AACb;;AAEA;IACI;;MAEE,2BAA2B;MAC3B,UAAU;IACZ;;IAEA;;MAEE,wBAAwB;MACxB,UAAU;;IAEZ;EACF;;EAEA;IACE;;MAEE,2BAA2B;MAC3B,UAAU;IACZ;;IAEA;;MAEE,wBAAwB;MACxB,UAAU;;IAEZ;EACF;;EAEA;IACE;;MAEE,2BAA2B;MAC3B,UAAU;IACZ;;IAEA;;MAEE,wBAAwB;MACxB,UAAU;;IAEZ;EACF;;EAEA;IACE,aAAa;AACjB;;AAEA,UAAU;;AAEV;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI;MACE,mBAAmB;MACnB,WAAW;MACX,gBAAgB;MAChB,UAAU;MACV,6BAA6B;IAC/B;IACA;MACE,mBAAmB;MACnB,UAAU;IACZ;IACA;MACE,QAAQ;MACR,YAAY;MACZ,mBAAmB;MACnB,UAAU;MACV,UAAU;MACV,SAAS;IACX;EACF;;AAEF;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;AAEA;;AAEA;IACI,WAAW;AACf;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;;EAEnB,2BAA2B;EAC3B,2BAA2B;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,sBAAsB;IACtB,eAAe;IACf,qFAAqF;EACvF;;EAEA;IACE,yBAAyB;IACzB,qBAAqB;IACrB,yBAAyB;EAC3B;;AAEF;IACI,WAAW;IACX,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX;kBACc;IACd,eAAe;IACf,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,kCAAkC;;IAElC,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,6CAA6C;IAC7C,4BAA4B;AAChC;;;;EAIE,YAAY;;EAEZ;IACE,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;EACX;;EAEA;IACE,2BAA2B;IAC3B,iBAAiB;IACjB,yBAAyB;IACzB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,aAAa;;QAEb,gBAAgB;MAClB;;MAEA;QACE,aAAa;;QAEb,gBAAgB;MAClB;;MAEA;QACE,aAAa;QACb,gBAAgB;MAClB;;IAEF;QACI,WAAW;QACX,YAAY;QACZ,oBAAoB;QACpB,uBAAuB;QACvB,mBAAmB;QACnB,oCAAoC;QACpC,yBAAyB;QACzB,kBAAkB;QAClB,iBAAiB;QACjB,gBAAgB;QAChB,cAAc;QACd,uBAAuB;QACvB;YACI,aAAa;UACf;IACN;;AAEJ,YAAY;;AAEZ;IACI,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,oCAAoC;IACpC,YAAY;IACZ,WAAW;IACX,0BAA0B;IAC1B,UAAU;AACd;;AAEA;IACI,cAAc;AAClB;;AAEA,SAAS;AACT;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,UAAU;IACV,kBAAkB;IAClB,8BAA8B;IAC9B,QAAQ;IACR,UAAU;IACV,WAAW;IACX;AACJ;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,aAAa;EACf;;EAEA;IACE,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,OAAO;IACP,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;IACT,mCAAmC;IACnC,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;;AAEA;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,6BAA6B;IAC7B,gBAAgB;IAChB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,6BAA6B;AACjC;;AAEA,sBAAsB,+BAA+B,EAAE;;AAEvD;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,6BAA6B;AAC/B","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    overflow: hidden;\n    background-color: azure;\n}\n\n/* Main Containers */\n\n.main-container {\n    display: grid;\n    grid-template-columns: 1fr 2fr 2fr;\n    grid-template-rows: 90px 1fr;\n    /* border: 1px blue solid; */\n    height: 100vh;\n}\n\n.header {\n    background-color: aquamarine;\n    display: flex;\n    /* border: 1px red solid; */\n    align-items: center;\n    font-size: 2rem;\n    grid-column-start: 1;\n    grid-column-end: 4;\n}\n\n.sidebar {\n    background-color: #5efdfd;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    text-align: center;\n    /* border: 1px black solid; */\n    font-size: 1.5rem;\n    padding-top: 20px;\n}\n\n.hero {\n    background-color: azure;\n    position: relative;\n    /* border: 1px green solid; */\n    grid-column-start: 2;\n    grid-column-end: 4;\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin: 10px;\n}\n\n.header, .hero, .sidebar {\n    color: rgb(62, 72, 74);\n}\n\n/* Header */\n\n.current-section, .login {\n    width: 33%;\n    text-align: center;\n}\n\n.title-change {\n    animation-name: slideIn;\n    animation-duration: .6s;\n}\n\n\n.logo-image {\n    position: relative;\n    left: 40px;\n    height: 80%;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    width: 33%;\n    z-index: 5;\n    height: 100%;\n    text-align: center;\n}\n\n\n/* Hero Container */\n\n.hero {\n    animation-name: slideIn;\n    animation-duration: .65s;\n}\n\n.new-task {\n    position: absolute;\n    font-size: 3rem;\n    width: 60px;\n    background-color: lime;\n    border-radius: 30px;\n    top: 90%;\n    left: 90%;\n}\n\n@keyframes slideUp {\n    0%,\n    50% {\n      transform: translateY(100%);\n      opacity: 1;\n    }\n     \n    60%,\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    \n    }\n  }\n\n  @keyframes slideIn {\n    0%,\n    100% {\n      transform: translateX(100%);\n      opacity: 1;\n    }\n     \n    60%,\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    \n    }\n  }\n\n  @keyframes slideDown {\n    0%,\n    100% {\n      transform: translateY(-50%);\n      opacity: 0;\n    }\n     \n    60%,\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    \n    }\n  }\n\n  .hide-container {\n    display: none;\n}\n\n/* Cards */\n\n.card {\n    background-color: azure;\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: column;\n    animation-name: slideUp;\n    animation-duration: .3s;\n}\n\n.zoom {\n    animation: zoom forwards 0.7s ease-out 1;\n}\n\n@keyframes zoom { \n    0% {\n      transform: scale(1);\n      width: 100%;\n      min-width: 250px;\n      opacity: 1;\n      transform-origin: 125px 125px;\n    }\n    50% {\n      transform: scale(0);\n      opacity: 0;\n    }\n    100% {\n      width: 0;\n      min-width: 0;\n      transform: scale(0);\n      opacity: 0;\n      padding: 0;\n      margin: 0;\n    }\n  }\n\n.card-main {\n    background-color: aqua;\n    display: flex;\n    align-items: center;\n    height: 3rem;\n    padding: 0 2rem;\n    border-radius: 1rem 1rem 1rem 1rem;\n}\n\n.title-value {   \n    margin-left: 3rem;\n    margin-right: auto;\n}\n\n.due-value {\n    margin-right: 3rem;\n}\n\n.edit-button {\n    margin-right: 1.5rem;\n}\n\n.delete-button {\n\n}\n\n.delete-button, .edit-button {\n    height: 50%;\n}\n\n.details-button {\n  position: relative;\n  margin-right: 2.5rem;\n  padding: .5rem 1rem;\n  border: 1px solid #0d1817;\n  border-radius: 3px;\n  font-size: 1rem;\n  color: #181c1b;\n  text-transform: uppercase;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all .3s;\n\n  background-position: center;\n  transition: background 0.8s;\n}\n\n.details-button:hover {\n    position: relative;\n    background-color: #93c3de;\n    color: rgb(25, 23, 23);\n    cursor: pointer;\n    background: #47a7f5 radial-gradient(circle, transparent 1%, #81aed2 1%) center/15000%;\n  }\n\n  .details-button:active {\n    background-color: #c6d1d9;\n    background-size: 100%;\n    transition: background 0s;\n  }\n\n.checked:before {\n    content: \"\";\n    position: absolute;\n    border-color: #009933;\n    border-style: solid;\n    border-width: 0 0.3em 0.25em 0;\n    height: 1em;\n    /* top: 1.3em;\n    left: 0.6em; */\n    margin-top: 0em;\n    transform: rotate(45deg);\n    width: 0.5em;\n}\n\n.card-details {\n    background-color: lightblue;\n    padding: 1rem 2rem;\n    border-radius: 1rem 1rem 1rem 1rem;\n    \n    animation-name: slideDown;\n    animation-duration: .4s;\n}\n\n.card-details-hide {\n    display: none;\n    transform: translateY(-200%);\n}\n\n.card:hover {\n    transform: scale(1.004);\n    transform-origin: 50% 50%;\n    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .2);\n    transition: all .2s ease-out;\n}\n\n\n\n  /* Sidebar */\n\n  .section {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n  }\n\n  .section:hover {\n    background-color: lightgray;\n    font-size: 1.8rem;\n    transition: .1s font-size;\n    }\n\n    .section:active {\n        color: white;\n    }\n\n    .section:hover::before {\n        content: \"//\";\n        \n        font-weight: 700;\n      }\n    \n      .section:hover::after {\n        content: \"//\";\n        \n        font-weight: 700;\n      }\n    \n      .selected::before, .selected::after {\n        content: \"//\";\n        font-weight: 700;\n      }\n\n    .task-count {\n        width: 2rem;\n        height: 2rem;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        border: 2px rgb(134, 206, 203) solid;\n        background-color: #8a98ef;\n        border-radius: 50%;\n        font-size: 1.3rem;\n        font-weight: 700;\n        color: #f7f7f7;\n        font-family: sans-serif;\n        &:empty {\n            display: none;\n          }\n    }\n\n/* Overlay */\n\n.overlay {\n    display: flex;\n    display: none;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.6);\n    height: 100%;\n    width: 100%;\n    backdrop-filter: blur(3px);\n    z-index: 1;\n}\n\n.overlay-active {\n    display: block;\n}\n\n/* Form */\n.form-container {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 12fr;\n    z-index: 2;\n    position: absolute;\n    background: rgb(127, 191, 191);\n    top: 23%;\n    right: 18%;\n    height: 45%;\n    width: 90%\n}\n\n.description {\n    resize: none;\n    overflow: auto;\n    height: 200px;\n  }\n\n  textarea:focus, input:focus{\n    outline: none;\n}\n\n.form {\n    padding: 1rem 1.5rem;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    flex: 1;\n    gap: 5px;\n}\n\n.form-sidebar {\n    padding-top: 15px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 15px;\n    background-color: rgb(97, 158, 158);\n    color: lightcyan;\n    font-size: 1.8rem;\n}\n\n.sidebar-section {\n    \n}\n\n.sidebar-selected::before {\n    content: '// ';\n}\n\n.sidebar-selected::after {\n    content: ' //';\n}\n\n.form-sidebar > *:hover {\n    text-shadow: 0 0 2px whitesmoke;\n}\n\n.form-header {\n    display: flex;\n    justify-content: space-between;\n    background: rgb(78, 209, 209);\n    grid-column: 1/3;\n    grid-row: 1/2;\n    padding: 0 15px;\n}\n\n.form-logo {\n    width: 15%;\n    height: 100%;\n}\n\n.close-button {\n    color: white;\n    font-size: 1.9rem;\n    cursor: pointer;\n    font-family: lato, sans-serif;\n}\n\n.close-button:hover { text-shadow: 0 0 5px whitesmoke; }\n\n.title-input {\n    height: 10%;\n    font-size: 2rem;\n}\n\n.description {\n    height: 60%;\n    font-size: 1.3rem;\n}\n\n.date-div {\n    display: flex;\n    align-items: center;\n    height: 10%;\n    gap: 10px;\n    color: lightcyan;\n    font-weight: bold;\n}\n\n.prio-sub-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 10%;\n}\n\n.prio-sub-div > * {\n    height: 80%;\n    width: 20%;\n}\n\n.due-date-input {\n  padding: .5rem 1rem;\n  border: 1px solid lightcyan;\n  border-radius: 5px;\n  color: lightcyan;\n  background-color: transparent;\n  font-size: 1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: lato, sans-serif;\n}\n\n\n\n\n"],"sourceRoot":""}]);
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

const openEditForm = (section) => {
    let overlay = document.querySelector('.overlay');
    overlay.classList.toggle('overlay-active');

    
    editForm(section)
};

const editForm = (section) => {
    const formContainer = document.createElement("div");
    formContainer.className = 'form-container'

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
    // title.textContent = obj[title];
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
        
        const objData = addNewTask(extractFormData([title, description, due, priority]), section);
        createCard(objData, section);
        UpdateTaskCountDisplay(section, checkmarkCounterDisplay(section));

        (0,_pages_overlay_js__WEBPACK_IMPORTED_MODULE_4__.closeOverlay)();
    });

    const hero = document.querySelector('.hero');
    hero.append(formContainer);
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
    editButton.addEventListener('click', function () {
        
        openEditForm(section);
        const title = this.parentElement.querySelector('.title-value').textContent;
        const desc = this.parentElement.nextSibling.querySelector('.details-value').innerHTML;
        const due = this.parentElement.querySelector('.due-value').textContent;
        const prio = this.parentElement.classList[1];
        const checked = this.parentElement.classList.contains('checked');

        const cardObj = {
            title,
            desc,
            due,
            prio,
            checked
        }

        let test = _todo_objs_js__WEBPACK_IMPORTED_MODULE_0__.toDoListCollection.getCollection(section)[0];
        console.log(cardObj);
        console.log(test);
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsT0FBTyxzRkFBc0YsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsU0FBUyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxX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QUM5QztBQUN5RDtBQUN0Rjs7QUFFM0IsZ0VBQVU7QUFDViwwRUFBbUI7O0FBRW5COztBQUVBO0FBQ0EsSUFBSSx3RUFBb0I7QUFDeEIsSUFBSSxxRUFBaUI7QUFDckIsSUFBSSxxRUFBaUI7QUFDckIsSUFBSSxrRUFBYztBQUNsQixJQUFJLDBFQUFtQjtBQUN2QixJQUFJLGdFQUFXLENBQUMsa0VBQWtCO0FBQ2xDLENBQUM7OztBQUdEO0FBQ0EsSUFBSSx5RUFBb0I7QUFDeEIsSUFBSSxxRUFBaUI7QUFDckIsSUFBSSxxRUFBaUI7QUFDckIsSUFBSSxrRUFBYztBQUNsQixJQUFJLDJFQUFvQjtBQUN4QixJQUFJLGdFQUFXLENBQUMsa0VBQWtCO0FBQ2xDLENBQUM7O0FBRUQ7QUFDQSxJQUFJLHlFQUFvQjtBQUN4QixJQUFJLHFFQUFpQjtBQUNyQixJQUFJLHFFQUFpQjtBQUNyQixJQUFJLGtFQUFjO0FBQ2xCLElBQUksMEVBQW1CO0FBQ3ZCLElBQUksZ0VBQVcsQ0FBQyxrRUFBa0I7QUFDbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3BhZ2UuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9wYWdlLmNzcz81ODY1Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZS1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8tb2Jqcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BhZ2VzL2NvbnRhaW5lci1zd2FwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcGFnZXMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xufVxuXG4vKiBNYWluIENvbnRhaW5lcnMgKi9cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAyZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDFmcjtcbiAgICAvKiBib3JkZXI6IDFweCBibHVlIHNvbGlkOyAqL1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xufVxuXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlZmRmZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBib3JkZXI6IDFweCBibGFjayBzb2xpZDsgKi9cbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmhlcm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBib3JkZXI6IDFweCBncmVlbiBzb2xpZDsgKi9cbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5oZWFkZXIsIC5oZXJvLCAuc2lkZWJhciB7XG4gICAgY29sb3I6IHJnYig2MiwgNzIsIDc0KTtcbn1cblxuLyogSGVhZGVyICovXG5cbi5jdXJyZW50LXNlY3Rpb24sIC5sb2dpbiB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZS1jaGFuZ2Uge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjZzO1xufVxuXG5cbi5sb2dvLWltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNDBweDtcbiAgICBoZWlnaHQ6IDgwJTtcbn1cblxuLmxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMzMlO1xuICAgIHotaW5kZXg6IDU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4vKiBIZXJvIENvbnRhaW5lciAqL1xuXG4uaGVybyB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNjVzO1xufVxuXG4ubmV3LXRhc2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHRvcDogOTAlO1xuICAgIGxlZnQ6IDkwJTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgICAwJSxcbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgIFxuICAgIDYwJSxcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgXG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgICBcbiAgICA2MCUsXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIFxuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgICBcbiAgICA2MCUsXG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIFxuICAgIH1cbiAgfVxuXG4gIC5oaWRlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogQ2FyZHMgKi9cblxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZVVwO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xufVxuXG4uem9vbSB7XG4gICAgYW5pbWF0aW9uOiB6b29tIGZvcndhcmRzIDAuN3MgZWFzZS1vdXQgMTtcbn1cblxuQGtleWZyYW1lcyB6b29tIHsgXG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMjVweCAxMjVweDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4uY2FyZC1tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgcGFkZGluZzogMCAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAxcmVtIDFyZW07XG59XG5cbi50aXRsZS12YWx1ZSB7ICAgXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZHVlLXZhbHVlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG59XG5cbi5lZGl0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcblxufVxuXG4uZGVsZXRlLWJ1dHRvbiwgLmVkaXQtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuLmRldGFpbHMtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDIuNXJlbTtcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkMTgxNztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMTgxYzFiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XG5cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuOHM7XG59XG5cbi5kZXRhaWxzLWJ1dHRvbjpob3ZlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2MzZGU7XG4gICAgY29sb3I6IHJnYigyNSwgMjMsIDIzKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzQ3YTdmNSByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCAxJSwgIzgxYWVkMiAxJSkgY2VudGVyLzE1MDAwJTtcbiAgfVxuXG4gIC5kZXRhaWxzLWJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNmQxZDk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMHM7XG4gIH1cblxuLmNoZWNrZWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItY29sb3I6ICMwMDk5MzM7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDAgMC4zZW0gMC4yNWVtIDA7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgLyogdG9wOiAxLjNlbTtcbiAgICBsZWZ0OiAwLjZlbTsgKi9cbiAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiAwLjVlbTtcbn1cblxuLmNhcmQtZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xuICAgIFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZURvd247XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNHM7XG59XG5cbi5jYXJkLWRldGFpbHMtaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xufVxuXG4uY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbn1cblxuXG5cbiAgLyogU2lkZWJhciAqL1xuXG4gIC5zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICB9XG5cbiAgLnNlY3Rpb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB0cmFuc2l0aW9uOiAuMXMgZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zZWN0aW9uOmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbjpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCIvL1wiO1xuICAgICAgICBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5zZWN0aW9uOmhvdmVyOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiLy9cIjtcbiAgICAgICAgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgXG4gICAgICAuc2VsZWN0ZWQ6OmJlZm9yZSwgLnNlbGVjdGVkOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiLy9cIjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cblxuICAgIC50YXNrLWNvdW50IHtcbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDJweCByZ2IoMTM0LCAyMDYsIDIwMykgc29saWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4YTk4ZWY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjZjdmN2Y3O1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgJjplbXB0eSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICB9XG5cbi8qIE92ZXJsYXkgKi9cblxuLm92ZXJsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ub3ZlcmxheS1hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGb3JtICovXG4uZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEyZnI7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogcmdiKDEyNywgMTkxLCAxOTEpO1xuICAgIHRvcDogMjMlO1xuICAgIHJpZ2h0OiAxOCU7XG4gICAgaGVpZ2h0OiA0NSU7XG4gICAgd2lkdGg6IDkwJVxufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgdGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBnYXA6IDVweDtcbn1cblxuLmZvcm0tc2lkZWJhciB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMTU4LCAxNTgpO1xuICAgIGNvbG9yOiBsaWdodGN5YW47XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5zaWRlYmFyLXNlY3Rpb24ge1xuICAgIFxufVxuXG4uc2lkZWJhci1zZWxlY3RlZDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnLy8gJztcbn1cblxuLnNpZGViYXItc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnIC8vJztcbn1cblxuLmZvcm0tc2lkZWJhciA+ICo6aG92ZXIge1xuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4IHdoaXRlc21va2U7XG59XG5cbi5mb3JtLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZDogcmdiKDc4LCAyMDksIDIwOSk7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLmZvcm0tbG9nbyB7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuOXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGxhdG8sIHNhbnMtc2VyaWY7XG59XG5cbi5jbG9zZS1idXR0b246aG92ZXIgeyB0ZXh0LXNoYWRvdzogMCAwIDVweCB3aGl0ZXNtb2tlOyB9XG5cbi50aXRsZS1pbnB1dCB7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGhlaWdodDogNjAlO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uZGF0ZS1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBnYXA6IDEwcHg7XG4gICAgY29sb3I6IGxpZ2h0Y3lhbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByaW8tc3ViLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwJTtcbn1cblxuLnByaW8tc3ViLWRpdiA+ICoge1xuICAgIGhlaWdodDogODAlO1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5kdWUtZGF0ZS1pbnB1dCB7XG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y3lhbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogbGlnaHRjeWFuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogbGF0bywgc2Fucy1zZXJpZjtcbn1cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3BhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFHQSxtQkFBbUI7O0FBRW5CO0lBQ0ksdUJBQXVC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QUFFdkQ7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxufVxcblxcbi8qIE1haW4gQ29udGFpbmVycyAqL1xcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCAxZnI7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsdWUgc29saWQ7ICovXFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWVmZGZkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiBib3JkZXI6IDFweCBncmVlbiBzb2xpZDsgKi9cXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLCAuaGVybywgLnNpZGViYXIge1xcbiAgICBjb2xvcjogcmdiKDYyLCA3MiwgNzQpO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG4uY3VycmVudC1zZWN0aW9uLCAubG9naW4ge1xcbiAgICB3aWR0aDogMzMlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS1jaGFuZ2Uge1xcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNnM7XFxufVxcblxcblxcbi5sb2dvLWltYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA0MHB4O1xcbiAgICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMzMlO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogSGVybyBDb250YWluZXIgKi9cXG5cXG4uaGVybyB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC42NXM7XFxufVxcblxcbi5uZXctdGFzayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgdG9wOiA5MCU7XFxuICAgIGxlZnQ6IDkwJTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZVVwIHtcXG4gICAgMCUsXFxuICAgIDUwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgIFxcbiAgICA2MCUsXFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG4gICAgfVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcXG4gICAgMCUsXFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgICBcXG4gICAgNjAlLFxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgXFxuICAgIH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgc2xpZGVEb3duIHtcXG4gICAgMCUsXFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgICBcXG4gICAgNjAlLFxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgXFxuICAgIH1cXG4gIH1cXG5cXG4gIC5oaWRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIENhcmRzICovXFxuXFxuLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlVXA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xcbn1cXG5cXG4uem9vbSB7XFxuICAgIGFuaW1hdGlvbjogem9vbSBmb3J3YXJkcyAwLjdzIGVhc2Utb3V0IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbSB7IFxcbiAgICAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTI1cHggMTI1cHg7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgbWluLXdpZHRoOiAwO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgfVxcblxcbi5jYXJkLW1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuLnRpdGxlLXZhbHVlIHsgICBcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmR1ZS12YWx1ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXG59XFxuXFxuLmVkaXQtYnV0dG9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5kZWxldGUtYnV0dG9uIHtcXG5cXG59XFxuXFxuLmRlbGV0ZS1idXR0b24sIC5lZGl0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNTAlO1xcbn1cXG5cXG4uZGV0YWlscy1idXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkMTgxNztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjMTgxYzFiO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcblxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjhzO1xcbn1cXG5cXG4uZGV0YWlscy1idXR0b246aG92ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2MzZGU7XFxuICAgIGNvbG9yOiByZ2IoMjUsIDIzLCAyMyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogIzQ3YTdmNSByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCAxJSwgIzgxYWVkMiAxJSkgY2VudGVyLzE1MDAwJTtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzLWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZkMWQ5O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMHM7XFxuICB9XFxuXFxuLmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA5OTMzO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMC4zZW0gMC4yNWVtIDA7XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICAvKiB0b3A6IDEuM2VtO1xcbiAgICBsZWZ0OiAwLjZlbTsgKi9cXG4gICAgbWFyZ2luLXRvcDogMGVtO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIHdpZHRoOiAwLjVlbTtcXG59XFxuXFxuLmNhcmQtZGV0YWlscyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbiAgICBcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlRG93bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNHM7XFxufVxcblxcbi5jYXJkLWRldGFpbHMtaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XFxufVxcblxcbi5jYXJkOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwNCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXG59XFxuXFxuXFxuXFxuICAvKiBTaWRlYmFyICovXFxuXFxuICAuc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgfVxcblxcbiAgLnNlY3Rpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAuMXMgZm9udC1zaXplO1xcbiAgICB9XFxuXFxuICAgIC5zZWN0aW9uOmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgLnNlY3Rpb246aG92ZXI6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiLy9cXFwiO1xcbiAgICAgICAgXFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIH1cXG4gICAgXFxuICAgICAgLnNlY3Rpb246aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCIvL1xcXCI7XFxuICAgICAgICBcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgfVxcbiAgICBcXG4gICAgICAuc2VsZWN0ZWQ6OmJlZm9yZSwgLnNlbGVjdGVkOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiLy9cXFwiO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICB9XFxuXFxuICAgIC50YXNrLWNvdW50IHtcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6IDJweCByZ2IoMTM0LCAyMDYsIDIwMykgc29saWQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE5OGVmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgY29sb3I6ICNmN2Y3Zjc7XFxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgICAgICY6ZW1wdHkge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgIH1cXG4gICAgfVxcblxcbi8qIE92ZXJsYXkgKi9cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLm92ZXJsYXktYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEZvcm0gKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEyZnI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDEyNywgMTkxLCAxOTEpO1xcbiAgICB0b3A6IDIzJTtcXG4gICAgcmlnaHQ6IDE4JTtcXG4gICAgaGVpZ2h0OiA0NSU7XFxuICAgIHdpZHRoOiA5MCVcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gIH1cXG5cXG4gIHRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uZm9ybS1zaWRlYmFyIHtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCAxNTgsIDE1OCk7XFxuICAgIGNvbG9yOiBsaWdodGN5YW47XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uc2lkZWJhci1zZWN0aW9uIHtcXG4gICAgXFxufVxcblxcbi5zaWRlYmFyLXNlbGVjdGVkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnLy8gJztcXG59XFxuXFxuLnNpZGViYXItc2VsZWN0ZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAvLyc7XFxufVxcblxcbi5mb3JtLXNpZGViYXIgPiAqOmhvdmVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggd2hpdGVzbW9rZTtcXG59XFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzgsIDIwOSwgMjA5KTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG5cXG4uZm9ybS1sb2dvIHtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuOXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogbGF0bywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7IHRleHQtc2hhZG93OiAwIDAgNXB4IHdoaXRlc21va2U7IH1cXG5cXG4udGl0bGUtaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5kYXRlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGNvbG9yOiBsaWdodGN5YW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJpby1zdWItZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG59XFxuXFxuLnByaW8tc3ViLWRpdiA+ICoge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLmR1ZS1kYXRlLWlucHV0IHtcXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogbGlnaHRjeWFuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZU92ZXJsYXkgfSBmcm9tIFwiLi4vcGFnZXMvb3ZlcmxheVwiO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi8uLi9hc3NldHMvbG9nbzIucG5nJztcbmltcG9ydCB7IHRvRG9MaXN0Q29sbGVjdGlvbiB9IGZyb20gXCIuL3RvZG8tb2Jqc1wiO1xuXG5jb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJztcbiAgICAgICAgXG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9J2xvZ28taW1hZ2UnIHNyYz0ke2xvZ299PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtc2VjdGlvblwiPkluYm94PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpblwiPkxvZ2luPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b0RvTGlzdENvbGxlY3Rpb24uZ2V0Q29sbGVjdGlvbignaW5ib3gnKVswXS5jaGVja2VkKTtcbiAgICAgICAgfSlcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY3JlYXRlU2lkZUJhciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZUJhci5jbGFzc05hbWUgPSAnc2lkZWJhcic7XG4gICAgICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtbWFpbiBzZWN0aW9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0naW5ib3gtdGV4dCc+SW5ib3g8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0naW5ib3gtY291bnQgdGFzay1jb3VudCc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZGF5LW1haW4gc2VjdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3RvZGF5LXRleHQnPlRvZGF5PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3RvZGF5LWNvdW50IHRhc2stY291bnQnPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrLW1haW4gc2VjdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3dlZWstdGV4dCc+V2Vlazwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSd3ZWVrLWNvdW50IHRhc2stY291bnQnPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgICB9KSgpOyAgICBcblxuICAgIGNyZWF0ZU92ZXJsYXkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2U7IiwiaW1wb3J0IHt0b0RvTGlzdENvbGxlY3Rpb259IGZyb20gJy4vdG9kby1vYmpzLmpzJztcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnLi8uLi9hc3NldHMvbG9nby5wbmcnO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4vLi4vYXNzZXRzL2RlbGV0ZS5zdmcnO1xuaW1wb3J0IGVkaXRJbWFnZSBmcm9tICcuLy4uL2Fzc2V0cy9lZGl0LnN2Zyc7XG5pbXBvcnQgeyBjbG9zZU92ZXJsYXkgfSBmcm9tICcuLi9wYWdlcy9vdmVybGF5LmpzJztcbmltcG9ydCB7IHJlbmRlckp1c3RBZGRlZCB9IGZyb20gJy4vcmVuZGVyUGFnZS5qcyc7XG5cbmNvbnN0IGFkZE5ld1Rhc2sgPSAob2JqLCBzZWN0aW9uKSA9PiB7XG4gICAgdG9Eb0xpc3RDb2xsZWN0aW9uLmFkZChvYmosIHNlY3Rpb24pO1xuICAgIHJldHVybiBvYmpcbn07XG5cbmNvbnN0IGNsZWFyQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJykucmVtb3ZlKCk7XG59O1xuXG5jb25zdCByZXNldERvbSA9ICgpID0+IHtcbiAgICBsZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgIFxuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiBjYXJkLnJlbW92ZSgpKTtcbn07XG5cbmNvbnN0IG9wZW5Gb3JtID0gKHNlY3Rpb24pID0+IHtcbiAgICAvLyBBY3RpdmF0ZXMgb3ZlcmxheVxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXktYWN0aXZlJyk7XG5cbiAgICBjcmVhdGVGb3JtKHNlY3Rpb24pO1xuICAgIFxufTtcblxuY29uc3Qgb3BlbkVkaXRGb3JtID0gKHNlY3Rpb24pID0+IHtcbiAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5LWFjdGl2ZScpO1xuXG4gICAgXG4gICAgZWRpdEZvcm0oc2VjdGlvbilcbn07XG5cbmNvbnN0IGVkaXRGb3JtID0gKHNlY3Rpb24pID0+IHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRhaW5lcidcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnZm9ybS1oZWFkZXInO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbG9nbycpO1xuICAgIGxvZ28uc3JjID0gbG9nb0ltYWdlO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlT3ZlcmxheSgpO1xuICAgIH0pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAnZm9ybSdcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgMyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcbiAgICAvLyB0aXRsZS50ZXh0Q29udGVudCA9IG9ialt0aXRsZV07XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjXCIpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGV0YWlsczogZS5nIGludGVybmV0LCBwaG9uZSwgcmVudC5cIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZURpdi5jbGFzc05hbWUgPSAnZGF0ZS1kaXYnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gICAgXG4gICAgY29uc3QgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlVGV4dC5jbGFzc05hbWUgPSAnZGF0ZS10ZXh0JztcbiAgICBkdWVEYXRlVGV4dC5pbm5lclRleHQgPSAnRHVlIERhdGU6J1xuICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xuXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZS5jbGFzc05hbWUgPSAnZHVlLWRhdGUtaW5wdXQnO1xuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkdWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZVwiKTtcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZSk7XG5cbiAgICBjb25zdCBwcmlvU3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb1N1YkRpdi5jbGFzc05hbWUgPSAncHJpby1zdWItZGl2JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9TdWJEaXYpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCBwcmlvQ2hvaWNlcyA9IFsnTG93JywgJ01vZGVyYXRlJywgJ0hpZ2gnXTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpbycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb0Nob2ljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9DaG9pY2VzW2ldO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3ByaW9DaG9pY2VzW2ldLnRvTG9jYWxlTG93ZXJDYXNlKCl9YCk7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfTtcbiAgICBwcmlvU3ViRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gICAgcHJpb1N1YkRpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgLy8gRGF0YSBleHRyYWN0ZWQgZnJvbSBmb3JtIGhlcmVcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgc2VjdGlvblNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItc2VsZWN0ZWQnKTtcbiAgICAgICAgaWYgKHNlY3Rpb25TZWxlY3RlZCkge1xuICAgICAgICAgICAgc2VjdGlvblNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItc2VsZWN0ZWQnKS5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgY29uc3Qgb2JqRGF0YSA9IGFkZE5ld1Rhc2soZXh0cmFjdEZvcm1EYXRhKFt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHldKSwgc2VjdGlvblNlbGVjdGVkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVXBkYXRlVGFza0NvdW50RGlzcGxheShzZWN0aW9uU2VsZWN0ZWQsIGNoZWNrbWFya0NvdW50ZXJEaXNwbGF5KHNlY3Rpb25TZWxlY3RlZCkpO1xuXG4gICAgICAgICAgICBjbG9zZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3Qgb2JqRGF0YSA9IGFkZE5ld1Rhc2soZXh0cmFjdEZvcm1EYXRhKFt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHldKSwgc2VjdGlvbik7XG4gICAgICAgIGNyZWF0ZUNhcmQob2JqRGF0YSwgc2VjdGlvbik7XG4gICAgICAgIFVwZGF0ZVRhc2tDb3VudERpc3BsYXkoc2VjdGlvbiwgY2hlY2ttYXJrQ291bnRlckRpc3BsYXkoc2VjdGlvbikpO1xuXG4gICAgICAgIGNsb3NlT3ZlcmxheSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XG4gICAgaGVyby5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKHNlY3Rpb24pIHtcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NOYW1lID0gJ2Zvcm0tY29udGFpbmVyJ1xuXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVCYXIuY2xhc3NOYW1lID0gJ2Zvcm0tc2lkZWJhcic7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlQmFyKTtcblxuICAgIC8vIER5bmFtaWNhbGx5IGNyZWF0ZSBzaWRlYmFyIGRpdnNcbiAgICBjb25zdCBzaWRlQmFyU2VjdGlvbnMgPSBbJ0luYm94JywgJ1RvZGF5JywgJ1dlZWsnXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGVCYXJTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGAke3NpZGVCYXJTZWN0aW9uc1tpXS50b0xvd2VyQ2FzZSgpfS1zaWRlYmFyYDtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItc2VjdGlvbicpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBzaWRlQmFyU2VjdGlvbnNbaV07XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWRlYmFyU2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhclNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNlbGVjdGVkJykpIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXNlbGVjdGVkJyk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdmb3JtLWhlYWRlcic7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnZm9ybS1sb2dvJyk7XG4gICAgbG9nby5zcmMgPSBsb2dvSW1hZ2U7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICd4JztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VPdmVybGF5KCk7XG4gICAgfSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdmb3JtJ1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAzKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY1wiKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRldGFpbHM6IGUuZyBpbnRlcm5ldCwgcGhvbmUsIHJlbnQuXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVEaXYuY2xhc3NOYW1lID0gJ2RhdGUtZGl2JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuICAgIFxuICAgIGNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZVRleHQuY2xhc3NOYW1lID0gJ2RhdGUtdGV4dCc7XG4gICAgZHVlRGF0ZVRleHQuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOidcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVUZXh0KTtcblxuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWUuY2xhc3NOYW1lID0gJ2R1ZS1kYXRlLWlucHV0JztcbiAgICBkdWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBkdWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZHVlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWVcIik7XG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWUpO1xuXG4gICAgY29uc3QgcHJpb1N1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9TdWJEaXYuY2xhc3NOYW1lID0gJ3ByaW8tc3ViLWRpdic7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvU3ViRGl2KTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgcHJpb0Nob2ljZXMgPSBbJ0xvdycsICdNb2RlcmF0ZScsICdIaWdoJ107XG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW8nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9DaG9pY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvQ2hvaWNlc1tpXTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtwcmlvQ2hvaWNlc1tpXS50b0xvY2FsZUxvd2VyQ2FzZSgpfWApO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH07XG4gICAgcHJpb1N1YkRpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICAgIHByaW9TdWJEaXYuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgIC8vIERhdGEgZXh0cmFjdGVkIGZyb20gZm9ybSBoZXJlXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IHNlY3Rpb25TZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXNlbGVjdGVkJyk7XG4gICAgICAgIGlmIChzZWN0aW9uU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlY3Rpb25TZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXNlbGVjdGVkJykuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9iakRhdGEgPSBhZGROZXdUYXNrKGV4dHJhY3RGb3JtRGF0YShbdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5XSksIHNlY3Rpb25TZWxlY3RlZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFVwZGF0ZVRhc2tDb3VudERpc3BsYXkoc2VjdGlvblNlbGVjdGVkLCBjaGVja21hcmtDb3VudGVyRGlzcGxheShzZWN0aW9uU2VsZWN0ZWQpKTtcblxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG9iakRhdGEgPSBhZGROZXdUYXNrKGV4dHJhY3RGb3JtRGF0YShbdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5XSksIHNlY3Rpb24pO1xuICAgICAgICBjcmVhdGVDYXJkKG9iakRhdGEsIHNlY3Rpb24pO1xuICAgICAgICBVcGRhdGVUYXNrQ291bnREaXNwbGF5KHNlY3Rpb24sIGNoZWNrbWFya0NvdW50ZXJEaXNwbGF5KHNlY3Rpb24pKTtcblxuICAgICAgICBjbG9zZU92ZXJsYXkoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpO1xuICAgIGhlcm8uYXBwZW5kKGZvcm1Db250YWluZXIpO1xufTtcblxuZnVuY3Rpb24gZGVsZXRlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgZm9ybS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEZvcm1EYXRhKGZvcm1EYXRhKSB7XG4gICAgXG4gICAgY29uc3QgZm9ybURhdGFPYmogPSB7fTtcbiAgICBmb3JtRGF0YS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaWYgKGlucHV0IClcbiAgICAgICAgZm9ybURhdGFPYmpbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZVxuICAgIH0pO1xuICAgIFxuICAgIGZvcm1EYXRhT2JqLmNoZWNrZWQgPSBmYWxzZTtcbiAgICBcbiAgICByZXR1cm4gZm9ybURhdGFPYmo7XG59O1xuXG5mdW5jdGlvbiBjaGFuZ2VIZWFkZXJUaXRsZShzZWN0aW9uKSB7XG4gICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zZWN0aW9uJyk7XG5cbiAgICBjdXJyZW50U2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCd0aXRsZS1jaGFuZ2UnKTtcbiAgICBcbiAgICBcblxuICAgIGN1cnJlbnRTZWN0aW9uLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbn07XG5cbmZ1bmN0aW9uIFVwZGF0ZVRhc2tDb3VudERpc3BsYXkoc2VjdGlvbiwgY2hlY2ttYXJrQW1vdW50KSB7XG4gICAgbGV0IGNvdW50RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NlY3Rpb259LWNvdW50YCk7XG4gICAgY29uc3QgdGFza0Ftb3VudCA9IHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKHNlY3Rpb24pLmxlbmd0aDtcbiAgICBcbiAgICBpZiAoY2hlY2ttYXJrQW1vdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCh0YXNrQW1vdW50IC0gY2hlY2ttYXJrQW1vdW50KSA8IDEpIGNvdW50RGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgICBlbHNlIGNvdW50RGlzcGxheS5pbm5lckhUTUwgPSB0YXNrQW1vdW50IC0gY2hlY2ttYXJrQW1vdW50O1xuICAgIHJldHVybjsgIFxuICAgIH1cblxuICAgIGlmICh0YXNrQW1vdW50IDwgMSkgY291bnREaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICAgIGVsc2UgY291bnREaXNwbGF5LmlubmVySFRNTCA9IHRhc2tBbW91bnQ7ICBcbn07XG5cbmZ1bmN0aW9uIG1hcmtBY3RpdmVTZWN0aW9uKHNlY3Rpb24pIHtcbiAgICBpZiAoc2VjdGlvbi50YWdOYW1lID09PSAnU1BBTicpIHNlY3Rpb24ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGVsc2Ugc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlU2VjdGlvbnMoKSB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpO1xuICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpXG59O1xuXG5mdW5jdGlvbiBzaG93Q2FyZERldGFpbCgpIHtcbiAgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhT2JqLCBzZWN0aW9uKSB7XG4gICAgY29uc3QgaGVyb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NlY3Rpb259LWNvbnRhaW5lcmApO1xuXG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuY2xhc3NOYW1lID0gJ2NhcmQnO1xuICAgIFxuICAgIFxuICAgIGNhcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtbWFpbicpKSByZXR1cm47XG4gICAgICAgIC8vIGFkZHMvcmVtb3ZlcyBjaGVja21hcmsgb24gY2xpY2tcbiAgICAgICAgY29uc3QgbWFpbkNhcmRDaGVja2VkID0gdGhpcy5jaGlsZHJlblswXS5jbGFzc0xpc3Q7XG4gICAgICAgIGNvbnN0IGNoZWNrTWFya0NoZWNrZXIgPSBkYXRhT2JqLmNoZWNrZWQ7XG4gICAgICAgIGlmIChjaGVja01hcmtDaGVja2VyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWFpbkNhcmRDaGVja2VkLnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgZGF0YU9iai5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1haW5DYXJkQ2hlY2tlZC50b2dnbGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGRhdGFPYmouY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgVXBkYXRlVGFza0NvdW50RGlzcGxheShzZWN0aW9uLCBjaGVja21hcmtDb3VudGVyRGlzcGxheShzZWN0aW9uKSlcbiAgICAgICAgXG4gICAgfSlcblxuICAgIGNvbnN0IGNhcmRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZE1haW4uY2xhc3NMaXN0LmFkZCgnY2FyZC1tYWluJyk7XG5cbiAgICBjb25zdCBjYXJkRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGV0YWlscycpO1xuICAgIGNhcmREZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGV0YWlscy1oaWRlJyk7XG5cbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gZGF0YU9iaikge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ3RpdGxlJyB8fCBwcm9wID09PSAnZHVlJykge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHtwcm9wfS12YWx1ZWApO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGRhdGFPYmpbcHJvcF07XG4gICAgICAgICAgICBjYXJkTWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdkZXNjJykge1xuICAgICAgICAgICAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLXZhbHVlJyk7XG4gICAgICAgICAgICBkZXRhaWxzRGl2LmlubmVySFRNTCA9IGRhdGFPYmpbcHJvcF07XG4gICAgICAgICAgICBjYXJkRGV0YWlscy5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdwcmlvJykge1xuICAgICAgICAgICAgY2FyZE1haW4uY2xhc3NMaXN0LmFkZChgJHtkYXRhT2JqW3Byb3BdfWApO1xuICAgICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgaWYgKGRhdGFPYmouY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjYXJkTWFpbi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzQnV0dG9uLmNsYXNzTmFtZSA9ICdkZXRhaWxzLWJ1dHRvbic7XG4gICAgZGV0YWlsc0J1dHRvbi50ZXh0Q29udGVudCA9ICdERVRBSUxTJztcblxuICAgIGRldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1kZXRhaWxzJykuY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZC1kZXRhaWxzLWhpZGUnKTtcbiAgICB9KVxuXG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkTWFpbik7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkRGV0YWlscyk7XG5cbiAgICBcbiAgICBpZiAoY2FyZE1haW4uY2hpbGRyZW5bMV0pIGNhcmRNYWluLmluc2VydEJlZm9yZShkZXRhaWxzQnV0dG9uLCBjYXJkTWFpbi5jaGlsZHJlblsxXSk7IGVsc2UgY2FyZE1haW4uYXBwZW5kQ2hpbGQoZGV0YWlsc0J1dHRvbik7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gbmV3IEltYWdlKClcbiAgICBlZGl0QnV0dG9uLnNyYyA9IGVkaXRJbWFnZTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0LWJ1dHRvbidcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgb3BlbkVkaXRGb3JtKHNlY3Rpb24pO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtdmFsdWUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgZGVzYyA9IHRoaXMucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy12YWx1ZScpLmlubmVySFRNTDtcbiAgICAgICAgY29uc3QgZHVlID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtdmFsdWUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgcHJpbyA9IHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMV07XG4gICAgICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJyk7XG5cbiAgICAgICAgY29uc3QgY2FyZE9iaiA9IHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzYyxcbiAgICAgICAgICAgIGR1ZSxcbiAgICAgICAgICAgIHByaW8sXG4gICAgICAgICAgICBjaGVja2VkXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGVzdCA9IHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKHNlY3Rpb24pWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhjYXJkT2JqKTtcbiAgICAgICAgY29uc29sZS5sb2codGVzdCk7XG4gICAgfSlcbiAgICBjYXJkTWFpbi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKVxuICAgIFxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5ldyBJbWFnZSgpXG4gICAgZGVsZXRlQnV0dG9uLnNyYyA9IGRlbGV0ZUltYWdlO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlLWJ1dHRvbic7XG4gICAgXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IG9iamVjdEluZGV4O1xuICAgICAgICB0b0RvTGlzdENvbGxlY3Rpb24uZ2V0Q29sbGVjdGlvbihzZWN0aW9uKS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLXZhbHVlJykudGV4dENvbnRlbnQgPT09IGVsZW1lbnRbJ3RpdGxlJ10gJiYgKHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLXZhbHVlJykudGV4dENvbnRlbnQgPT09IGVsZW1lbnRbJ2R1ZSddKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnem9vbScpO1xuICAgICAgICB0b0RvTGlzdENvbGxlY3Rpb24ucmVtb3ZlKHNlY3Rpb24sIG9iamVjdEluZGV4KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgXG5cbiAgICAgICAgVXBkYXRlVGFza0NvdW50RGlzcGxheShzZWN0aW9uLCBjaGVja21hcmtDb3VudGVyRGlzcGxheShzZWN0aW9uKSk7XG4gICAgfSlcbiAgICBjYXJkTWFpbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXG4gICAgXG4gICAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbn1cblxuY29uc3QgY2hlY2ttYXJrQ291bnRlckRpc3BsYXkgPSBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgY29uc3QgY29sbGVjdGlvbkFyciA9IHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKHNlY3Rpb24pO1xuICAgIGxldCBmaW5pc2hlZFRhc2tzQW1vdW50O1xuICAgIGNvbGxlY3Rpb25BcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICBpZiAob2JqLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChmaW5pc2hlZFRhc2tzQW1vdW50ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBmaW5pc2hlZFRhc2tzQW1vdW50ID0gMTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmluaXNoZWRUYXNrc0Ftb3VudCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBmaW5pc2hlZFRhc2tzQW1vdW50O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBhZGROZXdUYXNrO1xuZXhwb3J0IHtjbGVhckNvbnRhaW5lciwgcmVzZXREb20sIG9wZW5Gb3JtLCBkZWxldGVGb3JtLCBjaGFuZ2VIZWFkZXJUaXRsZSwgVXBkYXRlVGFza0NvdW50RGlzcGxheSwgbWFya0FjdGl2ZVNlY3Rpb24sIHJlbW92ZUFjdGl2ZVNlY3Rpb25zLCBjcmVhdGVDYXJkfTsiLCJpbXBvcnQgeyB0b0RvTGlzdENvbGxlY3Rpb24gfSBmcm9tIFwiLi90b2RvLW9ianNcIjtcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuY29uc3QgcmVuZGVyVGFzayA9ICh0YXNrLCBzZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgaGVyb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VjdGlvbik7XG4gICAgaWYgKCF0YXNrKSByZXR1cm47XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZERpdi5jbGFzc05hbWUgPSAnY2FyZCc7XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHRhc2tbaV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke3Byb3B9OiAke3Rhc2tbaV1bcHJvcF19YDtcbiAgICAgICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICB9O1xufTtcblxuY29uc3QgcmVuZGVySnVzdEFkZGVkID0gKG9iaiwgc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IGhlcm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb24pO1xuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2LmNsYXNzTmFtZSA9ICdjYXJkJztcblxuICAgIGNhcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGVzdC5pbm5lckhUTUwgPSAndGVzdCc7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGVzdCk7XG4gICAgfSlcbiAgICBcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gb2JqW29iai5sZW5ndGggLSAxXSkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGAke3Byb3B9OiAke29ialtvYmoubGVuZ3RoLTFdW3Byb3BdfWA7XG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG4gICAgaGVyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbn07XG5cbmNvbnN0IHJlbmRlclRhc2tzID0gKGRhdGFPYmosIHNlY3Rpb24pID0+e1xuICAgIGlmICghZGF0YU9iaikgcmV0dXJuO1xuICAgIGRhdGFPYmouZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY3JlYXRlQ2FyZCh0YXNrLCBzZWN0aW9uKVxuICAgIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUYXNrO1xuZXhwb3J0IHtyZW5kZXJKdXN0QWRkZWQsIHJlbmRlclRhc2tzfTsiLCIvLyBNb2R1bGUgb2YgYWxsIHRvLWRvIGl0ZW1zXG5cbmNvbnN0IHRvRG9MaXN0Q29sbGVjdGlvbiA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBjb2xsZWN0aW9uID0ge307XG5cbiAgICBjb25zdCBhZGQgPSAob2JqLCBzZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICghY29sbGVjdGlvbltzZWN0aW9uXSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbltzZWN0aW9uXSA9IFtdO1xuICAgICAgICAgICAgY29sbGVjdGlvbltzZWN0aW9uXS5wdXNoKG9iaik7XG4gICAgICAgIH0gZWxzZSBjb2xsZWN0aW9uW3NlY3Rpb25dLnB1c2gob2JqKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbGxlY3Rpb25bc2VjdGlvbl0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q29sbGVjdGlvbiA9IChzZWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uW3NlY3Rpb25dO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRBbGxDb2xsZWN0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfTtcblxuICAgIHJldHVybiB7YWRkLCBnZXRDb2xsZWN0aW9uLCBnZXRBbGxDb2xsZWN0aW9ucywgcmVtb3ZlfTtcbn0pKCk7XG5cblxuXG5leHBvcnQge3RvRG9MaXN0Q29sbGVjdGlvbn07XG5cbiIsImltcG9ydCBhZGROZXdUYXNrLCB7b3BlbkZvcm19IGZyb20gXCIuLi9tb2R1bGVzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdG9Eb0xpc3RDb2xsZWN0aW9uIH0gZnJvbSBcIi4uL21vZHVsZXMvdG9kby1vYmpzXCI7XG5pbXBvcnQgeyByZW5kZXJKdXN0QWRkZWQgfSBmcm9tIFwiLi4vbW9kdWxlcy9yZW5kZXJQYWdlXCI7XG5cbmNvbnN0IGNyZWF0ZUhlcm9Db250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG4gICAgXG5cbiAgICBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyb0NvbnRhaW5lci5jbGFzc05hbWUgPSAnaGVybyc7XG4gICAgaGVyb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmJveC1jb250YWluZXInKVxuICAgIGhlcm9Db250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gY2xhc3M9XCJuZXctdGFzayBpbmJveC1hZGRcIiBpZD0naW5ib3gnPis8L2J1dHRvbj5cbiAgICBgO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvQ29udGFpbmVyKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgb3BlbkZvcm0oZS50YXJnZXQuaWQpO1xuICAgIH0pO1xufTtcblxuY29uc3QgY3JlYXRlVG9kYXlDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG4gICAgXG5cbiAgICBjb25zdCB0b2RheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdoZXJvJztcbiAgICB0b2RheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RheS1jb250YWluZXInKVxuICAgIHRvZGF5Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwibmV3LXRhc2sgdG9kYXktYWRkXCIgaWQ9J3RvZGF5Jz4rPC9idXR0b24+XG4gICAgYDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlDb250YWluZXIpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBvcGVuRm9ybShlLnRhcmdldC5pZCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVXZWVrQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3Qgd2Vla0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWtDb250YWluZXIuY2xhc3NOYW1lID0gJ2hlcm8nO1xuICAgIHdlZWtDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2Vlay1jb250YWluZXInKVxuICAgIHdlZWtDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gY2xhc3M9XCJuZXctdGFzayB3ZWVrLWFkZFwiIGlkPSd3ZWVrJz4rPC9idXR0b24+XG4gICAgYDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2Vla0NvbnRhaW5lcik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIG9wZW5Gb3JtKGUudGFyZ2V0LmlkKTsgICAgICBcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlSGVyb0NvbnRhaW5lciwgY3JlYXRlVG9kYXlDb250YWluZXIsIGNyZWF0ZVdlZWtDb250YWluZXJ9OyIsImltcG9ydCB7IGRlbGV0ZUZvcm0gfSBmcm9tIFwiLi4vbW9kdWxlcy9mdW5jdGlvbnNcIjtcblxuIGZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ292ZXJsYXknO1xuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgZGl2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNsb3NlT3ZlcmxheSgpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGNsb3NlT3ZlcmxheSgpIHtcbiAgICAvLyBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykpIHJldHVybjtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICBcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXktYWN0aXZlJyk7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpKSBkZWxldGVGb3JtKCk7ICAgXG4gICAgXG59O1xuXG5leHBvcnQge2NyZWF0ZU92ZXJsYXksIGNsb3NlT3ZlcmxheX07XG5cblxuXG4gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3JlYXRlUGFnZSBmcm9tICcuL21vZHVsZXMvY3JlYXRlLXBhZ2UnO1xuaW1wb3J0IHJlbmRlclRhc2ssIHtyZW5kZXJUYXNrc30gZnJvbSAnLi9tb2R1bGVzL3JlbmRlclBhZ2UnO1xuaW1wb3J0IHtjcmVhdGVIZXJvQ29udGFpbmVyLCBjcmVhdGVUb2RheUNvbnRhaW5lciwgY3JlYXRlV2Vla0NvbnRhaW5lcn0gZnJvbSAnLi9wYWdlcy9jb250YWluZXItc3dhcCc7XG5pbXBvcnQge3RvRG9MaXN0Q29sbGVjdGlvbiB9IGZyb20gJy4vbW9kdWxlcy90b2RvLW9ianMnO1xuaW1wb3J0IHsgY2xlYXJDb250YWluZXIsIGNoYW5nZUhlYWRlclRpdGxlLCBtYXJrQWN0aXZlU2VjdGlvbiwgcmVtb3ZlQWN0aXZlU2VjdGlvbnMgfSBmcm9tICcuL21vZHVsZXMvZnVuY3Rpb25zJztcbmltcG9ydCAnLi9zdHlsZXMvcGFnZS5jc3MnO1xuXG5jcmVhdGVQYWdlKCk7XG5jcmVhdGVIZXJvQ29udGFpbmVyKCk7XG5cbmxldCBpbmJveFNpZGVyYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LW1haW4nKTtcblxuaW5ib3hTaWRlcmJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcmVtb3ZlQWN0aXZlU2VjdGlvbnMoKTtcbiAgICBtYXJrQWN0aXZlU2VjdGlvbihlLnRhcmdldCk7XG4gICAgY2hhbmdlSGVhZGVyVGl0bGUoJ0luYm94Jyk7XG4gICAgY2xlYXJDb250YWluZXIoKTtcbiAgICBjcmVhdGVIZXJvQ29udGFpbmVyKCk7XG4gICAgcmVuZGVyVGFza3ModG9Eb0xpc3RDb2xsZWN0aW9uLmdldENvbGxlY3Rpb24oJ2luYm94JyksICdpbmJveCcpO1xufSlcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktbWFpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZW1vdmVBY3RpdmVTZWN0aW9ucygpO1xuICAgIG1hcmtBY3RpdmVTZWN0aW9uKGUudGFyZ2V0KTtcbiAgICBjaGFuZ2VIZWFkZXJUaXRsZSgnVG9kYXknKTtcbiAgICBjbGVhckNvbnRhaW5lcigpO1xuICAgIGNyZWF0ZVRvZGF5Q29udGFpbmVyKCk7XG4gICAgcmVuZGVyVGFza3ModG9Eb0xpc3RDb2xsZWN0aW9uLmdldENvbGxlY3Rpb24oJ3RvZGF5JyksICd0b2RheScpO1xufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWstbWFpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZW1vdmVBY3RpdmVTZWN0aW9ucygpO1xuICAgIG1hcmtBY3RpdmVTZWN0aW9uKGUudGFyZ2V0KTtcbiAgICBjaGFuZ2VIZWFkZXJUaXRsZSgnV2VlaycpO1xuICAgIGNsZWFyQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlV2Vla0NvbnRhaW5lcigpO1xuICAgIHJlbmRlclRhc2tzKHRvRG9MaXN0Q29sbGVjdGlvbi5nZXRDb2xsZWN0aW9uKCd3ZWVrJyksICd3ZWVrJyk7XG59KVxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==