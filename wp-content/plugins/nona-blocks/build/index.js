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
var RichText = wp.blockEditor.RichText; // Import SVG as React component using @svgr/webpack.
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
    }), __("A five day immersive experience where we uncover your passions, mentor you in preparation for adulthood and have fun while doing it.", "nona")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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
    }), __("The program is between December 5th through December 10th, 2020.", "nona"))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#",
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
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".program-illustration-1_svg__a2ebc7be-2eae-47d2-8cad-784a3ae820f8,.program-illustration-1_svg__aa9b0a33-2763-4142-a11c-a9ac26a1900d,.program-illustration-1_svg__bc49122a-af8b-4abc-8c32-a2399ab250e9,.program-illustration-1_svg__bef0efd6-95e1-4596-863d-260b8df51cfb,.program-illustration-1_svg__e1fc0642-fac4-4edc-9945-1f67a058c5ee{stroke-linecap:round;stroke-linejoin:round}.program-illustration-1_svg__a2ebc7be-2eae-47d2-8cad-784a3ae820f8{fill:#1b2d42;stroke:#1b2d42;stroke-width:.77px}.program-illustration-1_svg__aa9b0a33-2763-4142-a11c-a9ac26a1900d,.program-illustration-1_svg__bc49122a-af8b-4abc-8c32-a2399ab250e9,.program-illustration-1_svg__bef0efd6-95e1-4596-863d-260b8df51cfb,.program-illustration-1_svg__e1fc0642-fac4-4edc-9945-1f67a058c5ee{stroke:#1b2d42;stroke-width:.77px}.program-illustration-1_svg__bef0efd6-95e1-4596-863d-260b8df51cfb{fill:#ffc298}.program-illustration-1_svg__bc49122a-af8b-4abc-8c32-a2399ab250e9{fill:none}.program-illustration-1_svg__e1fc0642-fac4-4edc-9945-1f67a058c5ee{fill:#f2db9f}.program-illustration-1_svg__aa9b0a33-2763-4142-a11c-a9ac26a1900d{fill:#d77574}"));

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-1_svg__bf1988a0-6743-4f9a-ba8b-49c24bc182fb",
  "data-name": "Layer 2"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-1_svg__a73bd78c-b472-4299-b577-02223529b8a7",
  "data-name": "OBJECTS"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.5 58.54s11.78-2.28 12.12 9c0 0 7.9-8.91 18.12 0S49.15 52.22 68.27 53.3s23.2 19.86 32.62 18.6 5.55-8.23 23.65-4.38 6.88-15.52 14.9-25.42c4.27-5.28 12.6-4.48 17.06-1.72 0 0-3.74-41.44 42-32.77V134H.5z",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d",
  fill: "#fff",
  strokeWidth: 1.01
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.5 186h198v-55.28s-13.65-5.6-37-9l-1.19-5s-34-5.24-34.14-59.42L119 55.37s-5.29 24.48-14.51 32.49-16.9 1.69-19.11-14.75L78.17 69 73.9 4.12 64.17.51a147.41 147.41 0 0 0-23.55 4.7s-1.71 16.89-1.71 26.14c0 13.12-7.85 17.77-8.19 46.82C30.51 95.53.5 109.1.5 109.1z",
  fill: "#e86433",
  strokeMiterlimit: 10,
  strokeWidth: 1.01,
  stroke: "#211c1d"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__a2ebc7be-2eae-47d2-8cad-784a3ae820f8",
  d: "M90.9 54.34s-9.61-3-6.57-14.45S96.52 29 96.52 29s2.89-10 11-10.08S121 29 113.55 34.74l-9.77 5.86-7.5 13.74z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__bef0efd6-95e1-4596-863d-260b8df51cfb",
  d: "M136.67 101.07c-.09-.86-4.56-2-4.56-2s2.41-.23 2-1.31c-.27-.76-3.51.38-3.51.38s-3.49-1.08-10.83-14.33-7.32-30.33-13.77-37.67c0 0-13.79-.84-3.8 23.36s25.8 32.62 25.8 32.62 4.18 3.89 4.63 3.43-1.26-2.34-1.26-2.34 3.27 2.16 3.67 1.39-2.89-2.48-2.89-2.48 3.94 1.83 4.17.93-3.48-2.46-3.48-2.46 3.92 1.34 3.83.48z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__bef0efd6-95e1-4596-863d-260b8df51cfb",
  d: "M106 46.14s-13.5-.81-4 22.69l4.94-1.12s2-.68 5.73-4.68c-1.78-6.95-3.39-13.17-6.67-16.89zM88.56 84.36l-.79 9.31 19.87-1.18.45-10.08-19.53 1.95z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__bef0efd6-95e1-4596-863d-260b8df51cfb",
  d: "M98.63 46.56l3-9.69s-3-2.15-1.55-5.27c1.2-2.55 3.81-.81 4.11 1.15.58 3.74 3.16.06 3.16.06a5.47 5.47 0 0 0 6.88-.52s.88 12-8.59 9.42l-1.88 6.38zM114.05 151.73l3.97 15.08 4.52-1.54-4.17-15.77-4.32 2.23z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__a2ebc7be-2eae-47d2-8cad-784a3ae820f8",
  d: "M118.02 166.81l.81 4.54 10.66-3.17-5.84-.68-1.11-2.23-4.52 1.54z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M97.62 44.15c5.14-2.23 10.83.48 11.64 12.85s0 30.55 0 30.55-16.07 2.17-29.07 0z",
  fill: "#ffa9c0",
  stroke: "#1b2d42",
  strokeWidth: 0.77,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__bef0efd6-95e1-4596-863d-260b8df51cfb",
  d: "M72.62 144s-6.62 11.86-9.27 17l3.49 2.53a191.65 191.65 0 0 0 10.35-17.1z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__a2ebc7be-2eae-47d2-8cad-784a3ae820f8",
  d: "M63.35 161.04l-2.44 3.81 7.13 5.73-2.16-4.77.96-2.24-3.49-2.53z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__bef0efd6-95e1-4596-863d-260b8df51cfb",
  d: "M97.4 64.9c-2.47 4.39-5.17 8.61-7.34 11.68-7.13 10.09-16.52 23.24-16.52 23.24s.58 7.54-2.47 7.57c-4.7 0-3.77-4.72-3.07-6.49 1-2.59 8.65-28.44 18.27-44.53"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M109.68 38.86a2.16 2.16 0 1 0-2.15 2.14 2.16 2.16 0 0 0 2.15-2.14z",
  fill: "#ffb199",
  stroke: "#1b2d42",
  strokeWidth: 0.77,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M101.86 43.73c-5.3-1.2-10.7 4.46-15.59 12.64A24.49 24.49 0 0 0 97.4 64.9c5.37-9.59 9.6-20.01 4.46-21.17z",
  fill: "#ffa9c0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__bc49122a-af8b-4abc-8c32-a2399ab250e9",
  d: "M103.31 44c-6.85-2.15-12.15 4.23-17 12.41A24.49 24.49 0 0 0 97.4 64.9c1.51-2.71 2.94-5.48 4.08-8.09M70.81 103.9a2.21 2.21 0 0 1 .9 3L58.06 132M51.65 127.11L65 103.24a2.21 2.21 0 0 1 2.57-1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__e1fc0642-fac4-4edc-9945-1f67a058c5ee",
  d: "M25.23 161.49l14.87 8.3 18.9-34.7a6.38 6.38 0 0 0-2.71-8.74l-1.82-.93A16 16 0 0 0 33.08 132l-10.69 19.71a7.23 7.23 0 0 0 2.84 9.78z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__e1fc0642-fac4-4edc-9945-1f67a058c5ee",
  d: "M40.1 169.79l18.9-34.7a6.39 6.39 0 0 0-1.54-8L35.14 167z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__aa9b0a33-2763-4142-a11c-a9ac26a1900d",
  d: "M42.26 132a2.08 2.08 0 1 1-2.07-2.08 2.08 2.08 0 0 1 2.07 2.08z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__a2ebc7be-2eae-47d2-8cad-784a3ae820f8",
  d: "M43 169.38a2.79 2.79 0 1 0-2.78 2.78 2.79 2.79 0 0 0 2.78-2.78z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__aa9b0a33-2763-4142-a11c-a9ac26a1900d",
  d: "M41.39 169.38a1.21 1.21 0 1 0-1.2 1.2 1.2 1.2 0 0 0 1.2-1.2z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M107.68 91.6c-8.67-.51-20.49-.46-20.49-.46-4 17.69-18.56 55.77-18.56 55.77 9.27 8.31 21 6.14 21 6.14 1.83-3.21 3.93-9 6-15.67C97.43 146 99 152.09 99 152.09c16.73 5 24.68-2.89 24.68-2.89z",
  fill: "#68c3c5",
  stroke: "#1b2d42",
  strokeWidth: 0.77,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-1_svg__bc49122a-af8b-4abc-8c32-a2399ab250e9",
  d: "M95.63 137.38s6.65-20.65 8.54-34.79"
})));

