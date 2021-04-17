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

/***/ "./src/about/index.js":
/*!****************************!*\
  !*** ./src/about/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.blockEditor.RichText; // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("nona/about", {
  title: __("About", "nona"),
  icon: "text-page",
  category: "nona",
  attributes: {
    firstTitle: {
      type: "string",
      source: "html",
      selector: ".first-about-region .about-title"
    },
    firstContent: {
      type: "string",
      source: "html",
      selector: ".first-about-region .about-content"
    },
    secondTitle: {
      type: "string",
      source: "html",
      selector: ".second-about-region .about-title"
    },
    secondContent: {
      type: "string",
      source: "html",
      selector: ".second-about-region .about-content"
    },
    thirdTitle: {
      type: "string",
      source: "html",
      selector: ".third-about-region .about-title"
    },
    thirdContent: {
      type: "string",
      source: "html",
      selector: ".third-about-region .about-content"
    },
    align: {
      type: "string",
      default: "full"
    }
  },
  supports: {
    align: ["full"]
  },
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        firstTitle = _props$attributes.firstTitle,
        firstContent = _props$attributes.firstContent,
        secondTitle = _props$attributes.secondTitle,
        secondContent = _props$attributes.secondContent,
        thirdTitle = _props$attributes.thirdTitle,
        thirdContent = _props$attributes.thirdContent,
        setAttributes = props.setAttributes;

    var onChangeFirstTitle = function onChangeFirstTitle(newFirstTitle) {
      setAttributes({
        firstTitle: newFirstTitle
      });
    };

    var onChangeFirstContent = function onChangeFirstContent(newFirstContent) {
      setAttributes({
        firstContent: newFirstContent
      });
    };

    var onChangeSecondTitle = function onChangeSecondTitle(newSecondTitle) {
      setAttributes({
        secondTitle: newSecondTitle
      });
    };

    var onChangeSecondContent = function onChangeSecondContent(newSecondContent) {
      setAttributes({
        secondContent: newSecondContent
      });
    };

    var onChangeThirdTitle = function onChangeThirdTitle(newThirdTitle) {
      setAttributes({
        thirdTitle: newThirdTitle
      });
    };

    var onChangeThirdContent = function onChangeThirdContent(newThirdContent) {
      setAttributes({
        thirdContent: newThirdContent
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "about"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "about-region first-about-region"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "about-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("WHY NONA EXISTS", "nona"),
      value: firstTitle,
      onChange: onChangeFirstTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "about-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("We want to see the youth of the Apache reservation prosper in life. Our goal is to mentor them into adulthood and be a helping hand when it comes to creating a life based off of their passions.   We hope to plant seeds of hope and ambition to increase prosperity in their lives.", "nona"),
      value: firstContent,
      onChange: onChangeFirstContent
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "about-region second-about-region"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "about-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("HOW WE STARTED", "nona"),
      value: secondTitle,
      onChange: onChangeSecondTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "about-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Back in June of 2018 a group of us volunteered at a basketball camp for two weeks in the Apache reservation. We grew an immense bond with the youth there and saw a lot of the hardships that the kids face on a daily basis. We decided that we would create a program that would help enhance the lives of each young person we connected with.", "nona"),
      value: secondContent,
      onChange: onChangeSecondContent
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "about-region third-about-region"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "about-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("WHAT WE DO", "nona"),
      value: thirdTitle,
      onChange: onChangeThirdTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "about-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("At Nona we work individually with each student to uncover their passions and aspirations. During the week long journey to Orlando we hope to instill a sense of excitement and purpose for their lives. We want to be a resource for their career and life goals. If we can help one kid prosper in their lives then little by little we can help their whole community prosper.", "nona"),
      value: thirdContent,
      onChange: onChangeThirdContent
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "about-accent about-accent-1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 368.98 1625.63"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
      id: "about-svg-id",
      transform: "translate(-0.02 3.55)"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      className: "about-svg",
      d: "M0,0C173.93,43.89,351,110.4,360,208.5c6.37,69.68-78.12,89.53-162,225-107.6,173.76-107.83,366-108,504-.16,131.47.65,141,18,252,15.52,99.24,6.39,243.8-108,437Z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "about-svg-id-1",
      x1: "184.49",
      y1: "1625.63",
      x2: "184.49",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.48",
      "stop-color": "#f25430"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f2c129"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "aa2ba105-2e60-4b60-a0db-849ba7515a7b"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "a7621c7c-ce26-4de0-8301-258fa2fbf5a5"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      className: "about-svg-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
      className: "about-svg-2",
      width: "368.98",
      height: "1625.63"
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "about-accent about-accent-2",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 192 1784"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
      id: "about-svg2-id",
      transform: "translate(0.7 3.03)"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      className: "about-svg2",
      d: "M191.3,1781c-14.12-171.52-60.47-281.77-102-352-46.44-78.55-66.76-106.72-72-171-8.61-105.75,54.57-139.36,90-288,17.25-72.38,19.24-130.87,9-252C92.21,432.9-33,352.15,8.3,204,23,151.27,63.2,74.19,190.25,0Z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "about-svg2-id-1",
      x1: "96",
      y1: "1784",
      x2: "96",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.1",
      "stop-color": "#286573"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.26",
      "stop-color": "#105d40"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.74",
      "stop-color": "#038c3e"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "a550ca0c-e303-4949-bdb1-9e24610a25f0"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "bb8aefae-4802-4cec-888c-1bb5489b9357"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      className: "about-svg2-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
      className: "about-svg2-2",
      width: "192",
      height: "1784"
    }))))));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "about"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "about-region first-about-region"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "about-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.firstTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "about-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.firstContent
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "about-region second-about-region"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "about-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.secondTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "about-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.secondContent
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "about-region third-about-region"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "about-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.thirdTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "about-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.thirdContent
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "about-accent about-accent-1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 368.98 1625.63"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
      id: "about-svg-id",
      transform: "translate(-0.02 3.55)"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      className: "about-svg",
      d: "M0,0C173.93,43.89,351,110.4,360,208.5c6.37,69.68-78.12,89.53-162,225-107.6,173.76-107.83,366-108,504-.16,131.47.65,141,18,252,15.52,99.24,6.39,243.8-108,437Z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "about-svg-id-1",
      x1: "184.49",
      y1: "1625.63",
      x2: "184.49",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.48",
      "stop-color": "#f25430"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f2c129"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "aa2ba105-2e60-4b60-a0db-849ba7515a7b"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "a7621c7c-ce26-4de0-8301-258fa2fbf5a5"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      className: "about-svg-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
      className: "about-svg-2",
      width: "368.98",
      height: "1625.63"
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "about-accent about-accent-2",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 192 1784"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
      id: "about-svg2-id",
      transform: "translate(0.7 3.03)"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      className: "about-svg2",
      d: "M191.3,1781c-14.12-171.52-60.47-281.77-102-352-46.44-78.55-66.76-106.72-72-171-8.61-105.75,54.57-139.36,90-288,17.25-72.38,19.24-130.87,9-252C92.21,432.9-33,352.15,8.3,204,23,151.27,63.2,74.19,190.25,0Z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "about-svg2-id-1",
      x1: "96",
      y1: "1784",
      x2: "96",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.1",
      "stop-color": "#286573"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.26",
      "stop-color": "#105d40"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.74",
      "stop-color": "#038c3e"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "a550ca0c-e303-4949-bdb1-9e24610a25f0"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "bb8aefae-4802-4cec-888c-1bb5489b9357"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      className: "about-svg2-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
      className: "about-svg2-2",
      width: "192",
      height: "1784"
    }))))));
  }
});

/***/ }),

/***/ "./src/cta/index.js":
/*!**************************!*\
  !*** ./src/cta/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _overlay_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay.svg */ "./src/cta/overlay.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    URLInputButton = _wp$blockEditor.URLInputButton; // Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack

 // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("nona/cta", {
  title: __("Donate Call to Action", "nona"),
  icon: 'megaphone',
  category: "nona",
  attributes: {
    ctaText: {
      type: "string",
      source: "text",
      selector: ".cta-text"
    },
    ctaButtonText: {
      type: "string",
      source: "text",
      selector: ".cta-button"
    },
    ctaURL: {
      type: "string",
      source: "attribute",
      selector: ".cta-button",
      attribute: "href"
    }
  },
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit(props) {
    var className = props.className,
        _props$attributes = props.attributes,
        ctaText = _props$attributes.ctaText,
        ctaButtonText = _props$attributes.ctaButtonText,
        ctaURL = _props$attributes.ctaURL,
        setAttributes = props.setAttributes;

    var onChangeCtaText = function onChangeCtaText(newCtaText) {
      setAttributes({
        ctaText: newCtaText
      });
    };

    var onChangeCtaButtonText = function onChangeCtaButtonText(newCtaButtonText) {
      setAttributes({
        ctaButtonText: newCtaButtonText
      });
    };

    var onChangeCtaURL = function onChangeCtaURL(newCtaURL) {
      setAttributes({
        ctaURL: newCtaURL
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " alignfull")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_overlay_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "cta-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Enter CTA Text Here.", "nona"),
      value: ctaText,
      onChange: onChangeCtaText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#",
      role: "button",
      className: "cta-button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Enter Button Text Here."),
      value: ctaButtonText,
      onChange: onChangeCtaButtonText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      className: "button-dropdown__input",
      label: __("Button URL", "nona"),
      onChange: onChangeCtaURL,
      url: ctaURL
    }))));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(props.attributes.className, " alignfull")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_overlay_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "cta-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.ctaText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: props.attributes.ctaURL,
      role: "button",
      className: "cta-button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.ctaButtonText
    }))));
  }
});

/***/ }),

