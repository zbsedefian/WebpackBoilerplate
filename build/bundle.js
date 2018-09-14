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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/big1.jpg":
/*!*************************!*\
  !*** ./assets/big1.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f3444019bef47d8d450b81ffd5d893c4.jpg\";\n\n//# sourceURL=webpack:///./assets/big1.jpg?");

/***/ }),

/***/ "./assets/small.png":
/*!**************************!*\
  !*** ./assets/small.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,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\"\n\n//# sourceURL=webpack:///./assets/small.png?");

/***/ }),

/***/ "./src/image_viewer.js":
/*!*****************************!*\
  !*** ./src/image_viewer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _big = __webpack_require__(/*! ../assets/big1.jpg */ \"./assets/big1.jpg\");\n\nvar _big2 = _interopRequireDefault(_big);\n\nvar _small = __webpack_require__(/*! ../assets/small.png */ \"./assets/small.png\");\n\nvar _small2 = _interopRequireDefault(_small);\n\n__webpack_require__(/*! ./styles/image_viewer.css */ \"./src/styles/image_viewer.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar image = document.createElement(\"img\");\nimage.src = _small2.default;\n\ndocument.body.appendChild(image);\n\n// Big\n\nvar bigImage = document.createElement(\"img\");\nbigImage.src = _big2.default;\n\ndocument.body.appendChild(bigImage);\n\n//# sourceURL=webpack:///./src/image_viewer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sum = __webpack_require__(/*! ./sum */ \"./src/sum.js\");\n\nvar _sum2 = _interopRequireDefault(_sum);\n\n__webpack_require__(/*! ./image_viewer */ \"./src/image_viewer.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar total = (0, _sum2.default)(10, 5);\nconsole.log(total);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/image_viewer.css":
/*!*************************************!*\
  !*** ./src/styles/image_viewer.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/image_viewer.css?");

/***/ }),

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar sum = function sum(a, b) {\n  return a + b;\n};\n\nexports.default = sum;\n\n//# sourceURL=webpack:///./src/sum.js?");

/***/ })

/******/ });