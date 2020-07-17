/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static */ "./src/static/index.js");
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program */ "./src/program/index.js");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team */ "./src/team/index.js");
/**
 * Import blocks as components.
 */




/***/ }),

/***/ "./src/program/index.js":
/*!******************************!*\
  !*** ./src/program/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _program_illustration_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program-illustration-1.svg */ "./src/program/program-illustration-1.svg");
/* harmony import */ var _program_illustration_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./program-illustration-2.svg */ "./src/program/program-illustration-2.svg");
/* harmony import */ var _program_illustration_3_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./program-illustration-3.svg */ "./src/program/program-illustration-3.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInputButton = _wp$blockEditor.URLInputButton; // Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack



 // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("nona/program", {
  title: __("Program", "nona"),
  icon: 'feedback',
  category: "nona",
  attributes: {
    programTitle: {
      type: "string",
      source: "html",
      selector: ".program-title"
    },
    buttonText: {
      type: "string",
      source: "text",
      selector: ".register-button"
    },
    buttonURL: {
      type: "string",
      source: "attribute",
      selector: ".register-button",
      attribute: "href"
    },
    cardTitle1: {
      type: "string",
      source: "html",
      selector: ".program-card-title-1"
    },
    cardTitle2: {
      type: "string",
      source: "html",
      selector: ".program-card-title-2"
    },
    cardTitle3: {
      type: "string",
      source: "html",
      selector: ".program-card-title-3"
    },
    cardDesc1: {
      type: "string",
      source: "html",
      selector: ".program-card-description-1"
    },
    cardDesc2: {
      type: "string",
      source: "html",
      selector: ".program-card-description-2"
    },
    cardDesc3: {
      type: "string",
      source: "html",
      selector: ".program-card-description-3"
    }
  },
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        programTitle = _props$attributes.programTitle,
        buttonText = _props$attributes.buttonText,
        buttonURL = _props$attributes.buttonURL,
        cardTitle1 = _props$attributes.cardTitle1,
        cardTitle2 = _props$attributes.cardTitle2,
        cardTitle3 = _props$attributes.cardTitle3,
        cardDesc1 = _props$attributes.cardDesc1,
        cardDesc2 = _props$attributes.cardDesc2,
        cardDesc3 = _props$attributes.cardDesc3,
        setAttributes = props.setAttributes;

    var onChangeProgramTitle = function onChangeProgramTitle(newProgramTitle) {
      setAttributes({
        programTitle: newProgramTitle
      });
    };

    var onChangeButtonText = function onChangeButtonText(newButtonText) {
      setAttributes({
        buttonText: newButtonText
      });
    };

    var onChangeButtonURL = function onChangeButtonURL(newButtonURL) {
      setAttributes({
        buttonURL: newButtonURL
      });
    };

    var onChangeCardTitle1 = function onChangeCardTitle1(newCardTitle1) {
      setAttributes({
        cardTitle1: newCardTitle1
      });
    };

    var onChangeCardTitle2 = function onChangeCardTitle2(newCardTitle2) {
      setAttributes({
        cardTitle2: newCardTitle2
      });
    };

    var onChangeCardTitle3 = function onChangeCardTitle3(newCardTitle3) {
      setAttributes({
        cardTitle3: newCardTitle3
      });
    };

    var onChangeCardDesc1 = function onChangeCardDesc1(newCardDesc1) {
      setAttributes({
        cardDesc1: newCardDesc1
      });
    };

    var onChangeCardDesc2 = function onChangeCardDesc2(newCardDesc2) {
      setAttributes({
        cardDesc2: newCardDesc2
      });
    };

    var onChangeCardDesc3 = function onChangeCardDesc3(newCardDesc3) {
      setAttributes({
        cardDesc3: newCardDesc3
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " alignfull")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "program-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Enter program title here.", "nona"),
      value: programTitle,
      onChange: onChangeProgramTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-cards"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card program-card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "program-card-title program-card-title-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Enter title text here.", "nona"),
      value: cardTitle1,
      onChange: onChangeCardTitle1
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-illustration"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_program_illustration_1_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-description program-card-description-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      value: cardDesc1,
      onChange: onChangeCardDesc1,
      placeholder: __("Enter description text here.", "nona"),
      keepPlaceholderOnFocus: true
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card program-card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "program-card-title program-card-title-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Enter title text here.", "nona"),
      value: cardTitle2,
      onChange: onChangeCardTitle2
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-illustration"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_program_illustration_2_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-description program-card-description-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      multiline: "li",
      value: cardDesc2,
      onChange: onChangeCardDesc2,
      placeholder: __("Enter list text here.", "nona"),
      keepPlaceholderOnFocus: true
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card program-card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "program-card-title program-card-title-3"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Enter title text here.", "nona"),
      value: cardTitle3,
      onChange: onChangeCardTitle3
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-illustration"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_program_illustration_3_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-description program-card-description-3"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      value: cardDesc3,
      onChange: onChangeCardDesc3,
      placeholder: __("Enter description text here.", "nona"),
      keepPlaceholderOnFocus: true
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#",
      role: "button",
      className: "register-button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Enter Button Text Here."),
      value: buttonText,
      onChange: onChangeButtonText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      className: "button-dropdown__input",
      label: __("Button URL", "nona"),
      onChange: onChangeButtonURL,
      url: buttonURL
    })));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(props.className, " alignfull")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "program-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.programTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-cards"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card program-card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "program-card-title program-card-title-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.cardTitle1
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-illustration"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_program_illustration_1_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.cardDesc1
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card program-card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "program-card-title program-card-title-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.cardTitle2
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-illustration"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_program_illustration_2_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.cardDesc2
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card program-card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "program-card-title program-card-title-3"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.cardTitle3
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-illustration"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_program_illustration_3_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "program-card-description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.cardDesc3
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: props.attributes.buttonURL,
      role: "button",
      className: "register-button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.buttonText
    })));
  }
});

/***/ }),