/***/ "./src/cta/overlay.svg":
/*!*****************************!*\
  !*** ./src/cta/overlay.svg ***!
  \*****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgOverlay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".overlay_svg__b02e2615-ed67-41cd-b667-39275b743121{fill:#57d6f2}.overlay_svg__f1f2fe58-148d-4640-a9d1-27c990f58351{fill:#f25430}"));

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#fff",
  d: "M0 0h600.06v304H0z"
});

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  d: "M46.94 157.84a.83.83 0 1 1 .83.83.83.83 0 0 1-.83-.83z",
  transform: "translate(.06 1)"
});

var _ref4 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  cx: 25.42,
  cy: 81.43,
  rx: 4.64,
  ry: 4.65
});

var _ref5 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  d: "M74.56 74.77a4.89 4.89 0 1 1 4.88 4.89 4.88 4.88 0 0 1-4.88-4.89z",
  transform: "translate(.06 1)"
});

var _ref6 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  cx: 61.3,
  cy: 100.24,
  rx: 3.86,
  ry: 3.87
});

var _ref7 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  d: "M88.59 90.48a4.69 4.69 0 1 1 4.68 4.69 4.68 4.68 0 0 1-4.68-4.69z",
  transform: "translate(.06 1)"
});

var _ref8 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  cx: 180.07,
  cy: 38.57,
  rx: 4.51,
  ry: 4.52
});

var _ref9 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  cx: 110.7,
  cy: 155.48,
  rx: 2.67,
  ry: 2.67
});

var _ref10 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  cx: 217.36,
  cy: 191.29,
  rx: 4.77,
  ry: 4.78
});

var _ref11 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  d: "M255.56 243.56a4.34 4.34 0 1 1 4.34 4.36 4.34 4.34 0 0 1-4.34-4.36z",
  transform: "translate(.06 1)"
});

var _ref12 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  cx: 397.37,
  cy: 190.29,
  rx: 2.17,
  ry: 2.17
});

var _ref13 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  d: "M367.91 122.87a.75.75 0 1 1 .75.76.75.75 0 0 1-.75-.76zM306.91 95.93a1.56 1.56 0 1 1 1.56 1.56 1.56 1.56 0 0 1-1.56-1.56zM209.29 109.7a2.31 2.31 0 1 1 2.31 2.3 2.32 2.32 0 0 1-2.31-2.32zM211.81 28.82a2.53 2.53 0 1 1 2.53 2.53 2.52 2.52 0 0 1-2.52-2.52z",
  transform: "translate(.06 1)"
});

var _ref14 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  cx: 205.06,
  cy: 21.12,
  rx: 4.51,
  ry: 4.53
});

var _ref15 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  cx: 74.43,
  cy: 190.72,
  rx: 4.06,
  ry: 4.08
});

var _ref16 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  d: "M134.53 182.18a2.13 2.13 0 1 1 2.13 2.12 2.13 2.13 0 0 1-2.13-2.12zM173 260.58a2.26 2.26 0 1 1 2.26 2.27 2.26 2.26 0 0 1-2.26-2.27zM117.37 157.57a2.68 2.68 0 1 1 2.68 2.68 2.68 2.68 0 0 1-2.68-2.68z",
  transform: "translate(.06 1)"
});

var _ref17 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  cx: 167.9,
  cy: 184.57,
  rx: 4.96,
  ry: 4.97
});

var _ref18 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "overlay_svg__b02e2615-ed67-41cd-b667-39275b743121",
  d: "M189.93 258.46a1.84 1.84 0 1 1 1.83 1.84 1.83 1.83 0 0 1-1.83-1.84zM176.28 213.3A1.74 1.74 0 1 1 178 215a1.74 1.74 0 0 1-1.72-1.7z",
  transform: "translate(.06 1)"
});

var _ref19 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "overlay_svg__f1f2fe58-148d-4640-a9d1-27c990f58351",
  d: "M101.63 134.52s4.49 10.61-6 20.16c-.01.03-6.73-12.86 6-20.16zM40.49 114.86s-4 13.63-21.48 14.49c-.01 0 3.64-17.54 21.48-14.49zM99 112s-14 2.81-23-12.44c0-.05 17.32-5 23 12.44zM336.35 226.21s8.62 4.25 7.17 16c.01.04-11.25-4.41-7.17-16zM369.29 187.1s2.8 7.18-4.39 13.34c0 0-4.24-8.71 4.39-13.34zM438.27 252.47s-7 10.37-22 6.36c.04 0 7.83-13.75 22-6.36zM144.1 209.12s11.74 4 11.85 19.33c.05 0-15.15-3.82-11.85-19.33zM153.8 276.73s-3.51 12.39-20.34 13.6c0 0 3.05-15.91 20.34-13.6z",
  transform: "translate(.06 1)"
});

var SvgOverlay = function SvgOverlay(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    id: "overlay_svg__a46f65c8-23ec-48a8-a5c0-bb19ef1382cf",
    "data-name": "Layer 1",
    viewBox: "0 0 600.06 304"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iYTQ2ZjY1YzgtMjNlYy00OGE4LWE1YzAtYmIxOWVmMTM4MmNmIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYwMC4wNiAzMDQiPgoJPGRlZnM+CgkJPHN0eWxlPgoJCQkuYjk2NWZiYzgtMGUwYy00N2EyLTljMmQtZjc4MWJmMDliMzczIHsKCQkJCWZpbGw6ICNmZmY7CgkJCX0KCQkJLmIwMmUyNjE1LWVkNjctNDFjZC1iNjY3LTM5Mjc1Yjc0MzEyMSB7CgkJCQlmaWxsOiAjNTdkNmYyOwoJCQl9CgkJCS5mMWYyZmU1OC0xNDhkLTQ2NDAtYTlkMS0yN2M5OTBmNTgzNTEgewoJCQkJZmlsbDogI2YyNTQzMDsKCQkJfQoJCTwvc3R5bGU+Cgk8L2RlZnM+PHJlY3QgY2xhc3M9ImI5NjVmYmM4LTBlMGMtNDdhMi05YzJkLWY3ODFiZjA5YjM3MyIgd2lkdGg9IjYwMC4wNiIgaGVpZ2h0PSIzMDQiLz48cGF0aCBjbGFzcz0iYjAyZTI2MTUtZWQ2Ny00MWNkLWI2NjctMzkyNzViNzQzMTIxIiBkPSJNNDYuOTQsMTU3Ljg0YS44My44MywwLDEsMSwuODMuODMuODMuODMsMCwwLDEtLjgzLS44M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDYgMSkiLz48ZWxsaXBzZSBjbGFzcz0iYjAyZTI2MTUtZWQ2Ny00MWNkLWI2NjctMzkyNzViNzQzMTIxIiBjeD0iMjUuNDIiIGN5PSI4MS40MyIgcng9IjQuNjQiIHJ5PSI0LjY1Ii8+PHBhdGggY2xhc3M9ImIwMmUyNjE1LWVkNjctNDFjZC1iNjY3LTM5Mjc1Yjc0MzEyMSIgZD0iTTc0LjU2LDc0Ljc3YTQuODksNC44OSwwLDEsMSw0Ljg4LDQuODksNC44OCw0Ljg4LDAsMCwxLTQuODgtNC44OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDYgMSkiLz48ZWxsaXBzZSBjbGFzcz0iYjAyZTI2MTUtZWQ2Ny00MWNkLWI2NjctMzkyNzViNzQzMTIxIiBjeD0iNjEuMyIgY3k9IjEwMC4yNCIgcng9IjMuODYiIHJ5PSIzLjg3Ii8+PHBhdGggY2xhc3M9ImIwMmUyNjE1LWVkNjctNDFjZC1iNjY3LTM5Mjc1Yjc0MzEyMSIgZD0iTTg4LjU5LDkwLjQ4YTQuNjksNC42OSwwLDEsMSw0LjY4LDQuNjloMEE0LjY4LDQuNjgsMCwwLDEsODguNTksOTAuNDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA2IDEpIi8+PGVsbGlwc2UgY2xhc3M9ImIwMmUyNjE1LWVkNjctNDFjZC1iNjY3LTM5Mjc1Yjc0MzEyMSIgY3g9IjE4MC4wNyIgY3k9IjM4LjU3IiByeD0iNC41MSIgcnk9IjQuNTIiLz48ZWxsaXBzZSBjbGFzcz0iYjAyZTI2MTUtZWQ2Ny00MWNkLWI2NjctMzkyNzViNzQzMTIxIiBjeD0iMTEwLjciIGN5PSIxNTUuNDgiIHJ4PSIyLjY3IiByeT0iMi42NyIvPjxlbGxpcHNlIGNsYXNzPSJiMDJlMjYxNS1lZDY3LTQxY2QtYjY2Ny0zOTI3NWI3NDMxMjEiIGN4PSIyMTcuMzYiIGN5PSIxOTEuMjkiIHJ4PSI0Ljc3IiByeT0iNC43OCIvPjxwYXRoIGNsYXNzPSJiMDJlMjYxNS1lZDY3LTQxY2QtYjY2Ny0zOTI3NWI3NDMxMjEiIGQ9Ik0yNTUuNTYsMjQzLjU2YTQuMzQsNC4zNCwwLDEsMSw0LjM0LDQuMzZBNC4zNCw0LjM0LDAsMCwxLDI1NS41NiwyNDMuNTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA2IDEpIi8+PGVsbGlwc2UgY2xhc3M9ImIwMmUyNjE1LWVkNjctNDFjZC1iNjY3LTM5Mjc1Yjc0MzEyMSIgY3g9IjM5Ny4zNyIgY3k9IjE5MC4yOSIgcng9IjIuMTciIHJ5PSIyLjE3Ii8+PHBhdGggY2xhc3M9ImIwMmUyNjE1LWVkNjctNDFjZC1iNjY3LTM5Mjc1Yjc0MzEyMSIgZD0iTTM2Ny45MSwxMjIuODdhLjc1Ljc1LDAsMSwxLC43NS43Ni43NS43NSwwLDAsMS0uNzUtLjc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wNiAxKSIvPjxwYXRoIGNsYXNzPSJiMDJlMjYxNS1lZDY3LTQxY2QtYjY2Ny0zOTI3NWI3NDMxMjEiIGQ9Ik0zMDYuOTEsOTUuOTNhMS41NiwxLjU2LDAsMSwxLDEuNTYsMS41NiwxLjU2LDEuNTYsMCwwLDEtMS41Ni0xLjU2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wNiAxKSIvPjxwYXRoIGNsYXNzPSJiMDJlMjYxNS1lZDY3LTQxY2QtYjY2Ny0zOTI3NWI3NDMxMjEiIGQ9Ik0yMDkuMjksMTA5LjdBMi4zMSwyLjMxLDAsMSwxLDIxMS42LDExMmEyLjMyLDIuMzIsMCwwLDEtMi4zMS0yLjMyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wNiAxKSIvPjxwYXRoIGNsYXNzPSJiMDJlMjYxNS1lZDY3LTQxY2QtYjY2Ny0zOTI3NWI3NDMxMjEiIGQ9Ik0yMTEuODEsMjguODJhMi41MywyLjUzLDAsMSwxLDIuNTMsMi41M2gwYTIuNTIsMi41MiwwLDAsMS0yLjUyLTIuNTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA2IDEpIi8+PGVsbGlwc2UgY2xhc3M9ImIwMmUyNjE1LWVkNjctNDFjZC1iNjY3LTM5Mjc1Yjc0MzEyMSIgY3g9IjIwNS4wNiIgY3k9IjIxLjEyIiByeD0iNC41MSIgcnk9IjQuNTMiLz48ZWxsaXBzZSBjbGFzcz0iYjAyZTI2MTUtZWQ2Ny00MWNkLWI2NjctMzkyNzViNzQzMTIxIiBjeD0iNzQuNDMiIGN5PSIxOTAuNzIiIHJ4PSI0LjA2IiByeT0iNC4wOCIvPjxwYXRoIGNsYXNzPSJiMDJlMjYxNS1lZDY3LTQxY2QtYjY2Ny0zOTI3NWI3NDMxMjEiIGQ9Ik0xMzQuNTMsMTgyLjE4YTIuMTMsMi4xMywwLDEsMSwyLjEzLDIuMTIsMi4xMywyLjEzLDAsMCwxLTIuMTMtMi4xMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDYgMSkiLz48cGF0aCBjbGFzcz0iYjAyZTI2MTUtZWQ2Ny00MWNkLWI2NjctMzkyNzViNzQzMTIxIiBkPSJNMTczLDI2MC41OGEyLjI2LDIuMjYsMCwxLDEsMi4yNiwyLjI3LDIuMjYsMi4yNiwwLDAsMS0yLjI2LTIuMjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA2IDEpIi8+PHBhdGggY2xhc3M9ImIwMmUyNjE1LWVkNjctNDFjZC1iNjY3LTM5Mjc1Yjc0MzEyMSIgZD0iTTExNy4zNywxNTcuNTdhMi42OCwyLjY4LDAsMSwxLDIuNjgsMi42OCwyLjY4LDIuNjgsMCwwLDEtMi42OC0yLjY4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wNiAxKSIvPjxlbGxpcHNlIGNsYXNzPSJiMDJlMjYxNS1lZDY3LTQxY2QtYjY2Ny0zOTI3NWI3NDMxMjEiIGN4PSIxNjcuOSIgY3k9IjE4NC41NyIgcng9IjQuOTYiIHJ5PSI0Ljk3Ii8+PHBhdGggY2xhc3M9ImIwMmUyNjE1LWVkNjctNDFjZC1iNjY3LTM5Mjc1Yjc0MzEyMSIgZD0iTTE4OS45MywyNTguNDZhMS44NCwxLjg0LDAsMSwxLDEuODMsMS44NCwxLjgzLDEuODMsMCwwLDEtMS44My0xLjg0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wNiAxKSIvPjxwYXRoIGNsYXNzPSJiMDJlMjYxNS1lZDY3LTQxY2QtYjY2Ny0zOTI3NWI3NDMxMjEiIGQ9Ik0xNzYuMjgsMjEzLjNBMS43NCwxLjc0LDAsMSwxLDE3OCwyMTVoMEExLjc0LDEuNzQsMCwwLDEsMTc2LjI4LDIxMy4zWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wNiAxKSIvPjxwYXRoIGNsYXNzPSJmMWYyZmU1OC0xNDhkLTQ2NDAtYTlkMS0yN2M5OTBmNTgzNTEiIGQ9Ik0xMDEuNjMsMTM0LjUyczQuNDksMTAuNjEtNiwyMC4xNkM5NS42MiwxNTQuNzEsODguOSwxNDEuODIsMTAxLjYzLDEzNC41MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDYgMSkiLz48cGF0aCBjbGFzcz0iZjFmMmZlNTgtMTQ4ZC00NjQwLWE5ZDEtMjdjOTkwZjU4MzUxIiBkPSJNNDAuNDksMTE0Ljg2cy00LDEzLjYzLTIxLjQ4LDE0LjQ5QzE5LDEyOS4zNSwyMi42NSwxMTEuODEsNDAuNDksMTE0Ljg2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wNiAxKSIvPjxwYXRoIGNsYXNzPSJmMWYyZmU1OC0xNDhkLTQ2NDAtYTlkMS0yN2M5OTBmNTgzNTEiIGQ9Ik05OSwxMTJzLTE0LDIuODEtMjMtMTIuNDRDNzYsOTkuNTEsOTMuMzIsOTQuNTYsOTksMTEyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wNiAxKSIvPjxwYXRoIGNsYXNzPSJmMWYyZmU1OC0xNDhkLTQ2NDAtYTlkMS0yN2M5OTBmNTgzNTEiIGQ9Ik0zMzYuMzUsMjI2LjIxczguNjIsNC4yNSw3LjE3LDE2QzM0My41MywyNDIuMjUsMzMyLjI3LDIzNy44LDMzNi4zNSwyMjYuMjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA2IDEpIi8+PHBhdGggY2xhc3M9ImYxZjJmZTU4LTE0OGQtNDY0MC1hOWQxLTI3Yzk5MGY1ODM1MSIgZD0iTTM2OS4yOSwxODcuMXMyLjgsNy4xOC00LjM5LDEzLjM0QzM2NC45LDIwMC40NCwzNjAuNjYsMTkxLjczLDM2OS4yOSwxODcuMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDYgMSkiLz48cGF0aCBjbGFzcz0iZjFmMmZlNTgtMTQ4ZC00NjQwLWE5ZDEtMjdjOTkwZjU4MzUxIiBkPSJNNDM4LjI3LDI1Mi40N3MtNywxMC4zNy0yMiw2LjM2QzQxNi4zMSwyNTguODMsNDI0LjEsMjQ1LjA4LDQzOC4yNywyNTIuNDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA2IDEpIi8+PHBhdGggY2xhc3M9ImYxZjJmZTU4LTE0OGQtNDY0MC1hOWQxLTI3Yzk5MGY1ODM1MSIgZD0iTTE0NC4xLDIwOS4xMnMxMS43NCw0LDExLjg1LDE5LjMzQzE1NiwyMjguNDUsMTQwLjgsMjI0LjYzLDE0NC4xLDIwOS4xMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDYgMSkiLz48cGF0aCBjbGFzcz0iZjFmMmZlNTgtMTQ4ZC00NjQwLWE5ZDEtMjdjOTkwZjU4MzUxIiBkPSJNMTUzLjgsMjc2Ljczcy0zLjUxLDEyLjM5LTIwLjM0LDEzLjZDMTMzLjQ2LDI5MC4zMywxMzYuNTEsMjc0LjQyLDE1My44LDI3Ni43M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDYgMSkiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./src/hero/index.js":
/*!***************************!*\
  !*** ./src/hero/index.js ***!
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
    RichText = _wp$blockEditor.RichText,
    URLInputButton = _wp$blockEditor.URLInputButton;
var Button = wp.components.Button; // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("nona/hero", {
  title: __("Hero", "nona"),
  icon: "cover-image",
  category: "nona",
  attributes: {
    heroSubtitle: {
      type: "string",
      source: "html",
      selector: ".hero-subtitle"
    },
    heroBody: {
      type: "string",
      source: "html",
      selector: ".hero-body"
    },
    heroCta: {
      type: "string",
      source: "html",
      selector: ".hero-cta"
    },
    heroCtaURL: {
      type: "string",
      source: "attribute",
      selector: ".hero-cta",
      attribute: "href"
    },
    align: {
      type: "string",
      default: "full"
    }
  },
  supports: {
    align: ["full"]
  },
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        heroSubtitle = _props$attributes.heroSubtitle,
        heroBody = _props$attributes.heroBody,
        heroCta = _props$attributes.heroCta,
        heroCtaURL = _props$attributes.heroCtaURL,
        className = props.className,
        setAttributes = props.setAttributes;

    var onChangeHeroSubtitle = function onChangeHeroSubtitle(newHeroSubtitle) {
      setAttributes({
        heroSubtitle: newHeroSubtitle
      });
    };

    var onChangeHeroBody = function onChangeHeroBody(newHeroBody) {
      setAttributes({
        heroBody: newHeroBody
      });
    };

    var onChangeHeroCta = function onChangeHeroCta(newHeroCta) {
      setAttributes({
        heroCta: newHeroCta
      });
    };

    var onChangeHeroCtaURL = function onChangeHeroCtaURL(newHeroCtaURL) {
      setAttributes({
        heroCtaURL: newHeroCtaURL
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", {
      className: "".concat(className, " hero")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, __("The", "wp-rig")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, __("NONA", "wp-rig")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, __("Experience", "wp-rig")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "hero-subtitle"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("NATIONAL OUTREACH FOR NATIVE AMERICANS CORP.", "nona"),
      value: heroSubtitle,
      onChange: onChangeHeroSubtitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "hero-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("A five day immersive experience where we uncover your passions, mentor you in preparation for adulthood and have fun while doing it.", "nona"),
      value: heroBody,
      onChange: onChangeHeroBody
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "hero-cta",
      href: "#",
      role: "button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Learn More"),
      value: heroCta,
      onChange: onChangeHeroCta
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      className: "button-dropdown__input",
      label: __("Button URL", "nona"),
      onChange: onChangeHeroCtaURL,
      url: heroCtaURL
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      class: "hero-illustration",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1883.06 1496.31",
      preserveAspectRatio: "xMaxYMax meet"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id",
      x1: "960",
      y1: "1496.31",
      x2: "960",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#f2ac29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.06",
      "stop-color": "#f2b137"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.18",
      "stop-color": "#f2be5b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.34",
      "stop-color": "#f1d395"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.49",
      "stop-color": "#f1e9d2"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.73",
      "stop-color": "#f8f4e9"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#fff"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-1",
      x1: "1221.06",
      y1: "1080.54",
      x2: "1221.06",
      y2: "-275.08",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.08",
      "stop-color": "#f25430"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.21",
      "stop-color": "#f2622f"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.45",
      "stop-color": "#f2862c"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.67",
      "stop-color": "#f2ac29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.69",
      "stop-color": "#f2b137"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.74",
      "stop-color": "#f2be5b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.81",
      "stop-color": "#f1d395"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.87",
      "stop-color": "#f1e9d2"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
      id: "nona-svg-id-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg",
      d: "M1919.87,0H566C551,49,556.25,104.54,582.58,148.73c35.4,59.43,106.9,95.24,175.69,88,66.16-7,124.92-49.47,191.25-54.48,68.86-5.2,139,35.24,168.9,97.46s17.87,142.23-29.14,192.82c-20.64,22.21-49.47,44.76-45.56,74.83,2.75,21.12,22.08,36.73,42.41,43.08s42.06,5.68,63.26,7.64C1250.33,607.39,1344,688,1356.34,788.57S1287,995.18,1185.66,998c-100.29,2.74-194.09-83.59-291.15-58.18C819,959.53,777.57,1037.4,731,1100c-42.59,57.3-108.7,138.37-208.78,144.28,0,0-162.24,0-198.24,99-35.2,96.81-73.57,153-324,153q960,0,1920,1l-.13-253Z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-3",
      x1: "808.67",
      y1: "675.37",
      x2: "2008.9",
      y2: "675.37",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.19",
      "stop-color": "#f1e9d2"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.32",
      "stop-color": "#f1e6a1"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.6",
      "stop-color": "#f2de29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.91",
      "stop-color": "#f98a25"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-4",
      x1: "1299.25",
      y1: "371.88",
      x2: "2130.09",
      y2: "371.88",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.23",
      "stop-color": "#f2de29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.27",
      "stop-color": "#f2d429"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.36",
      "stop-color": "#f2c229"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.48",
      "stop-color": "#f2b529"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.64",
      "stop-color": "#f2ae29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f2ac29"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-5",
      x1: "554.7",
      y1: "321.34",
      x2: "1434.63",
      y2: "321.34",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#f27929"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.5",
      "stop-color": "#f2aa29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f2de29"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-6",
      x1: "1450.5",
      y1: "1255.46",
      x2: "1450.5",
      y2: "730.95",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#4c6c73"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.08",
      "stop-color": "#357662"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.22",
      "stop-color": "#118648"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.3",
      "stop-color": "#038c3e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.46",
      "stop-color": "#4b8638"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.68",
      "stop-color": "#a47f30"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.83",
      "stop-color": "#dc7b2b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.9",
      "stop-color": "#f27929"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-7",
      x1: "1182.44",
      y1: "1211.26",
      x2: "1182.44",
      y2: "894.46",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.17",
      "stop-color": "#024d22"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#038039"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-8",
      x1: "1385.38",
      y1: "1375.24",
      x2: "1385.38",
      y2: "889.89",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#024d22"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.06",
      "stop-color": "#024f23"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.36",
      "stop-color": "#025727"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#025928"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-9",
      x1: "1155.04",
      y1: "450.47",
      x2: "1250.3",
      y2: "450.47",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#b5533c"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.14",
      "stop-color": "#be5938"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.37",
      "stop-color": "#d56a2e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.56",
      "stop-color": "#ef7c23"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.69",
      "stop-color": "#ed7a23"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.76",
      "stop-color": "#e57522"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.81",
      "stop-color": "#d76b20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.86",
      "stop-color": "#c45d1d"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.9",
      "stop-color": "#ab4a1a"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.94",
      "stop-color": "#8c3416"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.98",
      "stop-color": "#681a11"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#4f080e"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-10",
      x1: "1134.34",
      y1: "509.94",
      x2: "1227.97",
      y2: "509.94",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#b5533c"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.27",
      "stop-color": "#c05b37"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.74",
      "stop-color": "#dd6f2b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#ef7c23"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-11",
      x1: "-114.13",
      y1: "1107.54",
      x2: "-302.66",
      y2: "1107.54",
      gradientTransform: "translate(1823.92 -49.56) rotate(39.38)",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#f7a959"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.06",
      "stop-color": "#f6a655"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.67",
      "stop-color": "#f18731"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#ef7c23"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-12",
      x1: "1330.41",
      y1: "605.03",
      x2: "1052.4",
      y2: "605.03",
      gradientTransform: "translate(21.84 -8.13) rotate(0.49)",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#fed873"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.64",
      "stop-color": "#f9b761"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f7a959"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-13",
      x1: "1496.56",
      y1: "939.53",
      x2: "1041.03",
      y2: "939.53",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#b5533c"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.19",
      "stop-color": "#a74c3d"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.72",
      "stop-color": "#833a3e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#75333f"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-14",
      x1: "1233.71",
      y1: "965.74",
      x2: "1054.91",
      y2: "965.74",
      href: "#nona-svg-id-13"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-15",
      x1: "1347.97",
      y1: "668.36",
      x2: "951.35",
      y2: "668.36",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#fed873"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.32",
      "stop-color": "#fcc86a"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f7a959"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-16",
      x1: "1271.12",
      y1: "751.78",
      x2: "1078.74",
      y2: "751.78",
      gradientTransform: "matrix(1, 0, 0, 1, 0, 0)",
      href: "#nona-svg-id-11"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-17",
      x1: "1247.6",
      y1: "628.53",
      x2: "1055.95",
      y2: "628.53",
      gradientTransform: "matrix(1, 0, 0, 1, 0, 0)",
      href: "#nona-svg-id-12"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-18",
      x1: "1084.55",
      y1: "1021.86",
      x2: "1084.55",
      y2: "583.9",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#b33e24"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.3",
      "stop-color": "#c24327"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.89",
      "stop-color": "#ea512e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f25430"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-19",
      x1: "1085.9",
      y1: "548.86",
      x2: "1085.9",
      y2: "865.32",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#d94b2b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.46",
      "stop-color": "#e8502e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#ff5833"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-20",
      x1: "1124.44",
      y1: "777.19",
      x2: "1124.44",
      y2: "1122.5",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#f5847e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.36",
      "stop-color": "#f37584"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#ef5193"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-21",
      x1: "1057.91",
      y1: "976.68",
      x2: "1057.91",
      y2: "804.29",
      gradientTransform: "matrix(1, -0.1, -0.02, 1.11, 47.58, -182.31)",
      href: "#nona-svg-id-19"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-22",
      x1: "1082.95",
      y1: "795.87",
      x2: "1082.95",
      y2: "604.41",
      href: "#nona-svg-id-19"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-23",
      x1: "777.86",
      y1: "798.75",
      x2: "777.86",
      y2: "626.36",
      gradientTransform: "matrix(1, 0, -0.13, 1.01, 318.63, -28.44)",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.03",
      "stop-color": "#d94b2b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.48",
      "stop-color": "#e8502e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#ff5833"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-24",
      x1: "776.39",
      y1: "797.42",
      x2: "776.39",
      y2: "626.09",
      gradientTransform: "matrix(1, 0, -0.13, 1.01, 318.63, -28.44)",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#d94b2b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.46",
      "stop-color": "#e8502e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.99",
      "stop-color": "#ff5833"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-25",
      x1: "924.92",
      y1: "490.72",
      x2: "1259.18",
      y2: "490.72",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#3f0c0b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.51",
      "stop-color": "#410d0d"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.69",
      "stop-color": "#481213"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.82",
      "stop-color": "#531b1f"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.93",
      "stop-color": "#64272f"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#75333f"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      class: "nona-svg-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "e1c17734-8238-419b-8f66-5ae7296f9edc",
      "data-name": "Layer 2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "f4cf1625-042f-4f6e-96ae-24086ef3340d",
      "data-name": "Layer 1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-2",
      d: "M1919.87,0H496.49c-20.6,37.48-26.13,82.81-14.07,123.72,14.7,49.83,55.1,91.83,105.28,109.44,66.95,23.49,140.6,4.25,211.64-.14s156.1,16.42,180,81.56c18.36,50-7.37,103.8-27.06,153.32s-31,112.51,7.63,150c59.76,58,170.69-3.19,243.43,38.56,30.89,17.73,49.16,52.89,49.29,87.75s-16.53,68.71-41.84,93.41c-57.52,56.14-147.54,62.18-229.06,63.75s-171,4.93-231.5,58c-54.17,47.47-74.53,126.92-136.71,164-46.64,27.81-104.74,28.2-159.26,32.53C144,1180.52,351,1495.31,0,1495.31l1920,1Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-3",
      d: "M1919.87,0H566C551,49,556.25,104.54,582.58,148.73c35.4,59.43,106.9,95.24,175.69,88,66.16-7,124.92-49.47,191.25-54.48,68.86-5.2,139,35.24,168.9,97.46s17.87,142.23-29.14,192.82c-20.64,22.21-49.47,44.76-45.56,74.83,2.75,21.12,22.08,36.73,42.41,43.08s42.06,5.68,63.26,7.64C1250.33,607.39,1344,688,1356.34,788.57S1287,995.18,1185.66,998c-100.29,2.74-194.09-83.59-291.15-58.18C819,959.53,777.57,1037.4,731,1100c-42.59,57.3-108.7,138.37-208.78,144.28H1919.87Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      class: "nona-svg-4"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-5",
      cx: "1408.63",
      cy: "430.84",
      r: "120.59"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-6",
      d: "M1963.6,718.53c-22-13.1-46.4-13.55-71.28-12.63-26.38,1-52,1.52-76.74-4.92-10.55-2.74-18.86-10.32-23.79-20a23.8,23.8,0,0,0-8.9-9.42c-9.15-5.61-19.26-3.66-28.58.21a1.54,1.54,0,0,1-2.1-1.66c3.89-30.2-16.94-59.75-49.46-62.47C1663.21,604.29,1643,639,1635.22,673a5,5,0,0,1-7.12,3.28c-7.16-3.47-15.59-2.55-20.91,6.61l-.13.22c-6.76,12-19,19.86-32.83,19.66-13.26-.2-26.5-.56-39.53-.59a290.78,290.78,0,0,0-81.38,11.32c-3.16.91-1.35,5,1.25,5.31,18,2.26,36.24,2.63,54.45,2.63,92.17,0,120.88,14.94,211.84,21.61,11.6.85,18.57.07,27.86-6.45,4.86-3.41,5.59-3.57,12-1.74,3.2.91,6.14,2.68,9.4,3.55,3.81,1,7.76,1.74,11.67.72,9.83-2.56,11.45-10.7,8.89-16.39,57.37,1.25,114.58,1.73,172,1.79C1966.32,724.56,1966.34,720.16,1963.6,718.53Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-7",
      d: "M1349.5,432.2c104.26-6.18,209.69-13,313,6.38a12.88,12.88,0,0,0-5.35,7.91c-3.6,15.67,15.07,22.91,27.28,22.79,31.43-.3,63.87-17,93.94-24.73,39.18-10,75.22-7.45,114.06,2.43,29.78,7.57,58.9,15,89.82,15.12,32.53.13,64.66-5.8,96.26-13.05,56.21-12.92,112.91-35.74,170.93-36.84,9.06.29,18.13.65,27.2.9,5.25.14,9.71-9.29,3.26-9.73C2274,403.07,2094.12,398,2020,394c-19.65,0-24.91-36.88-57.18-3.13a99.25,99.25,0,0,1,1-16.71c.5-5.93,1.21-11.68,1.07-17.66a94.29,94.29,0,0,0-10.83-42.33c-22.21-41.31-82.15-56.33-113.15-16a56.7,56.7,0,0,0-11.5,27c-2.91,22.33,11.82,42.9-15.34,57.84-8.59,4.73-26,10.72-23.33,21.93a186.36,186.36,0,0,0-66.93.65c-13.35,2.64-26.46,8-40.21,7s-23.1-7.77-32.91-16.9c-19.55-18.22-39.53-43.1-68.8-28.49-21.74,10.84-33.66,34.92-60.15,36.58-21,1.33-41.72-9.07-62.66-3.07-9.1,2.61-16,8.05-23.79,13.13-15.41,10-28.55,10-45.89,6.19-15.58-3.4-29.57-4.73-41.48,7.25C1346.21,429.05,1346.57,432.37,1349.5,432.2Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-8",
      d: "M1456.49,320.48c-61.46,1.22-123,2.71-184.5,2.58-13.43,0-11.71-9.38-18.36-16.72a13.3,13.3,0,0,0-10.77-4.22c-6.25.42-9.47,3.92-10.38,8.29-15.26-21.67-34.82-42.81-63-43.24-27.3-.41-44.49,22.95-38.19,48.4,3.2,12.95,5.45,34.08-15.61,24.77-4-1.79-8.39-4.09-13-3.67s-7.72,3.09-10.8,6.14c-9.16,9.11-15.79,13.52-29.2,14.9-44.91,4.59-90.39,5.6-135.43,8.82-5.73.41-1.59,8.86,3.14,8.66,28.05-1.24,56.11-2.06,84.18-2.85,40.45,1,80.91,1.55,121.38,2.12,26.25.37,52.59,1.45,78.84.89,23-.5,64.51-5.15,64-19.71-.35-10.22-37.81-9.64-39.42-13.67-4.13-10.33,41.94-2.64,102.11-2.64,39.72,0,79.36-1,117-14.77C1461.07,323.63,1458.2,320.44,1456.49,320.48Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-9",
      d: "M981,901.94c103.76-65.59,263.18-40.53,375.22,8.19,51.35,22.33,102.39,49.55,157.92,53.75,144,10.89,261.71-132.88,405.87-141.76v502.29H981Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-10",
      d: "M444.87,914.62c442-109.27,847.87,164.07,1082.9,106.75,325.69-79.43,392.23,303,392.23,303H444.87Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-11",
      d: "M850.76,1324.41S1233.28,981,1920,981v343.44Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
      class: "nona-svg-12",
      y: "1244.31",
      width: "1920",
      height: "252"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-12",
      d: "M444.87,1016.75S1212.44,928.66,1920,1244.31H444.87Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ellipse", {
      class: "nona-svg-13",
      cx: "1003.81",
      cy: "1173.18",
      rx: "184.59",
      ry: "36.93"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1806.27,380.34a1.49,1.49,0,1,1-1.49-1.49A1.49,1.49,0,0,1,1806.27,380.34Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1845.24",
      cy: "519.74",
      r: "8.37"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1756.4,529.94a8.82,8.82,0,1,1-8.81-8.81A8.82,8.82,0,0,1,1756.4,529.94Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1780.46",
      cy: "485.87",
      r: "6.97"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1731.06,501.64a8.45,8.45,0,1,1-8.45-8.44A8.45,8.45,0,0,1,1731.06,501.64Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1566.01",
      cy: "596.92",
      r: "8.14"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1691.27",
      cy: "386.41",
      r: "4.82"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1498.68",
      cy: "321.9",
      r: "8.61"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1429.59,226a7.84,7.84,0,1,1-7.84-7.84A7.84,7.84,0,0,1,1429.59,226Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1173.65",
      cy: "323.7",
      r: "3.91"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1226.74,443.32a1.36,1.36,0,1,1-1.36-1.36A1.36,1.36,0,0,1,1226.74,443.32Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1336.88,491.83a2.82,2.82,0,1,1-2.82-2.82A2.82,2.82,0,0,1,1336.88,491.83Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1433.3",
      cy: "691.15",
      r: "1.91"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1513.13,467a4.18,4.18,0,1,1-4.17-4.17A4.17,4.17,0,0,1,1513.13,467Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1508.59,612.68a4.56,4.56,0,1,1-4.56-4.57A4.56,4.56,0,0,1,1508.59,612.68Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1520.88",
      cy: "628.34",
      r: "8.15"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1583.25,779.39a8.32,8.32,0,1,1-8.32-8.32A8.32,8.32,0,0,1,1583.25,779.39Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1756.75",
      cy: "322.92",
      r: "7.34"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1648.11,336.52a3.83,3.83,0,1,1-3.83-3.83A3.83,3.83,0,0,1,1648.11,336.52Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1578.63,195.33a4.09,4.09,0,1,1-4.08-4.08A4.09,4.09,0,0,1,1578.63,195.33Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1679.1,380.82a4.83,4.83,0,1,1-4.82-4.82A4.82,4.82,0,0,1,1679.1,380.82Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1587.99",
      cy: "334.01",
      r: "8.95"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1548.1,199.15a3.32,3.32,0,1,1-3.32-3.31A3.32,3.32,0,0,1,1548.1,199.15Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1572.74,280.48a3.15,3.15,0,1,1-3.15-3.14A3.15,3.15,0,0,1,1572.74,280.48Z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-15",
      d: "M1233.34,450.47c0,32.87-17.81,59.51-39.78,59.51s-80.93-3.53-63.47-66.8c8.75-31.68,24.72-52.22,63.47-52.22C1215.53,391,1233.34,417.61,1233.34,450.47Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1220.52,440c4.11-3,5.51-12.69,5.67-23.54C1219,401.07,1207.08,391,1193.56,391c-38.75,0-54.72,20.54-63.47,52.22-17.46,63.27,41.5,66.8,63.47,66.8a27.24,27.24,0,0,0,8.56-1.42c-10.53,3-18-4.34-11.65-7.93,7.34-4.11,18-14.59,16.45-30.05S1209.65,448,1220.52,440Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1205.26,507.35l.41-.2Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-17",
      d: "M1189.85,483.78c-18.36,35.19,8.87,62.39,8.87,62.39l-100-7L1134,474.64S1197.35,469.41,1189.85,483.78Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1134,474.64l-31.26,57.24,69.12.92c-2.47-19.71,11.78-28,11.78-28h0a54.29,54.29,0,0,1,6.2-21C1197.35,469.41,1134,474.64,1134,474.64Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-18",
      d: "M1022.67,621.56s-60.08,58.82-50.74,176.53c0,0-3.52,7-6.09,11.6s5.89,13.17,21.27,5.61c7.36-3.62-2.65-16.85-2.65-16.85s18-49,101.34-156.32Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1007.18,679.63c-.84,1-3.47.25-5.87-1.73s-3.68-4.4-2.84-5.42,3.47-.25,5.87,1.73S1008,678.61,1007.18,679.63Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1085.8,642.13l-63.13-20.57s-12.55,12.32-25.28,36.88c29.14,27.9,58.64,23.28,58.64,23.28h0C1064.9,669.52,1074.76,656.35,1085.8,642.13Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-19",
      d: "M1069.7,679c41.84-56.7,57.59-116.32,37.72-137.45-37-39.34-80,66.61-108.72,72.88,0,0-9.6,25.09,15.72,45.87S1069.7,679,1069.7,679Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-20",
      d: "M1010.11,759.7c-31.11,32.14-14.35,83.21,25.05,105,0,0,4.86,103-9.57,113.93-33.07,25.07-73.15,73.54-121.25,74.27-18.18-6,6.49,81.18,16,64.39,5.38-9.53,5.35-27,1-41.48,22.23.25,175.5-53.09,219-190.21C1182.44,752.85,1010.11,759.7,1010.11,759.7Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-21",
      d: "M1151.39,1165.29c-6.22-3.22-14.43-2-22.68,1.09,20.9-95.27,107.23-266.94,120.09-434.27H1092.63c-81.82,119,22.45,139.94,22.45,139.94,50.71,19.49-20.76,300.07-21.32,320.3.77,13,23.91,5.08,34.37-.89C1139.76,1184.81,1162.09,1170.83,1151.39,1165.29Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-22",
      d: "M1234.33,828c-3.2-25-26.75-31.07-65.8.16-64,51.17-142.94,44.34-163.25,8.3,0,0-26.74-33.41,4.89-76.78h231.38A282.54,282.54,0,0,1,1234.33,828Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-23",
      d: "M1132.72,524.69c129.08,0,122.89,175.36,114.55,216.86-11.62,57.89-221.58,121-265,7.1,0,0,62.36-25.87,72.22-105.56C1062.77,576.49,1084.63,524.69,1132.72,524.69Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-24",
      d: "M1182.44,778.41s58.18-82,53.2-145.66-19.9-86.38-50.11-81.32l-18.89-8.82s38.7-8.51,56,17.88c32.79,50-51.26,181.06-51.26,181.06Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-25",
      d: "M1190.16,669.74s-9.3,85.29,74.29,172.08c0,0,1.77,7.83,2.7,13.09s13.17,6.58,20.41-9.34c3.46-7.62-13-11.57-13-11.57s-17.49-50.34-21.29-188.92Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1215.54,725.57c0,1.35-2.57,2.44-5.74,2.44s-5.75-1.09-5.75-2.44,2.57-2.44,5.75-2.44S1215.54,724.22,1215.54,725.57Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1253.27,645.08l-63.11,24.66s-1.91,17.84,3.95,45.45c41,3.14,61.32-19.6,61.32-19.6h0C1254.53,680.22,1253.78,663.45,1253.27,645.08Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-26",
      d: "M1264.45,684.58c-3.72-71.81-29.9-129-59.26-132.83-54.65-7.07-20,104.36-38.55,127.88,0,0,8.66,26,42.09,26S1264.45,684.58,1264.45,684.58Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-27",
      d: "M1189.86,563c-10.34,47.48-15.49,80.43-15.49,142.61s19.08,79.24,0,103.24c-22.11,27.81-83.18,44.81-152.4,25.16-69.79-19.82-40-106-9.27-213.64C1035.09,542.1,1187.85,522.78,1189.86,563Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1012.7,620.39c-7.27,25.44-14.41,49.46-20.18,71.64,47.7,23,146.19,15.52,155.41-4.76,10.15-22.33-25.1-134.11,41.93-124.25C1187.85,522.78,1035.09,542.1,1012.7,620.39Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-29",
      d: "M1035.35,543.35C1068.57,523,1185.79,519.2,1189.86,563c0,0-22.11-8-37.34,9s-14.19,77.12-12.13,106.53S952,684.8,986,659c0,0,15.76-8.2,26.71-38.62C1019.84,600.56,1001.75,563.92,1035.35,543.35Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-30",
      d: "M1133.66,705.62c.63,11.07-1,22.11-2.89,33s-4.47,21.63-6.73,32.4-4.19,21.59-5.29,32.35a52.6,52.6,0,0,0,.4,16,18.71,18.71,0,0,0,3.11,7.1,15.85,15.85,0,0,0,6.33,4.73l-.1.34a15.59,15.59,0,0,1-7.47-4,20.24,20.24,0,0,1-4.29-7.52c-1.7-5.54-1.78-11.3-1.57-16.89.67-11.23,3.48-22,6.07-32.72s5.44-21.37,7.77-32.12,4.45-21.58,4.3-32.6Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-31",
      d: "M1104.55,611.8c-6,29.77,8.35,106.63-18.83,147.37,0,0-16.82-.07-19-13.72,0,0,13.7-11.74,18.47-37.44s5.88-89.55,6-95.85c.08-5.06,8.57-2.77,11.94-1.46A4,4,0,0,1,1104.55,611.8Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-32",
      d: "M1103.07,610.5c-6.26,29.43,9.21,105.82-18.64,146.77,0,0-18.92-1.73-21.6-15.72,0,0,15.2-10.48,20.12-35.93s6.71-88.79,6.71-95.12S1103.07,610.5,1103.07,610.5Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-32",
      d: "M1035.16,611.36c-8.9,26.64-3.63,95.78-33.15,132.84,0,0-16.74-1.57-17.57-14.23,0,0,14.78-9.48,22-32.52s14.62-81.22,15.33-87c.57-4.62,8.8-1.76,12-.27A3.79,3.79,0,0,1,1035.16,611.36Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-33",
      d: "M1033.83,610.23c-8.9,26.64-3.63,95.77-33.15,132.83,0,0-16.74-1.57-17.57-14.22,0,0,14.78-9.49,22-32.52s16-80.35,16.68-86.09S1033.83,610.23,1033.83,610.23Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-34",
      d: "M1222.65,398.94c41.8,36.65-18.6,35.89-18.6,62.87,0,62.94-65.87,27.24-37.41,80.8,24.54,46.18-32.84,63.32-75.45,47.26-42.18-15.91-92.14-55-125.8-43.7-59.58,20-53.13-59.41,17.72-30.39s34.34-55.4,83.61-61.09c49-5.67,49.6-17.31,67.66-38.95C1155.05,391,1191.62,371.72,1222.65,398.94Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1632.35,530.28s-12.33-29,16.49-55.17C1648.84,475.11,1667.28,510.31,1632.35,530.28Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1800.13,584.11s11-37.32,58.94-39.67C1859.07,544.44,1849.08,592.44,1800.13,584.11Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1639.67,592.05s38.49-7.68,63.07,34.05C1702.74,626.1,1655.17,639.67,1639.67,592.05Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M988.27,279.35s-23.66-11.62-19.73-43.91C968.54,235.44,999.45,247.62,988.27,279.35Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M897.87,386.39s-7.68-19.6,12-36.49C909.91,349.9,921.54,373.72,897.87,386.39Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M708.59,207.49s19.31-28.39,60.23-17.41C768.82,190.08,747.46,227.71,708.59,207.49Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1515.81,326.13s-32.2-10.95-32.51-52.92C1483.3,273.21,1524.87,283.69,1515.81,326.13Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1655.2,229.1s9.61-33.93,55.8-37.24C1711,191.86,1702.64,235.4,1655.2,229.1Z"
    }))))));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", {
      className: "hero"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, __("The", "wp-rig")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, __("NONA", "wp-rig")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, __("Experience", "wp-rig")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "hero-subtitle"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.heroSubtitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "hero-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.heroBody
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "hero-cta",
      href: props.attributes.heroCtaURL,
      role: "button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.heroCta
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      class: "hero-illustration",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1883.06 1496.31",
      preserveAspectRatio: "xMaxYMax meet"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id",
      x1: "960",
      y1: "1496.31",
      x2: "960",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#f2ac29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.06",
      "stop-color": "#f2b137"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.18",
      "stop-color": "#f2be5b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.34",
      "stop-color": "#f1d395"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.49",
      "stop-color": "#f1e9d2"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.73",
      "stop-color": "#f8f4e9"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#fff"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-1",
      x1: "1221.06",
      y1: "1080.54",
      x2: "1221.06",
      y2: "-275.08",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.08",
      "stop-color": "#f25430"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.21",
      "stop-color": "#f2622f"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.45",
      "stop-color": "#f2862c"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.67",
      "stop-color": "#f2ac29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.69",
      "stop-color": "#f2b137"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.74",
      "stop-color": "#f2be5b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.81",
      "stop-color": "#f1d395"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.87",
      "stop-color": "#f1e9d2"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
      id: "nona-svg-id-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg",
      d: "M1919.87,0H566C551,49,556.25,104.54,582.58,148.73c35.4,59.43,106.9,95.24,175.69,88,66.16-7,124.92-49.47,191.25-54.48,68.86-5.2,139,35.24,168.9,97.46s17.87,142.23-29.14,192.82c-20.64,22.21-49.47,44.76-45.56,74.83,2.75,21.12,22.08,36.73,42.41,43.08s42.06,5.68,63.26,7.64C1250.33,607.39,1344,688,1356.34,788.57S1287,995.18,1185.66,998c-100.29,2.74-194.09-83.59-291.15-58.18C819,959.53,777.57,1037.4,731,1100c-42.59,57.3-108.7,138.37-208.78,144.28,0,0-162.24,0-198.24,99-35.2,96.81-73.57,153-324,153q960,0,1920,1l-.13-253Z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-3",
      x1: "808.67",
      y1: "675.37",
      x2: "2008.9",
      y2: "675.37",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.19",
      "stop-color": "#f1e9d2"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.32",
      "stop-color": "#f1e6a1"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.6",
      "stop-color": "#f2de29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.91",
      "stop-color": "#f98a25"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-4",
      x1: "1299.25",
      y1: "371.88",
      x2: "2130.09",
      y2: "371.88",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.23",
      "stop-color": "#f2de29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.27",
      "stop-color": "#f2d429"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.36",
      "stop-color": "#f2c229"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.48",
      "stop-color": "#f2b529"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.64",
      "stop-color": "#f2ae29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f2ac29"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-5",
      x1: "554.7",
      y1: "321.34",
      x2: "1434.63",
      y2: "321.34",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#f27929"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.5",
      "stop-color": "#f2aa29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f2de29"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-6",
      x1: "1450.5",
      y1: "1255.46",
      x2: "1450.5",
      y2: "730.95",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#4c6c73"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.08",
      "stop-color": "#357662"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.22",
      "stop-color": "#118648"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.3",
      "stop-color": "#038c3e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.46",
      "stop-color": "#4b8638"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.68",
      "stop-color": "#a47f30"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.83",
      "stop-color": "#dc7b2b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.9",
      "stop-color": "#f27929"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-7",
      x1: "1182.44",
      y1: "1211.26",
      x2: "1182.44",
      y2: "894.46",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.17",
      "stop-color": "#024d22"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#038039"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-8",
      x1: "1385.38",
      y1: "1375.24",
      x2: "1385.38",
      y2: "889.89",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#024d22"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.06",
      "stop-color": "#024f23"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.36",
      "stop-color": "#025727"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#025928"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-9",
      x1: "1155.04",
      y1: "450.47",
      x2: "1250.3",
      y2: "450.47",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#b5533c"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.14",
      "stop-color": "#be5938"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.37",
      "stop-color": "#d56a2e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.56",
      "stop-color": "#ef7c23"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.69",
      "stop-color": "#ed7a23"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.76",
      "stop-color": "#e57522"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.81",
      "stop-color": "#d76b20"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.86",
      "stop-color": "#c45d1d"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.9",
      "stop-color": "#ab4a1a"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.94",
      "stop-color": "#8c3416"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.98",
      "stop-color": "#681a11"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#4f080e"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-10",
      x1: "1134.34",
      y1: "509.94",
      x2: "1227.97",
      y2: "509.94",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#b5533c"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.27",
      "stop-color": "#c05b37"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.74",
      "stop-color": "#dd6f2b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#ef7c23"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-11",
      x1: "-114.13",
      y1: "1107.54",
      x2: "-302.66",
      y2: "1107.54",
      gradientTransform: "translate(1823.92 -49.56) rotate(39.38)",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#f7a959"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.06",
      "stop-color": "#f6a655"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.67",
      "stop-color": "#f18731"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#ef7c23"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-12",
      x1: "1330.41",
      y1: "605.03",
      x2: "1052.4",
      y2: "605.03",
      gradientTransform: "translate(21.84 -8.13) rotate(0.49)",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#fed873"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.64",
      "stop-color": "#f9b761"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f7a959"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-13",
      x1: "1496.56",
      y1: "939.53",
      x2: "1041.03",
      y2: "939.53",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#b5533c"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.19",
      "stop-color": "#a74c3d"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.72",
      "stop-color": "#833a3e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#75333f"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-14",
      x1: "1233.71",
      y1: "965.74",
      x2: "1054.91",
      y2: "965.74",
      href: "#nona-svg-id-13"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-15",
      x1: "1347.97",
      y1: "668.36",
      x2: "951.35",
      y2: "668.36",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#fed873"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.32",
      "stop-color": "#fcc86a"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f7a959"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-16",
      x1: "1271.12",
      y1: "751.78",
      x2: "1078.74",
      y2: "751.78",
      gradientTransform: "matrix(1, 0, 0, 1, 0, 0)",
      href: "#nona-svg-id-11"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-17",
      x1: "1247.6",
      y1: "628.53",
      x2: "1055.95",
      y2: "628.53",
      gradientTransform: "matrix(1, 0, 0, 1, 0, 0)",
      href: "#nona-svg-id-12"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-18",
      x1: "1084.55",
      y1: "1021.86",
      x2: "1084.55",
      y2: "583.9",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#b33e24"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.3",
      "stop-color": "#c24327"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.89",
      "stop-color": "#ea512e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#f25430"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-19",
      x1: "1085.9",
      y1: "548.86",
      x2: "1085.9",
      y2: "865.32",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#d94b2b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.46",
      "stop-color": "#e8502e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#ff5833"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-20",
      x1: "1124.44",
      y1: "777.19",
      x2: "1124.44",
      y2: "1122.5",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#f5847e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.36",
      "stop-color": "#f37584"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#ef5193"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-21",
      x1: "1057.91",
      y1: "976.68",
      x2: "1057.91",
      y2: "804.29",
      gradientTransform: "matrix(1, -0.1, -0.02, 1.11, 47.58, -182.31)",
      href: "#nona-svg-id-19"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-22",
      x1: "1082.95",
      y1: "795.87",
      x2: "1082.95",
      y2: "604.41",
      href: "#nona-svg-id-19"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-23",
      x1: "777.86",
      y1: "798.75",
      x2: "777.86",
      y2: "626.36",
      gradientTransform: "matrix(1, 0, -0.13, 1.01, 318.63, -28.44)",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.03",
      "stop-color": "#d94b2b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.48",
      "stop-color": "#e8502e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#ff5833"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-24",
      x1: "776.39",
      y1: "797.42",
      x2: "776.39",
      y2: "626.09",
      gradientTransform: "matrix(1, 0, -0.13, 1.01, 318.63, -28.44)",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#d94b2b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.46",
      "stop-color": "#e8502e"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.99",
      "stop-color": "#ff5833"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "nona-svg-id-25",
      x1: "924.92",
      y1: "490.72",
      x2: "1259.18",
      y2: "490.72",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#3f0c0b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.51",
      "stop-color": "#410d0d"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.69",
      "stop-color": "#481213"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.82",
      "stop-color": "#531b1f"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.93",
      "stop-color": "#64272f"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "1",
      "stop-color": "#75333f"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      class: "nona-svg-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "e1c17734-8238-419b-8f66-5ae7296f9edc",
      "data-name": "Layer 2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "f4cf1625-042f-4f6e-96ae-24086ef3340d",
      "data-name": "Layer 1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-2",
      d: "M1919.87,0H496.49c-20.6,37.48-26.13,82.81-14.07,123.72,14.7,49.83,55.1,91.83,105.28,109.44,66.95,23.49,140.6,4.25,211.64-.14s156.1,16.42,180,81.56c18.36,50-7.37,103.8-27.06,153.32s-31,112.51,7.63,150c59.76,58,170.69-3.19,243.43,38.56,30.89,17.73,49.16,52.89,49.29,87.75s-16.53,68.71-41.84,93.41c-57.52,56.14-147.54,62.18-229.06,63.75s-171,4.93-231.5,58c-54.17,47.47-74.53,126.92-136.71,164-46.64,27.81-104.74,28.2-159.26,32.53C144,1180.52,351,1495.31,0,1495.31l1920,1Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-3",
      d: "M1919.87,0H566C551,49,556.25,104.54,582.58,148.73c35.4,59.43,106.9,95.24,175.69,88,66.16-7,124.92-49.47,191.25-54.48,68.86-5.2,139,35.24,168.9,97.46s17.87,142.23-29.14,192.82c-20.64,22.21-49.47,44.76-45.56,74.83,2.75,21.12,22.08,36.73,42.41,43.08s42.06,5.68,63.26,7.64C1250.33,607.39,1344,688,1356.34,788.57S1287,995.18,1185.66,998c-100.29,2.74-194.09-83.59-291.15-58.18C819,959.53,777.57,1037.4,731,1100c-42.59,57.3-108.7,138.37-208.78,144.28H1919.87Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      class: "nona-svg-4"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-5",
      cx: "1408.63",
      cy: "430.84",
      r: "120.59"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-6",
      d: "M1963.6,718.53c-22-13.1-46.4-13.55-71.28-12.63-26.38,1-52,1.52-76.74-4.92-10.55-2.74-18.86-10.32-23.79-20a23.8,23.8,0,0,0-8.9-9.42c-9.15-5.61-19.26-3.66-28.58.21a1.54,1.54,0,0,1-2.1-1.66c3.89-30.2-16.94-59.75-49.46-62.47C1663.21,604.29,1643,639,1635.22,673a5,5,0,0,1-7.12,3.28c-7.16-3.47-15.59-2.55-20.91,6.61l-.13.22c-6.76,12-19,19.86-32.83,19.66-13.26-.2-26.5-.56-39.53-.59a290.78,290.78,0,0,0-81.38,11.32c-3.16.91-1.35,5,1.25,5.31,18,2.26,36.24,2.63,54.45,2.63,92.17,0,120.88,14.94,211.84,21.61,11.6.85,18.57.07,27.86-6.45,4.86-3.41,5.59-3.57,12-1.74,3.2.91,6.14,2.68,9.4,3.55,3.81,1,7.76,1.74,11.67.72,9.83-2.56,11.45-10.7,8.89-16.39,57.37,1.25,114.58,1.73,172,1.79C1966.32,724.56,1966.34,720.16,1963.6,718.53Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-7",
      d: "M1349.5,432.2c104.26-6.18,209.69-13,313,6.38a12.88,12.88,0,0,0-5.35,7.91c-3.6,15.67,15.07,22.91,27.28,22.79,31.43-.3,63.87-17,93.94-24.73,39.18-10,75.22-7.45,114.06,2.43,29.78,7.57,58.9,15,89.82,15.12,32.53.13,64.66-5.8,96.26-13.05,56.21-12.92,112.91-35.74,170.93-36.84,9.06.29,18.13.65,27.2.9,5.25.14,9.71-9.29,3.26-9.73C2274,403.07,2094.12,398,2020,394c-19.65,0-24.91-36.88-57.18-3.13a99.25,99.25,0,0,1,1-16.71c.5-5.93,1.21-11.68,1.07-17.66a94.29,94.29,0,0,0-10.83-42.33c-22.21-41.31-82.15-56.33-113.15-16a56.7,56.7,0,0,0-11.5,27c-2.91,22.33,11.82,42.9-15.34,57.84-8.59,4.73-26,10.72-23.33,21.93a186.36,186.36,0,0,0-66.93.65c-13.35,2.64-26.46,8-40.21,7s-23.1-7.77-32.91-16.9c-19.55-18.22-39.53-43.1-68.8-28.49-21.74,10.84-33.66,34.92-60.15,36.58-21,1.33-41.72-9.07-62.66-3.07-9.1,2.61-16,8.05-23.79,13.13-15.41,10-28.55,10-45.89,6.19-15.58-3.4-29.57-4.73-41.48,7.25C1346.21,429.05,1346.57,432.37,1349.5,432.2Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-8",
      d: "M1456.49,320.48c-61.46,1.22-123,2.71-184.5,2.58-13.43,0-11.71-9.38-18.36-16.72a13.3,13.3,0,0,0-10.77-4.22c-6.25.42-9.47,3.92-10.38,8.29-15.26-21.67-34.82-42.81-63-43.24-27.3-.41-44.49,22.95-38.19,48.4,3.2,12.95,5.45,34.08-15.61,24.77-4-1.79-8.39-4.09-13-3.67s-7.72,3.09-10.8,6.14c-9.16,9.11-15.79,13.52-29.2,14.9-44.91,4.59-90.39,5.6-135.43,8.82-5.73.41-1.59,8.86,3.14,8.66,28.05-1.24,56.11-2.06,84.18-2.85,40.45,1,80.91,1.55,121.38,2.12,26.25.37,52.59,1.45,78.84.89,23-.5,64.51-5.15,64-19.71-.35-10.22-37.81-9.64-39.42-13.67-4.13-10.33,41.94-2.64,102.11-2.64,39.72,0,79.36-1,117-14.77C1461.07,323.63,1458.2,320.44,1456.49,320.48Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-9",
      d: "M981,901.94c103.76-65.59,263.18-40.53,375.22,8.19,51.35,22.33,102.39,49.55,157.92,53.75,144,10.89,261.71-132.88,405.87-141.76v502.29H981Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-10",
      d: "M444.87,914.62c442-109.27,847.87,164.07,1082.9,106.75,325.69-79.43,392.23,303,392.23,303H444.87Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-11",
      d: "M850.76,1324.41S1233.28,981,1920,981v343.44Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
      class: "nona-svg-12",
      y: "1244.31",
      width: "1920",
      height: "252"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-12",
      d: "M444.87,1016.75S1212.44,928.66,1920,1244.31H444.87Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ellipse", {
      class: "nona-svg-13",
      cx: "1003.81",
      cy: "1173.18",
      rx: "184.59",
      ry: "36.93"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1806.27,380.34a1.49,1.49,0,1,1-1.49-1.49A1.49,1.49,0,0,1,1806.27,380.34Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1845.24",
      cy: "519.74",
      r: "8.37"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1756.4,529.94a8.82,8.82,0,1,1-8.81-8.81A8.82,8.82,0,0,1,1756.4,529.94Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1780.46",
      cy: "485.87",
      r: "6.97"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1731.06,501.64a8.45,8.45,0,1,1-8.45-8.44A8.45,8.45,0,0,1,1731.06,501.64Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1566.01",
      cy: "596.92",
      r: "8.14"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1691.27",
      cy: "386.41",
      r: "4.82"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1498.68",
      cy: "321.9",
      r: "8.61"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1429.59,226a7.84,7.84,0,1,1-7.84-7.84A7.84,7.84,0,0,1,1429.59,226Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1173.65",
      cy: "323.7",
      r: "3.91"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1226.74,443.32a1.36,1.36,0,1,1-1.36-1.36A1.36,1.36,0,0,1,1226.74,443.32Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1336.88,491.83a2.82,2.82,0,1,1-2.82-2.82A2.82,2.82,0,0,1,1336.88,491.83Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1433.3",
      cy: "691.15",
      r: "1.91"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1513.13,467a4.18,4.18,0,1,1-4.17-4.17A4.17,4.17,0,0,1,1513.13,467Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1508.59,612.68a4.56,4.56,0,1,1-4.56-4.57A4.56,4.56,0,0,1,1508.59,612.68Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1520.88",
      cy: "628.34",
      r: "8.15"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1583.25,779.39a8.32,8.32,0,1,1-8.32-8.32A8.32,8.32,0,0,1,1583.25,779.39Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1756.75",
      cy: "322.92",
      r: "7.34"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1648.11,336.52a3.83,3.83,0,1,1-3.83-3.83A3.83,3.83,0,0,1,1648.11,336.52Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1578.63,195.33a4.09,4.09,0,1,1-4.08-4.08A4.09,4.09,0,0,1,1578.63,195.33Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1679.1,380.82a4.83,4.83,0,1,1-4.82-4.82A4.82,4.82,0,0,1,1679.1,380.82Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
      class: "nona-svg-14",
      cx: "1587.99",
      cy: "334.01",
      r: "8.95"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1548.1,199.15a3.32,3.32,0,1,1-3.32-3.31A3.32,3.32,0,0,1,1548.1,199.15Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-14",
      d: "M1572.74,280.48a3.15,3.15,0,1,1-3.15-3.14A3.15,3.15,0,0,1,1572.74,280.48Z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-15",
      d: "M1233.34,450.47c0,32.87-17.81,59.51-39.78,59.51s-80.93-3.53-63.47-66.8c8.75-31.68,24.72-52.22,63.47-52.22C1215.53,391,1233.34,417.61,1233.34,450.47Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1220.52,440c4.11-3,5.51-12.69,5.67-23.54C1219,401.07,1207.08,391,1193.56,391c-38.75,0-54.72,20.54-63.47,52.22-17.46,63.27,41.5,66.8,63.47,66.8a27.24,27.24,0,0,0,8.56-1.42c-10.53,3-18-4.34-11.65-7.93,7.34-4.11,18-14.59,16.45-30.05S1209.65,448,1220.52,440Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1205.26,507.35l.41-.2Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-17",
      d: "M1189.85,483.78c-18.36,35.19,8.87,62.39,8.87,62.39l-100-7L1134,474.64S1197.35,469.41,1189.85,483.78Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1134,474.64l-31.26,57.24,69.12.92c-2.47-19.71,11.78-28,11.78-28h0a54.29,54.29,0,0,1,6.2-21C1197.35,469.41,1134,474.64,1134,474.64Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-18",
      d: "M1022.67,621.56s-60.08,58.82-50.74,176.53c0,0-3.52,7-6.09,11.6s5.89,13.17,21.27,5.61c7.36-3.62-2.65-16.85-2.65-16.85s18-49,101.34-156.32Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1007.18,679.63c-.84,1-3.47.25-5.87-1.73s-3.68-4.4-2.84-5.42,3.47-.25,5.87,1.73S1008,678.61,1007.18,679.63Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1085.8,642.13l-63.13-20.57s-12.55,12.32-25.28,36.88c29.14,27.9,58.64,23.28,58.64,23.28h0C1064.9,669.52,1074.76,656.35,1085.8,642.13Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-19",
      d: "M1069.7,679c41.84-56.7,57.59-116.32,37.72-137.45-37-39.34-80,66.61-108.72,72.88,0,0-9.6,25.09,15.72,45.87S1069.7,679,1069.7,679Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-20",
      d: "M1010.11,759.7c-31.11,32.14-14.35,83.21,25.05,105,0,0,4.86,103-9.57,113.93-33.07,25.07-73.15,73.54-121.25,74.27-18.18-6,6.49,81.18,16,64.39,5.38-9.53,5.35-27,1-41.48,22.23.25,175.5-53.09,219-190.21C1182.44,752.85,1010.11,759.7,1010.11,759.7Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-21",
      d: "M1151.39,1165.29c-6.22-3.22-14.43-2-22.68,1.09,20.9-95.27,107.23-266.94,120.09-434.27H1092.63c-81.82,119,22.45,139.94,22.45,139.94,50.71,19.49-20.76,300.07-21.32,320.3.77,13,23.91,5.08,34.37-.89C1139.76,1184.81,1162.09,1170.83,1151.39,1165.29Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-22",
      d: "M1234.33,828c-3.2-25-26.75-31.07-65.8.16-64,51.17-142.94,44.34-163.25,8.3,0,0-26.74-33.41,4.89-76.78h231.38A282.54,282.54,0,0,1,1234.33,828Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-23",
      d: "M1132.72,524.69c129.08,0,122.89,175.36,114.55,216.86-11.62,57.89-221.58,121-265,7.1,0,0,62.36-25.87,72.22-105.56C1062.77,576.49,1084.63,524.69,1132.72,524.69Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-24",
      d: "M1182.44,778.41s58.18-82,53.2-145.66-19.9-86.38-50.11-81.32l-18.89-8.82s38.7-8.51,56,17.88c32.79,50-51.26,181.06-51.26,181.06Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-25",
      d: "M1190.16,669.74s-9.3,85.29,74.29,172.08c0,0,1.77,7.83,2.7,13.09s13.17,6.58,20.41-9.34c3.46-7.62-13-11.57-13-11.57s-17.49-50.34-21.29-188.92Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1215.54,725.57c0,1.35-2.57,2.44-5.74,2.44s-5.75-1.09-5.75-2.44,2.57-2.44,5.75-2.44S1215.54,724.22,1215.54,725.57Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "e266e20b-d0f6-4fd9-a292-1e8a0efccd52",
      d: "M1253.27,645.08l-63.11,24.66s-1.91,17.84,3.95,45.45c41,3.14,61.32-19.6,61.32-19.6h0C1254.53,680.22,1253.78,663.45,1253.27,645.08Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-26",
      d: "M1264.45,684.58c-3.72-71.81-29.9-129-59.26-132.83-54.65-7.07-20,104.36-38.55,127.88,0,0,8.66,26,42.09,26S1264.45,684.58,1264.45,684.58Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-27",
      d: "M1189.86,563c-10.34,47.48-15.49,80.43-15.49,142.61s19.08,79.24,0,103.24c-22.11,27.81-83.18,44.81-152.4,25.16-69.79-19.82-40-106-9.27-213.64C1035.09,542.1,1187.85,522.78,1189.86,563Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1012.7,620.39c-7.27,25.44-14.41,49.46-20.18,71.64,47.7,23,146.19,15.52,155.41-4.76,10.15-22.33-25.1-134.11,41.93-124.25C1187.85,522.78,1035.09,542.1,1012.7,620.39Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-29",
      d: "M1035.35,543.35C1068.57,523,1185.79,519.2,1189.86,563c0,0-22.11-8-37.34,9s-14.19,77.12-12.13,106.53S952,684.8,986,659c0,0,15.76-8.2,26.71-38.62C1019.84,600.56,1001.75,563.92,1035.35,543.35Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-30",
      d: "M1133.66,705.62c.63,11.07-1,22.11-2.89,33s-4.47,21.63-6.73,32.4-4.19,21.59-5.29,32.35a52.6,52.6,0,0,0,.4,16,18.71,18.71,0,0,0,3.11,7.1,15.85,15.85,0,0,0,6.33,4.73l-.1.34a15.59,15.59,0,0,1-7.47-4,20.24,20.24,0,0,1-4.29-7.52c-1.7-5.54-1.78-11.3-1.57-16.89.67-11.23,3.48-22,6.07-32.72s5.44-21.37,7.77-32.12,4.45-21.58,4.3-32.6Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-31",
      d: "M1104.55,611.8c-6,29.77,8.35,106.63-18.83,147.37,0,0-16.82-.07-19-13.72,0,0,13.7-11.74,18.47-37.44s5.88-89.55,6-95.85c.08-5.06,8.57-2.77,11.94-1.46A4,4,0,0,1,1104.55,611.8Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-32",
      d: "M1103.07,610.5c-6.26,29.43,9.21,105.82-18.64,146.77,0,0-18.92-1.73-21.6-15.72,0,0,15.2-10.48,20.12-35.93s6.71-88.79,6.71-95.12S1103.07,610.5,1103.07,610.5Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-32",
      d: "M1035.16,611.36c-8.9,26.64-3.63,95.78-33.15,132.84,0,0-16.74-1.57-17.57-14.23,0,0,14.78-9.48,22-32.52s14.62-81.22,15.33-87c.57-4.62,8.8-1.76,12-.27A3.79,3.79,0,0,1,1035.16,611.36Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-33",
      d: "M1033.83,610.23c-8.9,26.64-3.63,95.77-33.15,132.83,0,0-16.74-1.57-17.57-14.22,0,0,14.78-9.49,22-32.52s16-80.35,16.68-86.09S1033.83,610.23,1033.83,610.23Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-34",
      d: "M1222.65,398.94c41.8,36.65-18.6,35.89-18.6,62.87,0,62.94-65.87,27.24-37.41,80.8,24.54,46.18-32.84,63.32-75.45,47.26-42.18-15.91-92.14-55-125.8-43.7-59.58,20-53.13-59.41,17.72-30.39s34.34-55.4,83.61-61.09c49-5.67,49.6-17.31,67.66-38.95C1155.05,391,1191.62,371.72,1222.65,398.94Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1632.35,530.28s-12.33-29,16.49-55.17C1648.84,475.11,1667.28,510.31,1632.35,530.28Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1800.13,584.11s11-37.32,58.94-39.67C1859.07,544.44,1849.08,592.44,1800.13,584.11Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1639.67,592.05s38.49-7.68,63.07,34.05C1702.74,626.1,1655.17,639.67,1639.67,592.05Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M988.27,279.35s-23.66-11.62-19.73-43.91C968.54,235.44,999.45,247.62,988.27,279.35Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M897.87,386.39s-7.68-19.6,12-36.49C909.91,349.9,921.54,373.72,897.87,386.39Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M708.59,207.49s19.31-28.39,60.23-17.41C768.82,190.08,747.46,227.71,708.59,207.49Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1515.81,326.13s-32.2-10.95-32.51-52.92C1483.3,273.21,1524.87,283.69,1515.81,326.13Z"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      class: "nona-svg-28",
      d: "M1655.2,229.1s9.61-33.93,55.8-37.24C1711,191.86,1702.64,235.4,1655.2,229.1Z"
    }))))));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program */ "./src/program/index.js");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team */ "./src/team/index.js");