var SvgProgramIllustration1 = function SvgProgramIllustration1(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 199.01 186.49"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTkuMDEgMTg2LjQ5Ij4KCTxkZWZzPgoJCTxzdHlsZT4KCQkJLmI4MWIxNzE3LTg1Y2MtNDFhMS1iNTgxLWE3ZTY5MmY5YWExMSB7CgkJCQlmaWxsOiAjZmZmOwoJCQkJc3Ryb2tlLXdpZHRoOiAxLjAxcHg7CgkJCX0KCQkJLmI4MWIxNzE3LTg1Y2MtNDFhMS1iNTgxLWE3ZTY5MmY5YWExMSwKCQkJLmI5MjIwNGE1LTVlYTctNDEwMS1hYmE3LTQ0YjYzNTQyZTcwZCB7CgkJCQlzdHJva2U6ICMyMTFjMWQ7CgkJCX0KCQkJLmEyZWJjN2JlLTJlYWUtNDdkMi04Y2FkLTc4NGEzYWU4MjBmOCwKCQkJLmFhOWIwYTMzLTI3NjMtNDE0Mi1hMTFjLWE5YWMyNmExOTAwZCwKCQkJLmFlMjQ1ZWExLWUxZmMtNGMyYi1hMGQwLTg4MGFjNjM1YTZkNywKCQkJLmI4MWIxNzE3LTg1Y2MtNDFhMS1iNTgxLWE3ZTY5MmY5YWExMSwKCQkJLmJhMmEyN2IyLWM1ZTktNDNjNy05ZjRhLWRkNzAwZmU2ZDA2NiwKCQkJLmJjNDkxMjJhLWFmOGItNGFiYy04YzMyLWEyMzk5YWIyNTBlOSwKCQkJLmJlZjBlZmQ2LTk1ZTEtNDU5Ni04NjNkLTI2MGI4ZGY1MWNmYiwKCQkJLmUxZmMwNjQyLWZhYzQtNGVkYy05OTQ1LTFmNjdhMDU4YzVlZSwKCQkJLmVmNWZkOGJiLWQ4OTYtNDllMS05MWZiLWZkODFkNjhjZjBhMyB7CgkJCQlzdHJva2UtbGluZWNhcDogcm91bmQ7CgkJCQlzdHJva2UtbGluZWpvaW46IHJvdW5kOwoJCQl9CgkJCS5iOTIyMDRhNS01ZWE3LTQxMDEtYWJhNy00NGI2MzU0MmU3MGQgewoJCQkJZmlsbDogI2U4NjQzMzsKCQkJCXN0cm9rZS1taXRlcmxpbWl0OiAxMDsKCQkJCXN0cm9rZS13aWR0aDogMS4wMXB4OwoJCQl9CgkJCS5hMmViYzdiZS0yZWFlLTQ3ZDItOGNhZC03ODRhM2FlODIwZjggewoJCQkJZmlsbDogIzFiMmQ0MjsKCQkJfQoJCQkuYTJlYmM3YmUtMmVhZS00N2QyLThjYWQtNzg0YTNhZTgyMGY4LAoJCQkuYWE5YjBhMzMtMjc2My00MTQyLWExMWMtYTlhYzI2YTE5MDBkLAoJCQkuYWUyNDVlYTEtZTFmYy00YzJiLWEwZDAtODgwYWM2MzVhNmQ3LAoJCQkuYmEyYTI3YjItYzVlOS00M2M3LTlmNGEtZGQ3MDBmZTZkMDY2LAoJCQkuYmM0OTEyMmEtYWY4Yi00YWJjLThjMzItYTIzOTlhYjI1MGU5LAoJCQkuYmVmMGVmZDYtOTVlMS00NTk2LTg2M2QtMjYwYjhkZjUxY2ZiLAoJCQkuZTFmYzA2NDItZmFjNC00ZWRjLTk5NDUtMWY2N2EwNThjNWVlLAoJCQkuZWY1ZmQ4YmItZDg5Ni00OWUxLTkxZmItZmQ4MWQ2OGNmMGEzIHsKCQkJCXN0cm9rZTogIzFiMmQ0MjsKCQkJCXN0cm9rZS13aWR0aDogMC43N3B4OwoJCQl9CgkJCS5iZWYwZWZkNi05NWUxLTQ1OTYtODYzZC0yNjBiOGRmNTFjZmIgewoJCQkJZmlsbDogI2ZmYzI5ODsKCQkJfQoJCQkuYTg5MTk2OGYtN2NhMi00MDQxLWFlMGMtZTQ2Y2Y1NzE3ZWQ4LAoJCQkuYmEyYTI3YjItYzVlOS00M2M3LTlmNGEtZGQ3MDBmZTZkMDY2IHsKCQkJCWZpbGw6ICNmZmE5YzA7CgkJCX0KCQkJLmVmNWZkOGJiLWQ4OTYtNDllMS05MWZiLWZkODFkNjhjZjBhMyB7CgkJCQlmaWxsOiAjZmZiMTk5OwoJCQl9CgkJCS5iYzQ5MTIyYS1hZjhiLTRhYmMtOGMzMi1hMjM5OWFiMjUwZTkgewoJCQkJZmlsbDogbm9uZTsKCQkJfQoJCQkuZTFmYzA2NDItZmFjNC00ZWRjLTk5NDUtMWY2N2EwNThjNWVlIHsKCQkJCWZpbGw6ICNmMmRiOWY7CgkJCX0KCQkJLmFhOWIwYTMzLTI3NjMtNDE0Mi1hMTFjLWE5YWMyNmExOTAwZCB7CgkJCQlmaWxsOiAjZDc3NTc0OwoJCQl9CgkJCS5hZTI0NWVhMS1lMWZjLTRjMmItYTBkMC04ODBhYzYzNWE2ZDcgewoJCQkJZmlsbDogIzY4YzNjNTsKCQkJfQoJCTwvc3R5bGU+Cgk8L2RlZnM+Cgk8ZyBpZD0iYmYxOTg4YTAtNjc0My00ZjlhLWJhOGItNDljMjRiYzE4MmZiIiBkYXRhLW5hbWU9IkxheWVyIDIiPgoJCTxnIGlkPSJhNzNiZDc4Yy1iNDcyLTQyOTktYjU3Ny0wMjIyMzUyOWI4YTciIGRhdGEtbmFtZT0iT0JKRUNUUyI+PHBhdGgKCQkJY2xhc3M9ImI4MWIxNzE3LTg1Y2MtNDFhMS1iNTgxLWE3ZTY5MmY5YWExMSIKCQkJZD0iTS41LDU4LjU0czExLjc4LTIuMjgsMTIuMTIsOWMwLDAsNy45LTguOTEsMTguMTIsMFM0OS4xNSw1Mi4yMiw2OC4yNyw1My4zczIzLjIsMTkuODYsMzIuNjIsMTguNiw1LjU1LTguMjMsMjMuNjUtNC4zOFMxMzEuNDIsNTIsMTM5LjQ0LDQyLjFjNC4yNy01LjI4LDEyLjYtNC40OCwxNy4wNi0xLjcyLDAsMC0zLjc0LTQxLjQ0LDQyLTMyLjc3VjEzNEguNVoiLz48cGF0aAoJCQljbGFzcz0iYjkyMjA0YTUtNWVhNy00MTAxLWFiYTctNDRiNjM1NDJlNzBkIgoJCQlkPSJNLjUsMTg2aDE5OFYxMzAuNzJzLTEzLjY1LTUuNi0zNy05bC0xLjE5LTVzLTM0LTUuMjQtMzQuMTQtNTkuNDJMMTE5LDU1LjM3cy01LjI5LDI0LjQ4LTE0LjUxLDMyLjQ5LTE2LjksMS42OS0xOS4xMS0xNC43NUw3OC4xNyw2OSw3My45LDQuMTIsNjQuMTcuNTFhMTQ3LjQxLDE0Ny40MSwwLDAsMC0yMy41NSw0LjdTMzguOTEsMjIuMSwzOC45MSwzMS4zNWMwLDEzLjEyLTcuODUsMTcuNzctOC4xOSw0Ni44MkMzMC41MSw5NS41My41LDEwOS4xLjUsMTA5LjFaIi8+PHBhdGggY2xhc3M9ImEyZWJjN2JlLTJlYWUtNDdkMi04Y2FkLTc4NGEzYWU4MjBmOCIgZD0iTTkwLjksNTQuMzRzLTkuNjEtMy02LjU3LTE0LjQ1Uzk2LjUyLDI5LDk2LjUyLDI5czIuODktMTAsMTEtMTAuMDhTMTIxLDI5LDExMy41NSwzNC43NGwtOS43Nyw1Ljg2LTcuNSwxMy43NFoiLz48cGF0aAoJCQljbGFzcz0iYmVmMGVmZDYtOTVlMS00NTk2LTg2M2QtMjYwYjhkZjUxY2ZiIgoJCQlkPSJNMTM2LjY3LDEwMS4wN2MtLjA5LS44Ni00LjU2LTItNC41Ni0yczIuNDEtLjIzLDItMS4zMWMtLjI3LS43Ni0zLjUxLjM4LTMuNTEuMzhzLTMuNDktMS4wOC0xMC44My0xNC4zM1MxMTIuNDUsNTMuNDgsMTA2LDQ2LjE0YzAsMC0xMy43OS0uODQtMy44LDIzLjM2UzEyOCwxMDIuMTIsMTI4LDEwMi4xMnM0LjE4LDMuODksNC42MywzLjQzLTEuMjYtMi4zNC0xLjI2LTIuMzQsMy4yNywyLjE2LDMuNjcsMS4zOS0yLjg5LTIuNDgtMi44OS0yLjQ4LDMuOTQsMS44Myw0LjE3LjkzLTMuNDgtMi40Ni0zLjQ4LTIuNDZTMTM2Ljc2LDEwMS45MywxMzYuNjcsMTAxLjA3WiIvPjxwYXRoIGNsYXNzPSJiZWYwZWZkNi05NWUxLTQ1OTYtODYzZC0yNjBiOGRmNTFjZmIiIGQ9Ik0xMDYsNDYuMTRTOTIuNSw0NS4zMywxMDIsNjguODNsNC45NC0xLjEyczItLjY4LDUuNzMtNC42OEMxMTAuODksNTYuMDgsMTA5LjI4LDQ5Ljg2LDEwNiw0Ni4xNFoiLz48cG9seWdvbiBjbGFzcz0iYmVmMGVmZDYtOTVlMS00NTk2LTg2M2QtMjYwYjhkZjUxY2ZiIiBwb2ludHM9Ijg4LjU2IDg0LjM2IDg3Ljc3IDkzLjY3IDEwNy42NCA5Mi40OSAxMDguMDkgODIuNDEgODguNTYgODQuMzYiLz48cGF0aCBjbGFzcz0iYmVmMGVmZDYtOTVlMS00NTk2LTg2M2QtMjYwYjhkZjUxY2ZiIiBkPSJNOTguNjMsNDYuNTZsMy05LjY5cy0zLTIuMTUtMS41NS01LjI3YzEuMi0yLjU1LDMuODEtLjgxLDQuMTEsMS4xNS41OCwzLjc0LDMuMTYuMDYsMy4xNi4wNmE1LjQ3LDUuNDcsMCwwLDAsNi44OC0uNTJzLjg4LDEyLTguNTksOS40MmwtMS44OCw2LjM4WiIvPjxwb2x5Z29uIGNsYXNzPSJiZWYwZWZkNi05NWUxLTQ1OTYtODYzZC0yNjBiOGRmNTFjZmIiIHBvaW50cz0iMTE0LjA1IDE1MS43MyAxMTguMDIgMTY2LjgxIDEyMi41NCAxNjUuMjcgMTE4LjM3IDE0OS41IDExNC4wNSAxNTEuNzMiLz48cG9seWdvbiBjbGFzcz0iYTJlYmM3YmUtMmVhZS00N2QyLThjYWQtNzg0YTNhZTgyMGY4IiBwb2ludHM9IjExOC4wMiAxNjYuODEgMTE4LjgzIDE3MS4zNSAxMjkuNDkgMTY4LjE4IDEyMy42NSAxNjcuNSAxMjIuNTQgMTY1LjI3IDExOC4wMiAxNjYuODEiLz48cGF0aCBjbGFzcz0iYmEyYTI3YjItYzVlOS00M2M3LTlmNGEtZGQ3MDBmZTZkMDY2IiBkPSJNOTcuNjIsNDQuMTVjNS4xNC0yLjIzLDEwLjgzLjQ4LDExLjY0LDEyLjg1czAsMzAuNTUsMCwzMC41NS0xNi4wNywyLjE3LTI5LjA3LDBaIi8+PHBhdGggY2xhc3M9ImJlZjBlZmQ2LTk1ZTEtNDU5Ni04NjNkLTI2MGI4ZGY1MWNmYiIgZD0iTTcyLjYyLDE0NFM2NiwxNTUuODYsNjMuMzUsMTYxbDMuNDksMi41M2ExOTEuNjUsMTkxLjY1LDAsMCwwLDEwLjM1LTE3LjFaIi8+PHBvbHlnb24gY2xhc3M9ImEyZWJjN2JlLTJlYWUtNDdkMi04Y2FkLTc4NGEzYWU4MjBmOCIgcG9pbnRzPSI2My4zNSAxNjEuMDQgNjAuOTEgMTY0Ljg1IDY4LjA0IDE3MC41OCA2NS44OCAxNjUuODEgNjYuODQgMTYzLjU3IDYzLjM1IDE2MS4wNCIvPjxwYXRoIGNsYXNzPSJiZWYwZWZkNi05NWUxLTQ1OTYtODYzZC0yNjBiOGRmNTFjZmIiIGQ9Ik05Ny40LDY0LjljLTIuNDcsNC4zOS01LjE3LDguNjEtNy4zNCwxMS42OEM4Mi45Myw4Ni42Nyw3My41NCw5OS44Miw3My41NCw5OS44MnMuNTgsNy41NC0yLjQ3LDcuNTdjLTQuNywwLTMuNzctNC43Mi0zLjA3LTYuNDksMS0yLjU5LDguNjUtMjguNDQsMTguMjctNDQuNTMiLz48cGF0aCBjbGFzcz0iZWY1ZmQ4YmItZDg5Ni00OWUxLTkxZmItZmQ4MWQ2OGNmMGEzIiBkPSJNMTA5LjY4LDM4Ljg2QTIuMTYsMi4xNiwwLDEsMCwxMDcuNTMsNDEsMi4xNiwyLjE2LDAsMCwwLDEwOS42OCwzOC44NloiLz48cGF0aCBjbGFzcz0iYTg5MTk2OGYtN2NhMi00MDQxLWFlMGMtZTQ2Y2Y1NzE3ZWQ4IiBkPSJNMTAxLjg2LDQzLjczYy01LjMtMS4yLTEwLjcsNC40Ni0xNS41OSwxMi42NEEyNC40OSwyNC40OSwwLDAsMCw5Ny40LDY0LjlDMTAyLjc3LDU1LjMxLDEwNyw0NC44OSwxMDEuODYsNDMuNzNaIi8+PHBhdGggY2xhc3M9ImJjNDkxMjJhLWFmOGItNGFiYy04YzMyLWEyMzk5YWIyNTBlOSIgZD0iTTEwMy4zMSw0NGMtNi44NS0yLjE1LTEyLjE1LDQuMjMtMTcsMTIuNDFBMjQuNDksMjQuNDksMCwwLDAsOTcuNCw2NC45YzEuNTEtMi43MSwyLjk0LTUuNDgsNC4wOC04LjA5Ii8+PHBhdGggY2xhc3M9ImJjNDkxMjJhLWFmOGItNGFiYy04YzMyLWEyMzk5YWIyNTBlOSIgZD0iTTcwLjgxLDEwMy45YTIuMjEsMi4yMSwwLDAsMSwuOSwzTDU4LjA2LDEzMiIvPjxwYXRoIGNsYXNzPSJiYzQ5MTIyYS1hZjhiLTRhYmMtOGMzMi1hMjM5OWFiMjUwZTkiIGQ9Ik01MS42NSwxMjcuMTEsNjUsMTAzLjI0YTIuMjEsMi4yMSwwLDAsMSwyLjU3LTEiLz48cGF0aCBjbGFzcz0iZTFmYzA2NDItZmFjNC00ZWRjLTk5NDUtMWY2N2EwNThjNWVlIiBkPSJNMjUuMjMsMTYxLjQ5bDE0Ljg3LDguM0w1OSwxMzUuMDlhNi4zOCw2LjM4LDAsMCwwLTIuNzEtOC43NGwtMS44Mi0uOTNBMTYsMTYsMCwwLDAsMzMuMDgsMTMyTDIyLjM5LDE1MS43MUE3LjIzLDcuMjMsMCwwLDAsMjUuMjMsMTYxLjQ5WiIvPjxwYXRoIGNsYXNzPSJlMWZjMDY0Mi1mYWM0LTRlZGMtOTk0NS0xZjY3YTA1OGM1ZWUiIGQ9Ik00MC4xLDE2OS43OSw1OSwxMzUuMDlhNi4zOSw2LjM5LDAsMCwwLTEuNTQtOEwzNS4xNCwxNjdaIi8+PHBhdGggY2xhc3M9ImFhOWIwYTMzLTI3NjMtNDE0Mi1hMTFjLWE5YWMyNmExOTAwZCIgZD0iTTQyLjI2LDEzMmEyLjA4LDIuMDgsMCwxLDEtMi4wNy0yLjA4QTIuMDgsMi4wOCwwLDAsMSw0Mi4yNiwxMzJaIi8+PHBhdGggY2xhc3M9ImEyZWJjN2JlLTJlYWUtNDdkMi04Y2FkLTc4NGEzYWU4MjBmOCIgZD0iTTQzLDE2OS4zOGEyLjc5LDIuNzksMCwxLDAtMi43OCwyLjc4QTIuNzksMi43OSwwLDAsMCw0MywxNjkuMzhaIi8+PHBhdGggY2xhc3M9ImFhOWIwYTMzLTI3NjMtNDE0Mi1hMTFjLWE5YWMyNmExOTAwZCIgZD0iTTQxLjM5LDE2OS4zOGExLjIxLDEuMjEsMCwxLDAtMS4yLDEuMkExLjIsMS4yLDAsMCwwLDQxLjM5LDE2OS4zOFoiLz48cGF0aCBjbGFzcz0iYWUyNDVlYTEtZTFmYy00YzJiLWEwZDAtODgwYWM2MzVhNmQ3IiBkPSJNMTA3LjY4LDkxLjZjLTguNjctLjUxLTIwLjQ5LS40Ni0yMC40OS0uNDYtNCwxNy42OS0xOC41Niw1NS43Ny0xOC41Niw1NS43Nyw5LjI3LDguMzEsMjEsNi4xNCwyMSw2LjE0LDEuODMtMy4yMSwzLjkzLTksNi0xNS42N0M5Ny40MywxNDYsOTksMTUyLjA5LDk5LDE1Mi4wOWMxNi43Myw1LDI0LjY4LTIuODksMjQuNjgtMi44OVoiLz48cGF0aCBjbGFzcz0iYmM0OTEyMmEtYWY4Yi00YWJjLThjMzItYTIzOTlhYjI1MGU5IiBkPSJNOTUuNjMsMTM3LjM4czYuNjUtMjAuNjUsOC41NC0zNC43OSIvPjwvZz4KCTwvZz4KPC9zdmc+Cg==");


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
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".program-illustration-2_svg__b1a30052-4937-4ce3-a78b-452309837e24,.program-illustration-2_svg__b37f9c55-40b1-4aa4-bb7d-0856afb9a6fb,.program-illustration-2_svg__b91bbccc-4998-4b9a-80d7-9f5568ee7177,.program-illustration-2_svg__eaade6c3-8354-45fc-944b-e32fe741c531,.program-illustration-2_svg__ee81235e-3eb5-46d5-aefb-7c071914dbc2{stroke-linecap:round;stroke-linejoin:round}.program-illustration-2_svg__b37f9c55-40b1-4aa4-bb7d-0856afb9a6fb{fill:#68c3c5}.program-illustration-2_svg__b1a30052-4937-4ce3-a78b-452309837e24,.program-illustration-2_svg__b37f9c55-40b1-4aa4-bb7d-0856afb9a6fb,.program-illustration-2_svg__b91bbccc-4998-4b9a-80d7-9f5568ee7177,.program-illustration-2_svg__eaade6c3-8354-45fc-944b-e32fe741c531,.program-illustration-2_svg__ee81235e-3eb5-46d5-aefb-7c071914dbc2{stroke:#1b2d42}.program-illustration-2_svg__ee81235e-3eb5-46d5-aefb-7c071914dbc2{fill:none}.program-illustration-2_svg__b91bbccc-4998-4b9a-80d7-9f5568ee7177{fill:#1b2d42}.program-illustration-2_svg__b1a30052-4937-4ce3-a78b-452309837e24,.program-illustration-2_svg__b37f9c55-40b1-4aa4-bb7d-0856afb9a6fb,.program-illustration-2_svg__b91bbccc-4998-4b9a-80d7-9f5568ee7177,.program-illustration-2_svg__eaade6c3-8354-45fc-944b-e32fe741c531,.program-illustration-2_svg__ee81235e-3eb5-46d5-aefb-7c071914dbc2{stroke-width:.77px}.program-illustration-2_svg__eaade6c3-8354-45fc-944b-e32fe741c531{fill:#ffc298}.program-illustration-2_svg__b1a30052-4937-4ce3-a78b-452309837e24{fill:#d77574}"));

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-2_svg__adff24ed-11ba-42cf-b06f-0a72bed27e53"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-2_svg__a81c8fa8-b35d-40b2-b3d1-1cb872269d03"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.5 71.31s5-4.8 9.21-1.52.92 10.39.92 10.39 6.57-6.44 12.6.82c0 0 6.16-9.31 15.33 1a9.46 9.46 0 0 1 7.12-6.16c5.61-1.1 10.26 4.93 10.26 4.93s-5.75-14 5.75-18.76 1.1-12.73 4.39-18.48 10.54-3.33 10.54-3.33-7.12-30.66 25-26c0 0 7.39-12.59 24.64-7.12s14.24 24.1 19.85 26.29 16.34-18.9 31.54-7.37c0 0 7.53-11.91 20.4-3.7v109.05H.5z",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d",
  fill: "#fff"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.5 88.61c32-7.52 71.11 6.43 109.42 9.44S198.05 89 198.05 89v81.19L.5 174.12z",
  fill: "#038c3e",
  strokeWidth: 0.83,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M92.7 156.12s-2.46-53.32-2.26-70.37l21.15-2.7 20.74 3.11s4.11 61.3 4.11 68.74l-7.39.14s-12.18-41.6-17.66-56.43c0 0-7.39 42.76-9.65 57.51z",
  strokeWidth: 0.63,
  stroke: "#1b2d42",
  fill: "#68c3c5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M92.5 92s-1.44 4 4.41 5.61",
  fill: "none",
  strokeWidth: 0.63,
  stroke: "#1b2d42",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b91bbccc-4998-4b9a-80d7-9f5568ee7177",
  d: "M112 29.71c3.27-1.63 5.7-4.47 8-11.14S118.13 6.14 110.5 4 98 4.69 99.87 8.6a17.41 17.41 0 0 1 1.66 7.91s4.4 12 6.33 13.81 3 1.23 3 1.23z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__eaade6c3-8354-45fc-944b-e32fe741c531",
  d: "M103.28 35.92l1.54-7.4a8.29 8.29 0 0 1-8.53-6.67C94.55 14.66 101 7.07 101 7.07l5.65 6.5s-2.53 4.28-1.61 6 2.8-2.11 2.8-2.11 4.16-.09 2.66 4.54a3.24 3.24 0 0 1-3.5 2.45s-.11 3.61 2.43 5.61a2.63 2.63 0 0 0 2.51-.35l-.72 7z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b1a30052-4937-4ce3-a78b-452309837e24",
  d: "M100 10S92 3.22 93.47.85s9.81 5 9.81 5z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b1a30052-4937-4ce3-a78b-452309837e24",
  d: "M98.18 4.81s6.64-7.74 16.91-2.13 5.44 18.76 5.44 18.76-20.16-2.33-22.35-16.63z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__ee81235e-3eb5-46d5-aefb-7c071914dbc2",
  d: "M106.64 16.62a25.86 25.86 0 0 0-3.1 11.85"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M102.42 20.69a2.62 2.62 0 1 0-2.62 2.62 2.62 2.62 0 0 0 2.62-2.62z",
  fill: "#ffb199",
  strokeWidth: 0.77,
  stroke: "#1b2d42",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b37f9c55-40b1-4aa4-bb7d-0856afb9a6fb",
  d: "M75.7 64.61l-17.65-8.93-4.57-27.67 17.66 8.93 4.56 27.67z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#b0d893",
  strokeWidth: 0.77,
  stroke: "#1b2d42",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M85 28.01l-13.86 8.93 4.56 27.67 14.73-7.44L85 28.01z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b37f9c55-40b1-4aa4-bb7d-0856afb9a6fb",
  d: "M104.33 34.79L85 28.01l5.43 29.16 17.15 4.67-3.25-27.05z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M88.8 94.2s29.59 2.06 43.82 0c0 0 .95-61.17-24.24-61.17C83.74 33 88.8 94.2 88.8 94.2z",
  fill: "#f2db9f",
  strokeWidth: 0.77,
  stroke: "#1b2d42",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__eaade6c3-8354-45fc-944b-e32fe741c531",
  d: "M85.85 58.06c-2.94 5.54-5.16 10-5.16 10a62.16 62.16 0 0 1-17.1-8.67s1.83-5 .67-5.29c-.81-.19-1.85 2.1-2.41 3.51l-3.8-1.92-1-5.57C54.43 52.91 56.9 60.85 59 64.5c0 0 7.44 16.64 21.93 18.55 7.91 1 14.67-7.45 18.87-16.43"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M104.1 48.34a22.18 22.18 0 0 0-6.36-10.06c-2.92 3.33-8 12.49-11.89 19.78a64.9 64.9 0 0 0 13.9 8.56c3.51-7.5 5.25-15.34 4.35-18.28z",
  fill: "#f2db9f"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__ee81235e-3eb5-46d5-aefb-7c071914dbc2",
  d: "M97.74 38.28c-2.92 3.33-8 12.49-11.89 19.78a64.9 64.9 0 0 0 13.9 8.56 59.31 59.31 0 0 0 3-7.81"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b91bbccc-4998-4b9a-80d7-9f5568ee7177",
  d: "M109.24 36.29c-8.22-1.22-9.48-.06-9.48-.06l-1.19 1.12a4.61 4.61 0 0 1 .7-3.38c1.11-1.42 4.89-2.12 10.14-2.86s3.46 5.39 3.46 5.39z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b1a30052-4937-4ce3-a78b-452309837e24",
  d: "M108.89 78.28a4.88 4.88 0 0 0 4.11 4.27c6.35 1 19.38 2.7 25.83.5 8.73-3 8.83-19.43 3.19-26a87.78 87.78 0 0 0 .64-16.24 6.79 6.79 0 0 0-3.37-5.42 44.67 44.67 0 0 0-12.91-5.18 7.56 7.56 0 0 0-2.64-.08l-10.28 1.47a4.9 4.9 0 0 0-4.16 4.21 185.4 185.4 0 0 0-.41 42.47z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M118.37 57.06a19.18 19.18 0 0 0-2.46.45s.56 18.76 1.23 23.74c0 0 .09 1 5.83 2.55 5.74.49 12 .56 15.83-.75 8.73-3 8.83-19.43 3.19-26l-12.19-3.78z",
  fill: "#ffa9c0",
  strokeWidth: 0.77,
  stroke: "#1b2d42",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-2_svg__b91bbccc-4998-4b9a-80d7-9f5568ee7177",
  d: "M139.26 35.4a44.67 44.67 0 0 0-12.91-5.18 7.56 7.56 0 0 0-2.64-.08l-6 .86.69 26.06s15.3-1.14 23.62 0a87.78 87.78 0 0 0 .64-16.24 6.79 6.79 0 0 0-3.4-5.42z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.5 166.16s119.5-36.51 197.55-9.95v24.5H.5z",
  fill: "#296573",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d"
})));