/***/ "./src/program/program-illustration-1.svg":
/*!************************************************!*\
  !*** ./src/program/program-illustration-1.svg ***!
  \************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgProgramIllustration1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".program-illustration-1_svg__a4a13221-578a-47bd-a2da-6b307e30f023,.program-illustration-1_svg__a802237b-3d2f-43ec-9c25-81813814c6e2,.program-illustration-1_svg__aa5f1722-c97f-4166-bbb0-afe5222f10ba,.program-illustration-1_svg__bca96e45-7374-42d2-a9b0-4dc171a83960,.program-illustration-1_svg__f9a43494-9d4f-46ca-8ae3-b5f4ee1a2e58{stroke-linecap:round;stroke-linejoin:round}.program-illustration-1_svg__f9a43494-9d4f-46ca-8ae3-b5f4ee1a2e58{fill:#1b2d42}.program-illustration-1_svg__a4a13221-578a-47bd-a2da-6b307e30f023,.program-illustration-1_svg__a802237b-3d2f-43ec-9c25-81813814c6e2,.program-illustration-1_svg__aa5f1722-c97f-4166-bbb0-afe5222f10ba,.program-illustration-1_svg__bca96e45-7374-42d2-a9b0-4dc171a83960,.program-illustration-1_svg__f9a43494-9d4f-46ca-8ae3-b5f4ee1a2e58{stroke:#1b2d42;stroke-width:.78px}.program-illustration-1_svg__a802237b-3d2f-43ec-9c25-81813814c6e2{fill:#ffc298}.program-illustration-1_svg__bca96e45-7374-42d2-a9b0-4dc171a83960{fill:none}.program-illustration-1_svg__aa5f1722-c97f-4166-bbb0-afe5222f10ba{fill:#f2db9f}.program-illustration-1_svg__a4a13221-578a-47bd-a2da-6b307e30f023{fill:#d77574}"));

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-1_svg__e9c9d245-5a34-41ef-adcb-520e68f8cf51",
  "data-name": "Layer 2"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-1_svg__a076ce9b-8509-4b30-9127-7fb7f83bfb4b",
  "data-name": "OBJECTS"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.51 59.6s11.78-2.32 12.12 9.14c0 0 7.89-9.07 18.11 0s18.41-15.58 37.53-14.47 23.21 20.22 32.62 18.94 5.56-8.39 23.65-4.47 6.89-15.74 14.91-25.87c4.27-5.39 12.59-4.57 17.06-1.76 0 0-3.75-42.19 42-33.36v128.71H.51z",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d",
  fill: "#fff",
  strokeWidth: 1.02
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.51 189.36h198v-56.27s-13.66-5.7-37-9.19l-1.2-5.15s-34-5.33-34.13-60.49L119 56.37s-5.3 24.93-14.51 33.08-16.9 1.72-19.12-15l-7.17-4.23L73.9 4.2 64.17.52A144 144 0 0 0 40.62 5.3s-1.71 17.2-1.71 26.62c0 13.36-7.85 18.09-8.19 47.66-.2 17.68-30.21 31.5-30.21 31.5z",
  fill: "#e86433",
  strokeMiterlimit: 10,
  strokeWidth: 1.02,
  stroke: "#211c1d"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__f9a43494-9d4f-46ca-8ae3-b5f4ee1a2e58",
  d: "M90.9 55.32s-9.61-3.1-6.56-14.71 12.18-11 12.18-11 2.89-10.18 11-10.26 13.43 10.26 6 16.06l-9.76 6-7.5 14z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__a802237b-3d2f-43ec-9c25-81813814c6e2",
  d: "M136.67 102.9c-.09-.87-4.56-2-4.56-2s2.42-.24 2-1.33c-.27-.79-3.5.38-3.5.38s-3.49-1.1-10.84-14.59S112.46 54.45 106 47c0 0-13.8-.86-3.81 23.78S128 104 128 104s4.18 4 4.63 3.5-1.26-2.39-1.26-2.39 3.27 2.2 3.68 1.42-2.9-2.53-2.9-2.53 4 1.87 4.17 1-3.47-2.51-3.47-2.51 3.91 1.29 3.82.41z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__a802237b-3d2f-43ec-9c25-81813814c6e2",
  d: "M106 47s-13.49-.85-4 23.08l5-1.14s2-.7 5.73-4.77c-1.84-7.08-3.45-13.41-6.73-17.17zM88.56 85.89l-.78 9.47 19.86-1.19.45-10.27-19.53 1.99z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__a802237b-3d2f-43ec-9c25-81813814c6e2",
  d: "M98.63 47.4l3-9.86s-3-2.19-1.55-5.37c1.2-2.6 3.82-.83 4.12 1.17.57 3.81 3.16.06 3.16.06s3.17 2.55 6.87-.53c0 0 .89 12.2-8.59 9.6L103.73 49zM114.05 154.48l3.98 15.35 4.51-1.56-4.16-16.05-4.33 2.26z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__f9a43494-9d4f-46ca-8ae3-b5f4ee1a2e58",
  d: "M118.03 169.83l.81 4.63 10.66-3.23-5.84-.69-1.12-2.27-4.51 1.56z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M97.62 45c5.15-2.27 10.84.49 11.65 13.09s0 31.1 0 31.1-16.07 2.21-29.08 0z",
  fill: "#ffa9c0",
  stroke: "#1b2d42",
  strokeWidth: 0.78,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__a802237b-3d2f-43ec-9c25-81813814c6e2",
  d: "M72.62 146.56S66 158.69 63.35 164l3.49 2.58a198.09 198.09 0 0 0 10.36-17.45z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__f9a43494-9d4f-46ca-8ae3-b5f4ee1a2e58",
  d: "M63.35 163.96l-2.44 3.88 7.14 5.84-2.17-4.86.96-2.28-3.49-2.58z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__a802237b-3d2f-43ec-9c25-81813814c6e2",
  d: "M97.4 66.07A138.89 138.89 0 0 1 90.06 78c-7.12 10.27-16.52 23.66-16.52 23.66s.59 7.68-2.47 7.71c-4.69 0-3.77-4.81-3.07-6.61 1-2.64 8.66-29 18.27-45.34"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M109.69 39.56a2.16 2.16 0 1 0-2.16 2.19 2.18 2.18 0 0 0 2.16-2.19z",
  fill: "#ffb199",
  stroke: "#1b2d42",
  strokeWidth: 0.78,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M101.86 44.52c-5.3-1.22-10.7 4.54-15.58 12.87a24.55 24.55 0 0 0 11.12 8.68c5.37-9.76 9.6-20.37 4.46-21.55z",
  fill: "#ffa9c0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__bca96e45-7374-42d2-a9b0-4dc171a83960",
  d: "M103.32 44.76c-6.86-2.19-12.16 4.3-17 12.63a24.55 24.55 0 0 0 11.08 8.68c1.52-2.75 2.94-5.58 4.09-8.24M70.81 105.78a2.28 2.28 0 0 1 .91 3.08l-13.65 25.48M51.66 129.42L65 105.11a2.19 2.19 0 0 1 2.57-1.06"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__aa5f1722-c97f-4166-bbb0-afe5222f10ba",
  d: "M25.23 164.42l14.87 8.45L59 137.55a6.57 6.57 0 0 0-2.7-8.91l-1.82-.95a15.9 15.9 0 0 0-21.38 6.75l-10.7 20a7.45 7.45 0 0 0 2.83 9.98z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__aa5f1722-c97f-4166-bbb0-afe5222f10ba",
  d: "M40.1 172.87L59 137.55a6.58 6.58 0 0 0-1.54-8.13l-22.32 40.63z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__a4a13221-578a-47bd-a2da-6b307e30f023",
  d: "M42.27 134.34a2.08 2.08 0 1 1-2.08-2.11 2.1 2.1 0 0 1 2.08 2.11z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__f9a43494-9d4f-46ca-8ae3-b5f4ee1a2e58",
  d: "M43 172.45a2.78 2.78 0 1 0-2.78 2.84 2.8 2.8 0 0 0 2.78-2.84z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__a4a13221-578a-47bd-a2da-6b307e30f023",
  d: "M41.39 172.45a1.2 1.2 0 1 0-1.2 1.23 1.21 1.21 0 0 0 1.2-1.23z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M107.68 93.26c-8.67-.52-20.49-.47-20.49-.47-4 18-18.56 56.79-18.56 56.79 9.27 8.45 21 6.25 21 6.25 1.83-3.27 3.94-9.11 6.06-16 1.79 8.75 3.33 15 3.33 15 16.74 5.15 24.69-2.94 24.69-2.94z",
  fill: "#68c3c5",
  stroke: "#1b2d42",
  strokeWidth: 0.78,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__bca96e45-7374-42d2-a9b0-4dc171a83960",
  d: "M95.64 139.87s6.64-21 8.54-35.42"
})));

var SvgProgramIllustration1 = function SvgProgramIllustration1(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 199.02 189.87"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTkuMDIgMTg5Ljg3Ij48ZGVmcz48c3R5bGU+LmY5MjNjMWU0LWIwNTItNGJjNy1hYzdhLWRlZDhmNDI1YjE1YXtmaWxsOiNmZmY7c3Ryb2tlLXdpZHRoOjEuMDJweDt9LmY5MjNjMWU0LWIwNTItNGJjNy1hYzdhLWRlZDhmNDI1YjE1YSwuZmExZWM2NjktZWU0Zi00ZTkzLTlhNDUtZGUyYTBhMTA3ZGNie3N0cm9rZTojMjExYzFkO30uYTRhMTMyMjEtNTc4YS00N2JkLWEyZGEtNmIzMDdlMzBmMDIzLC5hNmRkMDI1NC05NjQwLTQ1OWItODZhOS1hNjFiMzI4MjlhMzIsLmE4MDIyMzdiLTNkMmYtNDNlYy05YzI1LTgxODEzODE0YzZlMiwuYWE1ZjE3MjItYzk3Zi00MTY2LWJiYjAtYWZlNTIyMmYxMGJhLC5iOTZjNGNjOS1kMDJhLTQxOTgtYWI0OS04NDljZTEyYmY1NTAsLmJjYTk2ZTQ1LTczNzQtNDJkMi1hOWIwLTRkYzE3MWE4Mzk2MCwuZjU0ODIxMTMtYTM5ZC00NzFkLTgxYTUtZWE1MDBiOGIwOTdiLC5mOTIzYzFlNC1iMDUyLTRiYzctYWM3YS1kZWQ4ZjQyNWIxNWEsLmY5YTQzNDk0LTlkNGYtNDZjYS04YWUzLWI1ZjRlZTFhMmU1OHtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5mYTFlYzY2OS1lZTRmLTRlOTMtOWE0NS1kZTJhMGExMDdkY2J7ZmlsbDojZTg2NDMzO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoxLjAycHg7fS5mOWE0MzQ5NC05ZDRmLTQ2Y2EtOGFlMy1iNWY0ZWUxYTJlNTh7ZmlsbDojMWIyZDQyO30uYTRhMTMyMjEtNTc4YS00N2JkLWEyZGEtNmIzMDdlMzBmMDIzLC5hNmRkMDI1NC05NjQwLTQ1OWItODZhOS1hNjFiMzI4MjlhMzIsLmE4MDIyMzdiLTNkMmYtNDNlYy05YzI1LTgxODEzODE0YzZlMiwuYWE1ZjE3MjItYzk3Zi00MTY2LWJiYjAtYWZlNTIyMmYxMGJhLC5iOTZjNGNjOS1kMDJhLTQxOTgtYWI0OS04NDljZTEyYmY1NTAsLmJjYTk2ZTQ1LTczNzQtNDJkMi1hOWIwLTRkYzE3MWE4Mzk2MCwuZjU0ODIxMTMtYTM5ZC00NzFkLTgxYTUtZWE1MDBiOGIwOTdiLC5mOWE0MzQ5NC05ZDRmLTQ2Y2EtOGFlMy1iNWY0ZWUxYTJlNTh7c3Ryb2tlOiMxYjJkNDI7c3Ryb2tlLXdpZHRoOjAuNzhweDt9LmE4MDIyMzdiLTNkMmYtNDNlYy05YzI1LTgxODEzODE0YzZlMntmaWxsOiNmZmMyOTg7fS5hNzliMjYxYi1jOTU3LTRkNWItOTUyNy1iNjliMDNjOGU4N2QsLmY1NDgyMTEzLWEzOWQtNDcxZC04MWE1LWVhNTAwYjhiMDk3YntmaWxsOiNmZmE5YzA7fS5hNmRkMDI1NC05NjQwLTQ1OWItODZhOS1hNjFiMzI4MjlhMzJ7ZmlsbDojZmZiMTk5O30uYmNhOTZlNDUtNzM3NC00MmQyLWE5YjAtNGRjMTcxYTgzOTYwe2ZpbGw6bm9uZTt9LmFhNWYxNzIyLWM5N2YtNDE2Ni1iYmIwLWFmZTUyMjJmMTBiYXtmaWxsOiNmMmRiOWY7fS5hNGExMzIyMS01NzhhLTQ3YmQtYTJkYS02YjMwN2UzMGYwMjN7ZmlsbDojZDc3NTc0O30uYjk2YzRjYzktZDAyYS00MTk4LWFiNDktODQ5Y2UxMmJmNTUwe2ZpbGw6IzY4YzNjNTt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImU5YzlkMjQ1LTVhMzQtNDFlZi1hZGNiLTUyMGU2OGY4Y2Y1MSIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iYTA3NmNlOWItODUwOS00YjMwLTkxMjctN2ZiN2Y4M2JmYjRiIiBkYXRhLW5hbWU9Ik9CSkVDVFMiPjxwYXRoIGNsYXNzPSJmOTIzYzFlNC1iMDUyLTRiYzctYWM3YS1kZWQ4ZjQyNWIxNWEiIGQ9Ik0uNTEsNTkuNnMxMS43OC0yLjMyLDEyLjEyLDkuMTRjMCwwLDcuODktOS4wNywxOC4xMSwwUzQ5LjE1LDUzLjE2LDY4LjI3LDU0LjI3czIzLjIxLDIwLjIyLDMyLjYyLDE4Ljk0LDUuNTYtOC4zOSwyMy42NS00LjQ3UzEzMS40Myw1MywxMzkuNDUsNDIuODdjNC4yNy01LjM5LDEyLjU5LTQuNTcsMTcuMDYtMS43NiwwLDAtMy43NS00Mi4xOSw0Mi0zMy4zNlYxMzYuNDZILjUxWiIvPjxwYXRoIGNsYXNzPSJmYTFlYzY2OS1lZTRmLTRlOTMtOWE0NS1kZTJhMGExMDdkY2IiIGQ9Ik0uNTEsMTg5LjM2aDE5OFYxMzMuMDlzLTEzLjY2LTUuNy0zNy05LjE5bC0xLjItNS4xNXMtMzQtNS4zMy0zNC4xMy02MC40OUwxMTksNTYuMzdzLTUuMywyNC45My0xNC41MSwzMy4wOC0xNi45LDEuNzItMTkuMTItMTVsLTcuMTctNC4yM0w3My45LDQuMiw2NC4xNy41MkExNDQsMTQ0LDAsMCwwLDQwLjYyLDUuM3MtMS43MSwxNy4yLTEuNzEsMjYuNjJjMCwxMy4zNi03Ljg1LDE4LjA5LTguMTksNDcuNjZDMzAuNTIsOTcuMjYuNTEsMTExLjA4LjUxLDExMS4wOFoiLz48cGF0aCBjbGFzcz0iZjlhNDM0OTQtOWQ0Zi00NmNhLThhZTMtYjVmNGVlMWEyZTU4IiBkPSJNOTAuOSw1NS4zMnMtOS42MS0zLjEtNi41Ni0xNC43MSwxMi4xOC0xMSwxMi4xOC0xMSwyLjg5LTEwLjE4LDExLTEwLjI2LDEzLjQzLDEwLjI2LDYsMTYuMDZsLTkuNzYsNi03LjUsMTRaIi8+PHBhdGggY2xhc3M9ImE4MDIyMzdiLTNkMmYtNDNlYy05YzI1LTgxODEzODE0YzZlMiIgZD0iTTEzNi42NywxMDIuOWMtLjA5LS44Ny00LjU2LTItNC41Ni0yczIuNDItLjI0LDItMS4zM2MtLjI3LS43OS0zLjUuMzgtMy41LjM4cy0zLjQ5LTEuMS0xMC44NC0xNC41OVMxMTIuNDYsNTQuNDUsMTA2LDQ3YzAsMC0xMy44LS44Ni0zLjgxLDIzLjc4UzEyOCwxMDQsMTI4LDEwNHM0LjE4LDQsNC42MywzLjUtMS4yNi0yLjM5LTEuMjYtMi4zOSwzLjI3LDIuMiwzLjY4LDEuNDItMi45LTIuNTMtMi45LTIuNTMsNCwxLjg3LDQuMTcsMS0zLjQ3LTIuNTEtMy40Ny0yLjUxUzEzNi43NiwxMDMuNzgsMTM2LjY3LDEwMi45WiIvPjxwYXRoIGNsYXNzPSJhODAyMjM3Yi0zZDJmLTQzZWMtOWMyNS04MTgxMzgxNGM2ZTIiIGQ9Ik0xMDYsNDdTOTIuNTEsNDYuMTUsMTAyLDcwLjA4bDUtMS4xNHMyLS43LDUuNzMtNC43N0MxMTAuODksNTcuMDksMTA5LjI4LDUwLjc2LDEwNiw0N1oiLz48cG9seWdvbiBjbGFzcz0iYTgwMjIzN2ItM2QyZi00M2VjLTljMjUtODE4MTM4MTRjNmUyIiBwb2ludHM9Ijg4LjU2IDg1Ljg5IDg3Ljc4IDk1LjM2IDEwNy42NCA5NC4xNyAxMDguMDkgODMuOSA4OC41NiA4NS44OSIvPjxwYXRoIGNsYXNzPSJhODAyMjM3Yi0zZDJmLTQzZWMtOWMyNS04MTgxMzgxNGM2ZTIiIGQ9Ik05OC42Myw0Ny40bDMtOS44NnMtMy0yLjE5LTEuNTUtNS4zN2MxLjItMi42LDMuODItLjgzLDQuMTIsMS4xNy41NywzLjgxLDMuMTYuMDYsMy4xNi4wNnMzLjE3LDIuNTUsNi44Ny0uNTNjMCwwLC44OSwxMi4yLTguNTksOS42TDEwMy43Myw0OVoiLz48cG9seWdvbiBjbGFzcz0iYTgwMjIzN2ItM2QyZi00M2VjLTljMjUtODE4MTM4MTRjNmUyIiBwb2ludHM9IjExNC4wNSAxNTQuNDggMTE4LjAzIDE2OS44MyAxMjIuNTQgMTY4LjI3IDExOC4zOCAxNTIuMjIgMTE0LjA1IDE1NC40OCIvPjxwb2x5Z29uIGNsYXNzPSJmOWE0MzQ5NC05ZDRmLTQ2Y2EtOGFlMy1iNWY0ZWUxYTJlNTgiIHBvaW50cz0iMTE4LjAzIDE2OS44MyAxMTguODQgMTc0LjQ2IDEyOS41IDE3MS4yMyAxMjMuNjYgMTcwLjU0IDEyMi41NCAxNjguMjcgMTE4LjAzIDE2OS44MyIvPjxwYXRoIGNsYXNzPSJmNTQ4MjExMy1hMzlkLTQ3MWQtODFhNS1lYTUwMGI4YjA5N2IiIGQ9Ik05Ny42Miw0NWM1LjE1LTIuMjcsMTAuODQuNDksMTEuNjUsMTMuMDlzMCwzMS4xLDAsMzEuMS0xNi4wNywyLjIxLTI5LjA4LDBaIi8+PHBhdGggY2xhc3M9ImE4MDIyMzdiLTNkMmYtNDNlYy05YzI1LTgxODEzODE0YzZlMiIgZD0iTTcyLjYyLDE0Ni41NlM2NiwxNTguNjksNjMuMzUsMTY0bDMuNDksMi41OEExOTguMDksMTk4LjA5LDAsMCwwLDc3LjIsMTQ5LjEzWiIvPjxwb2x5Z29uIGNsYXNzPSJmOWE0MzQ5NC05ZDRmLTQ2Y2EtOGFlMy1iNWY0ZWUxYTJlNTgiIHBvaW50cz0iNjMuMzUgMTYzLjk2IDYwLjkxIDE2Ny44NCA2OC4wNSAxNzMuNjggNjUuODggMTY4LjgyIDY2Ljg0IDE2Ni41NCA2My4zNSAxNjMuOTYiLz48cGF0aCBjbGFzcz0iYTgwMjIzN2ItM2QyZi00M2VjLTljMjUtODE4MTM4MTRjNmUyIiBkPSJNOTcuNCw2Ni4wN0ExMzguODksMTM4Ljg5LDAsMCwxLDkwLjA2LDc4Yy03LjEyLDEwLjI3LTE2LjUyLDIzLjY2LTE2LjUyLDIzLjY2cy41OSw3LjY4LTIuNDcsNy43MWMtNC42OSwwLTMuNzctNC44MS0zLjA3LTYuNjEsMS0yLjY0LDguNjYtMjksMTguMjctNDUuMzQiLz48cGF0aCBjbGFzcz0iYTZkZDAyNTQtOTY0MC00NTliLTg2YTktYTYxYjMyODI5YTMyIiBkPSJNMTA5LjY5LDM5LjU2YTIuMTYsMi4xNiwwLDEsMC0yLjE2LDIuMTlBMi4xOCwyLjE4LDAsMCwwLDEwOS42OSwzOS41NloiLz48cGF0aCBjbGFzcz0iYTc5YjI2MWItYzk1Ny00ZDViLTk1MjctYjY5YjAzYzhlODdkIiBkPSJNMTAxLjg2LDQ0LjUyYy01LjMtMS4yMi0xMC43LDQuNTQtMTUuNTgsMTIuODdBMjQuNTUsMjQuNTUsMCwwLDAsOTcuNCw2Ni4wN0MxMDIuNzcsNTYuMzEsMTA3LDQ1LjcsMTAxLjg2LDQ0LjUyWiIvPjxwYXRoIGNsYXNzPSJiY2E5NmU0NS03Mzc0LTQyZDItYTliMC00ZGMxNzFhODM5NjAiIGQ9Ik0xMDMuMzIsNDQuNzZjLTYuODYtMi4xOS0xMi4xNiw0LjMtMTcsMTIuNjNBMjQuNTUsMjQuNTUsMCwwLDAsOTcuNCw2Ni4wN2MxLjUyLTIuNzUsMi45NC01LjU4LDQuMDktOC4yNCIvPjxwYXRoIGNsYXNzPSJiY2E5NmU0NS03Mzc0LTQyZDItYTliMC00ZGMxNzFhODM5NjAiIGQ9Ik03MC44MSwxMDUuNzhhMi4yOCwyLjI4LDAsMCwxLC45MSwzLjA4TDU4LjA3LDEzNC4zNCIvPjxwYXRoIGNsYXNzPSJiY2E5NmU0NS03Mzc0LTQyZDItYTliMC00ZGMxNzFhODM5NjAiIGQ9Ik01MS42NiwxMjkuNDIsNjUsMTA1LjExYTIuMTksMi4xOSwwLDAsMSwyLjU3LTEuMDYiLz48cGF0aCBjbGFzcz0iYWE1ZjE3MjItYzk3Zi00MTY2LWJiYjAtYWZlNTIyMmYxMGJhIiBkPSJNMjUuMjMsMTY0LjQybDE0Ljg3LDguNDVMNTksMTM3LjU1YTYuNTcsNi41NywwLDAsMC0yLjctOC45MWwtMS44Mi0uOTVhMTUuOSwxNS45LDAsMCwwLTIxLjM4LDYuNzVsLTEwLjcsMjBBNy40NSw3LjQ1LDAsMCwwLDI1LjIzLDE2NC40MloiLz48cGF0aCBjbGFzcz0iYWE1ZjE3MjItYzk3Zi00MTY2LWJiYjAtYWZlNTIyMmYxMGJhIiBkPSJNNDAuMSwxNzIuODcsNTksMTM3LjU1YTYuNTgsNi41OCwwLDAsMC0xLjU0LTguMTNMMzUuMTQsMTcwLjA1WiIvPjxwYXRoIGNsYXNzPSJhNGExMzIyMS01NzhhLTQ3YmQtYTJkYS02YjMwN2UzMGYwMjMiIGQ9Ik00Mi4yNywxMzQuMzRhMi4wOCwyLjA4LDAsMSwxLTIuMDgtMi4xMUEyLjEsMi4xLDAsMCwxLDQyLjI3LDEzNC4zNFoiLz48cGF0aCBjbGFzcz0iZjlhNDM0OTQtOWQ0Zi00NmNhLThhZTMtYjVmNGVlMWEyZTU4IiBkPSJNNDMsMTcyLjQ1YTIuNzgsMi43OCwwLDEsMC0yLjc4LDIuODRBMi44LDIuOCwwLDAsMCw0MywxNzIuNDVaIi8+PHBhdGggY2xhc3M9ImE0YTEzMjIxLTU3OGEtNDdiZC1hMmRhLTZiMzA3ZTMwZjAyMyIgZD0iTTQxLjM5LDE3Mi40NWExLjIsMS4yLDAsMSwwLTEuMiwxLjIzQTEuMjEsMS4yMSwwLDAsMCw0MS4zOSwxNzIuNDVaIi8+PHBhdGggY2xhc3M9ImI5NmM0Y2M5LWQwMmEtNDE5OC1hYjQ5LTg0OWNlMTJiZjU1MCIgZD0iTTEwNy42OCw5My4yNmMtOC42Ny0uNTItMjAuNDktLjQ3LTIwLjQ5LS40Ny00LDE4LTE4LjU2LDU2Ljc5LTE4LjU2LDU2Ljc5LDkuMjcsOC40NSwyMSw2LjI1LDIxLDYuMjUsMS44My0zLjI3LDMuOTQtOS4xMSw2LjA2LTE2LDEuNzksOC43NSwzLjMzLDE1LDMuMzMsMTUsMTYuNzQsNS4xNSwyNC42OS0yLjk0LDI0LjY5LTIuOTRaIi8+PHBhdGggY2xhc3M9ImJjYTk2ZTQ1LTczNzQtNDJkMi1hOWIwLTRkYzE3MWE4Mzk2MCIgZD0iTTk1LjY0LDEzOS44N3M2LjY0LTIxLDguNTQtMzUuNDIiLz48L2c+PC9nPjwvc3ZnPg==");


/***/ }),

