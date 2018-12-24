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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/styles/styles.sass":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/styles.sass?");

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_styles_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/styles/styles.sass */ \"./src/assets/styles/styles.sass\");\n/* harmony import */ var _assets_styles_styles_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_styles_sass__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var favButtons = document.querySelectorAll(\".product__fav\");\n  favButtons.forEach(function (button) {\n    button.addEventListener(\"click\", function (e) {\n      var fav = e.target;\n      var product = e.target.closest(\".product\");\n      var productID = product.getAttribute(\"data-id\");\n      var data = {};\n      data.isFav = fav.classList.contains(\"product__fav_is-active\") ? false : true;\n      var json = JSON.stringify(data);\n      fetch(\"http://localhost:3000/products/\".concat(productID), {\n        method: \"PUT\",\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: json\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return console.log(data);\n      }); // const xhr = new XMLHttpRequest();\n      // xhr.open(\"PUT\", `http://localhost:3000/products/${productID}`, true);\n      // xhr.setRequestHeader('Content-type','application/json; charset=utf-8');\n      // xhr.onload = function () {\n      //   var resp = JSON.parse(xhr.responseText);\n      //   if (xhr.readyState == 4 && xhr.status == \"200\") {\n      //     fav.classList.toggle(\"product__fav_is-active\")\n      //     console.log(resp);\n      //   } else {\n      //     console.error(xhr.status + ': ' + xhr.statusText);\n      //   }\n      // }\n      // xhr.send(json);\n    });\n  });\n}); // closest polyfill\n\n(function (e) {\n  e.closest = e.closest || function (css) {\n    var node = this;\n\n    while (node) {\n      if (node.matches(css)) return node;else node = node.parentElement;\n    }\n\n    return null;\n  };\n})(Element.prototype);\n\n//# sourceURL=webpack:///./src/pages/index/index.js?");

/***/ })

/******/ });