var SvgProgramIllustration2 = function SvgProgramIllustration2(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 198.55 181.21"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTguNTUgMTgxLjIxIj4KCTxkZWZzPgoJCTxzdHlsZT4KCQkJLmE1ZGRiM2ExLWNiNGUtNDY1OC1hNmQ4LWJjNGU0YTgxYWMyMiB7CgkJCQlmaWxsOiAjZmZmOwoJCQl9CgkJCS5hNWRkYjNhMS1jYjRlLTQ2NTgtYTZkOC1iYzRlNGE4MWFjMjIsCgkJCS5hOGFjNDRiZS0zYzVmLTRmMTctOTAyNS05ZTQ4MmE4NDc3OWYsCgkJCS5mNDUzMWUyZS0zMzU1LTQ0MzQtYjdkMy02ZjhlZDFkZDkwZDQgewoJCQkJc3Ryb2tlOiAjMjExYzFkOwoJCQl9CgkJCS5hNWRkYjNhMS1jYjRlLTQ2NTgtYTZkOC1iYzRlNGE4MWFjMjIsCgkJCS5hOGFjNDRiZS0zYzVmLTRmMTctOTAyNS05ZTQ4MmE4NDc3OWYsCgkJCS5iMWEzMDA1Mi00OTM3LTRjZTMtYTc4Yi00NTIzMDk4MzdlMjQsCgkJCS5iMzdmOWM1NS00MGIxLTRhYTQtYmI3ZC0wODU2YWZiOWE2ZmIsCgkJCS5iOTFiYmNjYy00OTk4LTRiOWEtODBkNy05ZjU1NjhlZTcxNzcsCgkJCS5iYTA2NGU4OS05OTE4LTQwYTQtYjNjMS0xYzg0NmY5ZjcwZjgsCgkJCS5iY2EzNTM1MC1lZDEzLTRmZWEtYjQ0Yi0wZjMzZDg1ZTE0ZWIsCgkJCS5lYWFkZTZjMy04MzU0LTQ1ZmMtOTQ0Yi1lMzJmZTc0MWM1MzEsCgkJCS5lYmM4YjViOC03ZWJjLTQzNzctYWU4Ny1jYzg1Nzg4ZjA0ZTMsCgkJCS5lZTgxMjM1ZS0zZWI1LTQ2ZDUtYWVmYi03YzA3MTkxNGRiYzIsCgkJCS5mMTU2NTVhNC1hZmEwLTQ4NDAtYmI2Ni04NjkyYzk3YmE2YzAsCgkJCS5mNDUzMWUyZS0zMzU1LTQ0MzQtYjdkMy02ZjhlZDFkZDkwZDQsCgkJCS5mNjViY2U1YS0zM2U0LTQ4YzQtOTBmOC03ODAwZmY1MTNiNzIsCgkJCS5mNzJmZTgzZi0yMDg5LTRmOGItODg5Ni05OWJkYzBjODExZWYgewoJCQkJc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwoJCQkJc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKCQkJfQoJCQkuYThhYzQ0YmUtM2M1Zi00ZjE3LTkwMjUtOWU0ODJhODQ3NzlmIHsKCQkJCWZpbGw6ICMwMzhjM2U7CgkJCQlzdHJva2Utd2lkdGg6IDAuODNweDsKCQkJfQoJCQkuYjM3ZjljNTUtNDBiMS00YWE0LWJiN2QtMDg1NmFmYjlhNmZiLAoJCQkuZjY1YmNlNWEtMzNlNC00OGM0LTkwZjgtNzgwMGZmNTEzYjcyIHsKCQkJCWZpbGw6ICM2OGMzYzU7CgkJCX0KCQkJLmIxYTMwMDUyLTQ5MzctNGNlMy1hNzhiLTQ1MjMwOTgzN2UyNCwKCQkJLmIzN2Y5YzU1LTQwYjEtNGFhNC1iYjdkLTA4NTZhZmI5YTZmYiwKCQkJLmI5MWJiY2NjLTQ5OTgtNGI5YS04MGQ3LTlmNTU2OGVlNzE3NywKCQkJLmJhMDY0ZTg5LTk5MTgtNDBhNC1iM2MxLTFjODQ2ZjlmNzBmOCwKCQkJLmJjYTM1MzUwLWVkMTMtNGZlYS1iNDRiLTBmMzNkODVlMTRlYiwKCQkJLmVhYWRlNmMzLTgzNTQtNDVmYy05NDRiLWUzMmZlNzQxYzUzMSwKCQkJLmViYzhiNWI4LTdlYmMtNDM3Ny1hZTg3LWNjODU3ODhmMDRlMywKCQkJLmVlODEyMzVlLTNlYjUtNDZkNS1hZWZiLTdjMDcxOTE0ZGJjMiwKCQkJLmYxNTY1NWE0LWFmYTAtNDg0MC1iYjY2LTg2OTJjOTdiYTZjMCwKCQkJLmY2NWJjZTVhLTMzZTQtNDhjNC05MGY4LTc4MDBmZjUxM2I3MiwKCQkJLmY3MmZlODNmLTIwODktNGY4Yi04ODk2LTk5YmRjMGM4MTFlZiB7CgkJCQlzdHJva2U6ICMxYjJkNDI7CgkJCX0KCQkJLmJjYTM1MzUwLWVkMTMtNGZlYS1iNDRiLTBmMzNkODVlMTRlYiwKCQkJLmY2NWJjZTVhLTMzZTQtNDhjNC05MGY4LTc4MDBmZjUxM2I3MiB7CgkJCQlzdHJva2Utd2lkdGg6IDAuNjNweDsKCQkJfQoJCQkuYmNhMzUzNTAtZWQxMy00ZmVhLWI0NGItMGYzM2Q4NWUxNGViLAoJCQkuZWU4MTIzNWUtM2ViNS00NmQ1LWFlZmItN2MwNzE5MTRkYmMyIHsKCQkJCWZpbGw6IG5vbmU7CgkJCX0KCQkJLmI5MWJiY2NjLTQ5OTgtNGI5YS04MGQ3LTlmNTU2OGVlNzE3NyB7CgkJCQlmaWxsOiAjMWIyZDQyOwoJCQl9CgkJCS5iMWEzMDA1Mi00OTM3LTRjZTMtYTc4Yi00NTIzMDk4MzdlMjQsCgkJCS5iMzdmOWM1NS00MGIxLTRhYTQtYmI3ZC0wODU2YWZiOWE2ZmIsCgkJCS5iOTFiYmNjYy00OTk4LTRiOWEtODBkNy05ZjU1NjhlZTcxNzcsCgkJCS5iYTA2NGU4OS05OTE4LTQwYTQtYjNjMS0xYzg0NmY5ZjcwZjgsCgkJCS5lYWFkZTZjMy04MzU0LTQ1ZmMtOTQ0Yi1lMzJmZTc0MWM1MzEsCgkJCS5lYmM4YjViOC03ZWJjLTQzNzctYWU4Ny1jYzg1Nzg4ZjA0ZTMsCgkJCS5lZTgxMjM1ZS0zZWI1LTQ2ZDUtYWVmYi03YzA3MTkxNGRiYzIsCgkJCS5mMTU2NTVhNC1hZmEwLTQ4NDAtYmI2Ni04NjkyYzk3YmE2YzAsCgkJCS5mNzJmZTgzZi0yMDg5LTRmOGItODg5Ni05OWJkYzBjODExZWYgewoJCQkJc3Ryb2tlLXdpZHRoOiAwLjc3cHg7CgkJCX0KCQkJLmVhYWRlNmMzLTgzNTQtNDVmYy05NDRiLWUzMmZlNzQxYzUzMSB7CgkJCQlmaWxsOiAjZmZjMjk4OwoJCQl9CgkJCS5iMWEzMDA1Mi00OTM3LTRjZTMtYTc4Yi00NTIzMDk4MzdlMjQgewoJCQkJZmlsbDogI2Q3NzU3NDsKCQkJfQoJCQkuYmEwNjRlODktOTkxOC00MGE0LWIzYzEtMWM4NDZmOWY3MGY4IHsKCQkJCWZpbGw6ICNmZmIxOTk7CgkJCX0KCQkJLmY3MmZlODNmLTIwODktNGY4Yi04ODk2LTk5YmRjMGM4MTFlZiB7CgkJCQlmaWxsOiAjYjBkODkzOwoJCQl9CgkJCS5iZjZkNzc1Zi1kOGMyLTQ2ZjktODM5Zi1lMDQzNTg3MDE0ZWMsCgkJCS5lYmM4YjViOC03ZWJjLTQzNzctYWU4Ny1jYzg1Nzg4ZjA0ZTMgewoJCQkJZmlsbDogI2YyZGI5ZjsKCQkJfQoJCQkuZjE1NjU1YTQtYWZhMC00ODQwLWJiNjYtODY5MmM5N2JhNmMwIHsKCQkJCWZpbGw6ICNmZmE5YzA7CgkJCX0KCQkJLmY0NTMxZTJlLTMzNTUtNDQzNC1iN2QzLTZmOGVkMWRkOTBkNCB7CgkJCQlmaWxsOiAjMjk2NTczOwoJCQl9CgkJPC9zdHlsZT4KCTwvZGVmcz4KCTxnIGlkPSJhZGZmMjRlZC0xMWJhLTQyY2YtYjA2Zi0wYTcyYmVkMjdlNTMiPgoJCTxnIGlkPSJhODFjOGZhOC1iMzVkLTQwYjItYjNkMS0xY2I4NzIyNjlkMDMiPjxwYXRoCgkJCWNsYXNzPSJhNWRkYjNhMS1jYjRlLTQ2NTgtYTZkOC1iYzRlNGE4MWFjMjIiCgkJCWQ9Ik0uNSw3MS4zMXM1LTQuOCw5LjIxLTEuNTIuOTIsMTAuMzkuOTIsMTAuMzksNi41Ny02LjQ0LDEyLjYuODJjMCwwLDYuMTYtOS4zMSwxNS4zMywxYTkuNDYsOS40NiwwLDAsMSw3LjEyLTYuMTZjNS42MS0xLjEsMTAuMjYsNC45MywxMC4yNiw0Ljkzcy01Ljc1LTE0LDUuNzUtMTguNzYsMS4xLTEyLjczLDQuMzktMTguNDhTNzYuNjIsNDAuMiw3Ni42Miw0MC4ycy03LjEyLTMwLjY2LDI1LTI2YzAsMCw3LjM5LTEyLjU5LDI0LjY0LTcuMTJzMTQuMjQsMjQuMSwxOS44NSwyNi4yOVMxNjIuNDUsMTQuNDcsMTc3LjY1LDI2YzAsMCw3LjUzLTExLjkxLDIwLjQtMy43VjEzMS4zNUguNVoiLz48cGF0aCBjbGFzcz0iYThhYzQ0YmUtM2M1Zi00ZjE3LTkwMjUtOWU0ODJhODQ3NzlmIiBkPSJNLjUsODguNjFjMzItNy41Miw3MS4xMSw2LjQzLDEwOS40Miw5LjQ0UzE5OC4wNSw4OSwxOTguMDUsODl2ODEuMTlMLjUsMTc0LjEyWiIvPjxwYXRoIGNsYXNzPSJmNjViY2U1YS0zM2U0LTQ4YzQtOTBmOC03ODAwZmY1MTNiNzIiIGQ9Ik05Mi43LDE1Ni4xMnMtMi40Ni01My4zMi0yLjI2LTcwLjM3bDIxLjE1LTIuNywyMC43NCwzLjExczQuMTEsNjEuMyw0LjExLDY4Ljc0bC03LjM5LjE0cy0xMi4xOC00MS42LTE3LjY2LTU2LjQzYzAsMC03LjM5LDQyLjc2LTkuNjUsNTcuNTFaIi8+PHBhdGggY2xhc3M9ImJjYTM1MzUwLWVkMTMtNGZlYS1iNDRiLTBmMzNkODVlMTRlYiIgZD0iTTkyLjUsOTJzLTEuNDQsNCw0LjQxLDUuNjEiLz48cGF0aCBjbGFzcz0iYjkxYmJjY2MtNDk5OC00YjlhLTgwZDctOWY1NTY4ZWU3MTc3IiBkPSJNMTEyLDI5LjcxYzMuMjctMS42Myw1LjctNC40Nyw4LTExLjE0UzExOC4xMyw2LjE0LDExMC41LDQsOTgsNC42OSw5OS44Nyw4LjZhMTcuNDEsMTcuNDEsMCwwLDEsMS42Niw3LjkxczQuNCwxMiw2LjMzLDEzLjgxLDMsMS4yMywzLDEuMjNaIi8+PHBhdGgKCQkJY2xhc3M9ImVhYWRlNmMzLTgzNTQtNDVmYy05NDRiLWUzMmZlNzQxYzUzMSIKCQkJZD0iTTEwMy4yOCwzNS45MmwxLjU0LTcuNGE4LjI5LDguMjksMCwwLDEtOC41My02LjY3Qzk0LjU1LDE0LjY2LDEwMSw3LjA3LDEwMSw3LjA3bDUuNjUsNi41cy0yLjUzLDQuMjgtMS42MSw2LDIuOC0yLjExLDIuOC0yLjExUzExMiwxNy4zNywxMTAuNSwyMkEzLjI0LDMuMjQsMCwwLDEsMTA3LDI0LjQ1cy0uMTEsMy42MSwyLjQzLDUuNjFhMi42MywyLjYzLDAsMCwwLDIuNTEtLjM1bC0uNzIsN1oiLz48cGF0aCBjbGFzcz0iYjFhMzAwNTItNDkzNy00Y2UzLWE3OGItNDUyMzA5ODM3ZTI0IiBkPSJNMTAwLDEwUzkyLDMuMjIsOTMuNDcuODVzOS44MSw1LDkuODEsNVoiLz48cGF0aCBjbGFzcz0iYjFhMzAwNTItNDkzNy00Y2UzLWE3OGItNDUyMzA5ODM3ZTI0IiBkPSJNOTguMTgsNC44MXM2LjY0LTcuNzQsMTYuOTEtMi4xMyw1LjQ0LDE4Ljc2LDUuNDQsMTguNzZTMTAwLjM3LDE5LjExLDk4LjE4LDQuODFaIi8+PHBhdGggY2xhc3M9ImVlODEyMzVlLTNlYjUtNDZkNS1hZWZiLTdjMDcxOTE0ZGJjMiIgZD0iTTEwNi42NCwxNi42MmEyNS44NiwyNS44NiwwLDAsMC0zLjEsMTEuODUiLz4KCQkJPHBhdGggY2xhc3M9ImJhMDY0ZTg5LTk5MTgtNDBhNC1iM2MxLTFjODQ2ZjlmNzBmOCIgZD0iTTEwMi40MiwyMC42OWEyLjYyLDIuNjIsMCwxLDAtMi42MiwyLjYyQTIuNjIsMi42MiwwLDAsMCwxMDIuNDIsMjAuNjlaIi8+PHBvbHlnb24gY2xhc3M9ImIzN2Y5YzU1LTQwYjEtNGFhNC1iYjdkLTA4NTZhZmI5YTZmYiIgcG9pbnRzPSI3NS43IDY0LjYxIDU4LjA1IDU1LjY4IDUzLjQ4IDI4LjAxIDcxLjE0IDM2Ljk0IDc1LjcgNjQuNjEiLz48cG9seWdvbiBjbGFzcz0iZjcyZmU4M2YtMjA4OS00ZjhiLTg4OTYtOTliZGMwYzgxMWVmIiBwb2ludHM9Ijg1IDI4LjAxIDcxLjE0IDM2Ljk0IDc1LjcgNjQuNjEgOTAuNDMgNTcuMTcgODUgMjguMDEiLz48cG9seWdvbiBjbGFzcz0iYjM3ZjljNTUtNDBiMS00YWE0LWJiN2QtMDg1NmFmYjlhNmZiIiBwb2ludHM9IjEwNC4zMyAzNC43OSA4NSAyOC4wMSA5MC40MyA1Ny4xNyAxMDcuNTggNjEuODQgMTA0LjMzIDM0Ljc5Ii8+PHBhdGggY2xhc3M9ImViYzhiNWI4LTdlYmMtNDM3Ny1hZTg3LWNjODU3ODhmMDRlMyIgZD0iTTg4LjgsOTQuMnMyOS41OSwyLjA2LDQzLjgyLDBjMCwwLC45NS02MS4xNy0yNC4yNC02MS4xN0M4My43NCwzMyw4OC44LDk0LjIsODguOCw5NC4yWiIvPgoJCQk8cGF0aAoJCQljbGFzcz0iZWFhZGU2YzMtODM1NC00NWZjLTk0NGItZTMyZmU3NDFjNTMxIgoJCQlkPSJNODUuODUsNTguMDZjLTIuOTQsNS41NC01LjE2LDEwLTUuMTYsMTBhNjIuMTYsNjIuMTYsMCwwLDEtMTcuMS04LjY3czEuODMtNSwuNjctNS4yOWMtLjgxLS4xOS0xLjg1LDIuMS0yLjQxLDMuNTFsLTMuOC0xLjkyLTEtNS41N0M1NC40Myw1Mi45MSw1Ni45LDYwLjg1LDU5LDY0LjVjMCwwLDcuNDQsMTYuNjQsMjEuOTMsMTguNTUsNy45MSwxLDE0LjY3LTcuNDUsMTguODctMTYuNDMiLz48cGF0aCBjbGFzcz0iYmY2ZDc3NWYtZDhjMi00NmY5LTgzOWYtZTA0MzU4NzAxNGVjIiBkPSJNMTA0LjEsNDguMzRhMjIuMTgsMjIuMTgsMCwwLDAtNi4zNi0xMC4wNmMtMi45MiwzLjMzLTgsMTIuNDktMTEuODksMTkuNzhhNjQuOSw2NC45LDAsMCwwLDEzLjksOC41NkMxMDMuMjYsNTkuMTIsMTA1LDUxLjI4LDEwNC4xLDQ4LjM0WiIvPjxwYXRoIGNsYXNzPSJlZTgxMjM1ZS0zZWI1LTQ2ZDUtYWVmYi03YzA3MTkxNGRiYzIiIGQ9Ik05Ny43NCwzOC4yOGMtMi45MiwzLjMzLTgsMTIuNDktMTEuODksMTkuNzhhNjQuOSw2NC45LDAsMCwwLDEzLjksOC41Niw1OS4zMSw1OS4zMSwwLDAsMCwzLTcuODEiLz48cGF0aCBjbGFzcz0iYjkxYmJjY2MtNDk5OC00YjlhLTgwZDctOWY1NTY4ZWU3MTc3IiBkPSJNMTA5LjI0LDM2LjI5Yy04LjIyLTEuMjItOS40OC0uMDYtOS40OC0uMDZsLTEuMTksMS4xMmE0LjYxLDQuNjEsMCwwLDEsLjctMy4zOGMxLjExLTEuNDIsNC44OS0yLjEyLDEwLjE0LTIuODZzMy40Niw1LjM5LDMuNDYsNS4zOVoiLz48cGF0aAoJCQljbGFzcz0iYjFhMzAwNTItNDkzNy00Y2UzLWE3OGItNDUyMzA5ODM3ZTI0IgoJCQlkPSJNMTA4Ljg5LDc4LjI4QTQuODgsNC44OCwwLDAsMCwxMTMsODIuNTVjNi4zNSwxLDE5LjM4LDIuNywyNS44My41LDguNzMtMyw4LjgzLTE5LjQzLDMuMTktMjZhODcuNzgsODcuNzgsMCwwLDAsLjY0LTE2LjI0LDYuNzksNi43OSwwLDAsMC0zLjM3LTUuNDIsNDQuNjcsNDQuNjcsMCwwLDAtMTIuOTEtNS4xOCw3LjU2LDcuNTYsMCwwLDAtMi42NC0uMDhMMTEzLjQ2LDMxLjZhNC45LDQuOSwwLDAsMC00LjE2LDQuMjFBMTg1LjQsMTg1LjQsMCwwLDAsMTA4Ljg5LDc4LjI4WiIvPjxwYXRoIGNsYXNzPSJmMTU2NTVhNC1hZmEwLTQ4NDAtYmI2Ni04NjkyYzk3YmE2YzAiIGQ9Ik0xMTguMzcsNTcuMDZhMTkuMTgsMTkuMTgsMCwwLDAtMi40Ni40NXMuNTYsMTguNzYsMS4yMywyMy43NGMwLDAsLjA5LDEsNS44MywyLjU1LDUuNzQuNDksMTIsLjU2LDE1LjgzLS43NSw4LjczLTMsOC44My0xOS40MywzLjE5LTI2TDEyOS44LDUzLjI3WiIvPjxwYXRoIGNsYXNzPSJiOTFiYmNjYy00OTk4LTRiOWEtODBkNy05ZjU1NjhlZTcxNzciIGQ9Ik0xMzkuMjYsMzUuNGE0NC42Nyw0NC42NywwLDAsMC0xMi45MS01LjE4LDcuNTYsNy41NiwwLDAsMC0yLjY0LS4wOGwtNiwuODYuNjksMjYuMDZzMTUuMy0xLjE0LDIzLjYyLDBhODcuNzgsODcuNzgsMCwwLDAsLjY0LTE2LjI0QTYuNzksNi43OSwwLDAsMCwxMzkuMjYsMzUuNFoiLz48cGF0aCBjbGFzcz0iZjQ1MzFlMmUtMzM1NS00NDM0LWI3ZDMtNmY4ZWQxZGQ5MGQ0IiBkPSJNLjUsMTY2LjE2UzEyMCwxMjkuNjUsMTk4LjA1LDE1Ni4yMXYyNC41SC41WiIvPjwvZz4KCTwvZz4KPC9zdmc+Cg==");


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
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".program-illustration-3_svg__a293a69a-329a-48a5-b90c-33417d6bdf53,.program-illustration-3_svg__b055db2b-7412-4a5f-bf95-76856b17c9e9,.program-illustration-3_svg__e588ed88-6ef3-4031-a5fc-a409b9b153c1,.program-illustration-3_svg__e5905461-488b-4e15-bf06-f11c93e192b6,.program-illustration-3_svg__f6e7a54d-7203-475f-b588-af5262fad6a4{stroke-linecap:round;stroke-linejoin:round}.program-illustration-3_svg__f6e7a54d-7203-475f-b588-af5262fad6a4{fill:#fff}.program-illustration-3_svg__b469f2d8-390c-4ff0-a72c-ea251993868b,.program-illustration-3_svg__e5905461-488b-4e15-bf06-f11c93e192b6{fill:#d77574}.program-illustration-3_svg__a293a69a-329a-48a5-b90c-33417d6bdf53,.program-illustration-3_svg__b055db2b-7412-4a5f-bf95-76856b17c9e9,.program-illustration-3_svg__e588ed88-6ef3-4031-a5fc-a409b9b153c1,.program-illustration-3_svg__e5905461-488b-4e15-bf06-f11c93e192b6,.program-illustration-3_svg__f6e7a54d-7203-475f-b588-af5262fad6a4{stroke:#1b2d42;stroke-width:.77px}.program-illustration-3_svg__e588ed88-6ef3-4031-a5fc-a409b9b153c1{fill:#915d3a}.program-illustration-3_svg__b055db2b-7412-4a5f-bf95-76856b17c9e9{fill:none}.program-illustration-3_svg__a293a69a-329a-48a5-b90c-33417d6bdf53{fill:#1b2d42}"));

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-3_svg__a9921270-53de-4b51-a7a5-4eeae045e900",
  "data-name": "Layer 2"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  id: "program-illustration-3_svg__b9839424-aaeb-4d5b-b36e-196d17045509",
  "data-name": "OBJECTS"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d",
  fill: "#56c9f5",
  strokeWidth: 1.01,
  d: "M.51 92.8h198v48.12H.51z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M198.51 4.84a25.37 25.37 0 0 0-3.59-1.55C158.05-9.39 160.68 25 166.06 31.14s.56 13.79-11.32 15-8 14.54-8 14.54c-7.32 1.45-5.11 9.23-5.11 9.23-13-4.92-16.15 5.76-16.15 5.76-21.69-15.42-34.94 4.33-44.35 5.9s-11.44-8.36-21.94-9.71-15.6 9.43-15.6 9.43S38.9 69 29.51 67.08a19.4 19.4 0 0 0-15.74 3.48C15 54.54.51 52.24.51 52.24V92.8h198z",
  strokeWidth: 1.01,
  fill: "#fff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  cx: 33.29,
  cy: 32.1,
  rx: 11.59,
  ry: 11.98,
  fill: "#f2db9f",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__e5905461-488b-4e15-bf06-f11c93e192b6",
  d: "M91.06 70c-11.42 1.86-25.07 15.37-33 72.2l6 1s10.3-36.63 17.48-49z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.51 140.55s103.14-17.53 198-3.92V200H.51z",
  fill: "#e86433",
  strokeWidth: 1.02,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: "#211c1d"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M92.52 64.23s-5.29 3.25-7.38-2c0 0-10-3.75-5-13 0 0-1.88-10.37 10.45-8.7 0 0 5.42-7.33 12.36-.19 2.68 2.77 2.32 6.5.87 10 0 0 4.11 6.55-4.8 10.92z",
  fill: "#68c3c5",
  stroke: "#1b2d42",
  strokeWidth: 0.77,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__e588ed88-6ef3-4031-a5fc-a409b9b153c1",
  d: "M95.77 71.86V65s7.75 1.32 7.2-5.78-4.11-9.61-4.11-9.61-3.76 5.57-7.8 4.46c0 0-1.53-2.23-3.48-.7s-.7 6.33 2.5 7.37l.23 11.13z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__e5905461-488b-4e15-bf06-f11c93e192b6",
  d: "M97.51 60.73a2.32 2.32 0 1 0-2.32 2.32 2.32 2.32 0 0 0 2.32-2.32z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__b469f2d8-390c-4ff0-a72c-ea251993868b",
  d: "M76.29 113.88S74.9 70 93.7 69.59s17.17 44 17.17 44-13.68 5.31-34.58.29z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__b055db2b-7412-4a5f-bf95-76856b17c9e9",
  d: "M93.7 69.59c18.81-.42 17.17 44 17.17 44s-13.68 5.36-34.58.34c0 0-.45-14.39 2.69-26.76M88.48 70.58a17.22 17.22 0 0 1 5.22-1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__a293a69a-329a-48a5-b90c-33417d6bdf53",
  d: "M76.29 113.88S72.67 137.14 88 134.77s25.07-6.26 25.35-5.85 22 35.94 22 35.94l6.13-3.34s-10.86-38.45-23.26-45.41-41.93-2.23-41.93-2.23z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__f6e7a54d-7203-475f-b588-af5262fad6a4",
  d: "M138 170.71l-2.65-5.85 6.13-3.34 1.74 2.64 7.66.21-12.88 6.34z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__a293a69a-329a-48a5-b90c-33417d6bdf53",
  d: "M103.18 113.6c11.56-1 24.65-6 30.64 2.79S115.15 148 91.06 157.48l-4-4.18 21.68-24.93z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__f6e7a54d-7203-475f-b588-af5262fad6a4",
  d: "M81.52 156.99l5.5-3.69 4.04 4.18-2.23 2.23 1.39 6.68-8.7-9.4z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__e588ed88-6ef3-4031-a5fc-a409b9b153c1",
  d: "M94.19 109.08c-3.18-.37-6.11 1.16-6.84 5.23a23.2 23.2 0 0 0 7.34-.12l.76-2.19z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__b469f2d8-390c-4ff0-a72c-ea251993868b",
  d: "M94.69 69.61c8.49.67 25.51 16.24 24.78 31.53s-24.78 13-24.78 13l-.5-5.11 14.51-8.3z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "program-illustration-3_svg__b055db2b-7412-4a5f-bf95-76856b17c9e9",
  d: "M94.69 69.61c8.49.67 25.51 16.24 24.78 31.53s-24.78 13-24.78 13l-.5-5.11 14.51-8.3"
})));