/***/ "./src/program/program-illustration-2.svg":
/*!************************************************!*\
  !*** ./src/program/program-illustration-2.svg ***!
  \************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgProgramIllustration2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".program-illustration-2_svg__a07199a7-37bb-46f9-90bd-54d378d2ce4b,.program-illustration-2_svg__a43d8b39-3239-454c-a797-e7c9ac91a4f5,.program-illustration-2_svg__b43e8df6-3575-4efc-828c-0470b47884d0,.program-illustration-2_svg__b9c2311e-2e41-4d01-9b58-d843beabfadc,.program-illustration-2_svg__ed7e78cf-93cf-4840-9925-467628950182{stroke-linecap:round;stroke-linejoin:round}.program-illustration-2_svg__ed7e78cf-93cf-4840-9925-467628950182{fill:#68c3c5}.program-illustration-2_svg__a07199a7-37bb-46f9-90bd-54d378d2ce4b,.program-illustration-2_svg__a43d8b39-3239-454c-a797-e7c9ac91a4f5,.program-illustration-2_svg__b43e8df6-3575-4efc-828c-0470b47884d0,.program-illustration-2_svg__b9c2311e-2e41-4d01-9b58-d843beabfadc,.program-illustration-2_svg__ed7e78cf-93cf-4840-9925-467628950182{stroke:#1b2d42}.program-illustration-2_svg__b9c2311e-2e41-4d01-9b58-d843beabfadc{fill:none}.program-illustration-2_svg__a07199a7-37bb-46f9-90bd-54d378d2ce4b{fill:#1b2d42;stroke-width:.79px}.program-illustration-2_svg__a43d8b39-3239-454c-a797-e7c9ac91a4f5,.program-illustration-2_svg__b43e8df6-3575-4efc-828c-0470b47884d0,.program-illustration-2_svg__b9c2311e-2e41-4d01-9b58-d843beabfadc,.program-illustration-2_svg__ed7e78cf-93cf-4840-9925-467628950182{stroke-width:.79px}.program-illustration-2_svg__a43d8b39-3239-454c-a797-e7c9ac91a4f5{fill:#ffc298}.program-illustration-2_svg__b43e8df6-3575-4efc-828c-0470b47884d0{fill:#d77574}"));

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-2_svg__b8f407e3-410d-474e-8e11-d71d945a7f19",
  "data-name": "Layer 2"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-2_svg__b60d5085-2213-4af6-8a97-1900fcf147e2",
  "data-name": "OBJECTS"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.51 74.57s5-5 9.21-1.6.92 10.87.92 10.87 6.57-6.73 12.6.86c0 0 6.16-9.73 15.33 1a9.72 9.72 0 0 1 7.12-6.45C51.3 78.12 56 84.42 56 84.42s-5.79-14.61 5.71-19.62 1.09-13.31 4.38-19.33S76.63 42 76.63 42s-7.12-32 25.05-27.17c0 0 7.39-13.17 24.64-7.44s14.24 25.2 19.85 27.49 16.29-19.76 31.49-7.73c0 0 7.53-12.46 20.4-3.87v114.07H.51z",
  strokeWidth: 1.02,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d",
  fill: "#fff"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.51 92.66c32-7.86 71.11 6.73 109.42 9.87s88.13-9.48 88.13-9.48V178L.51 182.09z",
  fill: "#038c3e",
  strokeWidth: 0.85,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M92.71 163.27s-2.46-55.77-2.26-73.6l21.16-2.83 20.74 3.26s4.1 64.11 4.1 71.89l-7.39.15s-12.18-43.51-17.66-59c0 0-7.39 44.72-9.65 60.15z",
  strokeWidth: 0.64,
  stroke: "#1b2d42",
  fill: "#68c3c5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M92.51 96.18s-1.44 4.18 4.41 5.88",
  fill: "none",
  strokeWidth: 0.64,
  stroke: "#1b2d42",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__a07199a7-37bb-46f9-90bd-54d378d2ce4b",
  d: "M112 31.06c3.26-1.7 5.69-4.67 8-11.65s-1.78-13-9.41-15.2S98 4.89 99.89 9a19 19 0 0 1 1.65 8.28s4.4 12.56 6.33 14.44 3 1.29 3 1.29z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__a43d8b39-3239-454c-a797-e7c9ac91a4f5",
  d: "M103.29 37.55l1.54-7.73s-6.79.54-8.53-7S101 7.38 101 7.38l5.65 6.8s-2.53 4.48-1.61 6.31 2.8-2.21 2.8-2.21 4.15-.12 2.64 4.68c-1 3-3.49 2.6-3.49 2.6s-.11 3.77 2.43 5.87a2.56 2.56 0 0 0 2.52-.37l-.72 7.35z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b43e8df6-3575-4efc-828c-0470b47884d0",
  d: "M100 10.41S92.05 3.35 93.48.88s9.81 5.21 9.81 5.21z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b43e8df6-3575-4efc-828c-0470b47884d0",
  d: "M98.19 5s6.64-8.09 16.91-2.22 5.45 19.61 5.45 19.61S100.38 20 98.19 5z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b9c2311e-2e41-4d01-9b58-d843beabfadc",
  d: "M106.65 17.38a27.91 27.91 0 0 0-3.1 12.39"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M102.43 21.63a2.62 2.62 0 1 0-2.62 2.74 2.68 2.68 0 0 0 2.62-2.74z",
  fill: "#ffb199",
  strokeWidth: 0.79,
  stroke: "#1b2d42",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__ed7e78cf-93cf-4840-9925-467628950182",
  d: "M75.72 67.56l-17.66-9.34-4.57-28.93 17.66 9.34 4.57 28.93z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#b0d893",
  strokeWidth: 0.79,
  stroke: "#1b2d42",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M85.01 29.29l-13.86 9.34 4.57 28.93 14.72-7.78-5.43-30.49z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__ed7e78cf-93cf-4840-9925-467628950182",
  d: "M104.34 36.37l-19.33-7.08 5.43 30.49 17.15 4.89-3.25-28.3z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M88.81 98.51s29.59 2.15 43.82 0c0 0 1-64-24.24-64-24.64.02-19.58 64-19.58 64z",
  fill: "#f2db9f",
  strokeWidth: 0.79,
  stroke: "#1b2d42",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__a43d8b39-3239-454c-a797-e7c9ac91a4f5",
  d: "M85.86 60.71c-2.94 5.79-5.16 10.45-5.16 10.45a60.84 60.84 0 0 1-17.09-9.07s1.83-5.24.66-5.53c-.81-.2-1.85 2.2-2.41 3.68l-3.8-2-1-5.82c-2.66 2.93-.19 11.23 1.87 15 0 0 7.44 17.41 21.94 19.4 7.9 1.09 14.66-7.78 18.86-17.17"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M104.11 50.55A23.22 23.22 0 0 0 97.75 40c-2.92 3.47-8 13-11.89 20.68a64.27 64.27 0 0 0 13.9 8.95c3.51-7.81 5.24-16.01 4.35-19.08z",
  fill: "#f2db9f"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b9c2311e-2e41-4d01-9b58-d843beabfadc",
  d: "M97.75 40c-2.92 3.47-8 13-11.89 20.68a64.27 64.27 0 0 0 13.9 8.95 63.43 63.43 0 0 0 3-8.17"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__a07199a7-37bb-46f9-90bd-54d378d2ce4b",
  d: "M109.26 37.94c-8.23-1.27-9.49-.06-9.49-.06l-1.19 1.17a5 5 0 0 1 .7-3.53c1.11-1.49 4.89-2.22 10.14-3s3.46 5.64 3.46 5.64z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b43e8df6-3575-4efc-828c-0470b47884d0",
  d: "M108.9 81.86a5 5 0 0 0 4.1 4.47c6.35 1.06 19.38 2.81 25.83.51 8.73-3.11 8.83-20.31 3.19-27.17a96 96 0 0 0 .64-17 7.12 7.12 0 0 0-3.39-5.67 43.49 43.49 0 0 0-12.91-5.42 7.32 7.32 0 0 0-2.64-.09L113.48 33a5 5 0 0 0-4.16 4.4 202 202 0 0 0-.42 44.46z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M118.38 59.67a17 17 0 0 0-2.46.47s.56 19.61 1.23 24.82c0 0 .1 1.07 5.84 2.67 5.73.52 12 .59 15.82-.79 8.73-3.11 8.83-20.31 3.19-27.17l-12.19-4z",
  fill: "#ffa9c0",
  strokeWidth: 0.79,
  stroke: "#1b2d42",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__a07199a7-37bb-46f9-90bd-54d378d2ce4b",
  d: "M139.27 37a43.49 43.49 0 0 0-12.91-5.42 7.32 7.32 0 0 0-2.64-.09l-6 .9.69 27.26s15.3-1.19 23.62 0a96 96 0 0 0 .64-17 7.12 7.12 0 0 0-3.4-5.65z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.51 173.77S120 135.58 198.06 163.35V189H.51z",
  fill: "#296573",
  strokeWidth: 1.02,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d"
})));

var SvgProgramIllustration2 = function SvgProgramIllustration2(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 198.57 189.49"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTguNTcgMTg5LjQ5Ij48ZGVmcz48c3R5bGU+LmYwNzA5NzlmLTUzNzgtNDEyNi05NWFkLWY3ZWM3Y2Y0YTZiMXtmaWxsOiNmZmY7fS5hM2FkMzc0Yi0yMjYzLTQwZGEtOTg0Ny03NDE1MGM2MWIwZjAsLmU4NmZiYmNjLWU5MTMtNGNmOC05YWVlLTI5M2M4YTRmYTM4OSwuZjA3MDk3OWYtNTM3OC00MTI2LTk1YWQtZjdlYzdjZjRhNmIxe3N0cm9rZTojMjExYzFkO30uYTA3MTk5YTctMzdiYi00NmY5LTkwYmQtNTRkMzc4ZDJjZTRiLC5hMzgxNjE5Yi04OGY2LTQxOWQtODg1Ni0wOWFlZmY5NjkxNTgsLmEzYWQzNzRiLTIyNjMtNDBkYS05ODQ3LTc0MTUwYzYxYjBmMCwuYTQzZDhiMzktMzIzOS00NTRjLWE3OTctZTdjOWFjOTFhNGY1LC5hZjY4MWIxNS1kNmY1LTQ1NjktYTgzNC1jOGU1ZmM5OWQxNDMsLmIyMzA2Y2M2LTdhNWEtNDE2NS04Yjc5LWFjNDVlYzE0ZTljNiwuYjQzZThkZjYtMzU3NS00ZWZjLTgyOGMtMDQ3MGI0Nzg4NGQwLC5iOWMyMzExZS0yZTQxLTRkMDEtOWI1OC1kODQzYmVhYmZhZGMsLmJhOWM0NTFlLWEzNGItNDc3Yy04ZGNkLTFhNTBmOTNmNjk3NSwuZTg2ZmJiY2MtZTkxMy00Y2Y4LTlhZWUtMjkzYzhhNGZhMzg5LC5lZDdlNzhjZi05M2NmLTQ4NDAtOTkyNS00Njc2Mjg5NTAxODIsLmYwNzA5NzlmLTUzNzgtNDEyNi05NWFkLWY3ZWM3Y2Y0YTZiMSwuZjc3YWU4NTctZDJjYy00ZDJhLWI1MTUtMGJlZTRiOGJjZmI4LC5mYTY4MGVjNi1kN2NkLTRiYTktODRlYi0wNzZjYWUyYzVmNTZ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uZTg2ZmJiY2MtZTkxMy00Y2Y4LTlhZWUtMjkzYzhhNGZhMzg5LC5mMDcwOTc5Zi01Mzc4LTQxMjYtOTVhZC1mN2VjN2NmNGE2YjF7c3Ryb2tlLXdpZHRoOjEuMDJweDt9LmEzYWQzNzRiLTIyNjMtNDBkYS05ODQ3LTc0MTUwYzYxYjBmMHtmaWxsOiMwMzhjM2U7c3Ryb2tlLXdpZHRoOjAuODVweDt9LmVkN2U3OGNmLTkzY2YtNDg0MC05OTI1LTQ2NzYyODk1MDE4MiwuZmE2ODBlYzYtZDdjZC00YmE5LTg0ZWItMDc2Y2FlMmM1ZjU2e2ZpbGw6IzY4YzNjNTt9LmEwNzE5OWE3LTM3YmItNDZmOS05MGJkLTU0ZDM3OGQyY2U0YiwuYTM4MTYxOWItODhmNi00MTlkLTg4NTYtMDlhZWZmOTY5MTU4LC5hNDNkOGIzOS0zMjM5LTQ1NGMtYTc5Ny1lN2M5YWM5MWE0ZjUsLmFmNjgxYjE1LWQ2ZjUtNDU2OS1hODM0LWM4ZTVmYzk5ZDE0MywuYjIzMDZjYzYtN2E1YS00MTY1LThiNzktYWM0NWVjMTRlOWM2LC5iNDNlOGRmNi0zNTc1LTRlZmMtODI4Yy0wNDcwYjQ3ODg0ZDAsLmI5YzIzMTFlLTJlNDEtNGQwMS05YjU4LWQ4NDNiZWFiZmFkYywuYmE5YzQ1MWUtYTM0Yi00NzdjLThkY2QtMWE1MGY5M2Y2OTc1LC5lZDdlNzhjZi05M2NmLTQ4NDAtOTkyNS00Njc2Mjg5NTAxODIsLmY3N2FlODU3LWQyY2MtNGQyYS1iNTE1LTBiZWU0YjhiY2ZiOCwuZmE2ODBlYzYtZDdjZC00YmE5LTg0ZWItMDc2Y2FlMmM1ZjU2e3N0cm9rZTojMWIyZDQyO30uYTM4MTYxOWItODhmNi00MTlkLTg4NTYtMDlhZWZmOTY5MTU4LC5mYTY4MGVjNi1kN2NkLTRiYTktODRlYi0wNzZjYWUyYzVmNTZ7c3Ryb2tlLXdpZHRoOjAuNjRweDt9LmEzODE2MTliLTg4ZjYtNDE5ZC04ODU2LTA5YWVmZjk2OTE1OCwuYjljMjMxMWUtMmU0MS00ZDAxLTliNTgtZDg0M2JlYWJmYWRje2ZpbGw6bm9uZTt9LmEwNzE5OWE3LTM3YmItNDZmOS05MGJkLTU0ZDM3OGQyY2U0YntmaWxsOiMxYjJkNDI7fS5hMDcxOTlhNy0zN2JiLTQ2ZjktOTBiZC01NGQzNzhkMmNlNGIsLmE0M2Q4YjM5LTMyMzktNDU0Yy1hNzk3LWU3YzlhYzkxYTRmNSwuYWY2ODFiMTUtZDZmNS00NTY5LWE4MzQtYzhlNWZjOTlkMTQzLC5iMjMwNmNjNi03YTVhLTQxNjUtOGI3OS1hYzQ1ZWMxNGU5YzYsLmI0M2U4ZGY2LTM1NzUtNGVmYy04MjhjLTA0NzBiNDc4ODRkMCwuYjljMjMxMWUtMmU0MS00ZDAxLTliNTgtZDg0M2JlYWJmYWRjLC5iYTljNDUxZS1hMzRiLTQ3N2MtOGRjZC0xYTUwZjkzZjY5NzUsLmVkN2U3OGNmLTkzY2YtNDg0MC05OTI1LTQ2NzYyODk1MDE4MiwuZjc3YWU4NTctZDJjYy00ZDJhLWI1MTUtMGJlZTRiOGJjZmI4e3N0cm9rZS13aWR0aDowLjc5cHg7fS5hNDNkOGIzOS0zMjM5LTQ1NGMtYTc5Ny1lN2M5YWM5MWE0ZjV7ZmlsbDojZmZjMjk4O30uYjQzZThkZjYtMzU3NS00ZWZjLTgyOGMtMDQ3MGI0Nzg4NGQwe2ZpbGw6I2Q3NzU3NDt9LmIyMzA2Y2M2LTdhNWEtNDE2NS04Yjc5LWFjNDVlYzE0ZTljNntmaWxsOiNmZmIxOTk7fS5hZjY4MWIxNS1kNmY1LTQ1NjktYTgzNC1jOGU1ZmM5OWQxNDN7ZmlsbDojYjBkODkzO30uYWQxMjlmZTMtZDRhNi00NmY4LWE2ZTgtYWI2MzMzZjNhMWEzLC5iYTljNDUxZS1hMzRiLTQ3N2MtOGRjZC0xYTUwZjkzZjY5NzV7ZmlsbDojZjJkYjlmO30uZjc3YWU4NTctZDJjYy00ZDJhLWI1MTUtMGJlZTRiOGJjZmI4e2ZpbGw6I2ZmYTljMDt9LmU4NmZiYmNjLWU5MTMtNGNmOC05YWVlLTI5M2M4YTRmYTM4OXtmaWxsOiMyOTY1NzM7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJiOGY0MDdlMy00MTBkLTQ3NGUtOGUxMS1kNzFkOTQ1YTdmMTkiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9ImI2MGQ1MDg1LTIyMTMtNGFmNi04YTk3LTE5MDBmY2YxNDdlMiIgZGF0YS1uYW1lPSJPQkpFQ1RTIj48cGF0aCBjbGFzcz0iZjA3MDk3OWYtNTM3OC00MTI2LTk1YWQtZjdlYzdjZjRhNmIxIiBkPSJNLjUxLDc0LjU3czUtNSw5LjIxLTEuNi45MiwxMC44Ny45MiwxMC44Nyw2LjU3LTYuNzMsMTIuNi44NmMwLDAsNi4xNi05LjczLDE1LjMzLDFhOS43Miw5LjcyLDAsMCwxLDcuMTItNi40NUM1MS4zLDc4LjEyLDU2LDg0LjQyLDU2LDg0LjQyUzUwLjIxLDY5LjgxLDYxLjcxLDY0LjhzMS4wOS0xMy4zMSw0LjM4LTE5LjMzUzc2LjYzLDQyLDc2LjYzLDQyLDY5LjUxLDEwLDEwMS42OCwxNC44M2MwLDAsNy4zOS0xMy4xNywyNC42NC03LjQ0czE0LjI0LDI1LjIsMTkuODUsMjcuNDksMTYuMjktMTkuNzYsMzEuNDktNy43M2MwLDAsNy41My0xMi40NiwyMC40LTMuODdWMTM3LjM1SC41MVoiLz48cGF0aCBjbGFzcz0iYTNhZDM3NGItMjI2My00MGRhLTk4NDctNzQxNTBjNjFiMGYwIiBkPSJNLjUxLDkyLjY2YzMyLTcuODYsNzEuMTEsNi43MywxMDkuNDIsOS44N3M4OC4xMy05LjQ4LDg4LjEzLTkuNDhWMTc4TC41MSwxODIuMDlaIi8+PHBhdGggY2xhc3M9ImZhNjgwZWM2LWQ3Y2QtNGJhOS04NGViLTA3NmNhZTJjNWY1NiIgZD0iTTkyLjcxLDE2My4yN3MtMi40Ni01NS43Ny0yLjI2LTczLjZsMjEuMTYtMi44MywyMC43NCwzLjI2czQuMSw2NC4xMSw0LjEsNzEuODlsLTcuMzkuMTVzLTEyLjE4LTQzLjUxLTE3LjY2LTU5YzAsMC03LjM5LDQ0LjcyLTkuNjUsNjAuMTVaIi8+PHBhdGggY2xhc3M9ImEzODE2MTliLTg4ZjYtNDE5ZC04ODU2LTA5YWVmZjk2OTE1OCIgZD0iTTkyLjUxLDk2LjE4cy0xLjQ0LDQuMTgsNC40MSw1Ljg4Ii8+PHBhdGggY2xhc3M9ImEwNzE5OWE3LTM3YmItNDZmOS05MGJkLTU0ZDM3OGQyY2U0YiIgZD0iTTExMiwzMS4wNmMzLjI2LTEuNyw1LjY5LTQuNjcsOC0xMS42NXMtMS43OC0xMy05LjQxLTE1LjJTOTgsNC44OSw5OS44OSw5YTE5LDE5LDAsMCwxLDEuNjUsOC4yOHM0LjQsMTIuNTYsNi4zMywxNC40NCwzLDEuMjksMywxLjI5WiIvPjxwYXRoIGNsYXNzPSJhNDNkOGIzOS0zMjM5LTQ1NGMtYTc5Ny1lN2M5YWM5MWE0ZjUiIGQ9Ik0xMDMuMjksMzcuNTVsMS41NC03Ljczcy02Ljc5LjU0LTguNTMtN1MxMDEsNy4zOCwxMDEsNy4zOGw1LjY1LDYuOHMtMi41Myw0LjQ4LTEuNjEsNi4zMSwyLjgtMi4yMSwyLjgtMi4yMSw0LjE1LS4xMiwyLjY0LDQuNjhjLTEsMy0zLjQ5LDIuNi0zLjQ5LDIuNnMtLjExLDMuNzcsMi40Myw1Ljg3YTIuNTYsMi41NiwwLDAsMCwyLjUyLS4zN2wtLjcyLDcuMzVaIi8+PHBhdGggY2xhc3M9ImI0M2U4ZGY2LTM1NzUtNGVmYy04MjhjLTA0NzBiNDc4ODRkMCIgZD0iTTEwMCwxMC40MVM5Mi4wNSwzLjM1LDkzLjQ4Ljg4czkuODEsNS4yMSw5LjgxLDUuMjFaIi8+PHBhdGggY2xhc3M9ImI0M2U4ZGY2LTM1NzUtNGVmYy04MjhjLTA0NzBiNDc4ODRkMCIgZD0iTTk4LjE5LDVzNi42NC04LjA5LDE2LjkxLTIuMjIsNS40NSwxOS42MSw1LjQ1LDE5LjYxUzEwMC4zOCwyMCw5OC4xOSw1WiIvPjxwYXRoIGNsYXNzPSJiOWMyMzExZS0yZTQxLTRkMDEtOWI1OC1kODQzYmVhYmZhZGMiIGQ9Ik0xMDYuNjUsMTcuMzhhMjcuOTEsMjcuOTEsMCwwLDAtMy4xLDEyLjM5Ii8+PHBhdGggY2xhc3M9ImIyMzA2Y2M2LTdhNWEtNDE2NS04Yjc5LWFjNDVlYzE0ZTljNiIgZD0iTTEwMi40MywyMS42M2EyLjYyLDIuNjIsMCwxLDAtMi42MiwyLjc0QTIuNjgsMi42OCwwLDAsMCwxMDIuNDMsMjEuNjNaIi8+PHBvbHlnb24gY2xhc3M9ImVkN2U3OGNmLTkzY2YtNDg0MC05OTI1LTQ2NzYyODk1MDE4MiIgcG9pbnRzPSI3NS43MiA2Ny41NiA1OC4wNiA1OC4yMiA1My40OSAyOS4yOSA3MS4xNSAzOC42MyA3NS43MiA2Ny41NiIvPjxwb2x5Z29uIGNsYXNzPSJhZjY4MWIxNS1kNmY1LTQ1NjktYTgzNC1jOGU1ZmM5OWQxNDMiIHBvaW50cz0iODUuMDEgMjkuMjkgNzEuMTUgMzguNjMgNzUuNzIgNjcuNTYgOTAuNDQgNTkuNzggODUuMDEgMjkuMjkiLz48cG9seWdvbiBjbGFzcz0iZWQ3ZTc4Y2YtOTNjZi00ODQwLTk5MjUtNDY3NjI4OTUwMTgyIiBwb2ludHM9IjEwNC4zNCAzNi4zNyA4NS4wMSAyOS4yOSA5MC40NCA1OS43OCAxMDcuNTkgNjQuNjcgMTA0LjM0IDM2LjM3Ii8+PHBhdGggY2xhc3M9ImJhOWM0NTFlLWEzNGItNDc3Yy04ZGNkLTFhNTBmOTNmNjk3NSIgZD0iTTg4LjgxLDk4LjUxczI5LjU5LDIuMTUsNDMuODIsMGMwLDAsMS02NC0yNC4yNC02NEM4My43NSwzNC41Myw4OC44MSw5OC41MSw4OC44MSw5OC41MVoiLz48cGF0aCBjbGFzcz0iYTQzZDhiMzktMzIzOS00NTRjLWE3OTctZTdjOWFjOTFhNGY1IiBkPSJNODUuODYsNjAuNzFDODIuOTIsNjYuNSw4MC43LDcxLjE2LDgwLjcsNzEuMTZhNjAuODQsNjAuODQsMCwwLDEtMTcuMDktOS4wN3MxLjgzLTUuMjQuNjYtNS41M2MtLjgxLS4yLTEuODUsMi4yLTIuNDEsMy42OGwtMy44LTItMS01LjgyYy0yLjY2LDIuOTMtLjE5LDExLjIzLDEuODcsMTUsMCwwLDcuNDQsMTcuNDEsMjEuOTQsMTkuNCw3LjksMS4wOSwxNC42Ni03Ljc4LDE4Ljg2LTE3LjE3Ii8+PHBhdGggY2xhc3M9ImFkMTI5ZmUzLWQ0YTYtNDZmOC1hNmU4LWFiNjMzM2YzYTFhMyIgZD0iTTEwNC4xMSw1MC41NUEyMy4yMiwyMy4yMiwwLDAsMCw5Ny43NSw0MGMtMi45MiwzLjQ3LTgsMTMtMTEuODksMjAuNjhhNjQuMjcsNjQuMjcsMCwwLDAsMTMuOSw4Ljk1QzEwMy4yNyw2MS44MiwxMDUsNTMuNjIsMTA0LjExLDUwLjU1WiIvPjxwYXRoIGNsYXNzPSJiOWMyMzExZS0yZTQxLTRkMDEtOWI1OC1kODQzYmVhYmZhZGMiIGQ9Ik05Ny43NSw0MGMtMi45MiwzLjQ3LTgsMTMtMTEuODksMjAuNjhhNjQuMjcsNjQuMjcsMCwwLDAsMTMuOSw4Ljk1LDYzLjQzLDYzLjQzLDAsMCwwLDMtOC4xNyIvPjxwYXRoIGNsYXNzPSJhMDcxOTlhNy0zN2JiLTQ2ZjktOTBiZC01NGQzNzhkMmNlNGIiIGQ9Ik0xMDkuMjYsMzcuOTRjLTguMjMtMS4yNy05LjQ5LS4wNi05LjQ5LS4wNmwtMS4xOSwxLjE3YTUsNSwwLDAsMSwuNy0zLjUzYzEuMTEtMS40OSw0Ljg5LTIuMjIsMTAuMTQtM3MzLjQ2LDUuNjQsMy40Niw1LjY0WiIvPjxwYXRoIGNsYXNzPSJiNDNlOGRmNi0zNTc1LTRlZmMtODI4Yy0wNDcwYjQ3ODg0ZDAiIGQ9Ik0xMDguOSw4MS44NkE1LDUsMCwwLDAsMTEzLDg2LjMzYzYuMzUsMS4wNiwxOS4zOCwyLjgxLDI1LjgzLjUxLDguNzMtMy4xMSw4LjgzLTIwLjMxLDMuMTktMjcuMTdhOTYsOTYsMCwwLDAsLjY0LTE3QTcuMTIsNy4xMiwwLDAsMCwxMzkuMjcsMzdhNDMuNDksNDMuNDksMCwwLDAtMTIuOTEtNS40Miw3LjMyLDcuMzIsMCwwLDAtMi42NC0uMDlMMTEzLjQ4LDMzYTUsNSwwLDAsMC00LjE2LDQuNEEyMDIsMjAyLDAsMCwwLDEwOC45LDgxLjg2WiIvPjxwYXRoIGNsYXNzPSJmNzdhZTg1Ny1kMmNjLTRkMmEtYjUxNS0wYmVlNGI4YmNmYjgiIGQ9Ik0xMTguMzgsNTkuNjdhMTcsMTcsMCwwLDAtMi40Ni40N3MuNTYsMTkuNjEsMS4yMywyNC44MmMwLDAsLjEsMS4wNyw1Ljg0LDIuNjcsNS43My41MiwxMiwuNTksMTUuODItLjc5LDguNzMtMy4xMSw4LjgzLTIwLjMxLDMuMTktMjcuMTdsLTEyLjE5LTRaIi8+PHBhdGggY2xhc3M9ImEwNzE5OWE3LTM3YmItNDZmOS05MGJkLTU0ZDM3OGQyY2U0YiIgZD0iTTEzOS4yNywzN2E0My40OSw0My40OSwwLDAsMC0xMi45MS01LjQyLDcuMzIsNy4zMiwwLDAsMC0yLjY0LS4wOWwtNiwuOS42OSwyNy4yNnMxNS4zLTEuMTksMjMuNjIsMGE5Niw5NiwwLDAsMCwuNjQtMTdBNy4xMiw3LjEyLDAsMCwwLDEzOS4yNywzN1oiLz48cGF0aCBjbGFzcz0iZTg2ZmJiY2MtZTkxMy00Y2Y4LTlhZWUtMjkzYzhhNGZhMzg5IiBkPSJNLjUxLDE3My43N1MxMjAsMTM1LjU4LDE5OC4wNiwxNjMuMzVWMTg5SC41MVoiLz48L2c+PC9nPjwvc3ZnPg==");


/***/ }),