/* harmony import */ var _cta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cta */ "./src/cta/index.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero */ "./src/hero/index.js");
/* harmony import */ var _mission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mission */ "./src/mission/index.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/about/index.js");
/**
 * Import blocks as components.
 */







/***/ }),

/***/ "./src/mission/index.js":
/*!******************************!*\
  !*** ./src/mission/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.blockEditor.RichText; // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/

registerBlockType("nona/mission", {
  title: __("Mission Header", "nona"),
  icon: "archive",
  category: "nona",
  attributes: {
    missionTitle: {
      type: "string",
      source: "html",
      selector: ".mission-title"
    },
    missionText: {
      type: "string",
      source: "html",
      selector: ".mission-text"
    },
    align: {
      type: "string",
      default: "full"
    }
  },
  supports: {
    align: ["full"]
  },
  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        missionTitle = _props$attributes.missionTitle,
        missionText = _props$attributes.missionText,
        setAttributes = props.setAttributes;

    var onChangeMissionTitle = function onChangeMissionTitle(newMissionTitle) {
      setAttributes({
        missionTitle: newMissionTitle
      });
    };

    var onChangeMissionText = function onChangeMissionText(newMissionText) {
      setAttributes({
        missionText: newMissionText
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      id: "mission",
      className: "mission"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "mission-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Our Mission", "nona"),
      value: missionTitle,
      onChange: onChangeMissionTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "mission-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __("Our Mission is to mentor and inspire kids so that together we can change our communities.", "nona"),
      value: missionText,
      onChange: onChangeMissionText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "mission-mask",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1920.33 144.15"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
      id: "mission-svg-id",
      transform: "translate(0.33 0.5)"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      className: "mission-svg",
      d: "M0,127.82S288-80.88,765,35.07s477,23.19,585,0,339,0,570,92.75V143H0Z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "mission-scg-id-1",
      x1: "960",
      y1: "-0.5",
      x2: "960",
      y2: "143",
      gradientTransform: "translate(1920 142.5) rotate(180)",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#f2ac29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.05",
      "stop-color": "#f2b137"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.15",
      "stop-color": "#f2be5b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.29",
      "stop-color": "#f1d395"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.41",
      "stop-color": "#f1e9d2"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.52",
      "stop-color": "#f8f4e9"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.63",
      "stop-color": "#fff"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "a8c157f3-b45f-49d5-b931-425d501ef2d9"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "ae2d8b4f-721c-4502-896e-cf62e96936c1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      className: "mission-svg-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
      className: "mission-svg-2",
      y: "-0.5",
      width: "1920",
      height: "143.5",
      transform: "translate(1920.33 143) rotate(-180)"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      className: "mission-svg-3",
      d: "M-.33,131.87s288-162,765-72,477,18,585,0,339,0,570,72v11.78H-.33Z",
      transform: "translate(0.33 0.5)"
    }))))));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      id: "mission",
      className: "mission"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "mission-title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.missionTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "mission-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: props.attributes.missionText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
      className: "mission-mask",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1920.33 144.15"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", {
      id: "mission-svg-id",
      transform: "translate(0.33 0.5)"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      className: "mission-svg",
      d: "M0,127.82S288-80.88,765,35.07s477,23.19,585,0,339,0,570,92.75V143H0Z"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
      id: "mission-scg-id-1",
      x1: "960",
      y1: "-0.5",
      x2: "960",
      y2: "143",
      gradientTransform: "translate(1920 142.5) rotate(180)",
      gradientUnits: "userSpaceOnUse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0",
      "stop-color": "#f2ac29"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.05",
      "stop-color": "#f2b137"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.15",
      "stop-color": "#f2be5b"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.29",
      "stop-color": "#f1d395"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.41",
      "stop-color": "#f1e9d2"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.52",
      "stop-color": "#f8f4e9"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
      offset: "0.63",
      "stop-color": "#fff"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "a8c157f3-b45f-49d5-b931-425d501ef2d9"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      id: "ae2d8b4f-721c-4502-896e-cf62e96936c1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
      className: "mission-svg-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
      className: "mission-svg-2",
      y: "-0.5",
      width: "1920",
      height: "143.5",
      transform: "translate(1920.33 143) rotate(-180)"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
      className: "mission-svg-3",
      d: "M-.33,131.87s288-162,765-72,477,18,585,0,339,0,570,72v11.78H-.33Z",
      transform: "translate(0.33 0.5)"
    }))))));
  }
});

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
      className: "program-card-description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "program-card-description-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
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
      className: "program-card-description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: "program-card-description-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
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
      className: "program-card-description"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "program-card-description-3"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
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
      className: "".concat(props.attributes.className, " alignfull")
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
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "program-card-description-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
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
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
      className: "program-card-description-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
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
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "program-card-description-3"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
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
  icon: "groups",
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