var SvgProgramIllustration3 = function SvgProgramIllustration3(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 199.02 200.48"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTkuMDIgMjAwLjQ4Ij4KCTxkZWZzPgoJCTxzdHlsZT4KCQkJLmU5OTZlOTk5LTI0ZDEtNDBjYS04ZDA2LTQ0ZWQ2MWZlYTBmNSB7CgkJCQlmaWxsOiAjNTZjOWY1OwoJCQkJc3Ryb2tlLXdpZHRoOiAxLjAxcHg7CgkJCX0KCQkJLmEyNTQ2OGM2LWI2OGUtNDczNS04NWZkLTA2ZjhiYzBiNzE1YywKCQkJLmFjM2U3OWFmLTc3YWEtNGRlZi04ZjVjLWYwYzY0Njg2ZDdiOCwKCQkJLmIwNzZiMGU2LTgwMWYtNGQyNy1hYTk2LTFkZGYwMjM0MmY3YSwKCQkJLmU5OTZlOTk5LTI0ZDEtNDBjYS04ZDA2LTQ0ZWQ2MWZlYTBmNSB7CgkJCQlzdHJva2U6ICMyMTFjMWQ7CgkJCX0KCQkJLmEyNTQ2OGM2LWI2OGUtNDczNS04NWZkLTA2ZjhiYzBiNzE1YywKCQkJLmEyOTNhNjlhLTMyOWEtNDhhNS1iOTBjLTMzNDE3ZDZiZGY1MywKCQkJLmFjM2U3OWFmLTc3YWEtNGRlZi04ZjVjLWYwYzY0Njg2ZDdiOCwKCQkJLmIwNTVkYjJiLTc0MTItNGE1Zi1iZjk1LTc2ODU2YjE3YzllOSwKCQkJLmIwNmY3YTNhLTllYTQtNDQ2YS1hODAxLTY1MzYzZjkzNGFiNywKCQkJLmIwNzZiMGU2LTgwMWYtNGQyNy1hYTk2LTFkZGYwMjM0MmY3YSwKCQkJLmU1ODhlZDg4LTZlZjMtNDAzMS1hNWZjLWE0MDliOWIxNTNjMSwKCQkJLmU1OTA1NDYxLTQ4OGItNGUxNS1iZjA2LWYxMWM5M2UxOTJiNiwKCQkJLmU5OTZlOTk5LTI0ZDEtNDBjYS04ZDA2LTQ0ZWQ2MWZlYTBmNSwKCQkJLmY2ZTdhNTRkLTcyMDMtNDc1Zi1iNTg4LWFmNTI2MmZhZDZhNCB7CgkJCQlzdHJva2UtbGluZWNhcDogcm91bmQ7CgkJCQlzdHJva2UtbGluZWpvaW46IHJvdW5kOwoJCQl9CgkJCS5hMjU0NjhjNi1iNjhlLTQ3MzUtODVmZC0wNmY4YmMwYjcxNWMsCgkJCS5mNmU3YTU0ZC03MjAzLTQ3NWYtYjU4OC1hZjUyNjJmYWQ2YTQgewoJCQkJZmlsbDogI2ZmZjsKCQkJfQoJCQkuYTI1NDY4YzYtYjY4ZS00NzM1LTg1ZmQtMDZmOGJjMGI3MTVjIHsKCQkJCXN0cm9rZS13aWR0aDogMS4wMXB4OwoJCQl9CgkJCS5iMDc2YjBlNi04MDFmLTRkMjctYWE5Ni0xZGRmMDIzNDJmN2EgewoJCQkJZmlsbDogI2YyZGI5ZjsKCQkJCXN0cm9rZS13aWR0aDogMXB4OwoJCQl9CgkJCS5iNDY5ZjJkOC0zOTBjLTRmZjAtYTcyYy1lYTI1MTk5Mzg2OGIsCgkJCS5lNTkwNTQ2MS00ODhiLTRlMTUtYmYwNi1mMTFjOTNlMTkyYjYgewoJCQkJZmlsbDogI2Q3NzU3NDsKCQkJfQoJCQkuYTI5M2E2OWEtMzI5YS00OGE1LWI5MGMtMzM0MTdkNmJkZjUzLAoJCQkuYjA1NWRiMmItNzQxMi00YTVmLWJmOTUtNzY4NTZiMTdjOWU5LAoJCQkuYjA2ZjdhM2EtOWVhNC00NDZhLWE4MDEtNjUzNjNmOTM0YWI3LAoJCQkuZTU4OGVkODgtNmVmMy00MDMxLWE1ZmMtYTQwOWI5YjE1M2MxLAoJCQkuZTU5MDU0NjEtNDg4Yi00ZTE1LWJmMDYtZjExYzkzZTE5MmI2LAoJCQkuZjZlN2E1NGQtNzIwMy00NzVmLWI1ODgtYWY1MjYyZmFkNmE0IHsKCQkJCXN0cm9rZTogIzFiMmQ0MjsKCQkJCXN0cm9rZS13aWR0aDogMC43N3B4OwoJCQl9CgkJCS5hYzNlNzlhZi03N2FhLTRkZWYtOGY1Yy1mMGM2NDY4NmQ3YjggewoJCQkJZmlsbDogI2U4NjQzMzsKCQkJCXN0cm9rZS13aWR0aDogMS4wMnB4OwoJCQl9CgkJCS5iMDZmN2EzYS05ZWE0LTQ0NmEtYTgwMS02NTM2M2Y5MzRhYjcgewoJCQkJZmlsbDogIzY4YzNjNTsKCQkJfQoJCQkuZTU4OGVkODgtNmVmMy00MDMxLWE1ZmMtYTQwOWI5YjE1M2MxIHsKCQkJCWZpbGw6ICM5MTVkM2E7CgkJCX0KCQkJLmIwNTVkYjJiLTc0MTItNGE1Zi1iZjk1LTc2ODU2YjE3YzllOSB7CgkJCQlmaWxsOiBub25lOwoJCQl9CgkJCS5hMjkzYTY5YS0zMjlhLTQ4YTUtYjkwYy0zMzQxN2Q2YmRmNTMgewoJCQkJZmlsbDogIzFiMmQ0MjsKCQkJfQoJCTwvc3R5bGU+Cgk8L2RlZnM+Cgk8ZyBpZD0iYTk5MjEyNzAtNTNkZS00YjUxLWE3YTUtNGVlYWUwNDVlOTAwIiBkYXRhLW5hbWU9IkxheWVyIDIiPgoJCTxnIGlkPSJiOTgzOTQyNC1hYWViLTRkNWItYjM2ZS0xOTZkMTcwNDU1MDkiIGRhdGEtbmFtZT0iT0JKRUNUUyI+PHJlY3QgY2xhc3M9ImU5OTZlOTk5LTI0ZDEtNDBjYS04ZDA2LTQ0ZWQ2MWZlYTBmNSIgeD0iMC41MSIgeT0iOTIuOCIgd2lkdGg9IjE5OCIgaGVpZ2h0PSI0OC4xMiIvPjxwYXRoCgkJCWNsYXNzPSJhMjU0NjhjNi1iNjhlLTQ3MzUtODVmZC0wNmY4YmMwYjcxNWMiCgkJCWQ9Ik0xOTguNTEsNC44NGEyNS4zNywyNS4zNywwLDAsMC0zLjU5LTEuNTVDMTU4LjA1LTkuMzksMTYwLjY4LDI1LDE2Ni4wNiwzMS4xNHMuNTYsMTMuNzktMTEuMzIsMTUtOCwxNC41NC04LDE0LjU0Yy03LjMyLDEuNDUtNS4xMSw5LjIzLTUuMTEsOS4yMy0xMy00LjkyLTE2LjE1LDUuNzYtMTYuMTUsNS43NkMxMDMuNzksNjAuMjUsOTAuNTQsODAsODEuMTMsODEuNTdzLTExLjQ0LTguMzYtMjEuOTQtOS43MS0xNS42LDkuNDMtMTUuNiw5LjQzUzM4LjksNjksMjkuNTEsNjcuMDhhMTkuNCwxOS40LDAsMCwwLTE1Ljc0LDMuNDhDMTUsNTQuNTQuNTEsNTIuMjQuNTEsNTIuMjRWOTIuOGgxOThaIi8+PGVsbGlwc2UgY2xhc3M9ImIwNzZiMGU2LTgwMWYtNGQyNy1hYTk2LTFkZGYwMjM0MmY3YSIgY3g9IjMzLjI5IiBjeT0iMzIuMSIgcng9IjExLjU5IiByeT0iMTEuOTgiLz48cGF0aCBjbGFzcz0iZTU5MDU0NjEtNDg4Yi00ZTE1LWJmMDYtZjExYzkzZTE5MmI2IiBkPSJNOTEuMDYsNzBjLTExLjQyLDEuODYtMjUuMDcsMTUuMzctMzMsNzIuMmw2LDFzMTAuMy0zNi42MywxNy40OC00OVoiLz48cGF0aCBjbGFzcz0iYWMzZTc5YWYtNzdhYS00ZGVmLThmNWMtZjBjNjQ2ODZkN2I4IiBkPSJNLjUxLDE0MC41NXMxMDMuMTQtMTcuNTMsMTk4LTMuOTJWMjAwSC41MVoiLz48cGF0aCBjbGFzcz0iYjA2ZjdhM2EtOWVhNC00NDZhLWE4MDEtNjUzNjNmOTM0YWI3IiBkPSJNOTIuNTIsNjQuMjNzLTUuMjksMy4yNS03LjM4LTJjMCwwLTEwLTMuNzUtNS0xMywwLDAtMS44OC0xMC4zNywxMC40NS04LjcsMCwwLDUuNDItNy4zMywxMi4zNi0uMTksMi42OCwyLjc3LDIuMzIsNi41Ljg3LDEwLDAsMCw0LjExLDYuNTUtNC44LDEwLjkyWiIvPjxwYXRoIGNsYXNzPSJlNTg4ZWQ4OC02ZWYzLTQwMzEtYTVmYy1hNDA5YjliMTUzYzEiIGQ9Ik05NS43Nyw3MS44NlY2NXM3Ljc1LDEuMzIsNy4yLTUuNzgtNC4xMS05LjYxLTQuMTEtOS42MS0zLjc2LDUuNTctNy44LDQuNDZjMCwwLTEuNTMtMi4yMy0zLjQ4LS43cy0uNyw2LjMzLDIuNSw3LjM3bC4yMywxMS4xM1oiLz48cGF0aCBjbGFzcz0iZTU5MDU0NjEtNDg4Yi00ZTE1LWJmMDYtZjExYzkzZTE5MmI2IiBkPSJNOTcuNTEsNjAuNzNhMi4zMiwyLjMyLDAsMSwwLTIuMzIsMi4zMkEyLjMyLDIuMzIsMCwwLDAsOTcuNTEsNjAuNzNaIi8+PHBhdGggY2xhc3M9ImI0NjlmMmQ4LTM5MGMtNGZmMC1hNzJjLWVhMjUxOTkzODY4YiIgZD0iTTc2LjI5LDExMy44OFM3NC45LDcwLDkzLjcsNjkuNTlzMTcuMTcsNDQsMTcuMTcsNDRTOTcuMTksMTE4LjksNzYuMjksMTEzLjg4WiIvPjxwYXRoIGNsYXNzPSJiMDU1ZGIyYi03NDEyLTRhNWYtYmY5NS03Njg1NmIxN2M5ZTkiIGQ9Ik05My43LDY5LjU5YzE4LjgxLS40MiwxNy4xNyw0NCwxNy4xNyw0NHMtMTMuNjgsNS4zNi0zNC41OC4zNGMwLDAtLjQ1LTE0LjM5LDIuNjktMjYuNzYiLz48cGF0aCBjbGFzcz0iYjA1NWRiMmItNzQxMi00YTVmLWJmOTUtNzY4NTZiMTdjOWU5IiBkPSJNODguNDgsNzAuNThhMTcuMjIsMTcuMjIsMCwwLDEsNS4yMi0xIi8+PHBhdGggY2xhc3M9ImEyOTNhNjlhLTMyOWEtNDhhNS1iOTBjLTMzNDE3ZDZiZGY1MyIgZD0iTTc2LjI5LDExMy44OFM3Mi42NywxMzcuMTQsODgsMTM0Ljc3czI1LjA3LTYuMjYsMjUuMzUtNS44NSwyMiwzNS45NCwyMiwzNS45NGw2LjEzLTMuMzRzLTEwLjg2LTM4LjQ1LTIzLjI2LTQ1LjQxUzc2LjI5LDExMy44OCw3Ni4yOSwxMTMuODhaIi8+PHBvbHlnb24gY2xhc3M9ImY2ZTdhNTRkLTcyMDMtNDc1Zi1iNTg4LWFmNTI2MmZhZDZhNCIgcG9pbnRzPSIxMzggMTcwLjcxIDEzNS4zNSAxNjQuODYgMTQxLjQ4IDE2MS41MiAxNDMuMjIgMTY0LjE2IDE1MC44OCAxNjQuMzcgMTM4IDE3MC43MSIvPjxwYXRoIGNsYXNzPSJhMjkzYTY5YS0zMjlhLTQ4YTUtYjkwYy0zMzQxN2Q2YmRmNTMiIGQ9Ik0xMDMuMTgsMTEzLjZjMTEuNTYtMSwyNC42NS02LDMwLjY0LDIuNzlTMTE1LjE1LDE0OCw5MS4wNiwxNTcuNDhsLTQtNC4xOCwyMS42OC0yNC45M1oiLz48cG9seWdvbiBjbGFzcz0iZjZlN2E1NGQtNzIwMy00NzVmLWI1ODgtYWY1MjYyZmFkNmE0IiBwb2ludHM9IjgxLjUyIDE1Ni45OSA4Ny4wMiAxNTMuMyA5MS4wNiAxNTcuNDggODguODMgMTU5LjcxIDkwLjIyIDE2Ni4zOSA4MS41MiAxNTYuOTkiLz48cGF0aCBjbGFzcz0iZTU4OGVkODgtNmVmMy00MDMxLWE1ZmMtYTQwOWI5YjE1M2MxIiBkPSJNOTQuMTksMTA5LjA4Yy0zLjE4LS4zNy02LjExLDEuMTYtNi44NCw1LjIzYTIzLjIsMjMuMiwwLDAsMCw3LjM0LS4xMmwuNzYtMi4xOVoiLz48cGF0aCBjbGFzcz0iYjQ2OWYyZDgtMzkwYy00ZmYwLWE3MmMtZWEyNTE5OTM4NjhiIiBkPSJNOTQuNjksNjkuNjFjOC40OS42NywyNS41MSwxNi4yNCwyNC43OCwzMS41M3MtMjQuNzgsMTMtMjQuNzgsMTNsLS41LTUuMTEsMTQuNTEtOC4zWiIvPjxwYXRoIGNsYXNzPSJiMDU1ZGIyYi03NDEyLTRhNWYtYmY5NS03Njg1NmIxN2M5ZTkiIGQ9Ik05NC42OSw2OS42MWM4LjQ5LjY3LDI1LjUxLDE2LjI0LDI0Ljc4LDMxLjUzcy0yNC43OCwxMy0yNC43OCwxM2wtLjUtNS4xMSwxNC41MS04LjMiLz48L2c+Cgk8L2c+Cjwvc3ZnPgo=");


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