/***/ "./src/program/program-illustration-3.svg":
/*!************************************************!*\
  !*** ./src/program/program-illustration-3.svg ***!
  \************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgProgramIllustration3; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".program-illustration-3_svg__ac62e2eb-1d9e-4709-a43a-7c6966ae0769,.program-illustration-3_svg__b2c34976-9d0c-4cfa-b2e4-29db19cae953,.program-illustration-3_svg__b601a5d1-45a0-41ea-adb0-b01aca5aed20,.program-illustration-3_svg__f185b278-baad-480a-9c1e-1ca01eeca5c0,.program-illustration-3_svg__f9a7fc8d-7f53-4562-965b-71c7021d0373{stroke-linecap:round;stroke-linejoin:round}.program-illustration-3_svg__b2c34976-9d0c-4cfa-b2e4-29db19cae953{fill:#fff}.program-illustration-3_svg__ac62e2eb-1d9e-4709-a43a-7c6966ae0769,.program-illustration-3_svg__e08d2852-043a-4a2d-ae83-61cbbb535ee6{fill:#d77574}.program-illustration-3_svg__ac62e2eb-1d9e-4709-a43a-7c6966ae0769,.program-illustration-3_svg__b2c34976-9d0c-4cfa-b2e4-29db19cae953,.program-illustration-3_svg__b601a5d1-45a0-41ea-adb0-b01aca5aed20,.program-illustration-3_svg__f185b278-baad-480a-9c1e-1ca01eeca5c0,.program-illustration-3_svg__f9a7fc8d-7f53-4562-965b-71c7021d0373{stroke:#1b2d42;stroke-width:.75px}.program-illustration-3_svg__f185b278-baad-480a-9c1e-1ca01eeca5c0{fill:#915d3a}.program-illustration-3_svg__f9a7fc8d-7f53-4562-965b-71c7021d0373{fill:none}.program-illustration-3_svg__b601a5d1-45a0-41ea-adb0-b01aca5aed20{fill:#1b2d42}"));

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-3_svg__e4eb09e6-42ed-4df4-819a-47375fa7bb57",
  "data-name": "Layer 2"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-3_svg__a3b49b6f-a34f-4839-bebd-24dea881ce18",
  "data-name": "OBJECTS"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d",
  fill: "#56c9f5",
  strokeWidth: 0.98,
  d: "M.5 87.76h198v45.49H.5z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M198.5 4.59a26.4 26.4 0 0 0-3.59-1.47c-36.87-12-34.25 20.54-28.86 26.34s.55 13-11.32 14.22-8 13.75-8 13.75c-7.32 1.37-5.11 8.73-5.11 8.73-13-4.65-16.16 5.44-16.16 5.44-21.68-14.6-34.94 4.08-44.35 5.53S69.67 69.23 59.18 68s-15.6 8.91-15.6 8.91-4.7-11.59-14.09-13.43a20.17 20.17 0 0 0-15.74 3.29C15 51.58.5 49.41.5 49.41v38.35h198z",
  strokeWidth: 0.98,
  fill: "#fff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  cx: 33.28,
  cy: 30.36,
  rx: 11.59,
  ry: 11.33,
  fill: "#f2db9f",
  strokeWidth: 0.97,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__ac62e2eb-1d9e-4709-a43a-7c6966ae0769",
  d: "M91 66.16c-11.38 1.75-25 14.53-33 68.26l6 .92S74.33 100.71 81.5 89z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.5 132.9s103.14-16.58 198-3.71v59.89H.5z",
  fill: "#e86433",
  strokeWidth: 0.99,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M92.51 60.74s-5.3 3.07-7.39-1.86c0 0-10-3.54-4.94-12.23 0 0-1.88-9.81 10.45-8.23 0 0 5.42-6.93 12.35-.18 2.69 2.62 2.33 6.14.88 9.47 0 0 4.11 6.2-4.81 10.33z",
  fill: "#68c3c5",
  stroke: "#1b2d42",
  strokeWidth: 0.75,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__f185b278-baad-480a-9c1e-1ca01eeca5c0",
  d: "M95.76 68v-6.5s7.75 1.21 7.24-5.5-4.11-9.09-4.11-9.09-3.76 5.27-7.8 4.21c0 0-1.53-2.1-3.48-.66s-.7 6 2.51 7L90.29 68z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__ac62e2eb-1d9e-4709-a43a-7c6966ae0769",
  d: "M97.5 57.43a2.32 2.32 0 1 0-2.32 2.19 2.26 2.26 0 0 0 2.32-2.19z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__e08d2852-043a-4a2d-ae83-61cbbb535ee6",
  d: "M76.28 107.69S74.89 66.2 93.69 65.81s17.17 41.55 17.17 41.55-13.69 5.07-34.58.33z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__f9a7fc8d-7f53-4562-965b-71c7021d0373",
  d: "M93.69 65.81c18.8-.4 17.17 41.55 17.17 41.55s-13.69 5.07-34.58.33c0 0-.46-13.61 2.68-25.31M88.47 66.74a18.22 18.22 0 0 1 5.22-.93"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__b601a5d1-45a0-41ea-adb0-b01aca5aed20",
  d: "M76.28 107.69s-3.62 22 11.7 19.75 25.07-5.93 25.35-5.53 22 34 22 34l6.13-3.17s-10.87-36.34-23.27-42.93-41.91-2.12-41.91-2.12z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__b2c34976-9d0c-4cfa-b2e4-29db19cae953",
  d: "M137.98 161.42l-2.64-5.54 6.13-3.16 1.74 2.51 7.66.19-12.89 6z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__b601a5d1-45a0-41ea-adb0-b01aca5aed20",
  d: "M103.16 107.42c11.56-.92 24.66-5.66 30.64 2.64S115.14 140 91 148.91l-4-4 21.69-23.57z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__b2c34976-9d0c-4cfa-b2e4-29db19cae953",
  d: "M81.5 148.44l5.5-3.48 4.04 3.95-2.23 2.1 1.4 6.32-8.71-8.89z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__f185b278-baad-480a-9c1e-1ca01eeca5c0",
  d: "M94.18 103.14c-3.19-.34-6.11 1.11-6.85 5a24.82 24.82 0 0 0 7.34-.11l.76-2.07z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__e08d2852-043a-4a2d-ae83-61cbbb535ee6",
  d: "M94.67 65.83c8.49.63 25.52 15.35 24.79 29.81S94.67 108 94.67 108l-.49-4.84 14.51-7.84z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__f9a7fc8d-7f53-4562-965b-71c7021d0373",
  d: "M94.67 65.83c8.49.63 25.52 15.35 24.79 29.81S94.67 108 94.67 108l-.49-4.84 14.51-7.84"
})));

var SvgProgramIllustration3 = function SvgProgramIllustration3(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 198.99 189.57"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTguOTkgMTg5LjU3Ij48ZGVmcz48c3R5bGU+LmYwOWUwZmFlLTFjYTAtNDVhMS1iZTgyLTg4N2Q3MTdhYmI4MntmaWxsOiM1NmM5ZjU7c3Ryb2tlLXdpZHRoOjAuOThweDt9LmUyOTE5MzE0LTcwNzAtNDExYy1hOTQ5LTJlZGVmODY3ZjY4MiwuZjA5ZTBmYWUtMWNhMC00NWExLWJlODItODg3ZDcxN2FiYjgyLC5mMTVhNzAxMC1hYTRiLTQ2OGItYTBjMi1mMWM5Nzg2ZGQ1YTksLmZjM2ZjMjM1LTQ3M2EtNDFiNS1iMGMwLTdkN2JmZDhiN2IxY3tzdHJva2U6IzIxMWMxZDt9LmFjNjJlMmViLTFkOWUtNDcwOS1hNDNhLTdjNjk2NmFlMDc2OSwuYjJjMzQ5NzYtOWQwYy00Y2ZhLWIyZTQtMjlkYjE5Y2FlOTUzLC5iNjAxYTVkMS00NWEwLTQxZWEtYWRiMC1iMDFhY2E1YWVkMjAsLmUxNWQ5NGYwLTlhYzgtNDM5OC1hY2QzLWQyYTgyN2ZiMTc1NiwuZTI5MTkzMTQtNzA3MC00MTFjLWE5NDktMmVkZWY4NjdmNjgyLC5mMDllMGZhZS0xY2EwLTQ1YTEtYmU4Mi04ODdkNzE3YWJiODIsLmYxNWE3MDEwLWFhNGItNDY4Yi1hMGMyLWYxYzk3ODZkZDVhOSwuZjE4NWIyNzgtYmFhZC00ODBhLTljMWUtMWNhMDFlZWNhNWMwLC5mOWE3ZmM4ZC03ZjUzLTQ1NjItOTY1Yi03MWM3MDIxZDAzNzMsLmZjM2ZjMjM1LTQ3M2EtNDFiNS1iMGMwLTdkN2JmZDhiN2IxY3tzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5iMmMzNDk3Ni05ZDBjLTRjZmEtYjJlNC0yOWRiMTljYWU5NTMsLmZjM2ZjMjM1LTQ3M2EtNDFiNS1iMGMwLTdkN2JmZDhiN2IxY3tmaWxsOiNmZmY7fS5mYzNmYzIzNS00NzNhLTQxYjUtYjBjMC03ZDdiZmQ4YjdiMWN7c3Ryb2tlLXdpZHRoOjAuOThweDt9LmYxNWE3MDEwLWFhNGItNDY4Yi1hMGMyLWYxYzk3ODZkZDVhOXtmaWxsOiNmMmRiOWY7c3Ryb2tlLXdpZHRoOjAuOTdweDt9LmFjNjJlMmViLTFkOWUtNDcwOS1hNDNhLTdjNjk2NmFlMDc2OSwuZTA4ZDI4NTItMDQzYS00YTJkLWFlODMtNjFjYmJiNTM1ZWU2e2ZpbGw6I2Q3NzU3NDt9LmFjNjJlMmViLTFkOWUtNDcwOS1hNDNhLTdjNjk2NmFlMDc2OSwuYjJjMzQ5NzYtOWQwYy00Y2ZhLWIyZTQtMjlkYjE5Y2FlOTUzLC5iNjAxYTVkMS00NWEwLTQxZWEtYWRiMC1iMDFhY2E1YWVkMjAsLmUxNWQ5NGYwLTlhYzgtNDM5OC1hY2QzLWQyYTgyN2ZiMTc1NiwuZjE4NWIyNzgtYmFhZC00ODBhLTljMWUtMWNhMDFlZWNhNWMwLC5mOWE3ZmM4ZC03ZjUzLTQ1NjItOTY1Yi03MWM3MDIxZDAzNzN7c3Ryb2tlOiMxYjJkNDI7c3Ryb2tlLXdpZHRoOjAuNzVweDt9LmUyOTE5MzE0LTcwNzAtNDExYy1hOTQ5LTJlZGVmODY3ZjY4MntmaWxsOiNlODY0MzM7c3Ryb2tlLXdpZHRoOjAuOTlweDt9LmUxNWQ5NGYwLTlhYzgtNDM5OC1hY2QzLWQyYTgyN2ZiMTc1NntmaWxsOiM2OGMzYzU7fS5mMTg1YjI3OC1iYWFkLTQ4MGEtOWMxZS0xY2EwMWVlY2E1YzB7ZmlsbDojOTE1ZDNhO30uZjlhN2ZjOGQtN2Y1My00NTYyLTk2NWItNzFjNzAyMWQwMzcze2ZpbGw6bm9uZTt9LmI2MDFhNWQxLTQ1YTAtNDFlYS1hZGIwLWIwMWFjYTVhZWQyMHtmaWxsOiMxYjJkNDI7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJlNGViMDllNi00MmVkLTRkZjQtODE5YS00NzM3NWZhN2JiNTciIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9ImEzYjQ5YjZmLWEzNGYtNDgzOS1iZWJkLTI0ZGVhODgxY2UxOCIgZGF0YS1uYW1lPSJPQkpFQ1RTIj48cmVjdCBjbGFzcz0iZjA5ZTBmYWUtMWNhMC00NWExLWJlODItODg3ZDcxN2FiYjgyIiB4PSIwLjUiIHk9Ijg3Ljc2IiB3aWR0aD0iMTk4IiBoZWlnaHQ9IjQ1LjQ5Ii8+PHBhdGggY2xhc3M9ImZjM2ZjMjM1LTQ3M2EtNDFiNS1iMGMwLTdkN2JmZDhiN2IxYyIgZD0iTTE5OC41LDQuNTlhMjYuNCwyNi40LDAsMCwwLTMuNTktMS40N2MtMzYuODctMTItMzQuMjUsMjAuNTQtMjguODYsMjYuMzRzLjU1LDEzLTExLjMyLDE0LjIyLTgsMTMuNzUtOCwxMy43NWMtNy4zMiwxLjM3LTUuMTEsOC43My01LjExLDguNzMtMTMtNC42NS0xNi4xNiw1LjQ0LTE2LjE2LDUuNDRDMTAzLjc4LDU3LDkwLjUyLDc1LjY4LDgxLjExLDc3LjEzUzY5LjY3LDY5LjIzLDU5LjE4LDY4cy0xNS42LDguOTEtMTUuNiw4LjkxLTQuNy0xMS41OS0xNC4wOS0xMy40M2EyMC4xNywyMC4xNywwLDAsMC0xNS43NCwzLjI5QzE1LDUxLjU4LjUsNDkuNDEuNSw0OS40MVY4Ny43NmgxOThaIi8+PGVsbGlwc2UgY2xhc3M9ImYxNWE3MDEwLWFhNGItNDY4Yi1hMGMyLWYxYzk3ODZkZDVhOSIgY3g9IjMzLjI4IiBjeT0iMzAuMzYiIHJ4PSIxMS41OSIgcnk9IjExLjMzIi8+PHBhdGggY2xhc3M9ImFjNjJlMmViLTFkOWUtNDcwOS1hNDNhLTdjNjk2NmFlMDc2OSIgZD0iTTkxLDY2LjE2Qzc5LjYyLDY3LjkxLDY2LDgwLjY5LDU4LDEzNC40Mmw2LC45MlM3NC4zMywxMDAuNzEsODEuNSw4OVoiLz48cGF0aCBjbGFzcz0iZTI5MTkzMTQtNzA3MC00MTFjLWE5NDktMmVkZWY4NjdmNjgyIiBkPSJNLjUsMTMyLjlzMTAzLjE0LTE2LjU4LDE5OC0zLjcxdjU5Ljg5SC41WiIvPjxwYXRoIGNsYXNzPSJlMTVkOTRmMC05YWM4LTQzOTgtYWNkMy1kMmE4MjdmYjE3NTYiIGQ9Ik05Mi41MSw2MC43NHMtNS4zLDMuMDctNy4zOS0xLjg2YzAsMC0xMC0zLjU0LTQuOTQtMTIuMjMsMCwwLTEuODgtOS44MSwxMC40NS04LjIzLDAsMCw1LjQyLTYuOTMsMTIuMzUtLjE4LDIuNjksMi42MiwyLjMzLDYuMTQuODgsOS40NywwLDAsNC4xMSw2LjItNC44MSwxMC4zM1oiLz48cGF0aCBjbGFzcz0iZjE4NWIyNzgtYmFhZC00ODBhLTljMWUtMWNhMDFlZWNhNWMwIiBkPSJNOTUuNzYsNjh2LTYuNVMxMDMuNTEsNjIuNzEsMTAzLDU2cy00LjExLTkuMDktNC4xMS05LjA5LTMuNzYsNS4yNy03LjgsNC4yMWMwLDAtMS41My0yLjEtMy40OC0uNjZzLS43LDYsMi41MSw3TDkwLjI5LDY4WiIvPjxwYXRoIGNsYXNzPSJhYzYyZTJlYi0xZDllLTQ3MDktYTQzYS03YzY5NjZhZTA3NjkiIGQ9Ik05Ny41LDU3LjQzYTIuMzIsMi4zMiwwLDEsMC0yLjMyLDIuMTlBMi4yNiwyLjI2LDAsMCwwLDk3LjUsNTcuNDNaIi8+PHBhdGggY2xhc3M9ImUwOGQyODUyLTA0M2EtNGEyZC1hZTgzLTYxY2JiYjUzNWVlNiIgZD0iTTc2LjI4LDEwNy42OVM3NC44OSw2Ni4yLDkzLjY5LDY1LjgxczE3LjE3LDQxLjU1LDE3LjE3LDQxLjU1Uzk3LjE3LDExMi40Myw3Ni4yOCwxMDcuNjlaIi8+PHBhdGggY2xhc3M9ImY5YTdmYzhkLTdmNTMtNDU2Mi05NjViLTcxYzcwMjFkMDM3MyIgZD0iTTkzLjY5LDY1LjgxYzE4LjgtLjQsMTcuMTcsNDEuNTUsMTcuMTcsNDEuNTVzLTEzLjY5LDUuMDctMzQuNTguMzNjMCwwLS40Ni0xMy42MSwyLjY4LTI1LjMxIi8+PHBhdGggY2xhc3M9ImY5YTdmYzhkLTdmNTMtNDU2Mi05NjViLTcxYzcwMjFkMDM3MyIgZD0iTTg4LjQ3LDY2Ljc0YTE4LjIyLDE4LjIyLDAsMCwxLDUuMjItLjkzIi8+PHBhdGggY2xhc3M9ImI2MDFhNWQxLTQ1YTAtNDFlYS1hZGIwLWIwMWFjYTVhZWQyMCIgZD0iTTc2LjI4LDEwNy42OXMtMy42MiwyMiwxMS43LDE5Ljc1LDI1LjA3LTUuOTMsMjUuMzUtNS41MywyMiwzNCwyMiwzNGw2LjEzLTMuMTdzLTEwLjg3LTM2LjM0LTIzLjI3LTQyLjkzUzc2LjI4LDEwNy42OSw3Ni4yOCwxMDcuNjlaIi8+PHBvbHlnb24gY2xhc3M9ImIyYzM0OTc2LTlkMGMtNGNmYS1iMmU0LTI5ZGIxOWNhZTk1MyIgcG9pbnRzPSIxMzcuOTggMTYxLjQyIDEzNS4zNCAxNTUuODggMTQxLjQ3IDE1Mi43MiAxNDMuMjEgMTU1LjIzIDE1MC44NyAxNTUuNDIgMTM3Ljk4IDE2MS40MiIvPjxwYXRoIGNsYXNzPSJiNjAxYTVkMS00NWEwLTQxZWEtYWRiMC1iMDFhY2E1YWVkMjAiIGQ9Ik0xMDMuMTYsMTA3LjQyYzExLjU2LS45MiwyNC42Ni01LjY2LDMwLjY0LDIuNjRTMTE1LjE0LDE0MCw5MSwxNDguOTFsLTQtNCwyMS42OS0yMy41N1oiLz48cG9seWdvbiBjbGFzcz0iYjJjMzQ5NzYtOWQwYy00Y2ZhLWIyZTQtMjlkYjE5Y2FlOTUzIiBwb2ludHM9IjgxLjUgMTQ4LjQ0IDg3IDE0NC45NiA5MS4wNCAxNDguOTEgODguODEgMTUxLjAxIDkwLjIxIDE1Ny4zMyA4MS41IDE0OC40NCIvPjxwYXRoIGNsYXNzPSJmMTg1YjI3OC1iYWFkLTQ4MGEtOWMxZS0xY2EwMWVlY2E1YzAiIGQ9Ik05NC4xOCwxMDMuMTRjLTMuMTktLjM0LTYuMTEsMS4xMS02Ljg1LDVhMjQuODIsMjQuODIsMCwwLDAsNy4zNC0uMTFsLjc2LTIuMDdaIi8+PHBhdGggY2xhc3M9ImUwOGQyODUyLTA0M2EtNGEyZC1hZTgzLTYxY2JiYjUzNWVlNiIgZD0iTTk0LjY3LDY1LjgzYzguNDkuNjMsMjUuNTIsMTUuMzUsMjQuNzksMjkuODFTOTQuNjcsMTA4LDk0LjY3LDEwOGwtLjQ5LTQuODQsMTQuNTEtNy44NFoiLz48cGF0aCBjbGFzcz0iZjlhN2ZjOGQtN2Y1My00NTYyLTk2NWItNzFjNzAyMWQwMzczIiBkPSJNOTQuNjcsNjUuODNjOC40OS42MywyNS41MiwxNS4zNSwyNC43OSwyOS44MVM5NC42NywxMDgsOTQuNjcsMTA4bC0uNDktNC44NCwxNC41MS03Ljg0Ii8+PC9nPjwvZz48L3N2Zz4=");


/***/ }),

/***/ "./src/static/index.js":
/*!*****************************!*\
  !*** ./src/static/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ "./src/static/logo.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType; // Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack

 // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("nona/static", {
  title: __("Like & Subscribe", "nona"),
  icon: {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "nona",
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-block podkit-static"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, __("The Binaryville Podcast", "nona")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#"
    }, __("Like & Subscribe!", "nona")))));
  },
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-block podkit-static"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      className: "podkit-logo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_logo_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "podkit-title"
    }, __("The Binaryville Podcast", "nona")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "podkit-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "/subscribe"
    }, __("Like & Subscribe!", "nona")))));
  }
});

/***/ }),

/***/ "./src/static/logo.svg":
/*!*****************************!*\
  !*** ./src/static/logo.svg ***!
  \*****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM12 15v6M8 21h8"
});

var SvgLogo = function SvgLogo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "#000",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0icG9ka2l0LWxvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgPHBhdGggZD0iTTEyIDFhMyAzIDAgMCAwLTMgM3Y4YTMgMyAwIDAgMCA2IDBWNGEzIDMgMCAwIDAtMy0zeiIvPgogICAgPGxpbmUgeDE9IjEyIiB5MT0iMTUiIHgyPSIxMiIgeTI9IjIxIi8+CiAgICA8bGluZSB4MT0iOCIgeTE9IjIxIiB4Mj0iMTYiIHkyPSIyMSIvPgo8L3N2Zz4K");


/***/ }),

/***/ "./src/team/index.js":
/*!***************************!*\
  !*** ./src/team/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    RichText = _wp$blockEditor.RichText;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton; // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("nona/team", {
  title: __("Team Member", "nona"),
  icon: 'groups',
  category: "nona",
  attributes: {
    teamImage: {
      type: "string",
      source: "attribute",
      selector: ".team-card-img img",
      attribute: "src"
    },
    teamName: {
      type: "string",
      source: "html",
      selector: ".team-card-name"
    },
    teamRole: {
      type: "string",
      source: "html",
      selector: ".team-card-role"
    },
    teamDesc: {
      type: "string",
      source: "html",
      selector: ".team-card-description"
    }
  },
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        teamImage = _props$attributes.teamImage,
        teamName = _props$attributes.teamName,
        teamRole = _props$attributes.teamRole,
        teamDesc = _props$attributes.teamDesc;

    var onTeamImageSelect = function onTeamImageSelect(teamImageObject) {
      setAttributes({
        teamImage: teamImageObject.sizes.nonaFeatImg.url
      });
    };

    var onChangeTeamName = function onChangeTeamName(newTeamName) {
      setAttributes({
        teamName: newTeamName
      });
    };

    var onChangeTeamRole = function onChangeTeamRole(newTeamRole) {
      setAttributes({
        teamRole: newTeamRole
      });
    };

    var onChangeTeamDesc = function onChangeTeamDesc(newTeamDesc) {
      setAttributes({
        teamDesc: newTeamDesc
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "team-card-img"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: teamImage,
      alt: ""
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onTeamImageSelect,
      type: "image",
      value: teamImage,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "team-card-img_button",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: __("Select Image.", "nona")
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "team-card-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "team-card-name"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Team Member Name", "nona"),
      value: teamName,
      onChange: onChangeTeamName
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
      className: "team-card-role"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Role | Title", "nona"),
      value: teamRole,
      onChange: onChangeTeamRole
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "team-card-description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Team Member Description", "nona"),
      value: teamDesc,
      onChange: onChangeTeamDesc
    }))));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "team-card-img"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: props.attributes.teamImage,
      alt: ""
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "team-card-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "team-card-name"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.teamName
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
      className: "team-card-role"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.teamRole
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "team-card-description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.teamDesc
    }))));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map